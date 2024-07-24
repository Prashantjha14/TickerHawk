import { connectToDb } from "@/db";
import Gold from "@/models/Gold.model";
import { NextRequest, NextResponse } from "next/server";
import { currencies } from "@/constants/currencies";

export async function POST(req: NextRequest) {
  const authToken = (req.headers.get("Authorization") || "")
    .split("Bearer ")
    .at(1);

  if (!authToken || authToken != process.env.ADMIN_SECRET)
    return NextResponse.json(
      { error: "Unauthorized" },
      {
        status: 401,
      }
    );

  const searchParams = req.nextUrl.searchParams;

  const price = Number(searchParams.get("price"));
  const currency = searchParams.get("currency")?.toString().toLocaleUpperCase();

  if (isNaN(price)) return Response.json({ success: false, status: 400 });
  if (!currency || !currencies.includes(currency))
    return Response.json({ success: false, status: 400 });

  try {
    await connectToDb();

    await Gold.create({ price, currency });

    return Response.json(
      { success: true, goldPrice: price, currency },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
