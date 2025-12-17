import React from 'react';

const AboutOverview = () => {
  const description =
    "Green Builders and Interiors brings 8+ years of expertise in crafting modern, innovative designs. We specialize in sleek lines, minimalist elegance, and contemporary charm, transforming residential and commercial spaces with design, functionality, and comfort. At Green Builders and Interiors, we are dedicated to putting our clients first by understanding their needs and delivering exceptional service. Our commitment goes beyond just design—it is reflected in every detail we handle with care, professionalism and attention.";

  return (
    <section className="relative z-10 bg-[#e8e4df] text-text-primary py-10 md:py-[60px] lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-8">
          <div className="lg:col-span-4">
            <h2 className="font-display text-5xl lg:text-[56px] leading-tight font-normal text-text-primary">
              Who we are
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div>
              <h5 className="font-body text-xs tracking-[0.08em] uppercase text-text-tertiary mb-6">
                Overview
              </h5>
              <p className="font-body text-lg lg:text-xl leading-relaxed text-text-primary mb-8">
                {description}
              </p>
              <a
                href="/practice"
                className="inline-block font-body text-sm font-medium uppercase tracking-[0.06em] border border-button-border text-text-primary rounded-full px-8 py-3 transition-colors duration-300 hover:bg-black/5"
              >
                OUR PRACTICE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOverview;