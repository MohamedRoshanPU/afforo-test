import { Area, AreaChart, CartesianGrid, Tooltip, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

import { customerSatisfaction } from "./data";

const config = {
  lastMonth: { label: "Last Month", color: "#2897ff" },
  thisMonth: { label: "This Month", color: "#37d88c" },
};

export function CustomerSatisfactionCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Customer Satisfaction</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-2">
        <ChartContainer config={config} className="h-41.25">
          <AreaChart
            data={customerSatisfaction}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="blueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2897ff" stopOpacity={0.28} />
                <stop offset="95%" stopColor="#2897ff" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="greenFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#37d88c" stopOpacity={0.24} />
                <stop offset="95%" stopColor="#37d88c" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis hide dataKey="month" />
            <Tooltip content={<ChartTooltipContent />} />
            <Area
              type="monotone"
              dataKey="lastMonth"
              stroke={config.lastMonth.color}
              fill="url(#blueFill)"
              strokeWidth={2.5}
            />
            <Area
              type="monotone"
              dataKey="thisMonth"
              stroke={config.thisMonth.color}
              fill="url(#greenFill)"
              strokeWidth={2.5}
            />
          </AreaChart>
        </ChartContainer>

        <div className="flex items-center justify-center gap-5 pt-1">
          <Metric label="Last Month" value="$3,004" dot="#2897ff" />
          <Separator orientation="vertical" className="h-9 bg-[#e7ebf7]" />
          <Metric label="This Month" value="$4,504" dot="#37d88c" />
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({
  label,
  value,
  dot,
}: {
  label: string;
  value: string;
  dot: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <span
        className="mt-1 size-2.5 rounded-full"
        style={{ backgroundColor: dot }}
      />
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}
