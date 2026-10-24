import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const linkIds = new Set(profile.links.map((link) => link.id));

export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) return NextResponse.json({});

  const docs = await clicks.find().toArray();
  return NextResponse.json(
    Object.fromEntries(docs.map((doc) => [doc._id, doc.count])),
  );
}

export async function POST(request: Request) {
  const { id } = await request.json().catch(() => ({}));
  if (typeof id !== "string" || !linkIds.has(id)) {
    return NextResponse.json({ error: "unknown link" }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI not set" }, { status: 503 });
  }

  await clicks.updateOne({ _id: id }, { $inc: { count: 1 } }, { upsert: true });
  return NextResponse.json({ ok: true });
}
