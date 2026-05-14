import { Truck } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utm = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`;

  return (
    <footer
      className="py-12 px-4 border-t border-border"
      style={{ background: "oklch(0.11 0.04 255)" }}
      data-ocid="footer.section"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Logo row */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xl"
            style={{
              background: "oklch(0.75 0.17 55)",
              color: "oklch(0.13 0.035 255)",
            }}
          >
            ST
          </div>
          <span className="font-display text-2xl font-bold text-foreground tracking-tight">
            SafeMove Transport
          </span>
        </div>

        {/* Tagline */}
        <p
          className="font-display text-lg font-semibold"
          style={{ color: "oklch(0.75 0.17 55)" }}
        >
          Safe Hands • On Time • Every Time
        </p>

        {/* Slogan */}
        <p className="font-body text-sm text-muted-foreground">
          Your Trust, Our Responsibility
        </p>

        {/* Divider */}
        <div
          className="w-24 h-px my-2"
          style={{ background: "oklch(0.75 0.17 55 / 0.3)" }}
        />

        {/* Location tag */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Truck size={13} style={{ color: "oklch(0.75 0.17 55)" }} />
          Jabalpur, Madhya Pradesh — Serving All India
        </div>

        {/* Copyright + caffeine */}
        <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-muted-foreground/60 mt-2">
          <span>© {year} SafeMove Transport. All rights reserved.</span>
          <span className="hidden sm:inline">·</span>
          <span>
            Built with love using{" "}
            <a
              href={utm}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-smooth underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
