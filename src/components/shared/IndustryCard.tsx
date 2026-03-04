import {
  Pill as PillIcon,
  Heart as HeartIcon,
  Plane as PlaneIcon,
  Cpu as CpuIcon,
  ShoppingBag as ShoppingBagIcon,
  Shield as ShieldIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Industry } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill: PillIcon,
  Heart: HeartIcon,
  Plane: PlaneIcon,
  Cpu: CpuIcon,
  ShoppingBag: ShoppingBagIcon,
  Shield: ShieldIcon,
};

interface IndustryCardProps {
  industry: Industry;
}

export default function IndustryCard({ industry }: IndustryCardProps) {
  const IconComponent = iconMap[industry.icon];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
        {IconComponent && (
          <IconComponent className="w-6 h-6 text-primary" />
        )}
      </div>
      <h3 className="font-heading font-bold text-lg mb-2">
        {industry.title}
      </h3>
      <p className="text-gray mb-4">{industry.description}</p>
      <div className="flex flex-wrap gap-2">
        {industry.packages.map((pkg) => (
          <Badge key={pkg} variant="secondary" className="text-xs">
            {pkg}
          </Badge>
        ))}
      </div>
    </div>
  );
}
