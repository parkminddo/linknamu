import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// 개발 모드의 HMR에서 연결이 계속 늘어나지 않도록 전역에 캐시한다
export function getMongoClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!global._mongoClientPromise) {
    // 연결이 막혔을 때 30초씩 붙잡지 않도록 대기 시간을 줄인다
    global._mongoClientPromise = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
    })
      .connect()
      .catch((error) => {
        // 실패한 연결을 캐시에 남기면 서버를 재시작할 때까지 계속 실패하므로 비운다
        global._mongoClientPromise = undefined;
        throw error;
      });
  }
  return global._mongoClientPromise;
}

export async function getClicksCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ _id: string; count: number }>("clicks");
}
