import React from 'react';
import Navigation from '@/components/sections/navigation';
import TeamShowcase from '@/components/sections/team-showcase';
import Footer from '@/components/sections/footer';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-background">
        <div className="container">
          <h1 className="font-display text-6xl lg:text-7xl xl:text-8xl font-light leading-none text-text-primary mb-6">
            Our Team
          </h1>
          <p className="font-body text-xl lg:text-2xl text-text-secondary max-w-4xl leading-relaxed">
            Meet the talented professionals behind Green Builders and Interiors. Our diverse team brings together expertise in design, engineering, construction, and business operations.
          </p>
        </div>
      </section>

      <TeamShowcase />
      <Footer />
    </main>
  );
}
