"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ProjectFilter, MasonryGrid } from "@/components/projects";
import { projects, getProjectsByCategory, ProjectCategory } from "@/lib/data";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const filteredProjects = getProjectsByCategory(activeCategory);
  const heroRef = useRef<HTMLElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkGaps = () => {
      if (heroRef.current && filterRef.current && gridRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        const filterTop = filterRef.current.getBoundingClientRect().top;
        const filterBottom = filterRef.current.getBoundingClientRect().bottom;
        const gridTop = gridRef.current.getBoundingClientRect().top;
        // #region agent log
        fetch('http://127.0.0.1:7242/ingest/6ea2813b-d6e8-4e0c-80e9-5d42c59d12f8',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'projects/page.tsx:checkGaps',message:'Gap measurements',data:{heroBottom,filterTop,filterBottom,gridTop,gapHeroToFilter:filterTop - heroBottom,gapFilterToGrid:gridTop - filterBottom,scrollY:window.scrollY},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'H3'})}).catch(()=>{});
        // #endregion
      }
    };
    
    checkGaps();
    window.addEventListener('scroll', checkGaps, { passive: true });
    window.addEventListener('resize', checkGaps, { passive: true });
    return () => {
      window.removeEventListener('scroll', checkGaps);
      window.removeEventListener('resize', checkGaps);
    };
  }, []);

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="py-16 md:py-24">
        <div className="luxury-container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="luxury-label text-gold"
          >
            Our Portfolio
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white"
          >
            Featured Projects
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-text-grey max-w-2xl mx-auto"
          >
            Explore our curated collection of luxury residential, commercial, and 
            hospitality projects across South India.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-12 mt-12"
          >
            <div className="text-center">
              <span className="block text-4xl font-serif text-gold">50+</span>
              <span className="text-sm text-text-grey uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <span className="block text-4xl font-serif text-gold">5</span>
              <span className="text-sm text-text-grey uppercase tracking-wider">Cities</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <span className="block text-4xl font-serif text-gold">7+</span>
              <span className="text-sm text-text-grey uppercase tracking-wider">Years</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <div ref={filterRef}>
        <ProjectFilter 
          activeCategory={activeCategory} 
          onCategoryChange={setActiveCategory} 
        />
      </div>

      {/* Projects Grid - Add spacing to prevent overlap with sticky filter */}
      <section ref={gridRef} className="pt-4">
        <MasonryGrid projects={filteredProjects} />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="luxury-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-text-grey max-w-xl mx-auto mb-8">
              Let&apos;s discuss how we can transform your space into something extraordinary.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-gold transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

