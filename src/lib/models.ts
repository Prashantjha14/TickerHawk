import mongoose from "mongoose";

const goldSchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Gold = mongoose.models?.Gold || mongoose.model("Gold", goldSchema);
