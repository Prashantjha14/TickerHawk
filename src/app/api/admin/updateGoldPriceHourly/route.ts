import config from "@/config";
import { connectToDb } from "@/db";
import Gold from "@/models/Gold.model";
import { NextRequest, NextResponse } from "next/server";
import { currencies } from "@/constants/currencies";

export async function POST(req: NextRequest) {
  const authToken = (req.headers.get("Authorization") || "")
    .split("Bearer ")
    .at(1);

  if (!authToken || authToken != config.adminSecret)
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
      }
    );

  const searchParams = req.nextUrl.searchParams;

  const price = Number(searchParams.get("price"));
  const currency = searchParams.get("currency")?.toString().toLocaleUpperCase();
  const updateFrequency =
    searchParams.get("updateFrequency")?.toString().toLocaleLowerCase() ||
    "hourly";

  if (isNaN(price)) return Response.json({ success: false, status: 400 });
  if (!currency || !currencies.includes(currency))
    return Response.json({ success: false, status: 400 });

  const frequencies = [
    "instant",
    "hourly",
    "daily",
    "weekly",
    "monthly",
    "yearly",
  ];
  if (!frequencies.includes(updateFrequency))
    return Response.json({ success: false, status: 400 });

  try {
    await connectToDb();

    await Gold.create({ price, currency, updateFrequency });

    return Response.json(
      { success: true, goldPrice: price, currency, updateFrequency },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
