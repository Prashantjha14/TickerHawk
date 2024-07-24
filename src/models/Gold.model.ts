import { Schema, models, model, Document } from "mongoose";

export interface IGoldPrice {
  price: number;
  currency: string;
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
  date: {
    type: Date,
    default: Date.now,
  },
});

const Gold = models?.Gold || model("Gold", goldSchema);
export default Gold;
