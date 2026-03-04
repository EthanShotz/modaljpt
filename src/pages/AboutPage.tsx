import { Settings, Award, ShieldCheck, User, Users } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import HeroBanner from "@/components/shared/HeroBanner";
import SectionHeader from "@/components/shared/SectionHeader";
import ScrollReveal from "@/components/shared/ScrollReveal";
import StatCounter from "@/components/shared/StatCounter";
import CTASection from "@/components/shared/CTASection";
import { team, companyStats, companyValues } from "@/data/team";

const valueIcons: Record<string, React.ReactNode> = {
  Settings: <Settings className="h-8 w-8 text-primary" />,
  Award: <Award className="h-8 w-8 text-primary" />,
  ShieldCheck: <ShieldCheck className="h-8 w-8 text-primary" />,
};

const approachSteps = [
  "Attain customer satisfaction and loyalty through high productivity and operational effectiveness.",
  "Work to continually improve our service offerings for expediency and top-notch performance.",
  "Ensure every package is handled with caution and care and receives our CPR attention.",
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <HeroBanner title="About JPT USA" subtitle="OUR STORY" />

      {/* ─── Company Story ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: narrative */}
            <div>
              <SectionHeader
                badge="Our Story"
                title="From NYC Roots to National Reach"
              />
              <div className="mt-8 space-y-5 text-dark/80 leading-relaxed">
                <p>
                  In 2013, Troy Perfect founded <strong>Just Perfect Transportation
                  (JPT USA)</strong> with a single van and a clear mission: provide
                  New York City businesses with a courier service that treated every
                  package as if it were the most important delivery of the day.
                  Operating from a small sector of the city, Troy quickly built a
                  reputation for reliability, discretion, and care.
                </p>
                <p>
                  As word spread, JPT USA grew exponentially. Thousands of businesses
                  across the Tri-State area began relying on Troy and his team for
                  their most time-sensitive, high-value deliveries. The company carved
                  out a specialty in same-day, time-definite transportation for
                  industries where failure is simply not an option: pharmaceuticals,
                  medical devices, aerospace components, and sensitive technology.
                </p>
                <p>
                  By 2019, the company had expanded its capabilities and set its
                  sights on nationwide service under the <strong>JPT USA</strong> brand.
                  Today, JPT USA serves hundreds of active clients across
                  the NYC Tri-State area with 24-hour dispatch, and is actively
                  expanding to Philadelphia, Chicago, Atlanta, and South Florida.
                </p>
                <p>
                  What has never changed is the founding promise: <em>Every package
                  handled with caution and care.</em>
                </p>
              </div>
            </div>

            {/* Right: decorative */}
            <div className="relative hidden lg:block">
              <div className="bg-primary/5 rounded-2xl p-10 space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-heading font-bold text-primary">2013</p>
                  <p className="text-gray text-sm mt-1">
                    Just Perfect Transportation founded in NYC
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-heading font-bold text-primary">2019</p>
                  <p className="text-gray text-sm mt-1">
                    Expanded to full Tri-State coverage
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-4xl font-heading font-bold text-secondary">
                    Today
                  </p>
                  <p className="text-gray text-sm mt-1">
                    Expanding nationwide with 24/7 critical-delivery service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Values Section ─── */}
      <section className="bg-light py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Our Values"
            title="The CPR Promise"
            description="Customized, Professional, Reliable — the three pillars that guide every delivery and every client relationship at JPT USA."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {companyValues.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 150}>
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center">
                      {valueIcons[value.icon]}
                    </div>
                    <CardTitle className="text-xl font-heading">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark/70">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats Section ─── */}
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

      {/* ─── Team Section ─── */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Leadership"
            title="Our Team"
            description="The dedicated professionals behind JPT USA's commitment to excellence."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {team.map((member) => (
              <ScrollReveal key={member.name}>
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                      {member.role.includes("Founder") ? (
                        <User className="h-10 w-10 text-primary" />
                      ) : (
                        <Users className="h-10 w-10 text-primary" />
                      )}
                    </div>
                    <CardTitle className="text-xl font-heading">
                      {member.name}
                    </CardTitle>
                    <p className="text-accent text-sm font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark/70 text-center">{member.bio}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Three-Point Approach ─── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            badge="Our Approach"
            title="Success Through Simplicity"
            description="At JPT USA, we believe the best results come from a disciplined focus on fundamentals."
            centered
          />

          <div className="mt-12 space-y-8">
            {approachSteps.map((step, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="flex gap-6 items-start">
                  <div className="shrink-0 h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-lg">
                    {index + 1}
                  </div>
                  <p className="text-dark/80 text-lg leading-relaxed pt-2">
                    {step}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <CTASection />
    </>
  );
}
