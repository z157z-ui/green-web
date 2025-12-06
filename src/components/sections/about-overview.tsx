import React from 'react';

const AboutOverview = () => {
  // Adapted text based on instructions to fit "GreenBuild"
  const description =
    "With decades of combined experience, GreenBuild is a leader in bespoke interior design and expert plumbing services. We are a dynamic collective of creative professionals dedicated to delivering exceptional quality and innovative solutions for a wide range of projects and industries.";

  return (
    <section className="bg-[#e8e4df] text-text-primary py-10 md:py-[60px] lg:py-20">
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