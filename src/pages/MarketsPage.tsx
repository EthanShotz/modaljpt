import { PlaneTakeoff, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import CoverageMap from "@/components/shared/CoverageMap";
import CTASection from "@/components/shared/CTASection";
import { regions } from "@/data/regions";
import { services } from "@/data/services";

export default function MarketsPage() {
  const activeRegions = regions.filter((r) => r.status === "active");
  const comingSoonRegions = regions.filter((r) => r.status === "coming-soon");

  return (
    <>
      {/* ─── Hero ─── */}
      <HeroBanner
        title="Markets & Coverage"
        subtitle="NATIONWIDE REACH, LOCAL EXPERTISE"
        backgroundImage="/images/markets/usa-map-hero.jpg"
      />

      {/* ─── Coverage Map Section ─── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader
            badge="Coverage Map"
            title="Our Service Network"
            description="JPT USA operates across key metropolitan areas with plans for rapid nationwide expansion."
            centered
          />

          <div className="mt-12">
            <CoverageMap className="w-full max-w-4xl mx-auto" />
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-secondary" />
              <span className="text-sm text-gray">Active</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-warning" />
              <span className="text-sm text-gray">Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Active Region Detail ─── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Active Markets"
            title="Current Service Areas"
            description="Full-service coverage with immediate-response capability."
            centered
          />

          <div className="mt-12 space-y-8">
            {activeRegions.map((region) => (
              <Card key={region.name} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <CardTitle className="text-2xl font-heading">
                      {region.name}
                    </CardTitle>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                      Active
                    </Badge>
                  </div>
                  <CardDescription className="text-base mt-1">
                    {region.state}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-dark/80 mb-6">{region.description}</p>

                  {/* Metros grid */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray mb-3">
                      Service Areas
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {region.metros.map((metro) => (
                        <span
                          key={metro.name}
                          className={
                            metro.tier === "primary"
                              ? "font-semibold text-dark"
                              : "text-dark/70"
                          }
                        >
                          {metro.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Airports */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-gray mb-3">
                      Airport Access
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {region.airports.map((airport) => (
                        <div
                          key={airport}
                          className="flex items-center gap-2 text-dark"
                        >
                          <PlaneTakeoff className="h-5 w-5 text-accent" />
                          <span className="font-medium">{airport}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Coming Soon Regions ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Expansion"
            title="Coming Soon"
            description="We are actively expanding our coverage to serve more critical markets nationwide."
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {comingSoonRegions.map((region) => (
              <Card key={region.name}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="bg-warning/10 text-warning border-warning/20">
                      Coming Soon
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-heading">
                    {region.name}
                  </CardTitle>
                  <CardDescription>{region.state}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-dark/70 text-sm mb-4">
                    {region.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {region.airports.map((airport) => (
                      <div
                        key={airport}
                        className="flex items-center gap-1.5 text-sm text-dark"
                      >
                        <PlaneTakeoff className="h-4 w-4 text-accent" />
                        <span>{airport}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Service Tiers Table ─── */}
      <section className="py-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Availability"
            title="Service Availability by Region"
            description="See which services are currently available or planned for each market."
            centered
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-primary/10">
                  <th className="py-4 px-4 text-sm font-semibold text-dark">
                    Region
                  </th>
                  {services.map((s) => (
                    <th
                      key={s.id}
                      className="py-4 px-4 text-sm font-semibold text-dark text-center"
                    >
                      {s.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {regions.map((region) => (
                  <tr
                    key={region.name}
                    className="border-b border-gray/10 hover:bg-white/60 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-dark">
                      {region.name}
                    </td>
                    {services.map((s) => (
                      <td key={s.id} className="py-4 px-4 text-center">
                        {region.status === "active" ? (
                          <Check className="h-5 w-5 text-secondary mx-auto" />
                        ) : (
                          <span className="text-xs text-warning font-medium">
                            Coming Soon
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </>
  );
}
