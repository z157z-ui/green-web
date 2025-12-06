import React from 'react';
import Navigation from '@/components/sections/navigation';
import AboutOverview from '@/components/sections/about-overview';
import CompanyHistory from '@/components/sections/company-history';
import Statistics from '@/components/sections/statistics';
import Footer from '@/components/sections/footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container">
          <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-light leading-none text-text-primary mb-6">
            About Us
          </h1>
          <p className="font-body text-xl lg:text-2xl text-text-secondary max-w-4xl leading-relaxed">
            Crafting spaces that inspire, innovate, and endure for over 8 years.
          </p>
        </div>
      </section>

      <AboutOverview />
      <Statistics />
      <CompanyHistory />
      <Footer />
    </main>
  );
}
