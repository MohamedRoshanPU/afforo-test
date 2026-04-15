import { Package, ShoppingBag, Tag, Users } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { salesSummary } from "./data";

const icons = [ShoppingBag, Package, Tag, Users];

export function OverviewCards() {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start justify-between gap-4 pb-0">
        <div>
          <CardTitle>Today&apos;s Sales</CardTitle>
          <CardDescription>Sales Summary</CardDescription>
        </div>

        <button
          type="button"
          className="rounded-xl border border-[#e8ecf8] px-4 py-2 text-xs font-semibold text-[#66708f]"
        >
          Export
        </button>
      </CardHeader>

      <CardContent className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {salesSummary.map((item, index) => {
          const Icon = icons[index];

          return (
            <div
              key={item.title}
              className="rounded-[18px] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]"
              style={{ backgroundColor: item.tint }}
            >
              <div
                className="mb-6 flex size-10 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: item.iconBg }}
              >
                <Icon className="size-4" />
              </div>
              <p className="text-[2rem] font-semibold tracking-[-0.03em] text-foreground">{item.value}</p>
              <p className="mt-1 text-base font-medium text-[#555f84]">{item.title}</p>
              <p className="mt-3 text-xs font-semibold text-[#7e90ea]">{item.delta}</p>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
