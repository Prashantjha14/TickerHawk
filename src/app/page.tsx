import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-extrabold text-center mb-6 tracking-tight">
        Welcome to <span className="text-yellow-400">TickerHawk</span>
      </h1>

      <p className="text-lg mb-8 text-center max-w-lg">
        Get real-time market prices for stocks, crypto, currencies, and metals
        like gold, silver, copper, and aluminum.
      </p>

      <Link
        href="/metals"
        className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:bg-yellow-500 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
      >
        View Available Metals
      </Link>

      {/* Optional footer */}
      <footer className="mt-12 text-sm text-gray-400 text-center">
        <p>Powered by TickerHawk | All rights reserved.</p>
      </footer>
    </main>
  );
}
