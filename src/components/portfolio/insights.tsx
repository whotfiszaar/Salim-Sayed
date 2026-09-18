import Image from "next/image";
import { Linkedin, ThumbsUp, CalendarDays, ExternalLink } from "lucide-react";
import { Reveal } from "./reveal";

type Post = {
  title: string;
  date: string;
  reactions: number;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  url: string;
  tag: string;
};

const POSTS: Post[] = [
  {
    title: "A store that hit its sales target can still be dying",
    date: "Sep 2026",
    reactions: 14,
    excerpt:
      "We're trained to watch footfall, conversion and sales versus last year. But across every market I've worked in, the stores that looked fine on those numbers were often the ones losing relevance fastest. Customers now decide before they walk in. Rent and staffing costs are rising faster than basket size. Retail leadership today is about being willing to admit the playbook needs rewriting while the store is still profitable.",
    image: "/post-image-target.jpg",
    imageAlt:
      "Luxury retail store interior with a dramatic cracked chasm running through the marble floor, illustrating a store that looks fine on the surface but is failing underneath",
    url: "https://www.linkedin.com/posts/salim-sayed-93126b62_a-store-that-hit-its-sales-target-last-quarter-activity-7502840080420548608-ZjtG",
    tag: "Retail strategy",
  },
  {
    title: "The store didn't fail. The people didn't connect.",
    date: "Aug 2026",
    reactions: 31,
    excerpt:
      "A strong brand. A premium location. Great products. And yet the store failed, because the customer experience was missing. I've also seen the opposite: a struggling store turn around because we changed the people. Customers don't remember your SOP. They remember how your people made them feel.",
    image: "/post-image-people.jpg",
    imageAlt:
      "Conceptual image representing people and customer experience in retail, from Salim Sayed's LinkedIn post about why great people matter more than great products",
    url: "https://www.linkedin.com/posts/salim-sayed-93126b62_the-store-didnt-fail-the-people-didnt-activity-7493666957720780800-_PcZ",
    tag: "Customer experience",
  },
];

const MINI_POSTS = [
  {
    title: "A Store Manager should never wait until closing to check the target",
    kicker: "Retail KPI management",
  },
  {
    title: "A busy store is not necessarily a successful store",
    kicker: "Profitability beyond footfall",
  },
  {
    title: "Retail is a daily battle for conversion",
    kicker: "Execution and availability",
  },
  {
    title: "Hiring Sales Associates: building the next retail team",
    kicker: "Talent pipeline · 210 reactions",
  },
];

export function Insights() {
  return (
    <section id="insights" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow text-wine">07 · LinkedIn Activity</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl lg:text-5xl">
                Insights from the frontline
              </h2>
            </div>
            <a
              href="https://www.linkedin.com/in/salim-sayed-93126b62"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 pb-1 text-sm font-semibold text-wine u-link sm:flex"
            >
              <Linkedin size={16} aria-hidden="true" />
              Follow on LinkedIn
            </a>
          </div>
        </Reveal>

        {/* Network stats strip */}
        <Reveal delay={60}>
          <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-line bg-white/60 px-5 py-4">
              <dd className="font-display text-2xl font-bold text-wine">12K</dd>
              <dt className="mt-0.5 text-[12px] font-medium text-mute">
                LinkedIn followers
              </dt>
            </div>
            <div className="rounded-xl border border-line bg-white/60 px-5 py-4">
              <dd className="font-display text-2xl font-bold text-wine">500+</dd>
              <dt className="mt-0.5 text-[12px] font-medium text-mute">
                Connections
              </dt>
            </div>
            <div className="rounded-xl border border-line bg-white/60 px-5 py-4">
              <dd className="font-display text-2xl font-bold text-wine">210</dd>
              <dt className="mt-0.5 text-[12px] font-medium text-mute">
                Reactions on top hiring post
              </dt>
            </div>
            <div className="rounded-xl border border-line bg-white/60 px-5 py-4">
              <dd className="font-display text-2xl font-bold text-wine">2011</dd>
              <dt className="mt-0.5 text-[12px] font-medium text-mute">
                Writing about retail since
              </dt>
            </div>
          </dl>
        </Reveal>

        {/* Featured posts */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {POSTS.map((post, i) => (
            <Reveal key={post.title} delay={i * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white/60 transition-all duration-300 hover:border-wine/40 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(118,49,64,0.35)]">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-[16/10] overflow-hidden bg-wine"
                  aria-label={`Read LinkedIn post: ${post.title}`}
                >
                  {post.image && (
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-semibold tracking-wide text-cream backdrop-blur-sm">
                    {post.tag}
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-center gap-4 text-[12px] font-medium text-mute">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} aria-hidden="true" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ThumbsUp size={13} aria-hidden="true" />
                      {post.reactions} reactions
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-bold leading-snug tracking-tight text-ink">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-ink/80">
                    {post.excerpt}
                  </p>

                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-wine u-link"
                  >
                    Read on LinkedIn
                    <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* More posts strip */}
        <Reveal delay={120}>
          <div className="mt-10 border-t border-line pt-8">
            <p className="eyebrow text-mute">More from the feed</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {MINI_POSTS.map((mini) => (
                <li
                  key={mini.title}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white/50 px-5 py-4"
                >
                  <span
                    className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-dot"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[15px] font-semibold leading-snug text-ink">
                      {mini.title}
                    </p>
                    <p className="mt-1 text-[12.5px] text-mute">{mini.kicker}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
