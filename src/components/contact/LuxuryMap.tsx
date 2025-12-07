"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

interface Branch {
  id: string;
  city: string;
  type?: string;
  coords: { x: number; y: number };
  address: string;
  email: string;
  phone: string;
}

const branches: Branch[] = [
  {
    id: 'bengaluru',
    city: 'Bengaluru',
    type: 'Head Office',
    coords: { x: 260, y: 460 },
    address: 'G F, NO 6/1, Madivala, Bengaluru, Karnataka, 560068',
    email: 'banglore@greenbuildersandinteriors.com',
    phone: '9739992779, 9606894352'
  },
  {
    id: 'vizag',
    city: 'Visakhapatnam',
    coords: { x: 480, y: 150 },
    address: 'Mastec QuadGen Wireless LLP, 2nd Floor, Synophic Tower, Visakhapatnam, Andhra Pradesh',
    email: 'Visakhapatnam@greenbuildersandinteriors.com',
    phone: '9739992779, 9606894352'
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    coords: { x: 300, y: 180 },
    address: 'Ground Floor D Desks, Road Number 12, Banjara Hills, Hyderabad, Telangana',
    email: 'hyderabad@greenbuildersandinteriors.com',
    phone: '9739992779, 9606894352'
  },
  {
    id: 'kochi',
    city: 'Kochi',
    coords: { x: 200, y: 620 },
    address: '3rd floor AWFIS office, Mezhukkattil Matrix, Chittoor Road, Kochi 682011',
    email: 'kochi@greenbuildersandinteriors.com',
    phone: '9739992779, 9606894352'
  },
  {
    id: 'chennai',
    city: 'Chennai',
    coords: { x: 400, y: 480 },
    address: '1st Floor, 111 A Rajiv Gandhi Road, OMR, Kottivakkam, Chennai 600041',
    email: 'chennai@greenbuildersandinteriors.com',
    phone: '9739992779, 9606894352'
  }
];

const LuxuryMap = () => {
  const [hoveredBranch, setHoveredBranch] = useState<string | null>(null);
  const [selectedBranch, setSelectedBranch] = useState<string | null>('bengaluru');

  return (
    <div className="bg-[#1A1A1A] py-20 md:py-32">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] mb-6 font-medium">
            OUR PRESENCE
          </h2>
          <h3 className="text-[42px] md:text-[52px] lg:text-[64px] text-white font-light leading-[1.1]"
              style={{ fontFamily: "'Playfair Display', serif" }}>
            Across South India
          </h3>
        </div>

        {/* Map and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: SVG Map */}
          <div className="relative">
            <svg
              viewBox="0 0 600 700"
              className="w-full h-auto"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* South India Map Shape */}
              <path
                d="M 150 100 Q 80 300 130 500 C 160 620 260 680 350 650 C 480 600 550 400 550 200 C 500 100 400 80 150 100 Z"
                fill="#252525"
                stroke="#C5A059"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Branch Markers */}
              {branches.map((branch) => {
                const isHovered = hoveredBranch === branch.id;
                const isSelected = selectedBranch === branch.id;

                return (
                  <g key={branch.id}>
                    {/* Outer Pulse Ring */}
                    <motion.circle
                      cx={branch.coords.x}
                      cy={branch.coords.y}
                      r={isHovered || isSelected ? 20 : 0}
                      fill="none"
                      stroke="#C5A059"
                      strokeWidth="1"
                      opacity={0.3}
                      animate={{
                        r: isHovered || isSelected ? [15, 25, 15] : 0,
                        opacity: isHovered || isSelected ? [0.3, 0.1, 0.3] : 0
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Main Dot */}
                    <motion.circle
                      cx={branch.coords.x}
                      cy={branch.coords.y}
                      r={isHovered || isSelected ? 8 : 6}
                      fill={isHovered || isSelected ? "#C5A059" : "#FFFFFF"}
                      className="cursor-pointer"
                      style={{
                        filter: isHovered || isSelected
                          ? 'drop-shadow(0 0 12px rgba(197, 160, 89, 0.8))'
                          : 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                      }}
                      onMouseEnter={() => setHoveredBranch(branch.id)}
                      onMouseLeave={() => setHoveredBranch(null)}
                      onClick={() => setSelectedBranch(branch.id)}
                      whileHover={{ scale: 1.3 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    />

                    {/* City Label on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.text
                          x={branch.coords.x}
                          y={branch.coords.y - 20}
                          textAnchor="middle"
                          fill="#C5A059"
                          fontSize="14"
                          fontWeight="500"
                          letterSpacing="1.5"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.2 }}
                          className="pointer-events-none uppercase text-xs"
                        >
                          {branch.city}
                        </motion.text>
                      )}
                    </AnimatePresence>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: Branch Details */}
          <div className="space-y-4">
            {branches.map((branch) => {
              const isHovered = hoveredBranch === branch.id;
              const isSelected = selectedBranch === branch.id;
              const isActive = isHovered || isSelected;

              return (
                <motion.div
                  key={branch.id}
                  className="relative p-6 bg-[#252525] border transition-all duration-300 cursor-pointer"
                  style={{
                    borderColor: isActive ? '#C5A059' : '#3A3A3A',
                    boxShadow: isActive ? '0 0 20px rgba(197, 160, 89, 0.3)' : 'none'
                  }}
                  onMouseEnter={() => setHoveredBranch(branch.id)}
                  onMouseLeave={() => setHoveredBranch(null)}
                  onClick={() => setSelectedBranch(branch.id)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* City Name */}
                  <div className="flex items-start justify-between mb-4">
                    <h4
                      className="text-[28px] text-white font-light"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {branch.city}
                    </h4>
                    {branch.type && (
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#C5A059] font-medium px-2 py-1 border border-[#C5A059]">
                        {branch.type}
                      </span>
                    )}
                  </div>

                  {/* Address */}
                  <div className="space-y-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="text-[#C5A059] mt-1 flex-shrink-0" />
                      <p className="text-[14px] text-gray-300 leading-relaxed">
                        {branch.address}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={16} className="text-[#C5A059] flex-shrink-0" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-[14px] text-gray-300 hover:text-[#C5A059] transition-colors duration-300"
                      >
                        {branch.email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={16} className="text-[#C5A059] flex-shrink-0" />
                      <p className="text-[14px] text-gray-300">
                        {branch.phone}
                      </p>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A059]"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
      `}</style>
    </div>
  );
};

export default LuxuryMap;
