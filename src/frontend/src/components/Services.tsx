import { Clock, MapPin, Shield, Truck } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Goods Transportation",
    description:
      "Safe and reliable transport of goods across India. We handle cargo of all sizes with utmost care and professionalism.",
    id: "goods",
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description:
      "Your cargo is fully protected throughout the journey. We use secure loading practices and tracking to ensure safety.",
    id: "secure",
  },
  {
    icon: Clock,
    title: "On Time Delivery",
    description:
      "Reliable, punctual delivery every time. We understand that your business depends on timely logistics.",
    id: "ontime",
  },
  {
    icon: MapPin,
    title: "All India Service",
    description:
      "Our pan-India logistics network ensures your cargo reaches anywhere in the country efficiently and on schedule.",
    id: "allindia",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="py-20 px-4 bg-background"
      data-ocid="services.section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-body text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.75 0.17 55)" }}
          >
            What We Offer
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "oklch(0.75 0.17 55)" }}
          />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, description, id }, i) => (
            <div
              key={id}
              className="group relative bg-card rounded-xl p-6 border border-border hover:border-accent-glow transition-smooth hover:-translate-y-1 cursor-default"
              data-ocid={`services.item.${i + 1}`}
            >
              {/* Icon circle */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-smooth group-hover:scale-110"
                style={{
                  background: "oklch(0.75 0.17 55 / 0.15)",
                }}
              >
                <Icon size={26} style={{ color: "oklch(0.75 0.17 55)" }} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
              {/* Bottom accent on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-xl opacity-0 group-hover:opacity-100 transition-smooth"
                style={{ background: "oklch(0.75 0.17 55)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
