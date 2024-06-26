import { currenciesForCrypto, crypto, Currency } from "@/constants/crypto";
import { ApiResponse, IResponse } from "@/types/crypto/crypto";
import type { NextRequest } from "next/server";

const ERROR_MESSAGES = {
  MISSING_PARAMETERS: "Missing parameters",
  INVALID_TO_CURRENCY: "Invalid to currency",
  INVALID_FROM_CURRENCY: "Invalid from currency",
  INVALID_AMOUNT: "Amount must be greater than 0",
  EXCESSIVE_AMOUNT: "Amount must be less than 100000",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
};

const createErrorResponse = (code: number, message: string) =>
  Response.json({ success: false, error: { code, message } } as IResponse, {
    status: code,
  });

const isValidCurrency = (symbol: string, currencyList: Currency[]) =>
  currencyList.some((item) => item.symbol === symbol);

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const from = searchParams.get("from")?.toUpperCase();
  const to = searchParams.get("to")?.toUpperCase();
  const amount = Number(searchParams.get("amount"));

  if (!from || !to || isNaN(amount) || amount <= 0) {
    return createErrorResponse(422, ERROR_MESSAGES.MISSING_PARAMETERS);
  }

  if (!isValidCurrency(to, currenciesForCrypto)) {
    return createErrorResponse(422, ERROR_MESSAGES.INVALID_TO_CURRENCY);
  }

  if (!isValidCurrency(from, crypto)) {
    return createErrorResponse(422, ERROR_MESSAGES.INVALID_FROM_CURRENCY);
  }

  if (amount > 100000) {
    return createErrorResponse(422, ERROR_MESSAGES.EXCESSIVE_AMOUNT);
  }

  const cryptoId = crypto.filter((item) => item.symbol === from)[0].id;
  const fiatId = currenciesForCrypto.filter((item) => item.symbol === to)[0].id;

  if (!cryptoId || !fiatId) {
    return createErrorResponse(422, ERROR_MESSAGES.MISSING_PARAMETERS);
  }

  try {
    const url = `https://api.coinmarketcap.com/data-api/v3/tools/price-conversion?amount=1&convert_id=${fiatId}&id=${cryptoId}`;

    const res = await fetch(url, { next: { revalidate: 300 } });
    const data: ApiResponse = await res.json();

    if (data.status.error_code !== "0") {
      return createErrorResponse(
        parseInt(data.status.error_code),
        data.status.error_message
      );
    }

    const conversion_rate = data.data.quote[0].price;
    const converted_amount = parseFloat((conversion_rate * amount).toFixed(8));
    const last_updated = data.data.quote[0]?.lastUpdated;
    const last_updated_readable = new Date(last_updated).toLocaleString();

    return Response.json(
      {
        success: true,
        data: {
          from,
          to,
          amount,
          converted_amount,
          conversion_rate,
          last_updated,
          last_updated_readable,
        },
      } as IResponse,
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return createErrorResponse(500, ERROR_MESSAGES.INTERNAL_SERVER_ERROR);
  }
}
