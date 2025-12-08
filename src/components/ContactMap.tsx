"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Location {
  id: string;
  city: string;
  top: string;
  left: string;
  address: string;
  phone?: string;
  email?: string;
  dotOffsetX?: number;
  dotOffsetY?: number;
}

const locations: Location[] = [
  {
    id: 'hyd',
    city: 'Hyderabad',
    top: '26.1%',
    left: '44.4%',
    address: 'Banjara Hills, Hyderabad',
    phone: '9739992779, 9606894352',
    email: 'hyderabad@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  },
  {
    id: 'vzg',
    city: 'Visakhapatnam',
    top: '23.4%',
    left: '81.5%',
    address: 'IT Tech Park, Vizag',
    phone: '9739992779, 9606894352',
    email: 'visakhapatnam@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  },
  {
    id: 'blr',
    city: 'Bengaluru',
    top: '55.5%',
    left: '37%',
    address: 'Madivala, Bengaluru',
    phone: '9739992779, 9606894352',
    email: 'banglore@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  },
  {
    id: 'chn',
    city: 'Chennai',
    top: '55.8%',
    left: '58%',
    address: 'OMR, Chennai',
    phone: '9739992779, 9606894352',
    email: 'chennai@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  },
  {
    id: 'koc',
    city: 'Kochi',
    top: '74%',
    left: '27%',
    address: 'Chittoor Road, Kochi',
    phone: '9739992779, 9606894352',
    email: 'kochi@greenbuildersandinteriors.com',
    dotOffsetX: 8,
    dotOffsetY: 8
  }
];

const ContactMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  return (
    <section className="bg-[#121212] py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16">
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

        <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Left Column - First 2 locations */}
          <motion.div
            className="flex flex-col gap-4 lg:w-64"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {locations.slice(0, 2).map((location) => {
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
                  onClick={() => setSelectedLocation(location)}
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

          {/* Center - Map */}
          <motion.div
            className="relative w-full max-w-[500px] flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full">
              <img
                src="/assets/south_map.png"
                alt="South India Map"
                className="w-full h-auto block"
              />

              {locations.map((location, index) => {
                const isHovered = hoveredLocation === location.id;

                return (
                  <div
                    key={location.id}
                    className="absolute"
                    style={{
                      top: location.top,
                      left: location.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => setHoveredLocation(location.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                    onClick={() => setSelectedLocation(location)}
                  >
                    <motion.div
                      className="absolute rounded-full cursor-pointer z-10"
                      style={{
                        width: '20px',
                        height: '20px',
                        left: `calc(50% + ${location.dotOffsetX || 0}px)`,
                        top: `calc(50% + ${location.dotOffsetY || 0}px)`,
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: isHovered ? '#C5A059' : '#ffffff',
                        boxShadow: isHovered
                          ? '0 0 24px 5px rgba(197, 160, 89, 0.9), 0 0 48px 10px rgba(197, 160, 89, 0.5), 0 0 72px 15px rgba(197, 160, 89, 0.2)'
                          : '0 0 12px 4px rgba(255, 255, 255, 0.6), 0 0 20px 5px rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.3)',
                        border: '2px solid rgba(255, 255, 255, 0.9)'
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

                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute bottom-full left-1/2 mb-4 pointer-events-none z-20"
                          style={{
                            transform: 'translateX(-50%)',
                            minWidth: '220px'
                          }}
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-[#1a1a1a] border-r border-b border-[#C5A059]" />
                          <div className="relative bg-[#1a1a1a] border border-[#C5A059] rounded-lg px-5 py-4 shadow-2xl">
                            <div className="text-center">
                              <h4 className="text-white font-semibold text-base mb-1 uppercase tracking-wide">
                                {location.city}
                              </h4>
                              <p className="text-gray-300 text-sm leading-relaxed">
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
          </motion.div>

          {/* Right Column - Last 3 locations */}
          <motion.div
            className="flex flex-col gap-4 lg:w-64"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {locations.slice(2, 5).map((location) => {
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
                  onClick={() => setSelectedLocation(location)}
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

        {/* Glassmorphism Modal Popup */}
        <AnimatePresence>
          {selectedLocation && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedLocation(null)}
              />

              {/* Modal */}
              <motion.div
                className="fixed top-1/2 left-1/2 z-50 w-full max-w-md"
                style={{ x: '-50%', y: '-50%' }}
                initial={{ opacity: 0, scale: 0.9, y: '-50%', x: '-50%' }}
                animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
                exit={{ opacity: 0, scale: 0.9, y: '-50%', x: '-50%' }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="mx-4 relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Decorative gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059]/10 via-transparent to-transparent pointer-events-none" />

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedLocation(null)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-200 group"
                  >
                    <svg
                      className="w-4 h-4 text-white/70 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Title */}
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#C5A059] bg-[#C5A059]/10 backdrop-blur-sm rounded-full border border-[#C5A059]/20">
                        OFFICE LOCATION
                      </div>
                      <h3 className="text-3xl font-light text-white mb-2">
                        {selectedLocation.city}
                      </h3>
                      <div className="h-px bg-gradient-to-r from-[#C5A059]/50 via-[#C5A059]/20 to-transparent" />
                    </div>

                    {/* Details */}
                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Address</p>
                          <p className="text-white/90 text-base leading-relaxed">{selectedLocation.address}</p>
                        </div>
                      </div>

                      {/* Phone */}
                      {selectedLocation.phone && (
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Phone</p>
                            <a href={`tel:${selectedLocation.phone.split(',')[0].trim()}`} className="text-white/90 text-base hover:text-[#C5A059] transition-colors">
                              {selectedLocation.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Email */}
                      {selectedLocation.email && (
                        <div className="flex items-start gap-3">
                          <div className="mt-1 flex-shrink-0 w-5 h-5 flex items-center justify-center">
                            <svg className="w-5 h-5 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Email</p>
                            <a href={`mailto:${selectedLocation.email}`} className="text-white/90 text-base hover:text-[#C5A059] transition-colors break-all">
                              {selectedLocation.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedLocation.address + ', ' + selectedLocation.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#C5A059] hover:bg-[#B8954F] text-white font-semibold text-sm uppercase tracking-wider rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactMap;
