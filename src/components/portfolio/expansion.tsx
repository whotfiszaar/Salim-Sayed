import { Reveal } from "./reveal";

const LAUNCHES = [
  {
    num: "30+",
    brand: "LIFE Healthcare Group",
    period: "2025 — 2026",
    detail:
      "UAE-wide New Store Opening function — 30+ launches delivered end-to-end across the network.",
  },
  {
    num: "19",
    brand: "Annabelle · GCC",
    period: "2019 — 2024",
    detail:
      "Market introduction and operational rollout across UAE, KSA, Kuwait and Qatar — 11 of them in Saudi Arabia.",
  },
  {
    num: "12",
    brand: "Forest Essentials · India",
    period: "2011 — 2016",
    detail:
      "End-to-end setup, recruitment and commercial launch of luxury stores across West and South India.",
  },
];

const SCOPE = [
  "Site readiness",
  "Space planning",
  "Visual merchandising",
  "Recruitment",
  "Training",
  "Cross-functional launch",
];

export function Expansion() {
  return (
    <section
      id="expansion"
      className="relative scroll-mt-20 overflow-hidden bg-wine-deep py-20 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-cream/15 pb-6">
            <div>
              <p className="eyebrow text-tint">02 — Expansion</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Every store, from handover to performing asset.
              </h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-cream/60 sm:block">
              Site handover → launch → commercial performance. The full path,
              owned.
            </p>
          </div>
        </Reveal>

        {/* Giant numeral feature */}
        <Reveal delay={80}>
          <div className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div className="text-center lg:text-left">
              <p
                className="giant-num"
                aria-hidden="true"
              >
                45+
              </p>
              <p className="sr-only">45 plus stores launched</p>
              <p className="mt-6 font-display text-xl font-semibold tracking-tight text-cream/90 sm:text-2xl">
                stores launched across five countries
              </p>
              <p className="mt-3 text-sm font-medium tracking-[0.2em] text-tint uppercase">
                UAE · KSA · Kuwait · Qatar · India
              </p>
            </div>

            <ul className="space-y-6 lg:border-l lg:border-cream/15 lg:pl-12">
              {LAUNCHES.map((launch, i) => (
                <Reveal as="li" key={launch.brand} delay={i * 90}>
                  <div className="flex items-start gap-5">
                    <span className="font-display text-4xl font-bold tracking-[-0.05em] text-tint sm:text-5xl">
                      {launch.num}
                    </span>
                    <div>
                      <p className="font-display text-lg font-semibold text-cream">
                        {launch.brand}
                        <span className="ml-2 text-xs font-medium tracking-wider text-cream/50">
                          {launch.period}
                        </span>
                      </p>
                      <p className="mt-1.5 max-w-md text-sm leading-relaxed text-cream/75">
                        {launch.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Scope chips */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-3 border-t border-cream/15 pt-8">
            <span className="mr-2 text-[11px] font-semibold tracking-[0.2em] text-cream/60 uppercase">
              Launch scope
            </span>
            {SCOPE.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cream/25 px-4 py-1.5 text-[13px] font-medium text-cream/85"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
