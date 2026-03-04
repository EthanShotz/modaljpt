import { Link } from "react-router-dom";
import {
  Zap as ZapIcon,
  Clock as ClockIcon,
  Truck as TruckIcon,
  Package as PackageIcon,
  ShieldCheck as ShieldCheckIcon,
  Route as RouteIcon,
  ArrowRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Service } from "@/data/services";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap: ZapIcon,
  Clock: ClockIcon,
  Truck: TruckIcon,
  Package: PackageIcon,
  ShieldCheck: ShieldCheckIcon,
  Route: RouteIcon,
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon];

  return (
    <Card className="hover:shadow-lg transition-all hover:-translate-y-1">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
          {IconComponent && (
            <IconComponent className="w-6 h-6 text-primary" />
          )}
        </div>
        <CardTitle>{service.title}</CardTitle>
        <Badge variant="outline" className="w-fit">
          {service.responseTime}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray">{service.shortDescription}</p>
      </CardContent>
      <CardFooter>
        <Link
          to={`/services#${service.id}`}
          className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
