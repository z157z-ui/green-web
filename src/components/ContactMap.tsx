"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Location {
  id: string;
  city: string;
  top: string;
  left: string;
  address: string;
  phone?: string;
  email?: string;
  // Fine-tune white dot position relative to golden circle
  // Positive values move right/down, negative values move left/up
  dotOffsetX?: number; // Horizontal offset in pixels
  dotOffsetY?: number; // Vertical offset in pixels
}

const locations: Location[] = [
  {
    id: 'hyd',
    city: 'Hyderabad',
    top: '30.5%',
    left: '46.6%',
    address: 'Banjara Hills, Hyderabad',
    phone: '9739992779, 9606894352',
    email: 'hyderabad@greenbuildersandinteriors.com',
    dotOffsetX: 8, // Adjust: positive = move right, negative = move left
    dotOffsetY: 8  // Adjust: positive = move down, negative = move up
  },
  {
    id: 'vzg',
    city: 'Visakhapatnam',
    top: '28%',
    left: '67%',
    address: 'IT Tech Park, Vizag',
    phone: '9739992779, 9606894352',
    email: 'visakhapatnam@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  },
  {
    id: 'blr',
    city: 'Bengaluru',
    top: '55%',
    left: '42.6%',
    address: 'Madivala, Bengaluru',
    phone: '9739992779, 9606894352',
    email: 'banglore@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  },
  {
    id: 'chn',
    city: 'Chennai',
    top: '55.1%',
    left: '54.1%',
    address: 'OMR, Chennai',
    phone: '9739992779, 9606894352',
    email: 'chennai@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  },
  {
    id: 'koc',
    city: 'Kochi',
    top: '70.5%',
    left: '37.1%',
    address: 'Chittoor Road, Kochi',
    phone: '9739992779, 9606894352',
    email: 'kochi@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  }
];

const ContactMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section className="bg-[#121212] py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-[#C5A059] mb-4 font-semibold">
              OUR LOCATIONS
            </h2>
            <h3 className="text-[42px] md:text-[52px] lg:text-[64px] text-white font-light leading-[1.1]">
              Find Us Across South India
            </h3>
          </motion.div>
        </div>

        {/* Image-Based Map Container - Full Width */}
        <div className="w-full flex justify-center">
          <motion.div
            className="relative w-full max-w-6xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Map Image - Aspect ratio locked to prevent coordinate shift */}
            <div className="relative w-full bg-[#121212]" style={{ paddingBottom: '133.33%' }}>
              <div className="absolute inset-0">
                <Image
                  src="/assets/south_map.png"
                  alt="South India Map"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Overlay Markers */}
              {locations.map((location, index) => {
                const isHovered = hoveredLocation === location.id;

                return (
                  <div
                    key={location.id}
                    className="absolute"
                    style={{
                      top: location.top,
                      left: location.left,
                      transform: 'translate(-50%, -50%)' // Center the dot on the coordinates
                    }}
                    onMouseEnter={() => setHoveredLocation(location.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    {/* Main White Dot - Fixed Size */}
                    <motion.div
                      className="absolute rounded-full cursor-pointer z-10"
                      style={{
                        width: '12px',
                        height: '12px',
                        left: `calc(50% + ${location.dotOffsetX || 0}px)`,
                        top: `calc(50% + ${location.dotOffsetY || 0}px)`,
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: isHovered ? '#C5A059' : '#ffffff',
                        boxShadow: isHovered
                          ? '0 0 16px 3px rgba(197, 160, 89, 0.9), 0 0 32px 6px rgba(197, 160, 89, 0.5), 0 0 48px 10px rgba(197, 160, 89, 0.2)'
                          : '0 0 8px 2px rgba(255, 255, 255, 0.6), 0 0 12px 3px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3)',
                        border: '1px solid rgba(255, 255, 255, 0.8)'
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 350,
                        damping: 25
                      }}
                    />

                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute bottom-full left-1/2 mb-4 pointer-events-none z-20"
                          style={{
                            transform: 'translateX(-50%)',
                            minWidth: '200px'
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          {/* Tooltip Arrow */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-[#1a1a1a] border-r border-b border-[#C5A059]" />

                          {/* Tooltip Content */}
                          <div className="relative bg-[#1a1a1a] border border-[#C5A059] rounded-lg px-4 py-3 shadow-2xl">
                            <div className="text-center">
                              <h4 className="text-white font-semibold text-sm mb-1 uppercase tracking-wide">
                                {location.city}
                              </h4>
                              <p className="text-gray-300 text-xs leading-relaxed">
                                {location.address}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              </div>
            </div>
          </motion.div>

          {/* Location List Below Map */}
          <motion.div
            className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {locations.map((location) => {
              const isHovered = hoveredLocation === location.id;

              return (
                <motion.div
                  key={location.id}
                  className="p-4 bg-[#1a1a1a] border transition-all duration-300 cursor-pointer"
                  style={{
                    borderColor: isHovered ? '#C5A059' : '#2a2a2a'
                  }}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <h5 className="text-white font-semibold text-sm mb-1 uppercase tracking-wide">
                    {location.city}
                  </h5>
                  <p className="text-gray-400 text-xs">
                    {location.address}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
