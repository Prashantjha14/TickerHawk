import config from "@/config";
import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (!config.mongoUri) {
    return console.log("MISSING MONGODB_URL");
  }

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(config.mongoUri, {
      dbName: "TickerHawk",
    });

    isConnected = true;
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting to database! \nError: " + error);
  }
};
