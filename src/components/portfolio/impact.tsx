import { Reveal } from "./reveal";

const IMPACT_STATS = [
  {
    value: "34%",
    label: "Overall commercial growth",
    detail: "Across a 41-store, AED 100M GCC network, with a 14% LFL growth rate (2022-2023).",
  },
  {
    value: "AED 130M",
    label: "Commercial portfolio managed",
    detail: "Non-pharma categories across the UAE network, spanning skincare, healthcare and wellness.",
  },
  {
    value: "45+",
    label: "Store launches led",
    detail: "A 15-year expansion record spanning the UAE, KSA, Kuwait, Qatar and India.",
  },
  {
    value: "200+",
    label: "Team members led",
    detail: "Including 3 Country Managers and a Regional Trainer across the GCC network.",
  },
];

const ACHIEVEMENTS = [
  "Turned around multiple distressed, underperforming outlets through operational audits, staff restructuring and financial turnaround strategies, a repeatable pattern across LIFE Healthcare, Annabelle and Forest Essentials.",
  "Doubled regional retail revenue at Forest Essentials through data-driven staff placement, local marketing and inventory discipline.",
  "Authored and institutionalized SOP playbooks that became the operating standard from store inception onward, at three separate organizations.",
  "Directed regional advertising and promotional campaigns aligned to brand and mall calendars, with a strict focus on marketing ROI.",
  "Partnered with the Red Crescent and local community entities on CSR initiatives that strengthened brand equity and emotional connection.",
];

export function Impact() {
  return (
    <section id="impact" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow text-wine">03 · Business Impact</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                The numbers behind the record
              </h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-mute sm:block">
              Growth, governance and turnarounds, measured and proven.
            </p>
          </div>
        </Reveal>

        {/* Stats grid */}
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {IMPACT_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 70}>
              <div className="flex h-full flex-col bg-white/60 p-6 sm:p-8">
                <dd className="font-display text-4xl font-bold tracking-[-0.04em] text-wine sm:text-5xl lg:text-[3.4rem]">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-[12px] font-semibold tracking-[0.12em] text-ink uppercase">
                  {stat.label}
                </dt>
                <p className="mt-3 text-[13px] leading-relaxed text-mute">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Achievement list */}
        <Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
            <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-[1.7rem]">
              Selected achievements & business impact
            </h3>
            <ul className="space-y-5">
              {ACHIEVEMENTS.map((item) => (
                <li
                  key={item.slice(0, 30)}
                  className="flex gap-3.5 border-b border-line pb-5 text-[15px] leading-relaxed text-ink/85 last:border-0 last:pb-0"
                >
                  <span
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-dot"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
