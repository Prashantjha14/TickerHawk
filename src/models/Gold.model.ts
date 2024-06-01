import { Schema, models, model, Document } from "mongoose";

export interface IGoldPrice {
  price: number;
  currency: string;
  updateFrequency:
    | "instant"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly";
  date: Date;
}

const goldSchema = new Schema<IGoldPrice>({
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "INR",
  },
  updateFrequency: {
    type: String,
    default: "hourly",
    enum: ["instant", "hourly", "daily", "weekly", "monthly", "yearly"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Gold = models?.Gold || model("Gold", goldSchema);
export default Gold;
