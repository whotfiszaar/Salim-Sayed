import { Building2, CalendarDays, MapPin } from "lucide-react";
import { Reveal } from "./reveal";

type Role = {
  period: string;
  company: string;
  note: string;
  title: string;
  location: string;
  scope: { label: string; value: string }[];
  points: string[];
};

const ROLES: Role[] = [
  {
    period: "2025 — Now",
    company: "LIFE Healthcare Group",
    note: "Manager, Retail Operations",
    title: "Commanding a UAE-wide retail network",
    location: "Dubai, UAE",
    scope: [
      { label: "Team", value: "200+" },
      { label: "Portfolio", value: "AED 130M" },
      { label: "NSO launches", value: "30+" },
    ],
    points: [
      "Heading day-to-day retail operations across multiple store formats with a 200+ member team — enforcing financial controls, operational efficiency and SOP compliance.",
      "Strategically managing an AED 130M non-pharma commercial portfolio spanning premium, prestige and masstige skincare alongside core healthcare and wellness categories.",
      "Leading the New Store Opening (NSO) function UAE-wide — operations, visual merchandising, space planning, training and customer experience — for 30+ store launches.",
      "Revitalizing underperforming outlets through local market data and store P&L analytics, strengthening network-wide footprint health.",
    ],
  },
  {
    period: "2019 — 2024",
    company: "Annabelle · Rajan Trading LLC",
    note: "Retail Manager, Operations — GCC",
    title: "A 41-store fashion network across four nations",
    location: "Dubai, UAE · GCC",
    scope: [
      { label: "Stores", value: "41" },
      { label: "Annual revenue", value: "AED 100M" },
      { label: "Growth", value: "34%" },
    ],
    points: [
      "Held end-to-end operations and P&L accountability for 41 fashion retail stores across the UAE, KSA, Kuwait and Qatar — leading 3 Country Managers, a Regional Trainer and a 155+ store workforce.",
      "Delivered 34% overall commercial growth alongside a 14% like-for-like (LFL) growth metric (2022–2023) through commercial strategy and disciplined expansion.",
      "Spearheaded 19 new store openings across the GCC — including 11 stores launched across Saudi Arabia — covering market introduction, site readiness and operational rollout.",
      "Authored a company-wide SOP playbook and rescued distressed outposts via deep operational audits, staff restructuring and targeted financial turnarounds.",
    ],
  },
  {
    period: "2016 — 2018",
    company: "LIFE Healthcare Group",
    note: "Area Manager, Operations",
    title: "From high street to mall anchor",
    location: "Dubai, UAE",
    scope: [
      { label: "Formats", value: "500–6,500 sq ft" },
      { label: "LFL growth", value: "Double-digit" },
      { label: "Focus", value: "Turnarounds" },
    ],
    points: [
      "Commanded day-to-day operations across High Street and Mall locations from 500 to 6,500 sq. ft., safeguarding strict brand guidelines and operational alignment.",
      "Secured consistent double-digit like-for-like sales growth, transforming underperforming low-margin storefronts into highly profitable retail units.",
      "Engineered succession pipelines to train, mentor and deploy incoming Area Managers aligned to ambitious expansion targets.",
      "Instituted rigorous inventory, expiry-tracking and shrinkage protocols while implementing cost-reduction measures that elevated personnel productivity.",
    ],
  },
  {
    period: "2011 — 2016",
    company: "Forest Essentials · Estée Lauder Group",
    note: "Regional Manager, Operations",
    title: "Scaling India's luxury skincare pioneer",
    location: "India — West & South",
    scope: [
      { label: "Revenue", value: "2× regional" },
      { label: "New stores", value: "12" },
      { label: "Promotions", value: "3 consecutive" },
    ],
    points: [
      "Doubled regional retail revenue through data-driven staff placement, strategic local marketing and strict inventory controls.",
      "Directed end-to-end setup, recruitment and commercial launch of 12 new luxury retail stores across West and South India.",
      "Earned 3 consecutive promotions in recognition of operational leadership and measurable bottom-line contribution.",
      "Authored store-level SOPs, enforced visual merchandising excellence and launched new SKUs strategically across the retail network.",
    ],
  },
];

function SectionHeading({
  index,
  title,
  kicker,
}: {
  index: string;
  title: string;
  kicker: string;
}) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
      <div>
        <p className="eyebrow text-wine">{index}</p>
        <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-mute sm:block">
        {kicker}
      </p>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            index="01 — Selected Leadership"
            title="Four chapters, fifteen years"
            kicker="Every role, a bigger footprint: from regional luxury retail to GCC-wide multi-unit command."
          />
        </Reveal>

        <div className="mt-0 divide-y divide-line">
          {ROLES.map((role, i) => (
            <Reveal key={`${role.company}-${role.period}`} delay={i * 60}>
              <article className="grid grid-cols-1 gap-8 py-10 sm:py-12 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16">
                {/* Meta column */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-mute">
                    <CalendarDays size={14} aria-hidden="true" />
                    {role.period}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
                      {role.company}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-wine">
                      {role.note}
                    </p>
                    <p className="mt-2 flex items-center gap-1.5 text-[13px] text-mute">
                      <MapPin size={13} aria-hidden="true" />
                      {role.location}
                    </p>
                  </div>
                  <dl className="space-y-2.5">
                    {role.scope.map((s) => (
                      <div
                        key={s.label}
                        className="flex items-baseline gap-2 text-sm"
                      >
                        <dt className="text-mute">{s.label}</dt>
                        <span className="dotline" aria-hidden="true" />
                        <dd className="font-display font-bold text-ink">
                          {s.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Narrative column */}
                <div>
                  <p className="flex items-center gap-3 font-display text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-[1.7rem]">
                    <Building2
                      className="hidden shrink-0 text-dot sm:block"
                      size={26}
                      aria-hidden="true"
                    />
                    {role.title}
                  </p>
                  <ul className="mt-6 space-y-4">
                    {role.points.map((point) => (
                      <li
                        key={point.slice(0, 32)}
                        className="flex gap-3.5 text-[15px] leading-relaxed text-ink/85"
                      >
                        <span
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-wine"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="border-t border-line pt-8">
            <p className="eyebrow text-mute">Earlier chapters</p>
            <ul className="mt-4 grid gap-3 text-sm text-mute sm:grid-cols-3">
              <li className="rounded-xl border border-line bg-white/50 px-4 py-3">
                <span className="font-semibold text-ink">
                  Kaizen Global Services (BPO)
                </span>{" "}
                — Team Leader, Operations · 2006–2010
              </li>
              <li className="rounded-xl border border-line bg-white/50 px-4 py-3">
                <span className="font-semibold text-ink">
                  Imercious India (BPO)
                </span>{" "}
                — Process Executive · 2004–2006
              </li>
              <li className="rounded-xl border border-line bg-white/50 px-4 py-3">
                <span className="font-semibold text-ink">HDFC Bank</span> —
                Corporate Executive · 2002–2004
              </li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
