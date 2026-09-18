import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Marquee } from "@/components/portfolio/marquee";
import { Experience } from "@/components/portfolio/experience";
import { Expansion } from "@/components/portfolio/expansion";
import { Impact } from "@/components/portfolio/impact";
import { Brands } from "@/components/portfolio/brands";
import { Expertise } from "@/components/portfolio/expertise";
import { About } from "@/components/portfolio/about";
import { Insights } from "@/components/portfolio/insights";
import { Voices } from "@/components/portfolio/voices";
import { Contact } from "@/components/portfolio/contact";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.linkedin.com/in/salim-sayed-93126b62#profile",
  name: "Salim Sayed",
  alternateName: "Salim Ahmed Sayed",
  givenName: "Salim",
  familyName: "Sayed",
  jobTitle: "Manager, Retail Operations",
  description:
    "Retail operations leader with 15+ years of multi-unit store operations, P&L management and market expansion across the GCC and India. 45+ stores launched across 5 countries.",
  url: "https://www.linkedin.com/in/salim-sayed-93126b62",
  email: "salimsayed82@gmail.com",
  telephone: "+971585921779",
  image: "/salim-portrait.jpg",
  worksFor: {
    "@type": "Organization",
    name: "LIFE Healthcare Group",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  nationality: {
    "@type": "Country",
    name: "India",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Mumbai University",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Six Sigma Black Belt",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Operational Excellence Foundations",
      credentialCategory: "certification",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Social Media Marketing Strategy: TikTok and Instagram Reels",
      credentialCategory: "course",
      recognizedBy: { "@type": "Organization", name: "LinkedIn Learning" },
    },
  ],
  knowsAbout: [
    "Retail Operations",
    "Multi-Unit Store Management",
    "P&L Management",
    "New Store Openings",
    "Market Expansion",
    "Visual Merchandising",
    "Inventory Management",
    "Shrinkage Control",
    "SOP Standardization",
    "Team Leadership",
    "Retail Turnarounds",
    "Customer Experience",
  ],
  knowsLanguage: ["English", "Hindi", "Marathi"],
  sameAs: ["https://www.linkedin.com/in/salim-sayed-93126b62"],
};

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: new Date().toISOString(),
  mainEntity: {
    "@id": "https://www.linkedin.com/in/salim-sayed-93126b62#profile",
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
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
        <Insights />
        <Voices />
      </main>
      <Contact />
    </div>
  );
}
