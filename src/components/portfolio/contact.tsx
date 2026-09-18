import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: "salimsayed82@gmail.com",
    href: "mailto:salimsayed82@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+971 58 592 1779",
    href: "tel:+971585921779",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/salim-sayed-93126b62",
  },
];

export function Contact() {
  return (
    <footer
      id="contact"
      className="scroll-mt-20 bg-wine pt-20 pb-8 text-cream sm:pt-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-cream/15 pb-6">
            <div>
              <p className="eyebrow text-tint">07 — Contact</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Let&apos;s build the next footprint.
              </h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-cream/60 sm:block">
              Open to retail operations leadership across the GCC and India.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-12 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <div>
              <p className="max-w-md font-display text-2xl leading-snug font-semibold tracking-tight text-cream/95 sm:text-[1.9rem]">
                Multi-unit operations, market entries and turnarounds — if
                it&apos;s retail and it needs to scale, let&apos;s talk.
              </p>
              <p className="mt-6 flex items-center gap-2 text-sm text-cream/70">
                <MapPin size={15} aria-hidden="true" />
                Dubai, United Arab Emirates
              </p>
              <a
                href="mailto:salimsayed82@gmail.com"
                className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-cream px-6 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Start a conversation
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <ul className="divide-y divide-cream/15 border-y border-cream/15 lg:border-y-0">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 text-cream/80 transition-colors group-hover:bg-cream group-hover:text-wine">
                        <link.icon size={18} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[11px] font-semibold tracking-[0.18em] text-cream/50 uppercase">
                          {link.label}
                        </span>
                        <span className="mt-0.5 block text-[15px] font-medium text-cream">
                          {link.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-cream/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cream"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Footer bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-[12px] text-cream/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Salim Sayed — Retail Operations
            Leader, Dubai UAE
          </p>
          <p className="flex items-center gap-1.5">
            Multi-Unit Retail · GCC &amp; India · P&amp;L Leadership
          </p>
        </div>
      </div>
    </footer>
  );
}
