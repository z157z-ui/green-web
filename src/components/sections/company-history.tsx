"use client";

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const historyMilestones = [
  {
    year: "2017",
    title: "HUMBLE BEGINNINGS",
    description: "Founded by Sanal Das KV with a vision to blend design and construction into a seamless service."
  },
  {
    year: "2018–2020",
    title: "TEAM EXPANSION",
    description: "Added specialists in HVAC, project management, and facility operations to strengthen our capabilities."
  },
  {
    year: "2021",
    title: "FULL SERVICE INTEGRATION",
    description: "Evolved into a one-stop interior design and construction turnkey provider."
  },
  {
    year: "2022–2024",
    title: "DIVERSIFIED PROJECTS",
    description: "Delivered residential, commercial, and institutional projects across multiple cities."
  },
  {
    year: "2025",
    title: "GROWTH MODE",
    description: "Strategic partnerships, optimized processes, and regional expansion continue to drive our growth."
  }
];

const TimelineItem = ({ milestone, index }: { milestone: typeof historyMilestones[0], index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`fade-in-up ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-20 last:mb-0">
        <div className="luxury-label text-[rgb(var(--color-text-tertiary))] mb-4">
          {milestone.year}
        </div>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6 leading-tight" style={{ letterSpacing: 'var(--tracking-normal)' }}>
          {milestone.title}
        </h3>
        <p className="text-lg text-[rgb(var(--color-text-secondary))] max-w-2xl leading-relaxed">
          {milestone.description}
        </p>
      </div>
    </div>
  );
};

const CompanyHistory = () => {
  const [activeYear, setActiveYear] = React.useState("2017");
  const yearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Find which year is currently in view based on scroll position
      const scrollY = window.scrollY;
      const sectionElements = document.querySelectorAll('[data-year]');

      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        const viewportMiddle = scrollY + window.innerHeight / 2;

        if (viewportMiddle >= elementTop && viewportMiddle <= elementBottom) {
          setActiveYear(element.getAttribute('data-year') || "2017");
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white section-padding-lg">
      <div className="luxury-container">
        {/* Section Header */}
        <div className="mb-24 md:mb-32">
          <div className="luxury-label text-[rgb(var(--color-text-tertiary))] mb-6">
            LEGACY
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-black leading-tight" style={{ letterSpacing: 'var(--tracking-normal)' }}>
            Our Story
          </h2>
        </div>

        {/* Timeline Grid: Sticky Year Left, Scrolling Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Sticky Year Indicator (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-3">
            <div ref={yearRef} className="sticky top-32">
              <div className="text-8xl font-light text-black/10 transition-all duration-500" style={{ letterSpacing: 'var(--tracking-normal)' }}>
                {activeYear}
              </div>
              <div className="luxury-label text-[rgb(var(--color-text-tertiary))] mt-4">
                MILESTONE
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="lg:col-span-9">
            {historyMilestones.map((milestone, index) => (
              <div key={index} data-year={milestone.year}>
                <TimelineItem milestone={milestone} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
