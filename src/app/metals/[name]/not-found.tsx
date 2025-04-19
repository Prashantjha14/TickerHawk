import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-gray-400 mb-4">
        The metal you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/metals" className="text-blue-500 underline">
        Back to Metals List
      </Link>
    </div>
  );
};

export default NotFound;
