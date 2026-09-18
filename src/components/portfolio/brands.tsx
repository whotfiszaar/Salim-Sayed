import { Shirt, HeartPulse, Sparkles, Landmark } from "lucide-react";
import { Reveal } from "./reveal";

const BRANDS = [
  {
    icon: HeartPulse,
    name: "LIFE Healthcare Group",
    category: "Pharmacy · Wellness · Skincare",
    period: "2016-2018 · 2025 to Now",
    detail:
      "AED 130M non-pharma portfolio across premium, prestige and masstige skincare alongside healthcare and wellness categories, through the Life Pharmacy retail network of 200+ professionals.",
    tags: ["Retail Operations", "NSO Leadership", "Category Governance"],
  },
  {
    icon: Shirt,
    name: "Annabelle · Rajan Trading LLC",
    category: "Fashion Retail",
    period: "2019 to 2024",
    detail:
      "41 stores across the UAE, KSA, Kuwait and Qatar generating AED 100M annual revenue. Fast-paced regional fashion with a 155+ strong workforce.",
    tags: ["GCC Multi-Unit", "P&L Governance", "SOP Playbooks"],
  },
  {
    icon: Sparkles,
    name: "Forest Essentials · Estée Lauder",
    category: "Luxury Skincare",
    period: "2011 to 2016",
    detail:
      "India's luxurious Ayurvedic skincare pioneer. Doubled regional revenue, launched 12 luxury stores and earned 3 consecutive promotions.",
    tags: ["Luxury Retail", "VM Excellence", "Talent Development"],
  },
  {
    icon: Landmark,
    name: "Early Career · Banking & BPO",
    category: "Financial Services · Operations",
    period: "2002 to 2010",
    detail:
      "Corporate Executive at HDFC Bank, then operations leadership roles in BPO environments. The process discipline that still underpins his operating model.",
    tags: ["Process Discipline", "Team Leadership", "Client Operations"],
  },
];

export function Brands() {
  return (
    <section id="brands" className="scroll-mt-20 bg-cream pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow text-wine">04 · Houses & Categories</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                Four houses, one standard
              </h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-mute sm:block">
              From Ayurvedic luxury to GCC fashion and UAE healthcare retail.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {BRANDS.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-white/60 p-6 transition-all duration-300 hover:border-wine/40 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(118,49,64,0.35)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tint/40 text-wine transition-colors duration-300 group-hover:bg-wine group-hover:text-cream">
                    <brand.icon size={22} aria-hidden="true" />
                  </span>
                  <span className="text-[11px] font-semibold tracking-[0.16em] text-mute uppercase">
                    {brand.period}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink sm:text-[1.35rem]">
                  {brand.name}
                </h3>
                <p className="mt-1 text-[13px] font-semibold text-wine">
                  {brand.category}
                </p>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/80">
                  {brand.detail}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {brand.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line bg-cream px-3 py-1 text-[12px] font-medium text-mute"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
