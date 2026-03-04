import { useMemo } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import HeroBanner from "@/components/shared/HeroBanner";
import CTASection from "@/components/shared/CTASection";
import { services } from "@/data/services";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

/** Feature flags for the comparison table */
const comparisonFeatures: {
  key: string;
  label: string;
  check: (serviceId: string) => boolean;
}[] = [
  {
    key: "gps",
    label: "GPS Tracking",
    check: () => true, // all services include GPS tracking
  },
  {
    key: "cold-chain",
    label: "Cold-Chain",
    check: (id) => ["stat", "rush", "asset"].includes(id),
  },
  {
    key: "hazmat",
    label: "Hazmat",
    check: (id) => ["rush", "asset"].includes(id),
  },
];

export default function ServicesPage() {
  const sectionIds = useMemo(() => services.map((s) => s.id), []);
  const activeId = useScrollSpy(sectionIds, 160);

  return (
    <>
      {/* ─── Hero ─── */}
      <HeroBanner
        title="Our Services"
        subtitle="COMPREHENSIVE LOGISTICS SOLUTIONS"
      />

      {/* ─── Scroll Spy Nav ─── */}
      <nav className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray/10">
        <div className="max-w-7xl mx-auto px-6 py-3 overflow-x-auto">
          <div className="flex gap-2 whitespace-nowrap">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  activeId === service.id
                    ? "bg-primary text-white"
                    : "text-gray hover:text-primary"
                )}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Service Detail Sections ─── */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className="py-16 border-b border-gray/10 last:border-b-0"
        >
          <div className="max-w-5xl mx-auto px-6">
            {/* Title row */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h2 className="text-3xl font-heading font-bold text-dark">
                {service.title}
              </h2>
              <Badge className="bg-accent/10 text-accent border-accent/20">
                {service.responseTime}
              </Badge>
            </div>

            {/* Description */}
            <p className="text-dark/80 text-lg leading-relaxed mb-8 max-w-3xl">
              {service.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray mb-4">
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-dark">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-sm font-semibold text-gray mr-2">
                Industries:
              </span>
              {service.industries.map((industry) => (
                <Badge key={industry} variant="outline">
                  {industry}
                </Badge>
              ))}
            </div>

            {/* CTA Button */}
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
              <Link to="/quote">Request a Quote</Link>
            </Button>
          </div>
        </section>
      ))}

      {/* ─── Comparison Table ─── */}
      <section className="py-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-heading font-bold text-dark text-center mb-4">
            Service Comparison
          </h2>
          <p className="text-gray text-center mb-12 max-w-2xl mx-auto">
            Compare our service tiers to find the best fit for your delivery needs.
          </p>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/10">
                  <th className="py-4 px-4 text-sm font-semibold text-dark">
                    Service
                  </th>
                  <th className="py-4 px-4 text-sm font-semibold text-dark">
                    Response Time
                  </th>
                  {comparisonFeatures.map((f) => (
                    <th
                      key={f.key}
                      className="py-4 px-4 text-sm font-semibold text-dark text-center"
                    >
                      {f.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr
                    key={service.id}
                    className="border-b border-gray/10 hover:bg-white/60 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-dark">
                      {service.title}
                    </td>
                    <td className="py-4 px-4 text-gray">{service.responseTime}</td>
                    {comparisonFeatures.map((f) => (
                      <td key={f.key} className="py-4 px-4 text-center">
                        {f.check(service.id) ? (
                          <Check className="h-5 w-5 text-secondary mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray/40 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {services.map((service) => (
              <Card key={service.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <p className="text-sm text-gray">{service.responseTime}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {comparisonFeatures.map((f) => (
                      <li key={f.key} className="flex items-center justify-between">
                        <span className="text-sm text-dark">{f.label}</span>
                        {f.check(service.id) ? (
                          <Check className="h-5 w-5 text-secondary" />
                        ) : (
                          <X className="h-5 w-5 text-gray/40" />
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </>
  );
}
