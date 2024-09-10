"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", Contacts: 186, Newsletters: 80 },
  { month: "February", Contacts: 305, Newsletters: 200 },
  { month: "March", Contacts: 237, Newsletters: 120 },
  { month: "April", Contacts: 73, Newsletters: 190 },
  { month: "May", Contacts: 209, Newsletters: 130 },
  { month: "June", Contacts: 214, Newsletters: 140 },
  { month: "July", Contacts: 190, Newsletters: 90 },
  { month: "August", Contacts: 210, Newsletters: 100 },
  { month: "September", Contacts: 230, Newsletters: 150 },
  { month: "October", Contacts: 240, Newsletters: 160 },
  { month: "November", Contacts: 250, Newsletters: 170 },
  { month: "December", Contacts: 260, Newsletters: 180 },
];

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
