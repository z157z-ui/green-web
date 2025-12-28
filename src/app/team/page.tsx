"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/sections/navigation';
import TeamShowcase from '@/components/sections/team-showcase';
import { Footer } from '@/components/sections/footer';

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="luxury-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="luxury-label text-gold">OUR PEOPLE</span>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
              Our Team
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-grey max-w-4xl mx-auto leading-relaxed">
              Meet the talented professionals behind Green Builders and Interiors. Our diverse team brings together expertise in design, engineering, construction, and business operations.
            </p>
          </motion.div>
        </div>
      </section>

      <TeamShowcase />
      <Footer />
    </main>
  );
}
