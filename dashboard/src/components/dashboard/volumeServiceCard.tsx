import { Bar, BarChart, CartesianGrid, Tooltip, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

import { volumeService } from "./data";

const config = {
  volume: { label: "Volume", color: "#2998ff" },
  services: { label: "Services", color: "#2dde91" },
};

export function VolumeServiceCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle>Volume vs Service Level</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-2">
        <ChartContainer config={config} className="h-42.5">
          <BarChart
            data={volumeService}
            barGap={-12}
            margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis hide dataKey="month" />
            <Tooltip content={<ChartTooltipContent />} />
            <Bar
              dataKey="volume"
              fill={config.volume.color}
              radius={[8, 8, 0, 0]}
              barSize={10}
            />
            <Bar
              dataKey="services"
              fill={config.services.color}
              radius={[8, 8, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </ChartContainer>

        <div className="flex items-center justify-center gap-6 pt-1">
          <Metric label="Volume" value="1,135" color={config.volume.color} />
          <Metric label="Services" value="635" color={config.services.color} />
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <span
          className="size-2.5 rounded-full"
          style={{ backgroundColor: color }}
        />
        <span>{label}</span>
      </div>
      <p className="mt-1 text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}
