import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

import { targetReality } from "./data";

const config = {
  realitySales: { label: "Reality Sales", color: "#58c3a7" },
  targetSales: { label: "Target Sales", color: "#ffca28" },
};

export function TargetRealityCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Target vs Reality</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-2">
        <ChartContainer config={config} className="h-42.5">
          <BarChart
            data={targetReality}
            barGap={8}
            margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              fontSize={11}
            />
            <Tooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="realitySales"
              fill={config.realitySales.color}
              radius={[8, 8, 0, 0]}
              barSize={11}
            />
            <Bar
              dataKey="targetSales"
              fill={config.targetSales.color}
              radius={[8, 8, 0, 0]}
              barSize={11}
            />
          </BarChart>
        </ChartContainer>

        <div className="space-y-3 pt-1">
          <LegendItem
            color={config.realitySales.color}
            label="Reality Sales"
            sublabel="Global"
            value="8.823"
            tint="#e4fbf2"
          />
          <LegendItem
            color={config.targetSales.color}
            label="Target Sales"
            sublabel="Commercial"
            value="12.122"
            tint="#fff4db"
          />
        </div>
      </CardContent>
    </Card>
  );
}

function LegendItem({
  color,
  label,
  sublabel,
  value,
  tint,
}: {
  color: string;
  label: string;
  sublabel: string;
  value: string;
  tint: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl">
      <div className="flex items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-[12px]"
          style={{ backgroundColor: tint }}
        >
          <span
            className="size-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">{sublabel}</p>
        </div>
      </div>
      <span className="text-sm font-semibold" style={{ color }}>
        {value}
      </span>
    </div>
  );
}
