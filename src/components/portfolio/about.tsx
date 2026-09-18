import { Award, GraduationCap } from "lucide-react";
import { Reveal } from "./reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow text-wine">06 · About</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                The operator behind the record
              </h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-mute sm:block">
              Cross-category experience. Process discipline. People first.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-20">
          {/* Narrative */}
          <Reveal>
            <div className="space-y-6 text-[15.5px] leading-relaxed text-ink/85">
              <p>
                Salim Sayed is a results-driven Retail Operations Leader with
                15+ years of experience directing multi-unit store operations,
                P&L management and market expansion across the GCC and India.
                His career spans fashion retail, pharmacy and wellness retail,
                and premium luxury skincare, giving him a cross-category view
                of how operational discipline, visual merchandising and brand
                execution combine to drive profitable growth.
              </p>
              <p>
                He has personally led and supported the opening of 45+ retail
                stores across the UAE, KSA, Kuwait, Qatar and India, building
                the New Store Opening playbooks, recruitment pipelines and
                cross-functional coordination that take a location from site
                handover to a fully operational, on-brand store. Alongside
                expansion, he holds a consistent record of turning around
                underperforming outlets through P&L analysis, staff
                restructuring and process discipline.
              </p>
              <p>
                His operating model treats consistency and customer experience
                as outcomes of process discipline, not separate initiatives,
                from 500 sq. ft. high-street units to 6,500 sq. ft. mall
                anchors. Standardized inventory allocation, shrinkage controls
                and visual merchandising keep operations lean and shelves
                brand-compliant, while close partnership with frontline sales
                teams keeps execution aligned to customer experience metrics.
              </p>
            </div>
          </Reveal>

          {/* Credentials */}
          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="rounded-2xl border border-line bg-white/60 p-6 sm:p-7">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
                  <Award size={19} className="text-wine" aria-hidden="true" />
                  Certifications
                </h3>
                <ul className="mt-4 space-y-3 text-[15px] text-ink/85">
                  <li className="flex items-center justify-between gap-3 border-b border-line pb-3">
                    Six Sigma · Black Belt
                    <span className="text-xs font-semibold tracking-wider text-mute uppercase">
                      Certified
                    </span>
                  </li>
                  <li className="flex items-center justify-between gap-3 border-b border-line pb-3">
                    Operational Excellence Foundations
                    <span className="text-xs font-semibold tracking-wider text-mute uppercase">
                      Certified
                    </span>
                  </li>
                  <li>
                    Social Media Marketing Strategy: TikTok and Instagram Reels
                    <span className="ml-2 align-middle text-xs font-semibold tracking-wider text-mute uppercase">
                      LinkedIn Learning · 2026
                    </span>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-2xl border border-line bg-white/60 p-6 sm:p-7">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-bold text-ink">
                  <GraduationCap
                    size={19}
                    className="text-wine"
                    aria-hidden="true"
                  />
                  Education
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/85">
                  Bachelor of Commerce
                  <span className="mt-1 block text-sm text-mute">
                    Mumbai University · 2002
                  </span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="rounded-2xl bg-wine p-6 text-cream sm:p-7">
                <p className="eyebrow text-tint">Operating philosophy</p>
                <p className="mt-3 font-display text-xl leading-snug font-semibold tracking-tight">
                  "Consistency and customer experience are outcomes of process
                  discipline, never separate initiatives."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
