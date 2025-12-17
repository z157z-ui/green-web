import React from 'react';
import { Header } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';
import Image from 'next/image';

const trackRecordStats = [
  {
    number: '30+',
    label: 'Residential Projects',
    description: 'Luxury homes and apartments designed with precision'
  },
  {
    number: '10',
    label: 'AMC Commercial Projects',
    description: 'Corporate spaces that inspire productivity'
  },
  {
    number: '1,000+',
    label: 'Partners',
    description: 'Trusted collaborators and satisfied clients'
  },
  {
    number: '20+',
    label: 'Completed Commercial Projects',
    description: 'Transforming business environments'
  }
];

const studioFeatures = [
  {
    title: 'Material Samples',
    description: 'Explore our extensive collection of premium materials, textures, and finishes to make informed design decisions.'
  },
  {
    title: 'Mood Boards',
    description: 'Visualize your design concepts through carefully curated mood boards that capture the essence of your vision.'
  },
  {
    title: 'Premium Finishes',
    description: 'Experience luxury firsthand with our showcase of high-end finishes and bespoke design elements.'
  },
  {
    title: 'Sensory Design Experience',
    description: 'Engage all your senses as you discover how materials, textures, and colors come together in harmony.'
  }
];

const OurStudioPage = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-[90px] md:pt-[120px] pb-16 md:pb-24 bg-white">
          <div className="luxury-container">
            <div className="max-w-4xl">
              <div className="luxury-label text-[rgb(var(--color-text-secondary))] mb-6">
                WHERE IDEAS COME TO LIFE
              </div>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-8 leading-[0.95]"
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: 'var(--tracking-normal)'
                }}
              >
                Our Studio
              </h1>
              <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-2xl">
                A creative hub for ideation, materials, and collaboration. Our studio is where design philosophy meets tangible reality, offering an immersive experience in the world of luxury interiors.
              </p>
            </div>
          </div>
        </section>

        {/* Studio Image Section - Placeholder */}
        <section className="relative h-[50vh] md:h-[70vh] bg-[rgb(var(--color-bg-secondary))]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="luxury-label text-[rgb(var(--color-text-secondary))]">
              STUDIO SHOWCASE
            </div>
          </div>
          {/* Add studio images here when available */}
        </section>

        {/* Why Visit Our Studio */}
        <section className="py-20 md:py-32 bg-white">
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
              <div className="lg:col-span-4">
                <h2
                  className="text-4xl md:text-5xl font-light text-black sticky top-32"
                  style={{
                    fontFamily: 'var(--font-display)',
                    letterSpacing: 'var(--tracking-normal)'
                  }}
                >
                  Why Visit Our Studio
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <div className="space-y-12">
                  {studioFeatures.map((feature, index) => (
                    <div key={index} className="group">
                      <h3 className="text-2xl md:text-3xl font-light text-black mb-4 group-hover:text-[rgb(var(--color-text-secondary))] transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-base md:text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-6 h-px bg-[rgb(var(--color-divider))] group-hover:bg-black transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track Record */}
        <section className="py-20 md:py-32 bg-[rgb(var(--color-bg-secondary))]">
          <div className="luxury-container">
            <div className="text-center mb-16 md:mb-24">
              <div className="luxury-label text-[rgb(var(--color-text-secondary))] mb-6">
                OUR ACHIEVEMENTS
              </div>
              <h2
                className="text-4xl md:text-6xl font-light text-black"
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: 'var(--tracking-normal)'
                }}
              >
                Track Record
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {trackRecordStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className="text-5xl md:text-6xl lg:text-7xl font-light text-black mb-4 group-hover:text-[rgb(var(--color-text-secondary))] transition-colors duration-300"
                    style={{
                      fontFamily: 'var(--font-display)',
                      letterSpacing: 'var(--tracking-tight)'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="luxury-label text-black mb-3">
                    {stat.label}
                  </div>
                  <p className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="luxury-container text-center">
            <h2
              className="text-4xl md:text-6xl font-light text-black mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                letterSpacing: 'var(--tracking-normal)'
              }}
            >
              Visit Our Studio
            </h2>
            <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-12 max-w-2xl mx-auto">
              Experience the world of luxury design. Schedule a visit to our studio and bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block luxury-label text-sm bg-black text-white px-12 py-5 hover:bg-[rgb(var(--color-text-secondary))] transition-colors duration-300"
            >
              SCHEDULE A VISIT
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurStudioPage;
