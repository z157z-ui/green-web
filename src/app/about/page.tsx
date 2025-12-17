"use client";

import {
  AboutHero,
  CompanyTimeline,
  ValuesSection,
  WhyChooseUs,
} from "@/components/luxury";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <CompanyTimeline />
      <ValuesSection />
      
      <section className="py-20 md:py-24 bg-primary-dark">
        <WhyChooseUs />
      </section>
    </main>
  );
}
