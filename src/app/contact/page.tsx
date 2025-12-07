'use client';

import React from 'react';
import LuxuryContactForm from '@/components/contact/LuxuryContactForm';
import ContactMap from '@/components/ContactMap';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      {/* Intro Band */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-28 bg-[#F7F5F0]">
        <div className="max-w-[1600px] mx-auto px-12 md:px-16 lg:px-24">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.15em] text-[#111111]/60 mb-8 font-medium">
              CONNECT
            </div>
            <h1 className="text-[48px] md:text-[56px] lg:text-[64px] font-light leading-[1.1] text-[#111111] mb-8">
              Work with us
            </h1>
            <p className="text-[16px] md:text-[18px] text-[#111111]/70 leading-relaxed font-light max-w-2xl">
              We collaborate with visionary clients to create exceptional spaces that blend
              thoughtful design with enduring craftsmanship. Whether you're envisioning a
              residential sanctuary or a dynamic commercial environment, we'd love to hear
              about your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24 md:pb-32 bg-[#F7F5F0]">
        <div className="max-w-[1000px] mx-auto px-12 md:px-16 lg:px-24">
          <LuxuryContactForm />
        </div>
      </section>

      {/* Interactive Contact Map - Dark Theme */}
      <ContactMap />
    </main>
  );
}
