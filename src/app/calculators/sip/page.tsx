"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { calculateSIP } from "@/lib/calculators";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [years, setYears] = useState(10);

  const result = calculateSIP(monthlyInvestment, expectedReturn, years);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">SIP Calculator</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Investment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Monthly Investment (₹)</Label>
              <Input
                type="number"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                min={500}
                max={1000000}
              />
              <Slider
                value={[monthlyInvestment]}
                onValueChange={(value) => setMonthlyInvestment(value[0])}
                min={500}
                max={100000}
                step={500}
              />
            </div>

            <div className="space-y-2">
              <Label>Expected Return Rate (%)</Label>
              <Input
                type="number"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                min={1}
                max={30}
              />
              <Slider
                value={[expectedReturn]}
                onValueChange={(value) => setExpectedReturn(value[0])}
                min={1}
                max={30}
                step={0.5}
              />
            </div>

            <div className="space-y-2">
              <Label>Time Period (Years)</Label>
              <Input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                min={1}
                max={30}
              />
              <Slider
                value={[years]}
                onValueChange={(value) => setYears(value[0])}
                min={1}
                max={30}
                step={1}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Investment Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={result.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="month"
                    label={{
                      value: "Months",
                      position: "insideBottom",
                      offset: -5,
                    }}
                  />
                  <YAxis
                    label={{
                      value: "Value (₹)",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    formatter={(value) =>
                      new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(value as number)
                    }
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Total Investment
                </p>
                <p className="text-lg font-semibold">
                  ₹{result.totalInvestment.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Returns</p>
                <p className="text-lg font-semibold">
                  ₹{result.totalReturns.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-lg font-semibold">
                  ₹{result.totalValue.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
