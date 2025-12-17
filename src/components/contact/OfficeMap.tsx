"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, X, Navigation2 } from "lucide-react";
import Image from "next/image";

interface Office {
  id: string;
  city: string;
  state: string;
  position: { x: number; y: number }; // Percentage-based positioning (0-100)
  address: string;
  phone: string;
  email: string;
  isHQ?: boolean;
}

// REAL OFFICE DATA FROM GREEN BUILDERS WEBSITE
const offices: Office[] = [
  {
    id: "bengaluru",
    city: "Bengaluru",
    state: "Karnataka",
    position: { x: 35, y: 52 },
    address: "Reg Office, G F, NO 6/1, Madivala, Bengaluru, Karnataka, 560068",
    phone: "+91 97399 92779",
    email: "banglore@greenbuildersandinteriors.com",
    isHQ: true,
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    position: { x: 42, y: 28 },
    address: "Ground Floor D' Desks, Road Number 12, Banjara Hills, Hyderabad, Telangana",
    phone: "+91 97399 92779",
    email: "hyderabad@greenbuildersandinteriors.com",
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    position: { x: 57, y: 55 },
    address: "1st Floor, 111 A, Rajiv Gandhi Road, OMR, Kottivakkam, Chennai, Tamil Nadu 600041",
    phone: "+91 97399 92779",
    email: "chennai@greenbuildersandinteriors.com",
  },
  {
    id: "kochi",
    city: "Kochi",
    state: "Kerala",
    position: { x: 25, y: 72 },
    address: "3rd Floor AWFIS office, Mezhukkattil Matrix, Chittoor Road, Ernakulam, Kochi 682011",
    phone: "+91 96068 94352",
    email: "kochi@greenbuildersandinteriors.com",
  },
  {
    id: "visakhapatnam",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    position: { x: 75, y: 26 },
    address: "Mastec QuadGen Wireless LLP, 2nd Floor, Synophic Tower, IT Tech Park, Madhurawada, Visakhapatnam, AP 530045",
    phone: "+91 96068 94352",
    email: "Visakhapatnam@greenbuildersandinteriors.com",
  },
];

export function OfficeMap() {
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [hoveredOffice, setHoveredOffice] = useState<string | null>(null);

  const hqOffice = offices.find((o) => o.isHQ);

  // #region agent log
  useEffect(() => {
    const svgEl = document.querySelector('svg[viewBox="0 0 100 100"]');
    const containerEl = document.querySelector('.relative.w-full.h-full');
    if (svgEl && containerEl) {
      const svgRect = svgEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:dimensions',message:'Container and SVG dimensions',data:{svgWidth:svgRect.width,svgHeight:svgRect.height,containerWidth:containerRect.width,containerHeight:containerRect.height,svgTop:svgRect.top,svgLeft:svgRect.left,containerTop:containerRect.top,containerLeft:containerRect.left},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,D'})}).catch(()=>{});
    }
  }, []);
  // #endregion

  return (
    <div className="relative w-full h-full min-h-[600px] bg-gradient-to-br from-background via-primary-dark/40 to-background rounded-xl overflow-hidden border border-accent/20 flex items-center justify-center">
      {/* Fixed Aspect Ratio Container - maintains map proportions */}
      <div className="relative w-full max-w-[500px] aspect-[3/4] mx-auto">
        {/* Map Image Background - contained, not stretched */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/SOUTH_MAP.png"
            alt="South India Map"
            fill
            className="object-contain"
            priority
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/50" />
        </div>

        {/* Connection Lines Container - Matches map aspect ratio */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-visible">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 133"
            preserveAspectRatio="none"
          >
              <defs>
                <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C5A572" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#B7E7A1" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#B7E7A1" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Connection Lines from FIXED point behind Bangalore to other offices */}
              {hqOffice &&
                offices
                  .filter((office) => !office.isHQ)
                  .map((office, index) => {
                    // ViewBox is 100x133 (3:4 aspect ratio), so Y values need 1.33x scale
                    const yScale = 1.33;
                    
                    // FIXED START POINT: Slightly behind (left) and below Bangalore
                    // Bangalore is at (35, 52), so start at (33, 55)
                    const startX = 33;
                    const startY = 55 * yScale;
                    
                    // End point is the exact branch office position (Y scaled)
                    const endX = office.position.x;
                    const endY = office.position.y * yScale;
                    
                    // Midpoint
                    const midX = (startX + endX) / 2;
                    const midY = (startY + endY) / 2;
                    
                    // Determine curve direction based on destination
                    // Curve should bow AWAY from Bangalore (outward)
                    let curveOffsetX = 0;
                    let curveOffsetY = 0;
                    const curveMagnitude = 10;
                    
                    if (office.id === "hyderabad") {
                      // Hyderabad is up-right: curve bows left (west)
                      curveOffsetX = -curveMagnitude;
                      curveOffsetY = -curveMagnitude * 0.5;
                    } else if (office.id === "visakhapatnam") {
                      // Vizag is up-far-right: curve bows up
                      curveOffsetX = curveMagnitude * 0.5;
                      curveOffsetY = -curveMagnitude;
                    } else if (office.id === "chennai") {
                      // Chennai is right and slightly down: curve bows down
                      curveOffsetX = 0;
                      curveOffsetY = curveMagnitude;
                    } else if (office.id === "kochi") {
                      // Kochi is down-left: curve bows left (southwest)
                      curveOffsetX = -curveMagnitude;
                      curveOffsetY = curveMagnitude * 0.5;
                    }
                    
                    const controlX = midX + curveOffsetX;
                    const controlY = midY + curveOffsetY;

                    const pathString = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;

                    // #region agent log
                    if (typeof window !== 'undefined') {
                      fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:fixed-scaled',message:`Curve to ${office.city}`,data:{startX,startY,endX,endY,midX,midY,controlX,controlY,pathString,yScale},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix-4',hypothesisId:'aspect-fix'})}).catch(()=>{});
                    }
                    // #endregion

                    return (
                      <g key={`line-${office.id}`}>
                        {/* Curved Line from Bangalore to branch */}
                        <motion.path
                          d={pathString}
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="0.8"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.7 }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeInOut" }}
                        />
                        
                        {/* Glowing overlay */}
                        <motion.path
                          d={pathString}
                          fill="none"
                          stroke="#B7E7A1"
                          strokeWidth="0.4"
                          strokeLinecap="round"
                          filter="url(#lineGlow)"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={{ duration: 1.5, delay: 0.5 + index * 0.2, ease: "easeInOut" }}
                        />

                        {/* Animated Traveling Particle - from Bangalore outward */}
                        <motion.circle
                          r="1.2"
                          fill="#B7E7A1"
                          filter="url(#lineGlow)"
                          initial={{ opacity: 0 }}
                          animate={{
                            opacity: [0, 1, 1, 0],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: 1 + index * 0.5,
                            times: [0, 0.1, 0.9, 1],
                            ease: "linear",
                          }}
                        >
                          <animateMotion
                            dur="3s"
                            repeatCount="indefinite"
                            begin={`${1 + index * 0.5}s`}
                            path={pathString}
                          />
                        </motion.circle>
                      </g>
                    );
                  })}
          </svg>
        </div>

        {/* Office Markers Container */}
        <div className="absolute inset-0 z-20">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${office.position.x}%`,
                  top: `${office.position.y}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1 + index * 0.15, type: "spring", stiffness: 200 }}
                onMouseEnter={() => setHoveredOffice(office.id)}
                onMouseLeave={() => setHoveredOffice(null)}
                onClick={() => setSelectedOffice(office)}
              >
                {/* Pulse Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className={`absolute w-20 h-20 rounded-full border-2 ${
                      office.isHQ ? "border-gold" : "border-accent"
                    }`}
                    animate={{
                      scale: [1, 2, 2.5],
                      opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4,
                      ease: "easeOut",
                    }}
                  />
                  <motion.div
                    className={`absolute w-14 h-14 rounded-full border-2 ${
                      office.isHQ ? "border-gold" : "border-accent"
                    }`}
                    animate={{
                      scale: [1, 1.5, 2],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4 + 0.3,
                      ease: "easeOut",
                    }}
                  />
                </div>

                {/* Main Marker */}
                <motion.div
                  className={`relative w-14 h-14 rounded-full ${
                    office.isHQ ? "bg-gold" : "bg-accent"
                  } shadow-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}
                  style={{
                    boxShadow: office.isHQ
                      ? "0 0 30px rgba(197, 165, 114, 0.7), 0 0 60px rgba(197, 165, 114, 0.4)"
                      : "0 0 30px rgba(183, 231, 161, 0.7), 0 0 60px rgba(183, 231, 161, 0.4)",
                  }}
                >
                  <div className="w-7 h-7 rounded-full bg-background/90 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* City Label Below Marker */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 text-center whitespace-nowrap pointer-events-none">
                  <p className={`font-serif text-sm font-semibold ${office.isHQ ? "text-gold" : "text-accent"}`}>
                    {office.city}
                  </p>
                  {office.isHQ && (
                    <p className="text-xs text-gold/80 uppercase tracking-wider font-semibold">
                      HQ
                    </p>
                  )}
                </div>

                {/* Enhanced Hover Tooltip */}
                <AnimatePresence>
                  {hoveredOffice === office.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 pointer-events-none z-50"
                    >
                      <div className="bg-background/98 backdrop-blur-md border-2 border-accent/60 rounded-xl px-5 py-3 shadow-2xl">
                        <p className="font-serif text-base font-semibold text-white">
                          {office.city}
                        </p>
                        <p className="text-xs text-grey mt-0.5">{office.state}</p>
                        {office.isHQ && (
                          <p className="text-xs text-gold uppercase tracking-wider font-semibold mt-1">
                            Headquarters
                          </p>
                        )}
                        <p className="text-xs text-accent mt-2">Click for details</p>
                      </div>
                      {/* Arrow */}
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-accent/60" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>
      </div>

      {/* Office Detail Card */}
      <AnimatePresence>
        {selectedOffice && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setSelectedOffice(null)}
            />

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-gradient-to-br from-background to-primary-dark border-2 border-accent/40 rounded-2xl p-8 shadow-2xl z-50"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedOffice(null)}
                className="absolute top-4 right-4 text-grey hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Office Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <div className={`mt-1 p-3 rounded-xl ${selectedOffice.isHQ ? "bg-gold/10" : "bg-accent/10"}`}>
                      <MapPin className={`w-7 h-7 ${selectedOffice.isHQ ? "text-gold" : "text-accent"}`} />
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-medium text-white leading-tight">
                        {selectedOffice.city}
                      </h3>
                      <p className="text-sm text-grey mt-1">{selectedOffice.state}</p>
                    </div>
                    {selectedOffice.isHQ && (
                      <span className="ml-auto luxury-label text-gold text-xs mt-2 px-3 py-1 bg-gold/10 rounded-full border border-gold/30">
                        HQ
                      </span>
                    )}
                  </div>
                </div>

                <div className="h-px bg-accent/20" />

                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-grey group hover:text-white transition-colors">
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Navigation2 className="w-5 h-5 text-accent flex-shrink-0" />
                    </div>
                    <p className="leading-relaxed pt-1.5">
                      {selectedOffice.address}
                    </p>
                  </div>

                  <a
                    href={`tel:${selectedOffice.phone}`}
                    className="flex items-center gap-3 text-grey hover:text-accent transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{selectedOffice.phone}</span>
                  </a>

                  <a
                    href={`mailto:${selectedOffice.email}`}
                    className="flex items-center gap-3 text-grey hover:text-accent transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{selectedOffice.email}</span>
                  </a>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    // Open Google Maps with the office address
                    const address = encodeURIComponent(selectedOffice.address);
                    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                  }}
                  className="w-full py-4 bg-accent text-primary-dark text-center font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg hover:shadow-accent/20"
                >
                  Get Directions
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm border border-accent/30 rounded-lg p-4 space-y-3 shadow-xl z-30">
        <h4 className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
          Office Locations
        </h4>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-gold shadow-lg shadow-gold/50" />
          <span className="text-sm text-grey">Headquarters</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-accent shadow-lg shadow-accent/50" />
          <span className="text-sm text-grey">Branch Office</span>
        </div>
      </div>

      {/* Instruction Hint */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 bg-accent/15 backdrop-blur-sm border border-accent/40 rounded-full px-6 py-3 shadow-lg z-30"
      >
        <p className="text-sm text-accent font-medium">
          Click on any marker to view office details
        </p>
      </motion.div>
    </div>
  );
}
