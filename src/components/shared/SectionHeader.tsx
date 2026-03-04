import { cn } from "@/lib/utils";
import SectionBadge from "./SectionBadge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center")}>
      {badge && (
        <div className={cn("mb-4", centered && "flex justify-center")}>
          <SectionBadge text={badge} />
        </div>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl font-heading font-bold",
          light ? "text-white" : "text-dark"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg max-w-2xl",
            light ? "text-white/80" : "text-gray",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
