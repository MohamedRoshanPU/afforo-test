import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
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

import { visitorInsights } from "./data";

const config = {
  loyalCustomers: { label: "Loyal Customers", color: "#9c38ff" },
  newCustomers: { label: "New Customers", color: "#ff4e4f" },
  uniqueCustomers: { label: "Unique Customers", color: "#3bd85f" },
};

export function VisitorInsightsCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Visitor Insights</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <ChartContainer config={config} className="h-62.5">
          <LineChart
            data={visitorInsights}
            margin={{ top: 12, right: 8, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} strokeDasharray="0" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              fontSize={11}
              domain={[0, 400]}
              ticks={[0, 100, 200, 300, 400]}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend content={<ChartLegendContent />} />
            <ReferenceLine x="Jul" stroke="#ff9ba0" strokeDasharray="3 4" />
            <Line
              type="monotone"
              dataKey="loyalCustomers"
              stroke={config.loyalCustomers.color}
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="newCustomers"
              stroke={config.newCustomers.color}
              strokeWidth={3}
              dot={{ r: 5, fill: "#ff4e4f", stroke: "#ff4e4f" }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="uniqueCustomers"
              stroke={config.uniqueCustomers.color}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
