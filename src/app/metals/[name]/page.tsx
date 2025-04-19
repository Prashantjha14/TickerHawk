import { connectToDb } from "@/db";
import Metals from "@/models/Metals.model";
import { notFound } from "next/navigation";
import { format } from "date-fns";

interface MetalPageProps {
  params: {
    name: string;
  };
}

const MetalPage = async ({ params }: MetalPageProps) => {
  const metalName = params.name.toLowerCase();
  await connectToDb();

  const metal = await Metals.findOne({ name: metalName })
    .sort({ date: -1 })
    .lean();

  if (!metal) return notFound();

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4 capitalize">{metalName} Price</h1>
      <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md text-center">
        <p className="text-2xl font-semibold mb-2">
          ₹ {metal.price.toLocaleString("en-IN")} / gram
        </p>
        <p className="text-sm text-gray-400">Currency: {metal.currency}</p>
        <p className="text-sm text-gray-500 mt-2">
          Updated on: {format(new Date(metal.date), "dd MMM yyyy, hh:mm a")}
        </p>
      </div>
    </div>
  );
};

export default MetalPage;
