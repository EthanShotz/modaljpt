import { useSearchParams } from "react-router-dom";
import { CheckCircle, Circle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import TrackingWidget from "@/components/shared/TrackingWidget";
import { cn } from "@/lib/utils";

interface TimelineStep {
  title: string;
  time: string;
  status: "completed" | "current" | "pending";
}

const mockTimeline: TimelineStep[] = [
  { title: "Order Received", time: "9:00 AM", status: "completed" },
  { title: "Driver Dispatched", time: "9:15 AM", status: "completed" },
  { title: "Package Secured", time: "9:45 AM", status: "completed" },
  { title: "In Transit", time: "10:00 AM", status: "current" },
  { title: "Delivered", time: "--:-- --", status: "pending" },
];

const processSteps = [
  {
    title: "Select Service",
    description:
      "Choose from our range of service tiers — Stat, On-Demand, Rush, Same-Day, Asset, or Dedicated Routes — based on the urgency and requirements of your shipment.",
  },
  {
    title: "Dispatch",
    description:
      "Our 24-hour dispatch team immediately assigns a certified driver, optimizes the route, and sends you a confirmation with the driver's details and ETA.",
  },
  {
    title: "Secure Package",
    description:
      "Your dedicated driver arrives at the pickup location, verifies the package, logs chain-of-custody documentation, and secures the shipment with the appropriate handling protocols.",
  },
  {
    title: "Track",
    description:
      "Monitor your shipment in real time via GPS tracking. Receive automated status updates at every milestone from pickup through delivery.",
  },
  {
    title: "Release Package",
    description:
      "Upon arrival, the driver confirms the recipient's identity, obtains signature confirmation, and carefully transfers the package according to release protocols.",
  },
  {
    title: "Complete",
    description:
      "You receive proof-of-delivery documentation including signature, timestamp, and chain-of-custody records. Your shipment data is archived for compliance.",
  },
];

export default function TrackingPage() {
  const [searchParams] = useSearchParams();
  const trackingId = searchParams.get("id");

  return (
    <>
      {/* ─── Hero ─── */}
      <HeroBanner title="Track Your Shipment" subtitle="REAL-TIME VISIBILITY" />

      {/* ─── Tracking Form ─── */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <TrackingWidget />

          {/* ─── Mock Tracking Result ─── */}
          {trackingId && (
            <Card className="mt-10">
              <CardHeader>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray">Tracking Number</p>
                    <CardTitle className="text-xl font-heading font-mono">
                      {trackingId}
                    </CardTitle>
                  </div>
                  <Badge className="bg-accent/10 text-accent border-accent/20 text-sm">
                    In Transit
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {/* Vertical timeline */}
                <div className="relative ml-4">
                  {mockTimeline.map((step, index) => {
                    const isLast = index === mockTimeline.length - 1;

                    return (
                      <div key={step.title} className="flex gap-4 pb-8 last:pb-0">
                        {/* Icon + connecting line */}
                        <div className="relative flex flex-col items-center">
                          {step.status === "completed" ? (
                            <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                          ) : step.status === "current" ? (
                            <span className="relative flex h-6 w-6 items-center justify-center shrink-0">
                              <span className="absolute inline-flex h-full w-full rounded-full bg-accent/30 animate-pulse-dot" />
                              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                            </span>
                          ) : (
                            <Circle className="h-6 w-6 text-gray/40 shrink-0" />
                          )}
                          {/* Connecting line */}
                          {!isLast && (
                            <div
                              className={cn(
                                "w-0.5 flex-1 mt-1",
                                step.status === "completed"
                                  ? "bg-secondary"
                                  : "bg-gray/20"
                              )}
                            />
                          )}
                        </div>

                        {/* Content */}
                        <div className="pt-0.5">
                          <p
                            className={cn(
                              "font-medium",
                              step.status === "pending"
                                ? "text-gray/50"
                                : "text-dark"
                            )}
                          >
                            {step.title}
                          </p>
                          <p className="text-sm text-gray">{step.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* ─── 6-Step Process ─── */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            badge="Our Process"
            title="How It Works"
            description="From booking to delivery, every JPT USA shipment follows our proven six-step process for maximum reliability."
            centered
          />

          <div className="mt-14 relative">
            {/* Vertical center line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/10 hidden sm:block" />

            <div className="space-y-10">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.title} delay={index * 100}>
                  <div className="flex gap-6 items-start">
                    {/* Numbered circle */}
                    <div className="shrink-0 relative z-10 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                    {/* Content */}
                    <div>
                      <h3 className="text-xl font-heading font-bold text-dark mb-2">
                        {step.title}
                      </h3>
                      <p className="text-dark/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
