"use client";

import { Card, AreaChart, Title, Text } from "@tremor/react";

const data = [
  {
    Month: "Jan",
    2024: 2890,
    2023: 1200,
  },
  {
    Month: "Feb",
    2024: 1890,
    2023: 3343,
  },
  {
    Month: "Mar",
    2024: 3453,
    2023: 2657,
  },
  {
    Month: "Apr",
    2024: 4250,
    2023: 3550,
  },
  {
    Month: "May",
    2024: 6970,
    2023: 3510,
  },
];

export default function Chart() {
  return (
    <Card className="mt-8">
      <Title>Sales</Title>
      <Text>Comparison between 2023 and 2024 sales</Text>
      <AreaChart
        className="mt-4 h-80"
        data={data}
        categories={["2024", "2023"]}
        index="Month"
        colors={["emerald", "sky"]}
        valueFormatter={(number: number) =>
          `£ ${Intl.NumberFormat("us").format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  );
}