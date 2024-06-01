import { connectToDb } from "@/db";
import Gold, { IGoldPrice } from "@/models/Gold.model";

export async function GET(request: Request) {
  try {
    await connectToDb();

    const latestPrice = await Gold.findOne<IGoldPrice>({
      updateFrequency: "hourly",
    }).sort({ date: -1 });

    if (!latestPrice) {
      return Response.json({ success: false, goldPrice: null, status: 500 });
    }

    const { price, currency, updateFrequency, date } = latestPrice;

    return Response.json({
      success: true,
      goldPrice: price,
      currency,
      updateFrequency,
      lastUpdated: date,
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, goldPrice: null, status: 500 });
  }
}
