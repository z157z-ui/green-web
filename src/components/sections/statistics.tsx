"use client";

import React from "react";
import { Building, Home, Users, Briefcase } from "lucide-react";

const statistics = [
  {
    icon: Home,
    value: "30+",
    label: "Residential Projects",
  },
  {
    icon: Briefcase,
    value: "20+",
    label: "Commercial Projects",
  },
  {
    icon: Building,
    value: "10",
    label: "AMC Commercial Projects",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Partners",
  },
];

const Statistics = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 md:w-16 md:h-16 text-text-secondary" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-light mb-2">
                {stat.value}
              </div>
              <div className="font-body text-sm md:text-base text-text-secondary uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
