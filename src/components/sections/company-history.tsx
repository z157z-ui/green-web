"use client";

import React from 'react';

const historyMilestones = [
  {
    year: "2017",
    title: "Humble Beginnings",
    description: "Founded by Sanal Das KV with a vision to blend design and construction into a seamless service."
  },
  {
    year: "2018–2020",
    title: "Team Expansion",
    description: "Added specialists in HVAC, project management, and facility operations to strengthen our capabilities."
  },
  {
    year: "2021",
    title: "Full Service Integration",
    description: "Evolved into a one-stop interior design and construction turnkey provider."
  },
  {
    year: "2022–2024",
    title: "Diversified Projects",
    description: "Delivered residential, commercial, and institutional projects across multiple cities."
  },
  {
    year: "2025",
    title: "Growth Mode",
    description: "Strategic partnerships, optimized processes, and regional expansion continue to drive our growth."
  }
];

const CompanyHistory = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-5xl lg:text-6xl font-normal mb-4 text-text-primary">
            Our Story
          </h2>
          <p className="font-body text-lg text-text-secondary mb-16">
            A journey of innovation, growth, and commitment to excellence
          </p>

          <div className="space-y-12">
            {historyMilestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-divider pb-8 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-text-secondary"></div>
                <div className="font-display text-2xl md:text-3xl font-normal text-text-primary mb-2">
                  {milestone.year}
                </div>
                <h3 className="font-display text-xl md:text-2xl font-normal mb-3 text-text-primary">
                  {milestone.title}
                </h3>
                <p className="font-body text-body-regular text-text-secondary max-w-2xl">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;
