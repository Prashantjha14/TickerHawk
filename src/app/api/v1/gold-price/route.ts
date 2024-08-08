import { connectToDb } from "@/db";
import { getCurrentGoldPrice } from "@/helpers/live-prices";
import Gold, { IGoldPrice } from "@/models/Gold.model";

export async function GET(request: Request) {
  const headers = request.headers;

  try {
    const goldPrice = await getCurrentGoldPrice();
    console.log({ goldPrice });

    if (!goldPrice)
      return Response.json({
        success: false,
        goldPrice: goldPrice,
        status: 500,
      });

    return Response.json({ success: true, goldPrice, status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, goldPrice: null, status: 500 });
  }

  // try {
  //   await connectToDb();

  //   const latestPrice = await Gold.findOne<IGoldPrice>({
  //     updateFrequency: "hourly",
  //   }).sort({ date: -1 });

  //   if (!latestPrice) {
  //     return Response.json({ success: false, goldPrice: null, status: 500 });
  //   }

  //   const { price, currency, updateFrequency, date } = latestPrice;

  //   return Response.json({
  //     success: true,
  //     goldPrice: price,
  //     currency,
  //     updateFrequency,
  //     lastUpdated: date,
  //     status: 200,
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return Response.json({ success: false, goldPrice: null, status: 500 });
  // }
}
