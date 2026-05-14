import { CheckCircle2, Globe, Timer } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Reliability",
    description:
      "Trusted by businesses across India for consistent, safe, and damage-free delivery. Our track record speaks for itself.",
    id: "reliability",
  },
  {
    icon: Globe,
    title: "Nationwide Coverage",
    description:
      "All-India service network ensuring your cargo reaches anywhere — from major cities to remote destinations.",
    id: "coverage",
  },
  {
    icon: Timer,
    title: "On-Time Performance",
    description:
      "Industry-leading punctuality with a real-time commitment to every delivery schedule. We never compromise on time.",
    id: "performance",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-20 px-4"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.10 0.04 255) 0%, oklch(0.15 0.038 255) 100%)",
      }}
      data-ocid="whychooseus.section"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-body text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.75 0.17 55)" }}
          >
            Our Strengths
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "oklch(0.75 0.17 55)" }}
          />
          <p className="mt-5 font-body text-base text-muted-foreground max-w-xl mx-auto">
            We combine experience, network, and commitment to deliver a
            logistics service that businesses across India trust.
          </p>
        </div>

        {/* Feature columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, description, id }, i) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-8 rounded-2xl border border-border/50 transition-smooth hover:-translate-y-1"
              style={{ background: "oklch(0.18 0.04 255 / 0.6)" }}
              data-ocid={`whychooseus.item.${i + 1}`}
            >
              {/* Large icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                style={{
                  background: "oklch(0.75 0.17 55 / 0.15)",
                  boxShadow: "0 0 24px oklch(0.75 0.17 55 / 0.2)",
                }}
              >
                <Icon size={30} style={{ color: "oklch(0.75 0.17 55)" }} />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
