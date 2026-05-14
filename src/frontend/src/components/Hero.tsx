import { ArrowDown, Clock, Headphones, MapPin, Truck } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years" },
  { icon: MapPin, value: "All India", label: "Coverage" },
  { icon: Truck, value: "1000+", label: "Deliveries" },
  { icon: Headphones, value: "24/7", label: "Support" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col"
      data-ocid="hero.section"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-trucks.dim_1600x900.jpg"
          alt="SafeMove Transport trucks on highway"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        {/* Additional dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.09 0.04 255 / 0.7) 0%, oklch(0.13 0.035 255 / 0.85) 70%, oklch(0.13 0.035 255) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-32 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-semibold mb-6 border"
          style={{
            background: "oklch(0.75 0.17 55 / 0.15)",
            borderColor: "oklch(0.75 0.17 55 / 0.4)",
            color: "oklch(0.75 0.17 55)",
          }}
        >
          <Truck size={13} />
          Pan-India Logistics & Goods Transportation
        </div>

        {/* Heading */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-tight mb-4 max-w-4xl">
          SafeMove <span className="text-gradient-accent">Transport</span>
        </h1>

        {/* Tagline */}
        <p
          className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-3"
          style={{ color: "oklch(0.75 0.17 55)" }}
        >
          Safe Hands • On Time • Every Time
        </p>

        {/* Slogan */}
        <p className="font-body text-base sm:text-lg text-muted-foreground mb-10 max-w-xl">
          Your Trust, Our Responsibility
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3.5 rounded-lg font-body font-semibold text-base transition-smooth hover:scale-105 shadow-glow-accent"
            style={{
              background: "oklch(0.75 0.17 55)",
              color: "oklch(0.13 0.035 255)",
            }}
            data-ocid="hero.get_quote_button"
          >
            Get a Quote
          </button>
          <button
            type="button"
            onClick={() => scrollTo("#services")}
            className="px-8 py-3.5 rounded-lg font-body font-semibold text-base text-foreground border-2 transition-smooth hover:bg-foreground/10"
            style={{ borderColor: "oklch(0.75 0.17 55 / 0.6)" }}
            data-ocid="hero.services_button"
          >
            Our Services
          </button>
        </div>

        {/* Scroll hint */}
        <button
          type="button"
          onClick={() => scrollTo("#services")}
          className="mt-2 text-muted-foreground/60 hover:text-accent transition-smooth animate-bounce"
          aria-label="Scroll down"
          data-ocid="hero.scroll_button"
        >
          <ArrowDown size={20} />
        </button>
      </div>

      {/* Stats bar */}
      <div
        className="relative w-full border-t border-border"
        style={{ background: "oklch(0.13 0.035 255 / 0.95)" }}
        data-ocid="hero.stats_bar"
      >
        <div className="max-w-5xl mx-auto px-4 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1 text-center"
            >
              <Icon
                size={18}
                className="mb-0.5"
                style={{ color: "oklch(0.75 0.17 55)" }}
              />
              <span
                className="font-display text-2xl font-bold"
                style={{ color: "oklch(0.75 0.17 55)" }}
              >
                {value}
              </span>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
