import { load } from "cheerio";

interface IParams {
  params: {
    quote: string;
  };
}

export async function GET(request: Request, { params }: IParams) {
  const { quote } = params;
  const headers = request.headers;

  try {
    const url = `https://www.google.com/finance/quote/${quote}`;

    const response = await fetch(url, {
      next: { revalidate: 300 },
    });

    const html = await response.text();
    const $ = load(html);

    const price = Number($(".rPF6Lc").text().replace("₹", "").replace(",", ""));
    const name = $("[role=heading].zzDege").text();

    if (isNaN(price) || !price)
      return Response.json({ success: false }, { status: 500 });

    return Response.json({ success: true, price, name }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}
