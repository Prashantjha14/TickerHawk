import { type NextRequest } from "next/server";
import { currencies } from "@/constants/currencies";
import { load } from "cheerio";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const from = searchParams.get("from")?.toUpperCase();
  const to = searchParams.get("to")?.toUpperCase();
  const amount = Number(searchParams.get("amount"));

  if (!from || !to || isNaN(amount)) {
    return new Response("Missing parameters", { status: 400 });
  }

  if (!currencies.includes(from)) {
    return new Response("Invalid from currency", { status: 400 });
  }

  if (!currencies.includes(to)) {
    return new Response("Invalid to currency", { status: 400 });
  }

  if (isNaN(amount)) {
    return new Response("Invalid amount", { status: 400 });
  }

  if (amount <= 0) {
    return new Response("Amount must be greater than 0", { status: 400 });
  }

  if (amount > 100000) {
    return new Response("Amount must be less than 100000", { status: 400 });
  }

  const url = `https://www.google.com/finance/quote/${from}-${to}?sa=X&ved=2ahUKEwiWtpfwi5KGAxXFXWwGHTepCyQQmY0JegQIBxAp`;
  // const url = `https://official-joke-api.appspot.com/random_joke?from=${from}`;

  const response = await fetch(url, {
    next: { revalidate: 300 },
  });
  const html = await response.text();
  const $ = load(html);

  if ($(".b4EnYd").text()) {
    return Response.json({
      success: false,
      data: {
        from: from,
        to: to,
        amount: amount,
        converted_amount: null,
        conversion_rate: null,
        error: $(".b4EnYd").text(),
      },
      status: 400,
    });
  } else {
    const price = Number($(".fxKbKc").text().replace(",", ""));

    if (isNaN(price))
      return Response.json({
        success: false,
        data: {
          from: from,
          to: to,
          amount: amount,
          converted_amount: null,
          conversion_rate: price,
          error: "Unable to fetch the price!",
        },
        status: 400,
      });

    const converted_amount = Number((price * amount).toFixed(4));

    console.log(
      `The price of ${amount} ${from} in ${to} is ${converted_amount} as conversion rate is ${price}.`
    );

    return Response.json({
      success: true,
      data: {
        from: from,
        to: to,
        amount: amount,
        converted_amount: converted_amount,
        conversion_rate: price,
      },
      status: 200,
    });
  }
}
