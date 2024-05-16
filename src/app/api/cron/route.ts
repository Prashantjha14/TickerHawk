import { getCurrentGoldPrice } from "@/helpers/live-prices";
import { NextResponse } from "next/server";
import { connectToDb } from "../../../lib/utils";
import { Gold } from "../../../lib/models";

export async function GET() {
  console.log("Cron Triggered!");

  const goldPrice = await getCurrentGoldPrice();
  if (!goldPrice)
    return NextResponse.json({
      ok: false,
      price: null,
      error: "Failed to get Gold Price.",
      status: 500,
    });

  connectToDb();
  const gold = Gold.create({
    price: goldPrice,
  }).catch((error) => {
    return NextResponse.json({
      ok: false,
      price: goldPrice,
      error: error.message,
      status: 500,
    });
  });

  return NextResponse.json({ ok: true, price: goldPrice, status: 200 });
}
