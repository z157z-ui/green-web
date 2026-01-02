"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { projectCategories, ProjectCategory } from "@/lib/data";

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export function ProjectFilter({ activeCategory, onCategoryChange }: ProjectFilterProps) {
  const filterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        const headerHeight = window.innerWidth >= 1024 ? 96 : 80; // lg:h-24 = 96px, h-20 = 80px
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ProjectFilter.tsx:handleScroll',message:'Filter position check',data:{top:rect.top,headerHeight,windowWidth:window.innerWidth,isSticky:rect.top <= headerHeight,scrollY:window.scrollY},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H1'})}).catch(()=>{});
        // #endregion
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={filterRef} className="sticky top-20 lg:top-24 z-30 bg-background/95 backdrop-blur-md border-b border-white/10 py-4">
      <div className="luxury-container">
        <nav className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category.id;
            
            return (
              <motion.button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`relative px-4 py-2 text-sm md:text-base font-medium transition-colors opacity-100 z-20 ${
                  isActive ? "text-accent" : "text-text-grey hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.span
                    layoutId="activeFilterDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {/* Underline on active */}
                {isActive && (
                  <motion.span
                    layoutId="activeFilterLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent/30"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                
                {category.label}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

