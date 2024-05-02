import { NextResponse } from "next/server";

export async function GET() {
  console.log("Cron Triggered!");

  return NextResponse.json({ ok: true });
}
