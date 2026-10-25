import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(profile.links.map((link) => link.id));

const dbUnavailable = (error: unknown) => {
  console.error("[clicks] MongoDB 연결 실패:", error);
  return NextResponse.json({ error: "database unavailable" }, { status: 503 });
};

// 링크별 클릭 수. 아직 한 번도 눌리지 않은 링크는 0으로 채운다
export async function GET() {
  const counts: Record<string, number> = Object.fromEntries(
    profile.links.map((link) => [link.id, 0]),
  );

  try {
    const clicks = await getClicksCollection();
    if (!clicks) return NextResponse.json(counts);

    const docs = await clicks.find({ _id: { $in: Array.from(linkIds) } }).toArray();
    for (const doc of docs) counts[doc._id] = doc.count;
    return NextResponse.json(counts);
  } catch (error) {
    return dbUnavailable(error);
  }
}

export async function POST(request: Request) {
  const { id } = await request.json().catch(() => ({}));
  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    if (!clicks) {
      return NextResponse.json({ error: "MONGODB_URI not set" }, { status: 503 });
    }

    await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (error) {
    return dbUnavailable(error);
  }
}
