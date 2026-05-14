import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "shadow-elevated backdrop-blur-md" : ""
      }`}
      style={{
        background: scrolled
          ? "oklch(0.13 0.035 255 / 0.95)"
          : "oklch(0.13 0.035 255 / 0.92)",
        backdropFilter: "blur(12px)",
      }}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 group"
            data-ocid="navbar.logo_link"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg shadow-glow-accent transition-smooth group-hover:scale-105"
              style={{
                background: "oklch(0.75 0.17 55)",
                color: "oklch(0.13 0.035 255)",
              }}
            >
              ST
            </div>
            <span className="font-display font-bold text-lg text-foreground tracking-tight leading-tight">
              SafeMove Transport
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm font-body font-medium text-foreground/80 hover:text-accent transition-smooth rounded-md hover:bg-muted/40"
                data-ocid={`navbar.${link.label.toLowerCase().replace(" ", "_")}_link`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="ml-3 px-5 py-2 text-sm font-body font-semibold rounded-lg transition-smooth hover:scale-105 shadow-glow-accent"
              style={{
                background: "oklch(0.75 0.17 55)",
                color: "oklch(0.13 0.035 255)",
              }}
              data-ocid="navbar.get_quote_button"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-foreground/80 hover:text-accent transition-smooth"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-ocid="navbar.mobile_menu_toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "oklch(0.13 0.035 255 / 0.98)" }}
        data-ocid="navbar.mobile_menu"
      >
        <div className="px-4 pb-4 pt-2 space-y-1 border-t border-border">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-4 py-3 text-sm font-body font-medium text-foreground/80 hover:text-accent transition-smooth rounded-md hover:bg-muted/40"
              data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(" ", "_")}_link`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("#contact")}
            className="w-full mt-2 px-5 py-3 text-sm font-body font-semibold rounded-lg transition-smooth"
            style={{
              background: "oklch(0.75 0.17 55)",
              color: "oklch(0.13 0.035 255)",
            }}
            data-ocid="navbar.mobile_get_quote_button"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
