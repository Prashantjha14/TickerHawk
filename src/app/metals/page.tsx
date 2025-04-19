import { connectToDb } from "@/db";
import Metals from "@/models/Metals.model";
import Link from "next/link";

export const dynamic = "force-dynamic";

const GoldPage = async () => {
  await connectToDb();

  const metals = await Metals.aggregate([
    { $sort: { date: -1 } }, // Sort to get the latest entry first
    {
      $group: {
        _id: "$name",
        latest: { $first: "$$ROOT" },
      },
    },
    {
      $sort: { _id: 1 }, // Sort by metal name alphabetically
    },
  ]);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Available Metals</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metals.map((item) => {
          const metal = item.latest;
          return (
            <li key={metal._id} className="bg-[#1a1a1a] p-4 rounded-lg shadow">
              <Link href={`/metals/${metal.name}`}>
                <div className="text-xl capitalize font-semibold mb-2">
                  {metal.name}
                </div>
                <div className="text-sm text-gray-400">
                  ₹ {metal.price.toLocaleString("en-IN")} / gram
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GoldPage;
