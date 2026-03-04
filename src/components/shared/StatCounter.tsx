import { useRef } from "react";
import {
  Calendar as CalendarIcon,
  Package as PackageIcon,
  Clock as ClockIcon,
  Users as UsersIcon,
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar: CalendarIcon,
  Package: PackageIcon,
  Clock: ClockIcon,
  Users: UsersIcon,
};

interface StatCounterProps {
  label: string;
  value: string;
  suffix?: string;
  icon: string;
}

export default function StatCounter({
  label,
  value,
  suffix,
  icon,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref);
  const numericValue = parseFloat(value) || parseInt(value, 10) || 0;
  const animatedValue = useCounterAnimation(numericValue, isVisible);

  const IconComponent = iconMap[icon];

  return (
    <div ref={ref} className="flex flex-col items-center p-6 text-center">
      {IconComponent && (
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
          <IconComponent className="w-6 h-6 text-primary" />
        </div>
      )}
      <span className="text-4xl font-heading font-bold text-primary">
        {animatedValue}
        {suffix}
      </span>
      <span className="mt-2 text-gray text-sm">{label}</span>
    </div>
  );
}
