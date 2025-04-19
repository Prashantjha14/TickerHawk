import mongoose, { Schema, models, model } from "mongoose";

export interface IMetalsPrice {
  name: string;
  price: number;
  currency: string;
  date: Date;
}

const metalsSchema = new Schema<IMetalsPrice>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
      default: "INR",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

metalsSchema.index({ name: 1, date: -1 });

const Metals =
  (models.Metal as mongoose.Model<IMetalsPrice>) ||
  model<IMetalsPrice>("Metal", metalsSchema);
export default Metals;
