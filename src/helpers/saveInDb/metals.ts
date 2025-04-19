import { connectToDb } from "@/db";
import Metals from "@/models/Metals.model";

export const saveMetalsPricesInDB = async () => {
  try {
    const apiKey = process.env.METALS_API;

    const url = `https://api.metals.dev/v1/latest?api_key=${apiKey}&currency=INR&unit=g`;

    const response = await fetch(url);
    const data: MetalPricesResponse = await response.json();

    if (isMetalPricesSuccess(data)) {
      const { metals, currency, timestamps } = data;

      await connectToDb();

      const savePromises = Object.entries(metals).map(([name, price]) => {
        return Metals.create({
          name,
          price,
          currency,
          date: new Date(timestamps.metal),
        });
      });

      await Promise.all(savePromises);

      return { success: true, data };
    } else {
      console.error(
        `Metal API Error (${data.error_code}): ${data.error_message}`
      );
      return { success: false, error: data };
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return { success: false, error: error as Error };
  }
};

export function isMetalPricesSuccess(
  data: MetalPricesResponse
): data is MetalPricesSuccessResponse {
  return data.status === "success";
}

//* Types

export interface MetalPricesSuccessResponse {
  status: "success";
  currency: string;
  unit: string;
  metals: Metals;
  currencies: Record<string, number>;
  timestamps: {
    metal: string;
    currency: string;
  };
}

export interface Metals {
  gold: number;
  silver: number;
  platinum: number;
  palladium: number;
  lbma_gold_am: number;
  lbma_gold_pm: number;
  lbma_silver: number;
  lbma_platinum_am: number;
  lbma_platinum_pm: number;
  lbma_palladium_am: number;
  lbma_palladium_pm: number;
  mcx_gold: number;
  mcx_gold_am: number;
  mcx_gold_pm: number;
  mcx_silver: number;
  mcx_silver_am: number;
  mcx_silver_pm: number;
  ibja_gold: number;
  copper: number;
  aluminum: number;
  lead: number;
  nickel: number;
  zinc: number;
  lme_copper: number;
  lme_aluminum: number;
  lme_lead: number;
  lme_nickel: number;
  lme_zinc: number;
}

// ----------------------
// ERROR TYPE
// ----------------------

export interface MetalPricesErrorResponse {
  status: "failure";
  error_code: ErrorCode;
  error_message: string;
}

export type ErrorCode =
  | 1101 // Invalid API Key
  | 1201 // Plan not active
  | 1202 // Account not active
  | 1203 // Quota exceeded
  | 2101 // Unsupported metal/unit/authority
  | 2102 // Missing parameters
  | 2103 // Unsupported currency code
  | 2104 // Invalid date format
  | 2105; // Invalid date range

// ----------------------
// FINAL UNION TYPE
// ----------------------

export type MetalPricesResponse =
  | MetalPricesSuccessResponse
  | MetalPricesErrorResponse;
