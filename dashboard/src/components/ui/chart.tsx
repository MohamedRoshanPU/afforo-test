import * as React from "react";
import { ResponsiveContainer, type LegendPayload } from "recharts";

import { cn } from "@/lib/utils";

type ChartConfig = Record<
  string,
  {
    label: string;
    color: string;
  }
>;

const ChartContext = React.createContext<ChartConfig | null>(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("Chart components must be used within a ChartContainer");
  }

  return context;
}

function ChartContainer({
  config,
  className,
  children,
}: React.PropsWithChildren<{
  config: ChartConfig;
  className?: string;
}>) {
  return (
    <ChartContext.Provider value={config}>
      <div className={cn("h-[220px] w-full [&_.recharts-cartesian-axis-tick-value]:fill-[#a1aac9] [&_.recharts-cartesian-grid-horizontal_line]:stroke-[#eef2fb] [&_.recharts-cartesian-grid-vertical_line]:stroke-transparent [&_.recharts-curve.recharts-tooltip-cursor]:stroke-transparent [&_.recharts-layer.recharts-cartesian-axis-line]:stroke-transparent [&_.recharts-legend-item-text]:text-[#98a0c3] [&_.recharts-polar-grid-concentric-path]:stroke-[#eef2fb]", className)}>
        <ResponsiveContainer width="100%" height="100%">
          {children as React.ReactElement}
        </ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

type ChartTooltipContentProps = {
  active?: boolean;
  payload?: Array<{
    color?: string;
    dataKey?: string | number;
    value?: number | string;
  }>;
  label?: string;
  className?: string;
};

function ChartTooltipContent({
  active,
  payload,
  label,
  className,
}: ChartTooltipContentProps) {
  const config = useChart();

  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className={cn("rounded-2xl border border-white/70 bg-white px-3 py-2 shadow-[0_18px_50px_rgba(99,110,160,0.16)]", className)}>
      {label ? <p className="mb-2 text-xs font-semibold text-foreground">{label}</p> : null}
      <div className="space-y-1.5">
        {payload.map((item) => {
          const key = item.dataKey as string;
          const meta = config[key];
          return (
            <div key={key} className="flex items-center justify-between gap-4 text-xs">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="size-2 rounded-full" style={{ backgroundColor: meta?.color ?? item.color }} />
                <span>{meta?.label ?? key}</span>
              </div>
              <span className="font-semibold text-foreground">{item.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ChartLegendContent({
  payload,
}: {
  payload?: ReadonlyArray<LegendPayload>;
}) {
  const config = useChart();

  if (!payload?.length) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 pt-4 text-[11px] text-muted-foreground">
      {payload.map((item) => {
        const key = item.dataKey as string;
        const meta = config[key];
        return (
          <div key={key} className="flex items-center gap-2">
            <span className="size-2.5 rounded-full" style={{ backgroundColor: meta?.color ?? item.color }} />
            <span>{meta?.label ?? key}</span>
          </div>
        );
      })}
    </div>
  );
}

export { ChartContainer, ChartLegendContent, ChartTooltipContent };
