"use client";

import {
  AboutHero,
  CompanyTimeline,
  ValuesSection,
  WhyChooseUs,
  CertificationsSection,
  FactoryDetails,
  VideoShowcase,
} from "@/components/luxury";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <CompanyTimeline />
      <ValuesSection />
      
      <section className="py-20 md:py-24 bg-primary-dark">
        <WhyChooseUs variant="dark" />
      </section>

      <CertificationsSection />
      
      {/* Factory Details Section */}
      <FactoryDetails />
      
      {/* Video Showcase Section */}
      <VideoShowcase />
    </main>
  );
}
