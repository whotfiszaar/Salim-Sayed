"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { href: "#experience", label: "Experience" },
  { href: "#expansion", label: "Expansion" },
  { href: "#impact", label: "Impact" },
  { href: "#gallery", label: "Gallery" },
  { href: "#brands", label: "Brands" },
  { href: "#insights", label: "Insights" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-16 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-cream/90 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className={`font-display text-[15px] font-bold tracking-tight transition-colors duration-300 ${
            dark ? "text-cream" : "text-ink"
          }`}
          aria-label="Salim Sayed, home"
        >
          SALIM&nbsp;SAYED
          <span
            className={`ml-2 hidden align-middle text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 sm:inline ${
              dark ? "text-tint" : "text-mute"
            }`}
          >
            Retail Operations
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`u-link text-[13px] font-medium transition-colors duration-300 ${
                dark
                  ? "text-cream/85 hover:text-cream"
                  : "text-mute hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full px-4 py-2 text-[13px] font-semibold transition-colors duration-300 ${
              dark
                ? "bg-cream text-ink hover:bg-white"
                : "bg-wine text-cream hover:bg-wine-deep"
            }`}
          >
            Get in touch
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 md:hidden ${
            dark
              ? "border-cream/40 bg-wine/20 text-cream"
              : "border-line bg-cream/80 text-ink"
          }`}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-cream px-6 pt-6 pb-10 md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } transition-opacity duration-300`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-line py-4 font-display text-2xl font-semibold text-ink"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <span className="text-[11px] font-bold tracking-widest text-wine">
                0{i + 1}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-1 text-sm text-mute">
          <p className="font-semibold text-ink">Salim Sayed</p>
          <p>Dubai, UAE</p>
          <a href="mailto:salimsayed82@gmail.com" className="block hover:text-wine">
            salimsayed82@gmail.com
          </a>
          <a href="tel:+971585921779" className="block hover:text-wine">
            +971 58 592 1779
          </a>
        </div>
      </div>
    </header>
  );
}
