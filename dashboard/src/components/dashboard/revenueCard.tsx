import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegendContent,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { totalRevenue } from "./data";

const config = {
  onlineSales: { label: "Online Sales", color: "#2496ff" },
  offlineSales: { label: "Offline Sales", color: "#31db97" },
};

export function RevenueCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Total Revenue</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <ChartContainer config={config} className="h-51.25">
          <BarChart
            data={totalRevenue}
            barGap={8}
            margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="0" />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={11}
              tickFormatter={(value) => `${value}k`}
              domain={[0, 25]}
              ticks={[0, 5, 10, 15, 20, 25]}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            <Bar
              dataKey="onlineSales"
              fill={config.onlineSales.color}
              radius={[8, 8, 0, 0]}
              barSize={10}
            />
            <Bar
              dataKey="offlineSales"
              fill={config.offlineSales.color}
              radius={[8, 8, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
