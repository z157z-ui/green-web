"use client";

import { useState } from 'react';
import Image from 'next/image';

const servicesData = [
  {
    name: "Villa Design",
    description: "Comprehensive villa design services including architecture, landscape, electrical, plumbing, furniture design, renovation, and civil engineering.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Fairmont_Breakers_HBA_Americas_OA1627_N35-scaled-6.jpg",
  },
  {
    name: "Apartment Design",
    description: "Modern apartment interiors designed to maximize space, functionality, and style for contemporary living.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/InterContinental-Harbour-City-Shanghai-14-1152x153-23.jpg",
  },
  {
    name: "Office Designing",
    description: "Professional workspace design creating productive environments that reflect your brand and enhance employee satisfaction.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Hotel-Indigo-Grand-Canal-Suzhou_HBA-art-1265x1536-17.jpg",
  },
  {
    name: "Renovation & Construction",
    description: "Complete renovation and construction services for villas, apartments, and offices with expert project management from start to finish.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Fairmont_Breakers_HBA_Americas_OA1627_N35-scaled-6.jpg",
  },
];

export default function ServicesShowcase() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="bg-background text-text-primary py-20 lg:py-32">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:gap-x-24">
          
          {/* Left Column: Services List */}
          <div className="w-full lg:w-2/5">
            <div className="lg:min-h-[100vh]">
              <ul className="flex flex-col">
                {servicesData.map((service, index) => (
                  <li 
                    key={service.name} 
                    className="py-6 border-t border-divider first:border-t-0"
                    onMouseEnter={() => setActiveService(index)}
                  >
                    <h3 className={`font-display text-4xl md:text-[2.625rem] lg:text-5xl leading-tight cursor-pointer transition-colors duration-300 ${
                        activeService === index ? 'text-text-primary' : 'text-text-secondary/80'
                      }`}
                    >
                      {service.name}
                    </h3>
                    
                    {/* Description: visible on mobile, animates on desktop */}
                    <div className={`
                      transition-all duration-500 ease-in-out overflow-hidden
                      mt-3 lg:mt-0 
                      lg:max-h-0 lg:opacity-0
                      ${activeService === index ? 'lg:max-h-40 lg:opacity-100 lg:mt-4' : ''}
                    `}>
                      <p className="font-body text-body-regular text-text-secondary max-w-md">
                        {service.description}
                      </p>
                    </div>

                    {/* Mobile-only Image */}
                    <div className="lg:hidden mt-6 aspect-video relative">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 1023px) 90vw, 0vw"
                        className="object-cover"
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-10 inline-block text-button border border-button-border rounded-full px-8 py-3 uppercase tracking-wider hover:bg-black/5 transition-colors"
                >
                View All Services
              </a>
            </div>
          </div>
          
          {/* Right Column: Image Viewer (Desktop-only) */}
          <div className="hidden lg:block w-3/5">
            <div className="sticky top-28 h-[calc(100vh-8rem)]">
              <div className="relative w-full h-full">
                {servicesData.map((service, index) => (
                  <Image
                    key={index}
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(min-width: 1024px) 60vw, 0vw"
                    className={`object-cover transition-opacity duration-700 ease-in-out ${
                      activeService === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}