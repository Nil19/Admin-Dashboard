"use client";

import Chart from "@/components/Chart";
import { BarList, Card, Flex, Grid, Metric, Text, Title } from "@tremor/react";

const website_traffic = [
  { name: "Organic", value: 1230 },
  { name: "Direct", value: 751 },
  { name: "Referral", value: 471 },
  { name: "Email", value: 234 },
  { name: "Organic Social", value: 280 },
];

const website_pages = [
  { name: "/shop", value: 789 },
  { name: "/product-features", value: 676 },
  { name: "/about", value: 564 },
  { name: "/login", value: 234 },
  { name: "/downloads", value: 191 },
];

const demographic = [
  { name: "United Kingdom", value: 1181 },
  { name: "Canada", value: 670 },
  { name: "Germany", value: 399 },
  { name: "Spain", value: 324 },
  { name: "Ireland", value: 422 },
];

const data = [
  {
    category: "Website Traffic",
    stat: "2,966",
    data: website_traffic,
  },
  {
    category: "Top Performing Pages",
    stat: "2,454",
    data: website_pages,
  },
  {
    category: "Demographic Breakdown",
    stat: "2,966",
    data: demographic,
  },
];

export default function Analytics() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent="start"
              alignItems="baseline"
              className="space-x-2"
            >
              <Metric>{item.stat}</Metric>
              <Text>Total views</Text>
            </Flex>
            <Flex className="mt-6">
              {item.category === "Demographic Breakdown" ? (
                <Flex className="mt-6">
                  <Text>Country</Text>
                  <Text>Users</Text>
                </Flex>
              ) : (
                <>
                  <Text>Pages</Text>
                  <Text className="text-right">Views</Text>
                </>
              )}
            </Flex>
            <BarList
              data={item.data}
              valueFormatter={(number: number) =>
                Intl.NumberFormat("us").format(number).toString()
              }
              className="mt-2"
            />
          </Card>
        ))}
      </Grid>
      <Chart />
    </main>
  );
}