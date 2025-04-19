import { Calculator, PiggyBank, Wallet, LineChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const page = () => {
  const calculators = [
    {
      title: "SIP Calculator",
      description: "Calculate your systematic investment plan returns",
      icon: <PiggyBank className="h-8 w-8" />,
      href: "/calculators/sip",
    },
    {
      title: "Lumpsum Calculator",
      description: "Plan your one-time investment returns",
      icon: <Wallet className="h-8 w-8" />,
      href: "/calculators/lumpsum",
    },
    {
      title: "SWP Calculator",
      description: "Plan your systematic withdrawals",
      icon: <Calculator className="h-8 w-8" />,
      href: "/calculators/swp",
    },
    {
      title: "Compound Interest",
      description: "Calculate compound interest growth",
      icon: <LineChart className="h-8 w-8" />,
      href: "/calculators/compound",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Financial Calculator Suite
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Make informed investment decisions with our comprehensive suite of
          financial calculators
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {calculators.map((calculator) => (
          <Link key={calculator.href} href={calculator.href}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 text-primary">{calculator.icon}</div>
                <CardTitle>{calculator.title}</CardTitle>
                <CardDescription>{calculator.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
