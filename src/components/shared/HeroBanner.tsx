import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export default function HeroBanner({
  title,
  subtitle,
  backgroundImage,
  primaryAction,
  secondaryAction,
}: HeroBannerProps) {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background */}
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-primary/90" />
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <p className="uppercase tracking-wider text-secondary mb-4 text-sm font-medium">
          {subtitle}
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white max-w-4xl mx-auto leading-tight">
          {title}
        </h1>
        {(primaryAction || secondaryAction) && (
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {primaryAction && (
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                <Link to={primaryAction.href}>{primaryAction.label}</Link>
              </Button>
            )}
            {secondaryAction && (
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to={secondaryAction.href}>
                  {secondaryAction.label}
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
