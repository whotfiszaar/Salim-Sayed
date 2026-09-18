import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Marquee } from "@/components/portfolio/marquee";
import { Experience } from "@/components/portfolio/experience";
import { Expansion } from "@/components/portfolio/expansion";
import { Impact } from "@/components/portfolio/impact";
import { Brands } from "@/components/portfolio/brands";
import { Expertise } from "@/components/portfolio/expertise";
import { About } from "@/components/portfolio/about";
import { Contact } from "@/components/portfolio/contact";

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Experience />
        <Expansion />
        <Impact />
        <Brands />
        <Expertise />
        <About />
      </main>
      <Contact />
    </div>
  );
}
