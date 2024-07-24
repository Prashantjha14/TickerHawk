import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.error("No Mongo URI found!");
    return Promise.reject(new Error("No Mongo URI found!"));
  }

  if (isConnected) return;

  try {
    await mongoose.connect(mongoUri, {
      dbName: "TickerHawk",
    });

    isConnected = true;
    return Promise.resolve();
  } catch (error) {
    console.error(error);
    return Promise.reject(
      new Error("Error connecting to database! \nError: " + error)
    );
  }
};
