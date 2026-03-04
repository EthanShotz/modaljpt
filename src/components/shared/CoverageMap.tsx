import { cn } from "@/lib/utils";

interface CoverageMapProps {
  className?: string;
}

export default function CoverageMap({ className }: CoverageMapProps) {
  return (
    <div className={cn("relative", className)}>
      <img
        src="/images/markets/usa-coverage-map.svg"
        alt="USA coverage map"
        className="w-full h-auto"
      />

      {/* NYC area active dot */}
      <div
        className="absolute w-4 h-4 bg-secondary rounded-full animate-pulse-dot"
        style={{ top: "28%", left: "82%" }}
      />

      {/* NYC area ring */}
      <div
        className="absolute w-8 h-8 bg-secondary/20 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ top: "28%", left: "82%" }}
      />
    </div>
  );
}
