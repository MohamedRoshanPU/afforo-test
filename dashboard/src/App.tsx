import { CountryMappingCard } from "@/components/dashboard/countryCard";
import { CustomerSatisfactionCard } from "@/components/dashboard/customerSatisfactionCard";
import { OverviewCards } from "@/components/dashboard/overviewCards";
import { RevenueCard } from "@/components/dashboard/revenueCard";
import { Sidebar } from "@/components/dashboard/sidebar";
import { TargetRealityCard } from "@/components/dashboard/targetRealityCard";
import { TopBar } from "@/components/dashboard/topBar";
import { TopProductsCard } from "@/components/dashboard/topProductsCard";
import { VisitorInsightsCard } from "@/components/dashboard/visitorInsightsCard";
import { VolumeServiceCard } from "@/components/dashboard/volumeServiceCard";

export default function App() {
  return (
    <main className="h-screen overflow-hidden bg-transparent p-3 text-foreground lg:p-4">
      <div className="mx-auto grid h-full max-w-375 gap-4 lg:grid-cols-[240px_minmax(0,1fr)]">
        <Sidebar />

        <section className="min-h-0 overflow-hidden rounded-[30px] bg-background shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
          <div className="flex h-full min-h-0 flex-col overflow-hidden p-5 lg:p-6">
            <TopBar />

            <div className="mt-6 min-h-0 flex-1 overflow-y-auto pr-0 lg:pr-1">
              <div className="grid gap-5 xl:grid-cols-[1.62fr_1.08fr]">
                <OverviewCards />
                <VisitorInsightsCard />
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-[1.55fr_1fr_0.86fr]">
                <RevenueCard />
                <CustomerSatisfactionCard />
                <TargetRealityCard />
              </div>

              <div className="mt-5 grid gap-5 pb-1 xl:grid-cols-[1.55fr_1fr_0.86fr]">
                <TopProductsCard />
                <CountryMappingCard />
                <VolumeServiceCard />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
