const ITEMS = [
  "Multi-Unit Retail Operations",
  "P&L Leadership",
  "New Store Openings",
  "Market Expansion, GCC & India",
  "Six Sigma Black Belt",
  "Team Leadership & Training",
  "Turnaround Specialist",
  "SOP Playbooks",
  "Visual Merchandising",
  "Inventory & Shrinkage Control",
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div
      className="marquee overflow-hidden border-y border-line bg-cream py-4"
      aria-hidden="true"
    >
      <div className="marquee-track items-center gap-10">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 whitespace-nowrap"
          >
            <span className="font-display text-sm font-semibold tracking-[0.14em] text-ink uppercase">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
