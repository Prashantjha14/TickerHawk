import { connectToDb } from "@/db";
import { getCurrentGoldPrice } from "@/helpers/live-prices/index";
import Gold from "@/models/Gold.model";
import { unstable_noStore as noStore } from "next/cache";

export async function GET(request: Request) {
  noStore();
  try {
    const goldPrice = await getCurrentGoldPrice();

    if (!goldPrice)
      return Response.json({
        success: false,
        goldPrice: goldPrice,
        status: 500,
      });

    await connectToDb();

    await Gold.create({ price: goldPrice });

    console.log("Gold price saved! - hourly!");

    return Response.json({ success: true, goldPrice: goldPrice, status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, status: 500 });
  }
}
