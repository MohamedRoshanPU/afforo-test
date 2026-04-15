import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { countryMetrics } from "./data";

export function CountryMappingCard() {
  return (
    <Card className="h-full">
      <CardHeader className="pb-4">
        <CardTitle>Sales Mapping by Country</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative h-57.5 overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_center,rgba(245,248,255,0.9),rgba(255,255,255,0.95)_65%)]">
          <svg
            viewBox="0 0 600 300"
            aria-hidden="true"
            className="absolute inset-0 h-full w-full opacity-35"
          >
            <g fill="#d7dbe8">
              <path d="M77 101l22-16 44 2 17 9 16 0 18 14-4 13-24 3-16 18-27 3-17-9-11 1-7-17-13-5-7-14z" />
              <path d="M158 176l17-8 13 15 10 39-19 17-24-11-9-31z" />
              <path d="M264 97l29-17 73 3 39-5 35 12 21 23-20 17-19-2-8 18-31 7-18 14-36-8-17-20-24 5-22-17 7-20z" />
              <path d="M308 171l17 2 17 28-12 38-26 14-25-21 4-34z" />
              <path d="M420 146l21-8 19 10 16-8 27 6 24 19-8 19-19-5-11 11-25 1-18-21-23-9z" />
              <path d="M468 209l22 8 16 22-7 21-30-13-10-19z" />
            </g>
          </svg>

          {countryMetrics.map((item) => (
            <div
              key={item.country}
              className="absolute"
              title={item.country}
              style={{
                left: item.x,
                top: item.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="rounded-full border-4 border-white shadow-[0_10px_18px_rgba(92,104,156,0.15)]"
                style={{
                  width: Math.max(12, Math.round(item.size / 2.4)),
                  height: Math.max(12, Math.round(item.size / 2.4)),
                  backgroundColor: item.color,
                }}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
