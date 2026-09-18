import { Reveal } from "./reveal";

const SKILL_GROUPS = [
  {
    title: "Operations & Governance",
    skills: [
      "Retail Operations",
      "Multi-Unit Store Management",
      "P&L Management",
      "Financial Governance",
      "SOP Standardization",
      "Process Compliance",
      "Quality Assurance",
      "Operational Efficiency",
    ],
  },
  {
    title: "Growth & Commercial",
    skills: [
      "New Store Openings",
      "Market Expansion",
      "Sales Optimization",
      "Profit Maximization",
      "Market Intelligence",
      "Competitor Analysis",
      "Marketing & Advertising",
      "Brand Support",
    ],
  },
  {
    title: "People & Execution",
    skills: [
      "Team Leadership (200+)",
      "Training & Development",
      "Succession Planning",
      "Performance Monitoring",
      "Stakeholder Management",
      "Cross-Functional Coordination",
      "Visual Merchandising",
      "Inventory & Shrinkage Control",
    ],
  },
];

export function Expertise() {
  return (
    <section id="expertise" className="scroll-mt-20 border-y border-line bg-white/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow text-wine">05 — Expertise</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                A process-driven operating model
              </h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-mute sm:block">
              Six Sigma Black Belt discipline applied to every store, every
              market.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div>
                <h3 className="flex items-baseline gap-3 font-display text-lg font-bold text-ink">
                  <span className="text-[11px] font-bold tracking-widest text-wine">
                    0{i + 1}
                  </span>
                  {group.title}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-line bg-cream px-3.5 py-1.5 text-[13px] font-medium text-ink/80 transition-colors hover:border-wine/40 hover:text-wine"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
