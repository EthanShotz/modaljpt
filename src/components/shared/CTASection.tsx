import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function CTASection({
  title = "Ready to Ship with Confidence?",
  description = "Get started with Modal Global's reliable courier services today.",
  primaryAction = { label: "Get a Quote", href: "/quote" },
  secondaryAction = { label: "Contact Us", href: "/contact" },
}: CTASectionProps) {
  return (
    <section className="bg-primary text-white py-20 relative overflow-hidden">
      {/* Circuit pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/images/patterns/circuit-pattern.svg)",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          {title}
        </h2>
        <p className="text-white/80 text-lg mb-8">{description}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white"
          >
            <Link to={primaryAction.href}>{primaryAction.label}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
          >
            <Link to={secondaryAction.href}>{secondaryAction.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
