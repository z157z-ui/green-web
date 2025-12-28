"use client";

import React, { useEffect, useRef } from "react";
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

interface OfficeMapProps {
  hoveredOffice?: string | null;
  selectedOffice?: string | null;
  onHover?: (officeId: string | null) => void;
  onSelect?: (officeId: string | null) => void;
}

export function OfficeMap({ 
  hoveredOffice: externalHoveredOffice, 
  selectedOffice: externalSelectedOffice, 
  onHover: externalOnHover, 
  onSelect: externalOnSelect 
}: OfficeMapProps = {}) {
  // Use internal state if props not provided (for backward compatibility)
  const [internalHoveredOffice, setInternalHoveredOffice] = React.useState<string | null>(null);
  const [internalSelectedOffice, setInternalSelectedOffice] = React.useState<string | null>(null);
  
  const hoveredOffice = externalHoveredOffice !== undefined ? externalHoveredOffice : internalHoveredOffice;
  const selectedOffice = externalSelectedOffice !== undefined ? externalSelectedOffice : internalSelectedOffice;
  const onHover = externalOnHover || setInternalHoveredOffice;
  const onSelect = externalOnSelect || setInternalSelectedOffice;
  const hqOffice = offices.find((o) => o.isHQ);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hasInteracted, setHasInteracted] = React.useState(false);
  
  // Get the office object for selected or hovered office
  const displayOffice = selectedOffice 
    ? offices.find(o => o.id === selectedOffice)
    : hoveredOffice 
    ? offices.find(o => o.id === hoveredOffice)
    : null;

  // #region agent log
  useEffect(() => {
    fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:99',message:'State update',data:{hoveredOffice,selectedOffice,displayOffice:displayOffice?.id,isMobile:typeof window!=='undefined'?window.innerWidth<1024:false,windowWidth:typeof window!=='undefined'?window.innerWidth:0},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
  }, [hoveredOffice, selectedOffice, displayOffice]);
  // #endregion

  // Track when user first interacts with the map
  useEffect(() => {
    if (hoveredOffice || selectedOffice) {
      setHasInteracted(true);
    }
  }, [hoveredOffice, selectedOffice]);

  // Auto-select after 3 seconds of hover
  useEffect(() => {
    // Clear any existing timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    // If hovering over an office (and it's not already selected), start timer
    if (hoveredOffice && hoveredOffice !== selectedOffice) {
      hoverTimeoutRef.current = setTimeout(() => {
        onSelect(hoveredOffice);
      }, 1000);
    }

    // Cleanup on unmount or when hover changes
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = null;
      }
    };
  }, [hoveredOffice, selectedOffice, onSelect]);

  // #region agent log
  useEffect(() => {
    if(typeof window==='undefined'||typeof document==='undefined')return;
    const svgEl = document.querySelector('svg[viewBox="0 0 100 133"]');
    const containerEl = document.querySelector('.relative.w-full.h-full');
    if (svgEl && containerEl) {
      const svgRect = svgEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();
      fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:dimensions',message:'Container and SVG dimensions',data:{svgWidth:svgRect.width,svgHeight:svgRect.height,containerWidth:containerRect.width,containerHeight:containerRect.height,svgTop:svgRect.top,svgLeft:svgRect.left,containerTop:containerRect.top,containerLeft:containerRect.left},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A,D'})}).catch(()=>{});
    }
  }, []);
  // #endregion

  return (
    <div className="relative w-full h-full min-h-[600px] bg-gradient-to-br from-background via-primary-dark/40 to-background rounded-2xl border-2 border-accent/30 grid grid-cols-1 lg:grid-cols-2 items-center overflow-hidden">
      {/* Left Column - Map Container */}
      <div className="relative w-full h-full flex items-center justify-center lg:justify-center">
        {/* Fixed Aspect Ratio Container - maintains map proportions, centered */}
        <div className="relative w-full max-w-full aspect-[3/4] lg:max-w-[500px] xl:max-w-[550px] overflow-hidden">
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
                onMouseEnter={() => {
                  // #region agent log
                  if(typeof window!=='undefined'){fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:312',message:'Marker mouseEnter',data:{officeId:office.id,isMobile:window.innerWidth<1024},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});}
                  // #endregion
                  onHover(office.id);
                }}
                onMouseLeave={() => {
                  // #region agent log
                  if(typeof window!=='undefined'){fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:316',message:'Marker mouseLeave',data:{officeId:office.id,isMobile:window.innerWidth<1024},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});}
                  // #endregion
                  onHover(null);
                }}
                onClick={() => {
                  // #region agent log
                  if(typeof window!=='undefined'){fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:320',message:'Marker onClick',data:{officeId:office.id,isMobile:window.innerWidth<1024,windowWidth:window.innerWidth,selectedOffice,displayOffice:displayOffice?.id},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});}
                  // #endregion
                  onSelect(office.id);
                }}
                onTouchStart={() => {
                  // #region agent log
                  if(typeof window!=='undefined'){fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:328',message:'Marker onTouchStart',data:{officeId:office.id,isMobile:window.innerWidth<1024},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});}
                  // #endregion
                }}
              >
                {/* Pulse Rings */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div
                    className={`absolute w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 ${
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
                    className={`absolute w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border-2 ${
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
                  className={`relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${
                    office.isHQ ? "bg-gold" : "bg-accent"
                  } shadow-2xl flex items-center justify-center group-hover:scale-125 transition-transform duration-300`}
                  style={{
                    boxShadow: office.isHQ
                      ? "0 0 20px rgba(197, 165, 114, 0.7), 0 0 40px rgba(197, 165, 114, 0.4)"
                      : "0 0 20px rgba(183, 231, 161, 0.7), 0 0 40px rgba(183, 231, 161, 0.4)",
                  }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-background/90 flex items-center justify-center">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                </motion.div>

                {/* City Label Below Marker */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 sm:mt-1.5 md:mt-2 text-center whitespace-nowrap pointer-events-none">
                  <p className={`font-serif text-xs sm:text-xs md:text-sm font-semibold ${office.isHQ ? "text-gold" : "text-accent"}`}>
                    {office.city}
                  </p>
                  {office.isHQ && (
                    <p className="text-[10px] sm:text-[10px] md:text-xs text-gold/80 uppercase tracking-wider font-semibold">
                      HQ
                    </p>
                  )}
                </div>

                {/* Simple City Name on Hover - Above Marker */}
                <AnimatePresence>
                  {hoveredOffice === office.id && !selectedOffice && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 sm:mb-2.5 md:mb-3 pointer-events-none z-50"
                    >
                      <p className={`font-serif text-sm sm:text-sm md:text-base font-semibold whitespace-nowrap ${office.isHQ ? "text-gold" : "text-accent"}`}>
                        {office.city}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </div>
        </div>
      </div>

      {/* Right-Side Tooltip Panel */}
      <AnimatePresence mode="wait">
        {!hasInteracted && !displayOffice && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="hidden lg:block absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-0.25rem)] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px] max-w-[400px] z-40 pointer-events-none opacity-85 sm:opacity-90 md:opacity-95 lg:opacity-100"
          >
            <div className="bg-gradient-to-br from-background/95 via-primary-dark/85 to-background/95 backdrop-blur-xl border-2 border-accent/40 rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 shadow-2xl pointer-events-auto opacity-85 sm:opacity-90 md:opacity-95 lg:opacity-100">
              <div className="flex flex-col items-center justify-center text-center space-y-3 sm:space-y-3.5">
                <div className="p-3 rounded-full bg-accent/10">
                  <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                  Explore Our Offices
                </h3>
                <p className="text-xs sm:text-sm text-text-grey leading-relaxed max-w-[280px] sm:max-w-none">
                  Hover over any office marker to view details, or click to keep them visible
                </p>
                <div className="flex items-center gap-1.5 text-xs text-accent/80">
                  <span>💡</span>
                  <span>Hover for 1 second to auto-select</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {displayOffice && (
          <>
            {/* Mobile: Centered Popup */}
            <motion.div
              key={`mobile-${displayOffice.id}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden absolute inset-0 z-40 flex items-center justify-center p-4 pointer-events-none"
              onAnimationStart={() => {
                // #region agent log
                if(typeof window!=='undefined'){fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:436',message:'Mobile popup animation start',data:{officeId:displayOffice.id,windowWidth:window.innerWidth,zIndex:40},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'D'})}).catch(()=>{});}
                // #endregion
              }}
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={(e) => {
                  // #region agent log
                  if(typeof window!=='undefined'){fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'OfficeMap.tsx:444',message:'Backdrop onClick',data:{target:e.target?.toString(),currentTarget:e.currentTarget?.toString(),windowWidth:window.innerWidth},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});}
                  // #endregion
                  onSelect(null);
                }}
              />
              
              {/* Panel */}
              <motion.div 
                className="relative w-full max-w-sm bg-gradient-to-br from-background/98 via-primary-dark/90 to-background/98 backdrop-blur-xl border-2 border-accent/40 rounded-2xl p-4 sm:p-5 shadow-2xl pointer-events-auto max-h-[85vh] overflow-y-auto"
                layout
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                {selectedOffice && (
                  <button
                    onClick={() => onSelect(null)}
                    className="absolute top-3 right-3 text-text-grey hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-full z-10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}

                {/* Office Info - Same content as desktop */}
                <motion.div 
                  className="space-y-3 sm:space-y-3.5"
                  key={displayOffice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    <div className="flex items-start gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
                      <motion.div 
                        className={`p-2 sm:p-2.5 rounded-xl flex-shrink-0 ${displayOffice.isHQ ? "bg-gold/10" : "bg-accent/10"}`}
                        layout
                      >
                        <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 ${displayOffice.isHQ ? "text-gold" : "text-accent"}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5 sm:mb-1 flex-wrap">
                          <motion.h3 
                            className="font-serif text-lg sm:text-xl font-medium text-white leading-tight"
                            layout
                          >
                            {displayOffice.city}
                          </motion.h3>
                          <AnimatePresence>
                            {displayOffice.isHQ && (
                              <motion.span 
                                className="luxury-label text-gold text-xs px-2 py-1 bg-gold/10 rounded-full border border-gold/30 flex-shrink-0"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                              >
                                HQ
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                        <motion.p 
                          className="text-xs text-text-grey"
                          layout
                        >
                          {displayOffice.state}
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-accent/20" />

                  <div className="space-y-2 sm:space-y-2.5">
                    <motion.div 
                      className="flex items-start gap-2 sm:gap-2.5"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 flex-shrink-0 mt-0.5">
                        <Navigation2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                      </div>
                      <p className="text-xs text-text-grey leading-relaxed">
                        {displayOffice.address}
                      </p>
                    </motion.div>

                    <motion.a
                      href={`tel:${displayOffice.phone}`}
                      className="flex items-center gap-2 sm:gap-2.5 text-text-grey hover:text-accent transition-colors group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs font-medium">{displayOffice.phone}</span>
                    </motion.a>

                    <motion.a
                      href={`mailto:${displayOffice.email}`}
                      className="flex items-center gap-2 sm:gap-2.5 text-text-grey hover:text-accent transition-colors group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                      <span className="text-xs font-medium break-all">{displayOffice.email}</span>
                    </motion.a>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const address = encodeURIComponent(displayOffice.address);
                      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                    }}
                    className="w-full py-2 sm:py-2.5 bg-accent text-primary-dark text-center text-xs font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg hover:shadow-accent/20 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    Get Directions
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Desktop: Right-Side Panel */}
            <motion.div
              key={`desktop-${displayOffice.id}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="hidden lg:block absolute left-[75%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-0.25rem)] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] 2xl:w-[400px] max-w-[400px] z-40 pointer-events-none opacity-85 sm:opacity-90 md:opacity-95 lg:opacity-100"
            >
            <motion.div 
              className="bg-gradient-to-br from-background/95 via-primary-dark/85 to-background/95 backdrop-blur-xl border-2 border-accent/40 rounded-2xl p-2.5 sm:p-3 md:p-4 lg:p-5 xl:p-6 shadow-2xl pointer-events-auto"
              layout
            >
                {/* Close Button - Only show when office is selected */}
                {selectedOffice && (
                  <button
                    onClick={() => onSelect(null)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-text-grey hover:text-white transition-colors p-1.5 sm:p-2 hover:bg-white/5 rounded-full z-10"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}

                {/* Office Info */}
                <motion.div 
                  className="space-y-4 sm:space-y-4 md:space-y-5"
                  key={displayOffice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div>
                    <div className="flex items-start gap-3 sm:gap-3.5 mb-2">
                      <motion.div 
                        className={`p-2.5 sm:p-3 rounded-xl flex-shrink-0 ${displayOffice.isHQ ? "bg-gold/10" : "bg-accent/10"}`}
                        layout
                      >
                        <MapPin className={`w-5 h-5 sm:w-6 sm:h-6 ${displayOffice.isHQ ? "text-gold" : "text-accent"}`} />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <motion.h3 
                            className="font-serif text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-medium text-white leading-tight"
                            layout
                          >
                            {displayOffice.city}
                          </motion.h3>
                          <AnimatePresence>
                            {displayOffice.isHQ && (
                              <motion.span 
                                className="luxury-label text-gold text-xs px-2 py-1 bg-gold/10 rounded-full border border-gold/30 flex-shrink-0"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                              >
                                HQ
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </div>
                        <motion.p 
                          className="text-xs sm:text-sm text-text-grey"
                          layout
                        >
                          {displayOffice.state}
                        </motion.p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-accent/20" />

                  <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
                    <motion.div 
                      className="flex items-start gap-2 sm:gap-2.5 md:gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 flex-shrink-0 mt-0.5">
                        <Navigation2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" />
                      </div>
                      <p className="text-xs sm:text-xs md:text-sm text-text-grey leading-relaxed">
                        {displayOffice.address}
                      </p>
                    </motion.div>

                    <motion.a
                      href={`tel:${displayOffice.phone}`}
                      className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-text-grey hover:text-accent transition-colors group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-xs sm:text-xs md:text-sm font-medium">{displayOffice.phone}</span>
                    </motion.a>

                    <motion.a
                      href={`mailto:${displayOffice.email}`}
                      className="flex items-center gap-2 sm:gap-2.5 md:gap-3 text-text-grey hover:text-accent transition-colors group"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-xs sm:text-xs md:text-sm font-medium break-all">{displayOffice.email}</span>
                    </motion.a>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const address = encodeURIComponent(displayOffice.address);
                      window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                    }}
                    className="w-full py-2 sm:py-2.5 md:py-3 bg-accent text-primary-dark text-center text-xs sm:text-xs md:text-sm font-semibold rounded-xl hover:bg-accent-dark transition-colors shadow-lg hover:shadow-accent/20 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    Get Directions
                  </motion.button>
                </motion.div>
              </motion.div>
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

    </div>
  );
}
