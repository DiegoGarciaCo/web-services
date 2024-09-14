"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import useSWR from "swr";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Skeleton } from "./ui/skeleton";

const chartConfig = {
  Contacts: {
    label: "Contacts",
    color: "#2563eb",
  },
  Newsletters: {
    label: "Newsletters",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function DashboardChart() {
  // Fetch the chart data
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR("/api/chartData", fetcher);

  // Show a loading skeleton while the data is being fetched
  if (isLoading) {
    return (
      <div className="h-full w-full">
        <Skeleton className="h-full w-full" />
      </div>
    );
  } else if (error) {
    return (
      <div className="flex items-center justify-center">
        Error loading chart data
      </div>
    );
  }

  const chartData = [
    {
      month: data[11].month,
      Contacts: data[11].contactsCount,
      Newsletters: data[11].subscriptionsCount,
    },
    {
      month: data[10].month,
      Contacts: data[10].contactsCount,
      Newsletters: data[10].subscriptionsCount,
    },
    {
      month: data[9].month,
      Contacts: data[9].contactsCount,
      Newsletters: data[9].subscriptionsCount,
    },
    {
      month: data[8].month,
      Contacts: data[8].contactsCount,
      Newsletters: data[8].subscriptionsCount,
    },
    {
      month: data[7].month,
      Contacts: data[7].contactsCount,
      Newsletters: data[7].subscriptionsCount,
    },
    {
      month: data[6].month,
      Contacts: data[6].contactsCount,
      Newsletters: data[6].subscriptionsCount,
    },
    {
      month: data[5].month,
      Contacts: data[5].contactsCount,
      Newsletters: data[5].subscriptionsCount,
    },
    {
      month: data[4].month,
      Contacts: data[4].contactsCount,
      Newsletters: data[4].subscriptionsCount,
    },
    {
      month: data[3].month,
      Contacts: data[3].contactsCount,
      Newsletters: data[3].subscriptionsCount,
    },
    {
      month: data[2].month,
      Contacts: data[2].contactsCount,
      Newsletters: data[2].subscriptionsCount,
    },
    {
      month: data[1].month,
      Contacts: data[1].contactsCount,
      Newsletters: data[1].subscriptionsCount,
    },
    {
      month: data[0].month,
      Contacts: data[0].contactsCount,
      Newsletters: data[0].subscriptionsCount,
    },
  ];
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="Contacts" fill="#2563eb" radius={4} />
        <Bar dataKey="Newsletters" fill="#60a5fa" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
