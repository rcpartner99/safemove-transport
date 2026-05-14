import { Mail, MapPin, Phone, User } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4"
      style={{ background: "oklch(0.16 0.038 255)" }}
      data-ocid="contact.section"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="font-body text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "oklch(0.75 0.17 55)" }}
          >
            Reach Out
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "oklch(0.75 0.17 55)" }}
          />
          <p className="mt-5 font-body text-base text-muted-foreground max-w-lg mx-auto">
            Ready to move your goods? Contact us today for a free quote or to
            learn more about our services.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {/* Proprietor */}
          <div
            className="flex items-start gap-4 p-6 rounded-xl border border-border"
            style={{ background: "oklch(0.13 0.035 255)" }}
            data-ocid="contact.proprietor_card"
          >
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: "oklch(0.75 0.17 55 / 0.15)" }}
            >
              <User size={22} style={{ color: "oklch(0.75 0.17 55)" }} />
            </div>
            <div className="min-w-0">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Proprietor
              </p>
              <p className="font-display font-bold text-lg text-foreground">
                Kamaljeet
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Kamaljeet Kumar Chaurasia
              </p>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:9905485725"
            className="flex items-start gap-4 p-6 rounded-xl border border-border transition-smooth hover:border-accent-glow group"
            style={{ background: "oklch(0.13 0.035 255)" }}
            data-ocid="contact.phone_link"
          >
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-smooth group-hover:scale-110"
              style={{ background: "oklch(0.75 0.17 55 / 0.15)" }}
            >
              <Phone size={22} style={{ color: "oklch(0.75 0.17 55)" }} />
            </div>
            <div className="min-w-0">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Phone
              </p>
              <p
                className="font-display font-bold text-lg"
                style={{ color: "oklch(0.75 0.17 55)" }}
              >
                9905485725
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Tap to call
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:kamaljeetkumarchaurasia@gmail.com"
            className="flex items-start gap-4 p-6 rounded-xl border border-border transition-smooth hover:border-accent-glow group"
            style={{ background: "oklch(0.13 0.035 255)" }}
            data-ocid="contact.email_link"
          >
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center transition-smooth group-hover:scale-110"
              style={{ background: "oklch(0.75 0.17 55 / 0.15)" }}
            >
              <Mail size={22} style={{ color: "oklch(0.75 0.17 55)" }} />
            </div>
            <div className="min-w-0">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Email
              </p>
              <p
                className="font-display font-bold text-sm truncate"
                style={{ color: "oklch(0.75 0.17 55)" }}
              >
                kamaljeetkumarchaurasia@gmail.com
              </p>
              <p className="font-body text-sm text-muted-foreground">
                Tap to email
              </p>
            </div>
          </a>

          {/* Address */}
          <div
            className="flex items-start gap-4 p-6 rounded-xl border border-border"
            style={{ background: "oklch(0.13 0.035 255)" }}
            data-ocid="contact.address_card"
          >
            <div
              className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center"
              style={{ background: "oklch(0.75 0.17 55 / 0.15)" }}
            >
              <MapPin size={22} style={{ color: "oklch(0.75 0.17 55)" }} />
            </div>
            <div className="min-w-0">
              <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                Address
              </p>
              <p className="font-body text-sm text-foreground leading-relaxed">
                Naval Warehouse, Katangi Road,
                <br />
                Nandani Ronsara, Katangi Bypass,
                <br />
                Jabalpur - 482002, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        {/* Call Now CTA */}
        <div className="text-center">
          <a
            href="tel:9905485725"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-display font-bold text-lg transition-smooth hover:scale-105 shadow-glow-accent"
            style={{
              background: "oklch(0.75 0.17 55)",
              color: "oklch(0.13 0.035 255)",
            }}
            data-ocid="contact.call_now_button"
          >
            <Phone size={20} />
            Call Now — 9905485725
          </a>
        </div>
      </div>
    </section>
  );
}
