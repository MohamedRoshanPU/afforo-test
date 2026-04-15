import { Bell, ChevronDown, Search } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-[2rem] font-semibold tracking-[-0.04em] text-foreground">
          Dashboard
        </h1>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <label className="relative block min-w-0 flex-1 md:w-105">
          <Search className="pointer-events-none absolute left-5 top-1/2 size-5 -translate-y-1/2 text-primary" />
          <input
            type="text"
            placeholder="Search here..."
            className="h-12 w-full rounded-[18px] border border-white/70 bg-white px-14 text-sm text-foreground shadow-[0_8px_24px_rgba(95,109,165,0.06)] outline-none placeholder:text-[#b2b8d1] focus:border-primary/40"
          />
        </label>

        <div className="flex items-center justify-between gap-3 md:justify-end">
          <button
            type="button"
            className="flex items-center gap-2 rounded-2xl border border-transparent bg-transparent px-2 py-2 text-sm font-medium text-foreground"
          >
            <span className="text-lg">🇺🇸</span>
            <span>Eng (US)</span>
            <ChevronDown className="size-4 text-[#9ca4c5]" />
          </button>

          <Button
            variant="outline"
            size="icon"
            className="relative rounded-2xl border-white/80 bg-white"
          >
            <Bell className="size-5 text-[#ffbf47]" />
            <span className="absolute right-3 top-3 size-1.5 rounded-full bg-[#ff5d73]" />
          </Button>

          <button
            type="button"
            className="flex items-center gap-3 rounded-[18px] bg-white px-2 py-2 shadow-[0_8px_24px_rgba(95,109,165,0.06)]"
          >
            <Avatar className="size-12">
              <AvatarFallback className="bg-secondary text-sm font-semibold text-primary">
                MA
              </AvatarFallback>
            </Avatar>
            <div className="hidden text-left md:block">
              <p className="text-sm font-semibold text-foreground">Mohamed</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
            <ChevronDown className="mr-1 size-4 text-[#9ca4c5]" />
          </button>
        </div>
      </div>
    </header>
  );
}
