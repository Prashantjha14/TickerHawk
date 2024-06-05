import { load } from "cheerio";
import puppeteer from "puppeteer-core";

/**
 * Delays the execution of code for a specified number of seconds.
 * @param {number} seconds - The number of seconds to delay the execution.
 * @returns {Promise} - A promise that resolves after the specified delay.
 */
function sleep(seconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

const SBR_WS_ENDPOINT = `wss://${process.env.BRIGHT_DATA_AUTH}@brd.superproxy.io:9222`;

/**
 * Retrieves the current gold price from a website.
 * @returns {Promise<number|null>} The current gold price in INR per gram, or null if an error occurs.
 */
export const getCurrentGoldPrice = async (): Promise<number | null> => {
  try {
    const url = "https://sgb.wintwealth.com";

    const response = await fetch(url, {
      next: { revalidate: 43200 },
    });

    const html = await response.text();
    const $ = load(html);

    const price = Number(
      $(".sc-b7354746-13.oOFLh .sc-b7354746-14.iPCaXp .sc-3626dc31-7.hrDzKZ")
        .first()
        .text()
        .replace(",", "")
        .replace("₹", "")
    );

    console.log(price);

    if (isNaN(price)) return null;

    return price;
  } catch (error) {
    console.log(error);
    return null;
  }
};

// export const getCurrentGoldPrice = async (): Promise<number | null> => {
//   try {
//     const browser = await puppeteer.connect({
//       browserWSEndpoint: SBR_WS_ENDPOINT,
//     });
//     const page = await browser.newPage();
//     await page.goto("https://www.tickertape.in/digital-gold");

//     await sleep(3);

//     const result = await page.evaluate(() =>
//       Array.from(document.querySelectorAll(".price")).map(
//         (el) => el.textContent
//       )
//     );
//     const goldPriceElement = result?.filter((el) => el?.includes("/gm"))[0];
//     const goldPrice = goldPriceElement
//       ? Number(goldPriceElement.split("/gm")[0].split("₹")[1].replace(",", ""))
//       : null;

//     await browser.close();

//     if (!goldPrice) return null;

//     return goldPrice;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// };
