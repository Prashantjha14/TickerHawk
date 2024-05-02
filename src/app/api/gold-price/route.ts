import { getCurrentGoldPrice } from "@/helpers/live-prices/index";

export async function GET(request: Request) {
  const goldPrice = await getCurrentGoldPrice();
  if (!goldPrice)
    return Response.json({ success: false, goldPrice: goldPrice, status: 404 });
  return Response.json({ success: true, goldPrice: goldPrice, status: 200 });
}
