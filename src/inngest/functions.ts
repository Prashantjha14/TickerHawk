import { saveMetalsPricesInDB } from "@/helpers/saveInDb/metals";
import { inngest } from "./client";

export const metalsPriceToDB = inngest.createFunction(
  {
    id: "gold-price",
  },
  {
    cron: "TZ=Asia/Kolkata 0 7 * * *",
  },
  async () => {
    const data = await saveMetalsPricesInDB();

    if (data.success) {
      console.log("METALS PRICE SAVED SUCCESSFULLY!");
      return data;
    } else {
      console.log("METALS PRICE CAN'T SAVED!");
      return data;
    }
  }
);
