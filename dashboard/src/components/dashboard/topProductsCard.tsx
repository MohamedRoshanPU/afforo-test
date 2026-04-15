import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

import { products } from "./data";

export function TopProductsCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle>Top Products</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-[42px_minmax(0,1.8fr)_minmax(120px,1fr)_60px] gap-y-6 text-sm">
          <p className="text-xs text-[#c0c6db]">#</p>
          <p className="text-xs text-[#c0c6db]">Name</p>
          <p className="text-xs text-[#c0c6db]">Popularity</p>
          <p className="text-right text-xs text-[#c0c6db]">Sales</p>

          {products.map((product) => (
            <TopProductRow key={product.id} {...product} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function TopProductRow({
  id,
  name,
  sales,
  color,
}: {
  id: string;
  name: string;
  sales: number;
  color: string;
}) {
  return (
    <>
      <p className="font-medium text-[#7c86a9]">{id}</p>
      <p className="truncate pr-4 text-[#566181]">{name}</p>
      <div className="self-center pr-6">
        <Progress value={sales} indicatorStyle={{ backgroundColor: color }} />
      </div>
      <div className="flex justify-end">
        <span
          className="inline-flex min-w-10.5 justify-center rounded-full border px-2 py-0.5 text-xs font-semibold"
          style={{
            borderColor: `${color}55`,
            color,
            backgroundColor: `${color}12`,
          }}
        >
          {sales}%
        </span>
      </div>
    </>
  );
}
