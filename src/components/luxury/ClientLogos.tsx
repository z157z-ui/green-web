"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Client {
  name: string;
  logo: string;
  url?: string;
}

const clients: Client[] = [
  { name: "Smart Node", logo: "/images/logos/clients/smart-node.jpg", url: "https://smartnode.in" },
  { name: "Alsina", logo: "/images/logos/clients/alsina.jpg", url: "https://alsina.com" },
  { name: "Bajaj Allianz", logo: "/images/logos/clients/bajaj.jpg", url: "https://www.bajajallianz.com" },
  { name: "Mitsubishi Electric", logo: "/images/logos/clients/mistubishi.jpg", url: "https://www.mitsubishielectric.com" },
  { name: "Thoughtworks", logo: "/images/logos/clients/thoughtworks.jpg", url: "https://www.thoughtworks.com" },
  { name: "BluArmor", logo: "/images/logos/clients/blua.jpg", url: "https://bluarmor.com" },
  { name: "Awfis", logo: "/images/logos/clients/awfis.jpg", url: "https://www.awfis.com" },
  { name: "Credel Capital", logo: "/images/logos/clients/credal.jpg", url: "https://credelcapital.com" },
  { name: "Air Force", logo: "/images/logos/clients/airforce.jpg" },
  { name: "Aster Pharmacy", logo: "/images/logos/clients/aster-pharmacy.jpg", url: "https://www.asterpharmacy.com" },
  { name: "BSF Design", logo: "/images/logos/clients/bsf-design.jpg" },
  { name: "Fateh", logo: "/images/logos/clients/fateh.jpg" },
  { name: "Kargil Equipments", logo: "/images/logos/clients/kargil-equipments.jpg" },
  { name: "Mibo", logo: "/images/logos/clients/mibo.jpg" },
  { name: "NV5", logo: "/images/logos/clients/nv5.jpg", url: "https://www.nv5.com" },
  { name: "Sapro", logo: "/images/logos/clients/sapro.jpg" },
  { name: "Softtek", logo: "/images/logos/clients/softtek.jpg", url: "https://www.softtek.com" },
  { name: "Toyota", logo: "/images/logos/clients/toyota.jpg", url: "https://www.toyota.com" },
];

export function ClientLogos() {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrollingRef = useRef(false);

  // Triple the array for seamless infinite scroll
  // [original] [duplicate1] [duplicate2]
  const tripledClients = [...clients, ...clients, ...clients];

  // Check for prefers-reduced-motion on mount
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      setPrefersReducedMotion(false);
      setIsPaused(false);
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const initialMatches = mediaQuery.matches;
    setPrefersReducedMotion(initialMatches);
    if (initialMatches) {
      setIsPaused(true);
    }

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      setIsPaused(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Initialize scroll position to show middle logo in middle set
  useEffect(() => {
    const container = scrollContainerRef.current;
    const track = scrollTrackRef.current;
    if (!container || !track) return;

    // Initialize to show middle logo in middle set (allows scrolling both left and right)
    const initializeScroll = () => {
      const trackWidth = track.scrollWidth;
      const singleSetWidth = trackWidth / 3;
      const containerWidth = container.clientWidth;
      
      // Get first logo element to measure actual dimensions
      const firstLogo = track.querySelector('.flex-shrink-0') as HTMLElement;
      if (!firstLogo) {
        // Fallback: use middle set start
        container.scrollLeft = singleSetWidth;
        return;
      }
      
      const logoWidth = firstLogo.offsetWidth;
      const gap = 48; // md:gap-12 = 48px
      const logoWithGap = logoWidth + gap;
      
      // Calculate position of middle logo (index 8 for 18 logos)
      const logoCount = clients.length;
      const middleLogoIndex = Math.floor(logoCount / 2); // Index 8 for 18 logos
      
      // Position of middle logo in middle set
      const middleLogoPosition = singleSetWidth + (middleLogoIndex * logoWithGap);
      
      // Center it in the viewport
      const scrollPosition = middleLogoPosition - (containerWidth / 2) + (logoWidth / 2);
      
      // Ensure we're in the middle set range
      const set2Start = singleSetWidth;
      const set2End = singleSetWidth * 2;
      const finalPosition = Math.max(set2Start, Math.min(set2End - containerWidth, scrollPosition));
      
      container.scrollLeft = finalPosition;
    };

    // Initialize after a delay to ensure dimensions are calculated
    const initTimer = setTimeout(initializeScroll, 300);
    // Also try on next frame
    requestAnimationFrame(() => {
      setTimeout(initializeScroll, 100);
    });

    return () => clearTimeout(initTimer);
  }, []);

  // Auto-scroll using setInterval (simpler and more reliable)
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const container = scrollContainerRef.current;
    const track = scrollTrackRef.current;
    if (!container || !track) return;

    let intervalId: NodeJS.Timeout | null = null;
    let startDelay: NodeJS.Timeout | null = null;

    const startAutoScroll = () => {
      // Clear any existing interval first
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      if (isPaused || isScrollingRef.current) return;

      intervalId = setInterval(() => {
        const currentContainer = scrollContainerRef.current;
        const currentTrack = scrollTrackRef.current;
        
        if (!currentContainer || !currentTrack || isPaused || isScrollingRef.current || prefersReducedMotion) {
          if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
          }
          return;
        }

        const trackWidth = currentTrack.scrollWidth;
        if (trackWidth === 0) return;

        const singleSetWidth = trackWidth / 3;
        const set1Start = 0;
        const set2End = singleSetWidth * 2;

        let newScrollLeft = currentContainer.scrollLeft + 1.2; // 1.2px per interval (faster scroll)

        if (newScrollLeft >= set2End) {
          const overflow = newScrollLeft - set2End;
          newScrollLeft = set1Start + overflow;
        }

        isAutoScrollingRef.current = true;
        currentContainer.scrollLeft = newScrollLeft;
        setTimeout(() => {
          isAutoScrollingRef.current = false;
        }, 10);
      }, 16); // ~60fps
    };

    // Start after initialization delay
    startDelay = setTimeout(() => {
      startAutoScroll();
    }, 1500);

    return () => {
      if (startDelay) {
        clearTimeout(startDelay);
      }
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };
  }, [isPaused, prefersReducedMotion]);

  // Handle pause/resume
  const handlePause = () => setIsPaused(true);
  const handleResume = () => {
    if (!prefersReducedMotion) {
      setIsPaused(false);
    }
  };

  // Clear resume timeout helper
  const clearResumeTimeout = () => {
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  // Schedule resume after inactivity
  const scheduleResume = useCallback(() => {
    clearResumeTimeout();
    if (!prefersReducedMotion) {
      resumeTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        setIsPaused(false);
        resumeTimeoutRef.current = null;
      }, 2000);
    }
  }, [prefersReducedMotion]);

  // Optimized scroll detection with infinite loop logic for manual scrolling
  useEffect(() => {
    const container = scrollContainerRef.current;
    const track = scrollTrackRef.current;
    if (!container || !track) return;

    let lastScrollLeft = container.scrollLeft;
    let isUserScrolling = false;
    let isJumping = false;
    let scrollTimeout: NodeJS.Timeout | null = null;
    let initializationComplete = false;
    let initTimer: NodeJS.Timeout | null = null;
    let lastScrollTime = 0;
    let scrollHistory: number[] = [];

    // Mark initialization as complete after a delay
    initTimer = setTimeout(() => {
      initializationComplete = true;
    }, 1500); // Increased delay to allow auto-scroll to start

    const handleScroll = () => {
      if (isJumping) return;

      // Ignore scroll events from auto-scroll
      if (isAutoScrollingRef.current) {
        lastScrollLeft = container.scrollLeft;
        return;
      }

      const currentScrollLeft = container.scrollLeft;
      const scrollDelta = Math.abs(currentScrollLeft - lastScrollLeft);
      const trackWidth = track.scrollWidth;
      const singleSetWidth = trackWidth / 3;
      const now = Date.now();

      // Only detect user scrolling if initialization is complete
      if (initializationComplete && scrollDelta > 1) {
        // Track scroll history to detect user vs auto-scroll
        scrollHistory.push(scrollDelta);
        if (scrollHistory.length > 5) {
          scrollHistory.shift();
        }

        // Calculate average scroll delta
        const avgDelta = scrollHistory.reduce((a, b) => a + b, 0) / scrollHistory.length;

        // User scrolling typically has larger, more variable deltas
        // Auto-scroll has small, consistent deltas (around 0.2-0.3 pixels)
        const isLikelyUserScroll = scrollDelta > 10 || avgDelta > 5 || (now - lastScrollTime < 50 && scrollDelta > 3);
        
        if (isLikelyUserScroll) {
          isUserScrolling = true;
          if (!isPaused) {
            setIsPaused(true);
          }
          isScrollingRef.current = true;
        }
      }

      lastScrollLeft = currentScrollLeft;
      lastScrollTime = now;

      // Infinite loop boundaries
      const set1Start = 0;
      const set1End = singleSetWidth;
      const set2Start = singleSetWidth;
      const set2End = singleSetWidth * 2;

      // If scrolled past end of second set, continue to first set (seamless forward - infinite loop)
      if (currentScrollLeft >= set2End) {
        isJumping = true;
        const offset = currentScrollLeft - set2End;
        container.scrollLeft = set1Start + offset;
        requestAnimationFrame(() => {
          isJumping = false;
        });
      }
      // If scrolled before start of first set, jump to end of second set (seamless backward - infinite loop)
      else if (currentScrollLeft < set1Start) {
        isJumping = true;
        const offset = set1Start - currentScrollLeft;
        container.scrollLeft = set2End - offset;
        requestAnimationFrame(() => {
          isJumping = false;
        });
      }

      lastScrollLeft = container.scrollLeft;

      // Clear and reset timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Schedule resume after user stops scrolling
      if (isUserScrolling) {
        scrollTimeout = setTimeout(() => {
          isUserScrolling = false;
          isScrollingRef.current = false;
          // Don't reset position - continue from where user left off
          setIsPaused(false);
          scrollTimeout = null;
        }, 2000);
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      if (initTimer) {
        clearTimeout(initTimer);
      }
      clearResumeTimeout();
    };
  }, [isPaused, prefersReducedMotion]);

  // Wheel handler with left-scroll detection at boundaries
  useEffect(() => {
    const container = scrollContainerRef.current;
    const track = scrollTrackRef.current;
    if (!container || !track) return;

    const handleWheel = (e: WheelEvent) => {
      setIsPaused(true);
      isScrollingRef.current = true;

      const trackWidth = track.scrollWidth;
      const singleSetWidth = trackWidth / 3;
      const set2End = singleSetWidth * 2;

      // Horizontal scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        // If at start (scrollLeft <= small threshold) and trying to scroll left (deltaX > 0)
        if (container.scrollLeft <= 5 && e.deltaX > 0) {
          // Jump to end of second set and continue scrolling left
          container.scrollLeft = set2End - Math.abs(e.deltaX) * 0.5;
        }
        scheduleResume();
        return;
      }

      // Vertical scroll - convert to horizontal
      e.preventDefault();
      const scrollAmount = e.deltaY * 0.5;
      
      // If at start and trying to scroll left (deltaY < 0 means scroll up = scroll left)
      if (container.scrollLeft <= 5 && e.deltaY < 0) {
        // Jump to end of second set and continue scrolling
        container.scrollLeft = set2End + Math.abs(scrollAmount);
      } else {
        container.scrollLeft += scrollAmount;
      }
      
      scheduleResume();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [prefersReducedMotion, scheduleResume]);

  // Touch handler with left-scroll detection at boundaries
  useEffect(() => {
    const container = scrollContainerRef.current;
    const track = scrollTrackRef.current;
    if (!container || !track) return;

    let touchStartX = 0;
    let touchStartY = 0;
    let isDragging = false;
    let initialScrollLeft = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      initialScrollLeft = container.scrollLeft;
      isDragging = false;
      setIsPaused(true);
      clearResumeTimeout();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX || !touchStartY) return;

      const touchCurrentX = e.touches[0].clientX;
      const touchCurrentY = e.touches[0].clientY;
      const diffX = touchStartX - touchCurrentX;
      const diffY = touchStartY - touchCurrentY;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
        isDragging = true;
        isScrollingRef.current = true;
        
        const trackWidth = track.scrollWidth;
        const singleSetWidth = trackWidth / 3;
        const set2End = singleSetWidth * 2;
        
        // If at start (scrollLeft <= small threshold) and trying to scroll left (swiping right, diffX < 0)
        if (initialScrollLeft <= 5 && diffX < 0) {
          // Jump to end of second set
          container.scrollLeft = set2End - Math.abs(diffX);
        }
        
        touchStartX = touchCurrentX;
      }
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        scheduleResume();
      }
      touchStartX = 0;
      touchStartY = 0;
      isDragging = false;
      initialScrollLeft = 0;
    };

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      clearResumeTimeout();
    };
  }, [prefersReducedMotion, scheduleResume]);

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

      {/* Slow Slideshow Animation Above Logos */}
      {!prefersReducedMotion && (
        <div className="luxury-container mb-6">
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <p className="text-sm md:text-base text-white/60 font-light">
              Trusted by industry leaders worldwide
            </p>
          </motion.div>
        </div>
      )}

      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-x-auto overflow-y-hidden hide-scrollbar"
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
        {/* Carousel Track */}
        <div 
          ref={scrollTrackRef}
          className="flex gap-8 md:gap-12"
          style={{ 
            width: "max-content",
          }}
        >
          {tripledClients.map((client, index) => (
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
  const logoContent = (
    <div className="relative h-20 md:h-32 lg:h-36 w-[143px] md:w-[200px] lg:w-[240px] rounded-xl border border-white/10 bg-primary-dark/60 transition-all duration-300 group-hover:border-gold/30 group-hover:bg-primary-dark/80 overflow-hidden">
      <Image
        src={client.logo}
        alt={client.name}
        fill
        className="object-cover object-center opacity-70 group-hover:opacity-100 transition-all duration-300"
        sizes="(max-width: 768px) 143px, (max-width: 1024px) 200px, 240px"
        unoptimized
      />
    </div>
  );

  return (
    <div className="flex-shrink-0 group">
      {client.url ? (
        <a
          href={client.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-background rounded-xl transition-all"
          aria-label={`Visit ${client.name} website`}
        >
          {logoContent}
        </a>
      ) : (
        <div className="block">{logoContent}</div>
      )}
    </div>
  );
}
