"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function LuxuryHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [textFaded, setTextFaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate
    video.playbackRate = 0.8;

    // Ensure video plays when loaded
    const handleCanPlay = async () => {
      try {
        // Force play with proper error handling
        await video.play();
        setIsVideoLoaded(true);
      } catch (err) {
        // Log only in development
        if (process.env.NODE_ENV === 'development') {
          console.error('Video play failed:', err);
        }
        // Try to play again after a short delay (browser autoplay policy)
        setTimeout(() => {
          video.play().catch(() => {
            // If still fails, keep fallback visible
            setIsVideoLoaded(false);
          });
        }, 500);
      }
    };

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      handleCanPlay();
    };

    const handleError = () => {
      // Log only in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Video load error');
      }
      // Keep fallback visible if video fails to load
      setIsVideoLoaded(false);
    };

    // Try to play immediately if video is already loaded
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('playing', () => setIsVideoLoaded(true));

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('playing', () => setIsVideoLoaded(true));
    };
  }, []);

  // Fade out text after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setTextFaded(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <section
      ref={containerRef}
      id="luxury-hero-section"
      className="relative h-screen w-full overflow-hidden bg-primary-dark"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Fallback gradient while video loads */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-primary-dark via-background to-black transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        
        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          webkit-playsinline="true"
          x5-playsinline="true"
          onLoadedData={() => {
            setIsVideoLoaded(true);
          }}
          onCanPlay={() => {
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch(() => {
                // If autoplay fails, try again after user interaction
                if (process.env.NODE_ENV === 'development') {
                  console.warn('Autoplay blocked, waiting for user interaction');
                }
              });
            }
          }}
          onError={(e) => {
            // Log only in development
            if (process.env.NODE_ENV === 'development') {
              console.error('Video load error:', e);
            }
            // Keep fallback visible if video fails
            setIsVideoLoaded(false);
          }}
          onPlaying={() => {
            // Video started playing successfully
            setIsVideoLoaded(true);
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ zIndex: 1 }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dynamic Overlay - lighter on mobile for better video visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 sm:from-black/50 md:from-black/60 via-black/30 sm:via-black/35 md:via-black/40 to-black/50 sm:to-black/60 md:to-black/70" />
        
        {/* Cinematic vignette effect - lighter on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.4)_100%)] sm:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        
        {/* Bottom gradient for text readability - reduced on mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 sm:h-1/3 bg-gradient-to-t from-primary-dark/70 sm:from-primary-dark/80 md:from-primary-dark/90 to-transparent" />
      </div>

      {/* Content - pushed down from navigation, stays fixed on scroll */}
      <motion.div
        className="relative z-20 flex h-full flex-col items-center justify-end pb-12 sm:pb-16 md:justify-center md:pt-40 lg:justify-center px-4 sm:px-6 text-center"
      >
        {/* Main Heading with smooth slow fade animation - aesthetic styling with glass background */}
        <motion.div
          className="relative mb-3 sm:mb-4 md:mb-6 max-w-4xl mx-auto"
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isMobile ? { opacity: 1, y: 0 } : { opacity: textFaded ? 0 : 1, y: 0 }}
          transition={isMobile ? { duration: 0 } : { 
            duration: textFaded ? 1.5 : 2, 
            delay: textFaded ? 0 : 0.5, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {/* Glass blur background */}
          <div 
            className="absolute inset-0 rounded-2xl -z-10"
            style={{
              background: 'rgba(0, 0, 0, 0.35)',
              backdropFilter: isMobile ? 'blur(4px)' : 'blur(8px)',
              WebkitBackdropFilter: isMobile ? 'blur(4px)' : 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
            }}
          />
          <motion.h1
            className="relative z-10 font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.15] text-white tracking-tight px-6 py-4 sm:px-8 sm:py-6 md:px-10 md:py-8"
          >
          <motion.span 
            className="block mb-2 sm:mb-3 md:mb-4"
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { 
              duration: 2.5, 
              delay: 0.7, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.02em',
            }}
          >
            WE DON&apos;T JUST BUILD
          </motion.span>
          <motion.span 
            className="block mt-0.5 sm:mt-1 md:mt-2"
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { 
              duration: 2.5, 
              delay: 1, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.02em',
            }}
          >
            STRUCTURES
          </motion.span>
          <motion.span 
            className="block mt-0.5 sm:mt-1 md:mt-2"
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile ? { duration: 0 } : { 
              duration: 2.5, 
              delay: 1.3, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            style={{
              textShadow: '0 2px 30px rgba(197, 165, 114, 0.6), 0 0 50px rgba(197, 165, 114, 0.4)',
              letterSpacing: '0.02em',
            }}
          >
            <span className="text-gold italic font-normal">
              WE BUILD DREAMS
            </span>
          </motion.span>
          </motion.h1>
        </motion.div>

        {/* Label with glow effect - smooth fade */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
          animate={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: textFaded ? 0 : 1, y: 0, scale: 1 }}
          transition={isMobile ? { duration: 0 } : { 
            duration: textFaded ? 1.5 : 2, 
            delay: textFaded ? 0 : 1.5, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-[2px] sm:backdrop-blur-sm shadow-lg shadow-accent/20">
            <span className="text-accent font-medium tracking-[0.1em] sm:tracking-[0.15em] text-[10px] sm:text-xs md:text-sm">
              7+ YEARS OF EXCELLENCE • 50+ PROJECTS
            </span>
          </span>
        </motion.div>

        {/* Subtitle with tagline - smooth fade animation with glass blur background */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={isMobile ? { opacity: 1, y: 0 } : { opacity: textFaded ? 0 : 1, y: 0 }}
          transition={isMobile ? { duration: 0 } : { 
            duration: textFaded ? 1.5 : 2, 
            delay: textFaded ? 0 : 1.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="relative mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto"
        >
          {/* Glass blur background for subtitle */}
          <div 
            className="absolute inset-0 rounded-xl -z-10"
            style={{
              background: 'rgba(0, 0, 0, 0.25)',
              backdropFilter: isMobile ? 'blur(4px)' : 'blur(6px)',
              WebkitBackdropFilter: isMobile ? 'blur(4px)' : 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
            }}
          />
          <div className="relative z-10 px-4 py-3 sm:px-6 sm:py-4">
            <motion.p 
              className="text-xs sm:text-sm md:text-base text-white/95 font-light max-w-xl sm:max-w-2xl mb-2 sm:mb-3 leading-relaxed"
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={isMobile ? { opacity: 1 } : { opacity: textFaded ? 0 : 1 }}
              transition={isMobile ? { duration: 0 } : { 
                duration: textFaded ? 1.5 : 2.5, 
                delay: textFaded ? 0 : 2, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{
                textShadow: '0 1px 10px rgba(0, 0, 0, 0.5)',
              }}
            >
              Bangalore&apos;s premier design-build firm specializing in integrated 
              interior and turnkey solutions
            </motion.p>
            <motion.p 
              className="text-accent/95 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium"
              initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
              animate={isMobile ? { opacity: 1 } : { opacity: textFaded ? 0 : 1 }}
              transition={isMobile ? { duration: 0 } : { 
                duration: textFaded ? 1.5 : 2.5, 
                delay: textFaded ? 0 : 2.3, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              style={{
                textShadow: '0 1px 15px rgba(183, 231, 161, 0.4)',
                letterSpacing: '0.15em',
              }}
            >
              Innovate · Design · Inspire
            </motion.p>
          </div>
        </motion.div>

        {/* CTA Buttons - always visible */}
        <motion.div
          className="relative z-50 flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-4 lg:gap-6 w-full sm:w-auto justify-center items-center px-2 sm:px-0 mb-16 sm:mb-20 md:mb-24 lg:mb-32"
          style={{ position: 'relative', zIndex: 50 }}
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={isMobile ? { duration: 0 } : { 
            duration: 2, 
            delay: 2.5, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          <Link
            href="/contact"
            className="group relative z-50 inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-3.5 lg:px-10 lg:py-4 bg-accent font-semibold text-xs sm:text-sm md:text-base lg:text-base rounded-full overflow-hidden transition-all duration-500 hover:bg-gold hover:text-white hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 whitespace-nowrap shadow-lg shadow-accent/50 border-2 border-white/20"
          >
            <span className="relative z-10 text-white font-bold [text-shadow:_2px_2px_10px_rgba(0,0,0,1),_0_0_25px_rgba(0,0,0,0.7),_1px_1px_0_rgba(0,0,0,0.8)]">Start Your Project</span>
            <motion.span
              className="inline-block relative z-10 text-sm sm:text-base md:text-base text-white font-bold [text-shadow:_2px_2px_8px_rgba(0,0,0,0.8)]"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
            >
              →
            </motion.span>
          </Link>
          <Link
            href="/projects"
            className="group relative z-50 inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-3.5 lg:px-10 lg:py-4 border-2 border-white/40 text-white font-medium text-xs sm:text-sm md:text-base lg:text-base rounded-full backdrop-blur-sm hover:border-gold hover:text-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] whitespace-nowrap"
          >
            <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] [text-shadow:_0_0_8px_rgba(0,0,0,0.8)]">View Portfolio</span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 rounded-full bg-accent group-hover:bg-gold transition-colors" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - smaller on mobile */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <span className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="h-4 w-4 sm:h-6 sm:w-6 text-accent" />
        </motion.div>
      </motion.div>

      {/* Decorative corner accents - smaller on mobile */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-accent/30 pointer-events-none" />
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-accent/30 pointer-events-none" />
    </section>
  );
}
