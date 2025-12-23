"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play, Pause } from "lucide-react";
import Link from "next/link";

export function LuxuryHero() {
  // #region agent log
  useEffect(() => {
    const renderId = Math.random().toString(36).substring(7);
    fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LuxuryHero.tsx:component-render',message:'LuxuryHero component rendered',data:{renderId,timestamp:Date.now(),stackTrace:new Error().stack?.split('\n').slice(0,5).join('|')},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'DUPLICATE'})}).catch(()=>{});
  }, []);
  // #endregion
  
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const { scrollY } = useScroll();
  
  // Parallax and fade effects - text stays fixed, only video scales
  const videoScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.5, 0.8]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate
    video.playbackRate = 0.8;

    // Ensure video plays when loaded
    const handleCanPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LuxuryHero.tsx:video-play-success',message:'Video playing',data:{isPlaying:!video.paused,currentTime:video.currentTime},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'VIDEO_PLAY'})}).catch(()=>{});
            // #endregion
            setIsPlaying(true);
          })
          .catch((err) => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LuxuryHero.tsx:video-play-failed',message:'Video play rejected',data:{error:err.message},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'VIDEO_PLAY'})}).catch(()=>{});
            // #endregion
          });
      }
    };

    // Try to play immediately if video is already loaded
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadeddata', handleCanPlay);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadeddata', handleCanPlay);
    };
  }, []);

  // #region agent log
  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const isMobile = vw < 640;
    fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LuxuryHero.tsx:useEffect',message:'Viewport and video state',data:{viewportWidth:vw,viewportHeight:vh,isMobile,isVideoLoaded,containerHeight:containerRef.current?.offsetHeight},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1,H4,H5'})}).catch(()=>{});
  }, [isVideoLoaded]);
  // #endregion

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // #region agent log
  useEffect(() => {
    const checkDuplicates = () => {
      const sections = document.querySelectorAll('section.relative.h-screen');
      const heroSections = Array.from(sections).filter(s => 
        s.classList.contains('overflow-hidden') && 
        s.classList.contains('bg-primary-dark')
      );
      fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LuxuryHero.tsx:checkDuplicates',message:'Checking for duplicate hero sections',data:{totalSections:sections.length,heroSectionsCount:heroSections.length,containerId:containerRef.current?.id},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'DUPLICATE'})}).catch(()=>{});
    };
    const timer = setTimeout(checkDuplicates, 1000);
    return () => clearTimeout(timer);
  }, []);
  // #endregion

  return (
    <section
      ref={containerRef}
      id="luxury-hero-section"
      className="relative h-screen w-full overflow-hidden bg-primary-dark"
    >
      {/* Video Background with Parallax */}
      <motion.div 
        style={{ scale: videoScale }} 
        className="absolute inset-0 origin-center"
      >
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
          preload="auto"
          webkit-playsinline="true"
          x5-playsinline="true"
          onLoadedData={() => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LuxuryHero.tsx:video-onLoadedData',message:'Video loaded',data:{videoWidth:videoRef.current?.videoWidth,videoHeight:videoRef.current?.videoHeight,viewportWidth:window.innerWidth,readyState:videoRef.current?.readyState},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
            // #endregion
            setIsVideoLoaded(true);
          }}
          onCanPlay={() => {
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch(() => {});
            }
          }}
          onError={(e) => {
            // #region agent log
            fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'LuxuryHero.tsx:video-error',message:'Video load error',data:{error:'Video failed to load'},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'VIDEO_PLAY'})}).catch(()=>{});
            // #endregion
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
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/40 sm:from-black/50 md:from-black/60 via-black/30 sm:via-black/35 md:via-black/40 to-black/50 sm:to-black/60 md:to-black/70" 
        />
        
        {/* Cinematic vignette effect - lighter on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.4)_100%)] sm:bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        
        {/* Bottom gradient for text readability - reduced on mobile */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 sm:h-1/3 bg-gradient-to-t from-primary-dark/70 sm:from-primary-dark/80 md:from-primary-dark/90 to-transparent" />
      </motion.div>

      {/* Content - pushed down from navigation, stays fixed on scroll */}
      <motion.div
        className="relative z-20 flex h-full flex-col items-center justify-start pt-24 sm:pt-32 md:pt-40 lg:justify-center px-4 sm:px-6 text-center"
      >
        {/* Main Heading with staggered reveal - smaller on mobile */}
        <motion.h1
          className="mb-3 sm:mb-4 md:mb-6 font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-[1.1] text-white max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">WE DON&apos;T JUST BUILD</span>
          <span className="block mt-0.5 sm:mt-1 md:mt-2">
            STRUCTURES{" "}
            <span className="text-gold italic">WE BUILD DREAMS</span>
          </span>
        </motion.h1>

        {/* Label with glow effect - moved below heading, smaller */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 sm:mb-4 md:mb-6"
        >
          <span className="inline-block px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/30 backdrop-blur-sm">
            <span className="text-accent font-medium tracking-[0.1em] sm:tracking-[0.15em] text-[10px] sm:text-xs md:text-sm">
              7+ YEARS OF EXCELLENCE • 50+ PROJECTS
            </span>
          </span>
        </motion.div>

        {/* Subtitle with tagline - smaller on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 sm:mb-6 md:mb-8"
        >
          <p className="text-xs sm:text-sm md:text-base text-white/90 font-light max-w-xl sm:max-w-2xl mb-2 sm:mb-3 px-2">
            Bangalore&apos;s premier design-build firm specializing in integrated 
            interior and turnkey solutions
          </p>
          <p className="text-accent/90 text-[10px] sm:text-xs md:text-sm tracking-[0.1em] sm:tracking-[0.15em] uppercase">
            Innovate · Design · Inspire
          </p>
        </motion.div>

        {/* CTA Buttons with hover effects - consistent spacing at each breakpoint */}
        <motion.div
          className="relative z-30 flex flex-col gap-3 sm:flex-row sm:gap-4 md:gap-4 lg:gap-6 w-full sm:w-auto justify-center items-center px-2 sm:px-0"
          style={{ position: 'relative', zIndex: 30 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href="/contact"
            className="group relative z-30 inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-3.5 lg:px-10 lg:py-4 bg-accent font-semibold text-xs sm:text-sm md:text-base lg:text-base rounded-full overflow-hidden transition-all duration-500 hover:bg-gold hover:text-white hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:-translate-y-1 whitespace-nowrap shadow-lg shadow-accent/50 border-2 border-white/20"
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
            className="group relative z-30 inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 md:px-9 md:py-3.5 lg:px-10 lg:py-4 border-2 border-white/40 text-white font-medium text-xs sm:text-sm md:text-base lg:text-base rounded-full backdrop-blur-sm hover:border-gold hover:text-gold transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] whitespace-nowrap"
          >
            <span className="drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] [text-shadow:_0_0_8px_rgba(0,0,0,0.8)]">View Portfolio</span>
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 rounded-full bg-accent group-hover:bg-gold transition-colors" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Video Control Button - smaller on mobile */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={toggleVideo}
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/70 hover:text-white hover:bg-white/20 transition-all duration-300"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
      </motion.button>

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
