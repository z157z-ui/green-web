"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
  url: string;
}

const clients: Client[] = [
  { name: "Smart Node", logo: "/images/logos/clients/smart-node.jpg", url: "https://smartnode.in" },
  { name: "Alsina", logo: "/images/logos/clients/alsina.jpg", url: "https://www.alsina.com" },
  { name: "Bajaj Allianz", logo: "/images/logos/clients/bajaj.jpg", url: "https://www.bajajallianz.com" },
  { name: "Mitsubishi Electric", logo: "/images/logos/clients/mistubishi.jpg", url: "https://in.mitsubishielectric.com/en/index.html" },
  { name: "Thoughtworks", logo: "/images/logos/clients/thoughtworks.jpg", url: "https://www.thoughtworks.com" },
  { name: "BluArmor", logo: "/images/logos/clients/blua.jpg", url: "https://thebluarmor.com" },
  { name: "Awfis", logo: "/images/logos/clients/awfis.jpg", url: "https://www.awfis.com" },
  { name: "Credel Capital", logo: "/images/logos/clients/credal.jpg", url: "http://www.credelcapital.com" },
  { name: "Toyota", logo: "/images/logos/clients/toyota.jpg", url: "https://www.toyotabharat.com" },
  { name: "Kargil Equipments", logo: "/images/logos/clients/kargil-equipments.jpg", url: "http://www.kargilequipments.com" },
  { name: "Fateh", logo: "/images/logos/clients/fateh.jpg", url: "https://www.fateheducation.com" },
  { name: "SAPRO", logo: "/images/logos/clients/sapro.jpg", url: "https://www.sapro.com" },
  { name: "Mibo", logo: "/images/logos/clients/mibo.jpg", url: "https://mibo.care" },
  { name: "Aster Pharmacy", logo: "/images/logos/clients/aster-pharmacy.jpg", url: "https://www.asterpharmacy.com" },
  { name: "Softtek", logo: "/images/logos/clients/softtek.jpg", url: "https://www.softtek.com" },
];

export function ClientLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  
  // #region agent log
  useEffect(() => {
    if (typeof window === "undefined") return;
    fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ClientLogos.tsx:35',message:'Component mounted',data:{hasScrollContainer:!!scrollContainerRef.current,hasScrollTrack:!!scrollTrackRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A'})}).catch(()=>{});
  }, []);
  // #endregion
  
  // Check for prefers-reduced-motion on mount
  useEffect(() => {
    // SSR safety check - don't access window on server
    if (typeof window === "undefined" || !window.matchMedia) {
      setPrefersReducedMotion(false);
      setIsPaused(false);
      return;
    }
    
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    
    // Set initial state based on media query
    const initialMatches = mediaQuery.matches;
    setPrefersReducedMotion(initialMatches);
    if (initialMatches) {
      setIsPaused(true);
    }
    
    // Listen for changes to the media query
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      setIsPaused(e.matches);
    };
    
    if (mediaQuery) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);
  
  // Double the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];
  
  // Handle pause/resume with respect to prefers-reduced-motion
  const handlePause = () => setIsPaused(true);
  const handleResume = () => {
    if (!prefersReducedMotion) {
      setIsPaused(false);
    }
  };

  // Horizontal mouse wheel scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let resumeTimeout: NodeJS.Timeout | null = null;

    const handleWheel = (e: WheelEvent) => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ClientLogos.tsx:95',message:'Wheel event',data:{deltaX:e.deltaX,deltaY:e.deltaY,isScrolling:isScrollingRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
      
      // Check if user is scrolling horizontally or vertically
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // Horizontal scroll - let it happen naturally
        return;
      }
      
      // Vertical scroll - convert to horizontal
      e.preventDefault();
      isScrollingRef.current = true;
      container.scrollLeft += e.deltaY;
      
      // Pause auto-scroll while manually scrolling
      setIsPaused(true);
      
      // Clear any existing timeout
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
      }
      
      // Resume auto-scroll after a delay
      resumeTimeout = setTimeout(() => {
        isScrollingRef.current = false;
        if (!prefersReducedMotion) {
          setIsPaused(false);
        }
        resumeTimeout = null;
      }, 1500);
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", handleWheel);
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
      }
    };
  }, [prefersReducedMotion]);

  // Touch/swipe support for mobile
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let isDragging = false;
    let resumeTimeout: NodeJS.Timeout | null = null;

    const handleTouchStart = (e: TouchEvent) => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ClientLogos.tsx:130',message:'Touch start',data:{touchCount:e.touches.length},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isDragging = false;
      setIsPaused(true);
      
      // Clear any existing timeout
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
        resumeTimeout = null;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX || !touchStartY) return;
      
      const touchCurrentX = e.touches[0].clientX;
      const touchCurrentY = e.touches[0].clientY;
      const diffX = touchStartX - touchCurrentX;
      const diffY = touchStartY - touchCurrentY;

      // Determine if this is a horizontal swipe
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isDragging = true;
        container.scrollLeft += diffX;
        touchStartX = touchCurrentX;
      }
    };

    const handleTouchEnd = () => {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ClientLogos.tsx:155',message:'Touch end',data:{wasDragging:isDragging},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      
      if (isDragging) {
        // Resume auto-scroll after touch ends
        resumeTimeout = setTimeout(() => {
          if (!prefersReducedMotion) {
            setIsPaused(false);
          }
          resumeTimeout = null;
        }, 1500);
      }
      
      touchStartX = 0;
      touchStartY = 0;
      isDragging = false;
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      if (resumeTimeout) {
        clearTimeout(resumeTimeout);
      }
    };
  }, [prefersReducedMotion]);

  return (
    <section className="py-16 md:py-20 bg-background overflow-hidden">
      <div className="luxury-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="luxury-label text-gold">Trusted Partners</span>
          <h2 className="mt-4 font-serif text-2xl md:text-3xl font-light text-white">
            Companies We&apos;ve Worked With
          </h2>
        </motion.div>
      </div>

      {/* Marquee Container - auto-playing animation with manual scroll support */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden hide-scrollbar logo-fade-mask"
        role="group"
        aria-label="Scrolling list of client logos; animation pauses on hover or focus; scrollable with mouse wheel or touch"
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onFocus={handlePause}
        onBlur={handleResume}
        tabIndex={0}
        style={{
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
        }}
      >
          {/* Animated Scrolling Track - isolated in its own layer */}
          <div 
            ref={scrollTrackRef}
            className="flex gap-8 md:gap-12 animate-marquee-slow"
            style={{ 
              width: "max-content",
              animationPlayState: isPaused ? "paused" : "running",
              transform: "translateZ(0)", // Force GPU acceleration
              isolation: "isolate", // Create new stacking context to prevent shadow artifacts
              position: "relative",
              zIndex: 1,
              contain: "layout style paint", // Isolate rendering to prevent artifacts
            }}
          >
            {duplicatedClients.map((client, index) => (
              <ClientLogo key={`${client.name}-${index}`} client={client} />
            ))}
          </div>
        </div>
    </section>
  );
}

interface ClientLogoProps {
  client: Client;
}

function ClientLogo({ client }: ClientLogoProps) {
  // New logos that should be zoomed to fill container
  const newLogos = ["Toyota", "Kargil Equipments", "Fateh", "SAPRO", "Mibo", "Aster Pharmacy", "Softtek"];
  const isNewLogo = newLogos.includes(client.name);
  const objectFitClass = isNewLogo ? "object-cover" : "object-contain";

  return (
    <div 
      className="flex-shrink-0 group" 
      style={{ 
        transform: "translateZ(0)", 
        willChange: "transform",
        isolation: "isolate",
      }}
    >
      <a
        href={client.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${client.name} website`}
        className="block cursor-pointer"
        onClick={(e) => {
          // Prevent link click from interfering with scroll
          e.stopPropagation();
        }}
      >
        <div 
          className="relative h-20 md:h-24 w-[142px] md:w-[170px] bg-primary-dark/60 transition-all duration-300 group-hover:bg-primary-dark/80 overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "translateZ(0)",
            boxShadow: "none",
            filter: "none",
            WebkitFilter: "none",
            border: "none",
            outline: "none",
            borderRadius: "0", // Remove rounded corners to test if they're causing shadow
          }}
        >
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className={`${objectFitClass} object-center opacity-70 group-hover:opacity-100 transition-opacity duration-300`}
            sizes="(max-width: 768px) 142px, 170px"
            unoptimized
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translateZ(0)",
              filter: "none",
              WebkitFilter: "none",
              imageRendering: "crisp-edges", // Prevent image rendering artifacts
            }}
          />
        </div>
      </a>
    </div>
  );
}
