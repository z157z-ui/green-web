"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import {
  LuxuryHero,
  LuxuryStats,
  HorizontalServices,
  WhyChooseUs,
  ClientLogos,
} from "@/components/luxury";

// Dynamic imports for heavy components below the fold
const BentoProjects = dynamic(() => import("@/components/luxury").then(mod => ({ default: mod.BentoProjects })), {
  loading: () => <div className="min-h-[400px]" />,
});

const TestimonialsCarousel = dynamic(() => import("@/components/luxury").then(mod => ({ default: mod.TestimonialsCarousel })), {
  loading: () => <div className="min-h-[400px]" />,
});

const OfficeMap = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.OfficeMap })), {
  loading: () => <div className="min-h-[600px]" />,
});

// Reusable section wrapper with fade-in animation
const FadeInSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  // Shared state for office map interactions
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <LuxuryHero />
      
      {/* Gradient fade from hero (primary-dark/black) to background - smooth transition with proper spacing */}
      <div className="h-8 md:h-12 lg:h-16 bg-gradient-to-b from-primary-dark/95 via-[#1a2520] to-background" />
      
      <FadeInSection>
        <LuxuryStats />
      </FadeInSection>
      
      {/* Gradient fade between stats and client logos */}
      <div className="h-4 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <FadeInSection>
        <ClientLogos />
      </FadeInSection>
      
      {/* Gradient fade to projects section */}
      <div className="h-4 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <FadeInSection>
        <BentoProjects />
      </FadeInSection>
      
      {/* Gradient fade to services */}
      <div className="h-4 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <FadeInSection>
        <HorizontalServices />
      </FadeInSection>
      
      {/* Gradient fade to why choose us */}
      <div className="h-4 bg-gradient-to-b from-background via-background/90 to-background" />
      
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>
      
      <FadeInSection>
        {/* Gradient overlay at top to maintain transition from background */}
        <div className="h-8 bg-gradient-to-b from-background via-[#1f2e2a] to-primary-dark" />
        <TestimonialsCarousel />
      </FadeInSection>
      
      {/* Gradient fade from primary-dark back to background */}
      <div className="h-8 bg-gradient-to-b from-primary-dark via-[#1f2e2a] to-background" />
      
      <FadeInSection>
        {/* Office Locations Map */}
        <section className="py-8 md:py-10 bg-background">
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
            <div className="h-[600px] lg:h-[700px] xl:h-[800px] w-full">
              <OfficeMap 
                hoveredOffice={hoveredOffice}
                selectedOffice={selectedOffice}
                onHover={setHoveredOffice}
                onSelect={setSelectedOffice}
              />
            </div>
          </div>
        </section>
      </FadeInSection>
    </main>
  );
}
