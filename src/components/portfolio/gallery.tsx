"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { Reveal } from "./reveal";

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: "executive" | "launches" | "teams" | "activations";
  tag: string;
  width: number;
  height: number;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "ceo-life",
    src: "/gallery/ceo-life-healthcare.jpg",
    title: "With CEO, Life Healthcare",
    category: "executive",
    tag: "Executive",
    width: 768,
    height: 1024,
  },
  {
    id: "life-opening",
    src: "/gallery/life-store-opening-lineup.jpg",
    title: "Flagship Store Opening",
    category: "launches",
    tag: "Life Pharmacy",
    width: 1280,
    height: 960,
  },
  {
    id: "vip-inauguration",
    src: "/gallery/vip-store-inauguration.jpg",
    title: "Store Inauguration",
    category: "launches",
    tag: "VIP Opening",
    width: 800,
    height: 1067,
  },
  {
    id: "annabelle-storefront",
    src: "/gallery/annabelle-storefront-grand.jpg",
    title: "Storefront Grand Launch",
    category: "launches",
    tag: "Annabelle",
    width: 1280,
    height: 960,
  },
  {
    id: "licensed-character",
    src: "/gallery/licensed-character-campaign.jpg",
    title: "Licensed Character Campaign",
    category: "activations",
    tag: "Campaign",
    width: 800,
    height: 1067,
  },
  {
    id: "retail-milestone",
    src: "/gallery/retail-milestone-bouquet.jpg",
    title: "Operations Milestone",
    category: "teams",
    tag: "Milestone",
    width: 1200,
    height: 628,
  },
  {
    id: "annabelle-team",
    src: "/gallery/annabelle-flagship-team.jpg",
    title: "Launch Team",
    category: "launches",
    tag: "Store Launch",
    width: 1280,
    height: 959,
  },
  {
    id: "sports-nutrition",
    src: "/gallery/sports-nutrition-activation.jpg",
    title: "Sports Nutrition Activation",
    category: "activations",
    tag: "Brand Event",
    width: 1280,
    height: 960,
  },
  {
    id: "dubai-executive",
    src: "/gallery/dubai-executive-presence.jpg",
    title: "Downtown Dubai",
    category: "executive",
    tag: "Leadership",
    width: 960,
    height: 720,
  },
  {
    id: "frontline-staff",
    src: "/gallery/frontline-retail-staff.jpg",
    title: "Frontline Associates",
    category: "teams",
    tag: "Store Team",
    width: 1280,
    height: 960,
  },
  {
    id: "fashion-showcase",
    src: "/gallery/fashion-retail-showcase.jpg",
    title: "Retail Showcase",
    category: "activations",
    tag: "Merchandising",
    width: 1280,
    height: 720,
  },
  {
    id: "media-broadcast",
    src: "/gallery/media-broadcast-coverage.jpg",
    title: "Media Broadcast",
    category: "activations",
    tag: "Broadcast",
    width: 960,
    height: 720,
  },
  {
    id: "executive-delegation",
    src: "/gallery/executive-leadership-meeting.jpg",
    title: "Leadership Delegation",
    category: "executive",
    tag: "Operations",
    width: 960,
    height: 720,
  },
  {
    id: "mall-celebration",
    src: "/gallery/mall-corridor-celebration.jpg",
    title: "Store Team",
    category: "teams",
    tag: "Operations",
    width: 1280,
    height: 960,
  },
];

type CategoryFilter = "all" | "executive" | "launches" | "teams" | "activations";

const CATEGORIES: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Pins" },
  { id: "executive", label: "Executive" },
  { id: "launches", label: "Store Launches" },
  { id: "teams", label: "Retail Teams" },
  { id: "activations", label: "Activations" },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="scroll-mt-20 bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-line pb-6">
            <div>
              <p className="eyebrow text-wine flex items-center gap-2">
                <span>04 · In The Field</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-tint" />
                <span className="text-[11px] normal-case tracking-normal font-sans text-mute">
                  Visual Record
                </span>
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Leadership in Action
              </h2>
            </div>

            {/* Pinterest Pill Filter Bar */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const count = cat.id === "all"
                  ? GALLERY_ITEMS.length
                  : GALLERY_ITEMS.filter((item) => item.category === cat.id).length;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setLightboxIndex(null);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                      isActive
                        ? "bg-ink text-cream shadow-sm"
                        : "bg-white/70 text-mute hover:bg-line/60 hover:text-ink"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        isActive ? "bg-white/20 text-cream" : "bg-line/60 text-mute"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Pinterest Style Multi-Column Masonry */}
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 [column-fill:_balance]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="break-inside-avoid mb-4 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/50 border border-line shadow-sm transition-all duration-300 hover:shadow-xl hover:border-wine/30">
                {/* Dynamic Natural Aspect Image */}
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    priority={idx < 4}
                  />

                  {/* Pinterest-style subtle dark overlay */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  {/* Floating Top Tag Pill */}
                  <div className="absolute top-3 left-3 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-ink/80 text-cream backdrop-blur-md shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Pinterest-style Top-Right Expand Action */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-ink backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-md transform scale-90 group-hover:scale-100 hover:bg-white">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Minimalist Overlay Label at Bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 text-cream opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                    <p className="font-display text-sm font-semibold tracking-tight text-white drop-shadow-sm">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Minimal Under-card Title (Very few words) */}
                <div className="px-3.5 py-2.5 flex items-center justify-between text-xs bg-white/70">
                  <span className="font-medium text-ink truncate font-display">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-mute uppercase ml-2 shrink-0">
                    {item.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Pinterest Lightbox View */}
        {activeItem && lightboxIndex !== null && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-white/10 text-cream hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev / Next controls */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              aria-label="Previous"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 text-cream hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              aria-label="Next"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 text-cream hover:bg-white/25 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Modal Card */}
            <div
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-full max-h-[82vh] w-auto h-auto flex items-center justify-center">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  width={activeItem.width}
                  height={activeItem.height}
                  className="max-h-[80vh] w-auto max-w-[90vw] object-contain rounded-2xl shadow-2xl"
                  priority
                />
              </div>

              {/* Minimal 3-word title pill below lightbox */}
              <div className="mt-3.5 inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs text-cream/90 border border-white/10">
                <span className="font-semibold text-white">{activeItem.title}</span>
                <span className="text-white/30">·</span>
                <span className="text-[11px] text-tint uppercase font-mono">{activeItem.tag}</span>
                <span className="text-white/30">·</span>
                <span className="font-mono text-white/50">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
