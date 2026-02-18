import { NextResponse } from "next/server";
import { db } from "../../lib/db";

export async function POST(req: Request) {
  try {
    const { yourName, crushName, percent, message } = await req.json();

    await db.execute(
      "INSERT INTO love_results (your_name, crush_name, percent, message) VALUES (?, ?, ?, ?)",
      [yourName, crushName, percent, message],
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
