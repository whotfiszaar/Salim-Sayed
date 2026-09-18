import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { Reveal } from "./reveal";

const HERO_STATS = [
  { value: "15+", label: "Years in retail leadership" },
  { value: "45+", label: "Stores launched, 5 countries" },
  { value: "200+", label: "Team members led" },
  { value: "130M", label: "AED portfolio managed" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-stretch overflow-hidden bg-wine text-cream"
    >
      <div className="grid-paper absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-28 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pt-24">
        {/* Copy column */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow flex items-center gap-2 text-tint">
              <MapPin size={13} aria-hidden="true" />
              Dubai, United Arab Emirates
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-[13.5vw] leading-[0.9] font-bold tracking-[-0.045em] sm:text-7xl lg:text-[5.6rem]">
              Salim
              <br />
              Sayed
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
              Retail operations leader driving{" "}
              <span className="font-semibold text-cream">sales growth</span>,{" "}
              <span className="font-semibold text-cream">market expansion</span>{" "}
              and{" "}
              <span className="font-semibold text-cream">operational excellence</span>{" "}
              across the GCC and India.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-cream px-6 text-sm font-semibold text-ink transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                Explore the track record
                <ArrowDown size={16} aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full border border-cream/40 px-6 text-sm font-semibold text-cream transition-colors hover:bg-cream/10"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-cream/20 pt-8 sm:grid-cols-4 lg:gap-x-4">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-[2.6rem]">
                    {stat.value}
                  </dd>
                  <dd className="mt-1.5 text-[11px] leading-snug font-medium tracking-wide text-cream/75 uppercase">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Portrait column */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="portrait-frame relative aspect-square w-full overflow-hidden rounded-[28px] sm:aspect-[4/5]">
            <Image
              src="/salim-portrait.jpg"
              alt="Black and white portrait of Salim Sayed, retail operations leader based in Dubai"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover object-[center_18%]"
            />
          </div>
          <p className="mt-4 text-right text-[11px] font-medium tracking-[0.18em] text-cream/75 uppercase">
            Manager, Retail Operations · LIFE Healthcare Group
          </p>
        </Reveal>
      </div>
    </section>
  );
}
