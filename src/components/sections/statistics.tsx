"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-14 lg:gap-20">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="text-center transform transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex justify-center mb-4 sm:mb-5 md:mb-6 transform transition-transform duration-300 hover:scale-110">
                  <stat.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-text-secondary" strokeWidth={1.5} />
                </div>
                <div className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 md:mb-3 text-text-primary">
                  {stat.value}
                </div>
                <div className="font-body text-[10px] sm:text-xs md:text-sm text-text-secondary uppercase tracking-[0.15em] leading-relaxed px-1 sm:px-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
