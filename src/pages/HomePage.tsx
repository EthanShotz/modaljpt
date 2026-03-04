import { Link } from "react-router-dom";
import { Plane, MapPin } from "lucide-react";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import ServiceCard from "@/components/shared/ServiceCard";
import IndustryCard from "@/components/shared/IndustryCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import StatCounter from "@/components/shared/StatCounter";
import TrackingWidget from "@/components/shared/TrackingWidget";
import CoverageMap from "@/components/shared/CoverageMap";
import CTASection from "@/components/shared/CTASection";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { companyStats } from "@/data/team";

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <HeroBanner
        title="Your Transport Solution"
        subtitle="EVERY PACKAGE HANDLED WITH CAUTION & CARE"
        backgroundImage="/images/hero/logistics-hero.jpg"
        primaryAction={{ label: "Get a Quote", href: "/quote" }}
        secondaryAction={{ label: "Track Shipment", href: "/tracking" }}
      />

      {/* ─── Trust Bar ─── */}
      <section className="bg-light py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray text-sm font-medium uppercase tracking-wider mb-6">
            Trusted by industry leaders
          </p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <img
              src="/images/logos/partner-1.svg"
              alt="Partner 1"
              className="h-10 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/logos/partner-2.svg"
              alt="Partner 2"
              className="h-10 opacity-60 hover:opacity-100 transition-opacity"
            />
            <img
              src="/images/logos/partner-3.svg"
              alt="Partner 3"
              className="h-10 opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Our Services"
            title="Comprehensive Logistics Solutions"
            description="From immediate stat deliveries to dedicated routes, JPT USA provides the full spectrum of time-critical courier services your business demands."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={index * 100}>
                <ServiceCard service={service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Coverage Section ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column */}
            <div>
              <SectionHeader
                badge="Coverage"
                title="Serving the NYC Tri-State Area"
                description="JPT USA provides comprehensive coverage across all five New York City boroughs, Northern New Jersey, and Southern Connecticut. Our fleet operates 24/7 with direct access to all major airports in the region."
              />

              {/* Airport list */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray mb-3">
                  Airport Coverage
                </h4>
                <ul className="space-y-2">
                  {["JFK International", "Newark Liberty (EWR)", "LaGuardia (LGA)"].map(
                    (airport) => (
                      <li key={airport} className="flex items-center gap-3 text-dark">
                        <Plane className="h-5 w-5 text-accent" />
                        <span>{airport}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Coming Soon */}
              <div className="mt-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-warning mb-3">
                  Coming Soon
                </h4>
                <ul className="space-y-2">
                  {[
                    "Philadelphia (PHL)",
                    "Chicago O'Hare (ORD)",
                    "Atlanta (ATL)",
                    "Miami / Fort Lauderdale (MIA/FLL)",
                  ].map((city) => (
                    <li key={city} className="flex items-center gap-3 text-dark">
                      <MapPin className="h-5 w-5 text-warning" />
                      <span>{city}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right column */}
            <CoverageMap className="w-full" />
          </div>
        </div>
      </section>

      {/* ─── Tracking Section ─── */}
      <section className="bg-light py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            badge="Track"
            title="Real-Time Shipment Tracking"
            description="Stay informed at every step. Enter your tracking number below to get live updates on your shipment's location and estimated delivery time."
            centered
          />
          <div className="mt-10">
            <TrackingWidget />
          </div>
          <p className="text-center text-gray text-sm mt-6">
            All JPT USA shipments include complimentary real-time GPS tracking,
            signature confirmation, and proof-of-delivery documentation.
          </p>
        </div>
      </section>

      {/* ─── Industries Grid ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Industries"
            title="Serving Critical Sectors"
            description="We specialize in the safe, timely transport of high-value and sensitive materials across the industries that matter most."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Testimonials"
            title="What Our Clients Say"
            description="From medical directors to aerospace operations managers, our clients trust JPT USA with their most critical deliveries."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat) => (
              <StatCounter
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                icon={stat.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </>
  );
}
