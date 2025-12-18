"use client";

import {
  LuxuryHero,
  LuxuryStats,
  BentoProjects,
  HorizontalServices,
  TestimonialsCarousel,
  WhyChooseUs,
  ClientLogos,
} from "@/components/luxury";
import { OfficeMap } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <LuxuryHero />
      <ClientLogos />
      <LuxuryStats />
      
      <section className="py-20 md:py-24">
        <BentoProjects />
      </section>
      
      <HorizontalServices />
      
      <section className="py-20 md:py-24 bg-background">
        <WhyChooseUs />
      </section>
      
      <section className="py-20 md:py-24 bg-primary-dark">
        <TestimonialsCarousel />
      </section>
      
      {/* Office Locations Map */}
      <section className="py-20 md:py-24 bg-background">
        <div className="luxury-container">
          <div className="text-center mb-12">
            <span className="luxury-label text-gold">Find Us</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light text-white">
              Our Offices
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-text-grey">
              Serving clients across South India with offices in 5 major cities
            </p>
          </div>
          <div className="h-[600px] lg:h-[700px]">
            <OfficeMap />
          </div>
        </div>
      </section>
    </main>
  );
}
