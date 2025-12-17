import React from 'react';
import { Header } from '@/components/sections/navigation';
import { Footer } from '@/components/sections/footer';

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin by understanding your vision, requirements, and lifestyle. This crucial first step helps us align our design approach with your expectations and budget.'
  },
  {
    number: '02',
    title: 'Concept & Design Planning',
    description: 'Our team develops initial concepts and floor plans, exploring creative solutions that balance aesthetics, functionality, and your specific needs.'
  },
  {
    number: '03',
    title: '3D Visualization & Final Design',
    description: 'Experience your space before it exists. We create detailed 3D visualizations allowing you to see and refine every aspect of the design before execution.'
  },
  {
    number: '04',
    title: 'Material Selection & Procurement',
    description: 'We guide you through selecting premium materials, finishes, and fixtures that align with your design vision while ensuring quality and durability.'
  },
  {
    number: '05',
    title: 'Execution & Installation',
    description: 'Our experienced team brings the design to life with meticulous attention to detail, ensuring quality craftsmanship at every stage of construction and installation.'
  },
  {
    number: '06',
    title: 'Final Handover & Walkthrough',
    description: 'We conduct a comprehensive walkthrough, ensuring every detail meets our high standards and your expectations before handing over your completed space.'
  }
];

const OurProcessPage = () => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-[90px] md:pt-[120px] pb-16 md:pb-24 bg-white">
          <div className="luxury-container">
            <div className="max-w-4xl">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-light text-black mb-6 leading-[0.95]"
                style={{
                  fontFamily: 'var(--font-display)',
                  letterSpacing: 'var(--tracking-normal)'
                }}
              >
                Our Process
              </h1>
              <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] leading-relaxed max-w-2xl">
                A meticulously crafted 6-step workflow that transforms your vision into reality, ensuring excellence at every stage of your design journey.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16 md:py-24 bg-[rgb(var(--color-bg-secondary))]">
          <div className="luxury-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {processSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="group"
                >
                  <div className="luxury-label text-[rgb(var(--color-text-secondary))] mb-4">
                    STEP {step.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light text-black mb-6 group-hover:text-[rgb(var(--color-text-secondary))] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-[rgb(var(--color-text-secondary))] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Divider line */}
                  <div className="mt-8 h-px bg-[rgb(var(--color-divider))] group-hover:bg-black transition-colors duration-300" />
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
              Ready to Begin?
            </h2>
            <p className="text-lg md:text-xl text-[rgb(var(--color-text-secondary))] mb-12 max-w-2xl mx-auto">
              Let&apos;s transform your space with our proven design process.
            </p>
            <a
              href="/contact"
              className="inline-block luxury-label text-sm bg-black text-white px-12 py-5 hover:bg-[rgb(var(--color-text-secondary))] transition-colors duration-300"
            >
              START YOUR PROJECT
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default OurProcessPage;
