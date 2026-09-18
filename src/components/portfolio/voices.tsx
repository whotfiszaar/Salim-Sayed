import { Quote, Linkedin, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const VOICES = [
  {
    quote:
      "Strong insight. In retail, sustainable results begin with people who genuinely understand and own the customer experience. Great leadership is about building that culture and empowering teams to deliver it consistently.",
    name: "Noushad Nalakath",
    context: "Reacting to Salim's writing on people-first retail operations",
  },
  {
    quote:
      "100% true, the way we treat the customers is the key to success. I have live examples where a customer stepped in for bandages only, and after giving him respect and value, he ended up sharing a 15K value prescription he used to always get from his hospital.",
    name: "Shamnas K Shameer",
    context: "Responding to Salim's post on customer experience and ownership",
  },
];

export function Voices() {
  return (
    <section
      id="voices"
      className="scroll-mt-20 border-y border-line bg-white/50 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow text-wine">08 · Voices from the Network</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                What peers say about his approach
              </h2>
            </div>
            <p className="hidden max-w-xs pb-1 text-right text-sm leading-snug text-mute sm:block">
              Real responses from retail industry peers, from his LinkedIn
              network of 12,000+ followers.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {VOICES.map((voice, i) => (
            <Reveal key={voice.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-cream p-6 sm:p-8">
                <Quote
                  size={26}
                  className="text-dot"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 flex-1 text-[16px] leading-relaxed text-ink/90">
                  {voice.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="font-display text-[15px] font-bold text-ink">
                    {voice.name}
                  </p>
                  <p className="mt-0.5 text-[12.5px] text-mute">{voice.context}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-wine px-6 py-6 text-cream sm:flex-row sm:items-center sm:px-8">
            <p className="max-w-xl text-[15px] leading-relaxed text-cream/90">
              Full written recommendations from colleagues, country managers and
              brand partners are available on his LinkedIn profile.
            </p>
            <a
              href="https://www.linkedin.com/in/salim-sayed-93126b62"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-cream px-5 text-[13px] font-semibold text-ink transition-transform duration-300 hover:scale-[1.03]"
            >
              <Linkedin size={15} aria-hidden="true" />
              View recommendations
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
