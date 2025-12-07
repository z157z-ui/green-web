"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  city: string;
  position: { x: number; y: number }; // Percentage based positioning
  address: string;
  phone: string;
  email: string;
  mapsUrl: string;
}

const locations: Location[] = [
  {
    id: 'bengaluru',
    name: 'BENGALURU',
    city: 'Bengaluru',
    position: { x: 36, y: 58.43 }, // (216, 409) in 600x700 viewBox
    address: 'Reg Office, G F, NO 6/1, Madivala, Bengaluru, Karnataka, 560068',
    phone: '+91 97399 92779',
    email: 'bangalore@greenbuildersandinteriors.com',
    mapsUrl: 'https://maps.google.com/?q=Madivala,Bengaluru,Karnataka,560068'
  },
  {
    id: 'hyderabad',
    name: 'HYDERABAD',
    city: 'Hyderabad',
    position: { x: 45, y: 21.71 }, // (270, 152) in 600x700 viewBox
    address: 'Ground Floor D\' Desks, Road Number 12, Banjara Hills, Hyderabad, Telangana',
    phone: '+91 97399 92779',
    email: 'hyderabad@greenbuildersandinteriors.com',
    mapsUrl: 'https://maps.google.com/?q=Banjara+Hills,Hyderabad,Telangana'
  },
  {
    id: 'visakhapatnam',
    name: 'VISAKHAPATNAM',
    city: 'Visakhapatnam',
    position: { x: 92, y: 19.29 }, // (552, 135) in 600x700 viewBox
    address: 'Mastec QuadGen Wireless LLP, 2nd Floor, Synophic Tower, D3/A Hill No 2, IT Tech Park, Madhurawada, Visakhapatnam, Andhra Pradesh 530045',
    phone: '+91 97399 92779',
    email: 'visakhapatnam@greenbuildersandinteriors.com',
    mapsUrl: 'https://maps.google.com/?q=Madhurawada,Visakhapatnam,Andhra+Pradesh,530045'
  },
  {
    id: 'chennai',
    name: 'CHENNAI',
    city: 'Chennai',
    position: { x: 63, y: 57.57 }, // (378, 403) in 600x700 viewBox
    address: '1st Floor, 111 A Rajiv Gandhi Road, Old Mahabalipuram Road, OMR, Kottivakkam, Chennai, Tamil Nadu 600041',
    phone: '+91 97399 92779',
    email: 'chennai@greenbuildersandinteriors.com',
    mapsUrl: 'https://maps.google.com/?q=Kottivakkam,Chennai,Tamil+Nadu,600041'
  },
  {
    id: 'kochi',
    name: 'KOCHI',
    city: 'Kochi',
    position: { x: 23, y: 84.29 }, // (138, 590) in 600x700 viewBox
    address: '3rd floor AWFIS office, Mezhukkattil Matrix, Chittoor Road, Mullassery Canal Junction, Ernakulam Kochi 682011',
    phone: '+91 97399 92779',
    email: 'kochi@greenbuildersandinteriors.com',
    mapsUrl: 'https://maps.google.com/?q=Mullassery+Canal+Junction,Ernakulam+Kochi,682011'
  }
];

const SouthIndiaMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div className="relative w-full aspect-[3/4] md:aspect-[4/5] bg-[#F2F0EC] rounded-sm overflow-hidden">
        {/* SVG Map - Custom South India Map */}
        <svg
          viewBox="0 0 600 700"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Your Custom South India Map */}
          <path
            d="M 280 680 L 220 620 L 180 580 L 150 520 L 130 450 L 110 350 L 120 250 L 150 180 L 200 130 L 280 100 L 380 100 L 480 120 L 550 180 L 580 280 L 560 380 L 520 480 L 450 550 L 380 620 Z M 220 620 C 240 580, 260 540, 280 500 C 320 520, 360 540, 400 560 C 420 520, 440 480, 460 440 C 500 460, 540 480, 580 500 C 560 420, 540 340, 520 260 C 480 280, 440 300, 400 320 C 380 260, 360 200, 340 140 C 300 160, 260 180, 220 200 C 240 260, 260 320, 280 380 C 240 400, 200 420, 160 440 C 180 500, 200 560, 220 620 Z"
            fill="#F2F0EC"
            stroke="#111111"
            strokeWidth="2"
            opacity="0.5"
          />

          {/* Location Markers */}
          {locations.map((location) => {
            const isHovered = hoveredLocation === location.id;
            const isSelected = selectedLocation?.id === location.id;

            return (
              <g key={location.id}>
                {/* Marker Circle */}
                <motion.circle
                  cx={`${location.position.x}%`}
                  cy={`${location.position.y}%`}
                  r={isHovered || isSelected ? 6 : 5}
                  fill="#9B7E5C"
                  className="cursor-pointer"
                  style={{
                    filter: isHovered || isSelected
                      ? 'drop-shadow(0 0 8px rgba(155, 126, 92, 0.6))'
                      : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                  }}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  onClick={() => setSelectedLocation(location)}
                />

                {/* Outer Ring on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.circle
                      cx={`${location.position.x}%`}
                      cy={`${location.position.y}%`}
                      r={10}
                      fill="none"
                      stroke="#9B7E5C"
                      strokeWidth="0.5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.5, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>

                {/* Connecting Line on Hover */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.line
                      x1={`${location.position.x}%`}
                      y1={`${location.position.y}%`}
                      x2={`${location.position.x + (location.position.x > 50 ? -12 : 12)}%`}
                      y2={`${location.position.y - 6}%`}
                      stroke="#9B7E5C"
                      strokeWidth="1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.6 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
              </g>
            );
          })}
        </svg>

        {/* HTML Overlay for Hover Labels */}
        {locations.map((location) => {
          const isHovered = hoveredLocation === location.id;
          if (!isHovered) return null;

          return (
            <motion.div
              key={`label-${location.id}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.2 }}
              className="absolute pointer-events-none"
              style={{
                left: `${location.position.x}%`,
                top: `${location.position.y}%`,
                transform: location.position.x > 50 ? 'translate(-100%, -140%)' : 'translate(20%, -140%)'
              }}
            >
              <div className="bg-[#111111] px-3 py-1.5 rounded-sm whitespace-nowrap">
                <span className="text-[10px] md:text-[11px] font-medium tracking-[0.12em] text-white">
                  {location.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Details Panel */}
      <AnimatePresence mode="wait">
        {selectedLocation && (
          <motion.div
            key={selectedLocation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mt-12 p-8 bg-white border border-[#111111]/10"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedLocation(null)}
              className="absolute top-4 right-4 text-[#111111]/40 hover:text-[#111111] transition-colors duration-200"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            {/* Location Details */}
            <div className="space-y-6">
              <h3 className="text-[28px] font-light text-[#111111] leading-tight">
                {selectedLocation.city}
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#111111]/60 mb-2 font-medium">
                    ADDRESS
                  </div>
                  <p className="text-[16px] text-[#111111] leading-relaxed font-light">
                    {selectedLocation.address}
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#111111]/60 mb-2 font-medium">
                    PHONE
                  </div>
                  <a
                    href={`tel:${selectedLocation.phone.replace(/\s/g, '')}`}
                    className="text-[16px] text-[#111111] hover:text-[#9B7E5C] transition-colors duration-300 font-light"
                  >
                    {selectedLocation.phone}
                  </a>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.15em] text-[#111111]/60 mb-2 font-medium">
                    EMAIL
                  </div>
                  <a
                    href={`mailto:${selectedLocation.email}`}
                    className="text-[16px] text-[#111111] hover:text-[#9B7E5C] transition-colors duration-300 font-light"
                  >
                    {selectedLocation.email}
                  </a>
                </div>

                <div className="pt-4">
                  <a
                    href={selectedLocation.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-[#9B7E5C] hover:text-[#8A6D4F] transition-colors duration-300 font-medium"
                  >
                    OPEN IN MAPS
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Helper Text when no location selected */}
      {!selectedLocation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <p className="text-[13px] text-[#111111]/50 font-light">
            Click on a marker to view location details
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default SouthIndiaMap;
