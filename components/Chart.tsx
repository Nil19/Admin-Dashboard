"use client";

import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan 24",
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: "Feb 24",
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: "Mar 24",
    Sales: 3890,
    Profit: 3430,
  },
  {
    Month: "Apr 24",
    Sales: 5250,
    Profit: 4790,
  },
  {
    Month: "May 24",
    Sales: 3970,
    Profit: 3510,
  },
];

export default function Chart() {
  return (
    <Card className="mt-8">
      <Title>Performance</Title>
      <Text>Comparison between Sales and Profit</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["Sales", "Profit"]}
        index="Month"
        colors={["indigo", "fuchsia"]}
        valueFormatter={(number: number) =>
          `£ ${Intl.NumberFormat("us").format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}