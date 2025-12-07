"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  name: string;
  location: string;
  year: string;
  image: string;
}

// Using placeholder Unsplash images for luxury architectural aesthetic
const projects: Project[] = [
  {
    id: 1,
    name: "VILLA SERENA",
    location: "BANGALORE",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop&q=80"
  },
  {
    id: 2,
    name: "SKYLINE RESIDENCE",
    location: "MUMBAI",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=80"
  },
  {
    id: 3,
    name: "URBAN LOFT",
    location: "DELHI",
    year: "2024",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop&q=80"
  },
  {
    id: 4,
    name: "COASTAL ESTATE",
    location: "GOA",
    year: "2023",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&h=1080&fit=crop&q=80"
  },
  {
    id: 5,
    name: "METROPOLITAN SUITE",
    location: "HYDERABAD",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&h=1080&fit=crop&q=80"
  }
];

const StickyProjectScroller = () => {
  const [activeProject, setActiveProject] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const viewportCenter = window.innerHeight / 2;

      // Only process if container is in view
      if (containerTop > window.innerHeight || containerTop + containerHeight < 0) return;

      // Find which project text is closest to viewport center
      projectRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(elementCenter - viewportCenter);

        // If this element is within reasonable distance of center, make it active
        if (distanceFromCenter < window.innerHeight / 3) {
          setActiveProject(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative" style={{ height: '300vh' }}>
      {/* Sticky Background Image Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: activeProject === index ? 1 : 0 }}
          >
            <Image
              src={project.image}
              alt={`${project.name} architectural project`}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            {/* Subtle dark overlay for text readability */}
            <div className="absolute inset-0 bg-black/20" />
          </div>
        ))}
      </div>

      {/* Scrolling Project Text Overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="luxury-container h-full flex flex-col justify-center">
          <div className="space-y-[60vh]">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => { projectRefs.current[index] = el; }}
                className="min-h-[40vh] flex items-center"
              >
                <div className="max-w-3xl">
                  <div className="luxury-label text-white/90 mb-6">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2
                    className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.95]"
                    style={{
                      fontFamily: 'var(--font-display)',
                      letterSpacing: 'var(--tracking-normal)'
                    }}
                  >
                    {project.name}
                  </h2>
                  <div className="flex gap-12 text-white/90">
                    <div>
                      <div className="luxury-label text-white/70 mb-2">LOCATION</div>
                      <div className="text-lg">{project.location}</div>
                    </div>
                    <div>
                      <div className="luxury-label text-white/70 mb-2">YEAR</div>
                      <div className="text-lg">{project.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Only visible at the top */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="luxury-label text-white/80 flex flex-col items-center gap-4">
          <span>SCROLL</span>
          <div className="w-px h-16 bg-white/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default StickyProjectScroller;
