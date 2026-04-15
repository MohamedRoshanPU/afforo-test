import { Gem } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { sidebarItems } from "./data";

export function Sidebar() {
  return (
    <aside className="hidden h-full min-h-0 flex-col overflow-hidden rounded-[30px] bg-white px-4 py-5 shadow-[0_16px_40px_rgba(96,110,162,0.08)] lg:flex">
      <div className="mb-8 flex items-center gap-4 px-1">
        <div className="flex size-11 items-center justify-center rounded-[14px] bg-primary text-white shadow-[0_14px_28px_rgba(93,95,239,0.35)]">
          <Gem className="size-4" />
        </div>
        <span className="text-[1.1rem] font-semibold tracking-[-0.03em] text-foreground">
          Dabang
        </span>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <nav className="space-y-2.5">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                type="button"
                className={cn(
                  "flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left text-[15px] font-medium text-muted transition-colors hover:bg-[#f4f6ff] hover:text-foreground",
                  item.active &&
                    "bg-primary text-white shadow-[0_18px_30px_rgba(93,95,239,0.2)] hover:bg-primary hover:text-white",
                )}
              >
                <Icon className="size-4.5" strokeWidth={2.2} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-5 rounded-[22px] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),linear-gradient(180deg,#6769f2_0%,#5c5eea_100%)] p-4 text-center text-white shadow-[0_24px_40px_rgba(93,95,239,0.28)]">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-2xl bg-white text-primary">
            <Gem className="size-5" />
          </div>
          <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em]">
            Upgrade Plan
          </h3>
          <p className="mx-auto mt-2 max-w-37.5 text-[11px] leading-5 text-white/75">
            Unlock advanced reports and extra workspace features.
          </p>
          <Button className="mt-4 h-10 w-full rounded-[14px] bg-white text-primary shadow-none hover:bg-white/95">
            Upgrade
          </Button>
        </div>
      </div>
    </aside>
  );
}
