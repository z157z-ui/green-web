"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectFilter, MasonryGrid } from "@/components/projects";
import { projects, getProjectsByCategory, ProjectCategory } from "@/lib/data";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const filteredProjects = getProjectsByCategory(activeCategory);

  return (
    <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
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
              <span className="block text-4xl font-serif text-gold">{projects.length}+</span>
              <span className="text-sm text-text-grey uppercase tracking-wider">Projects</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <span className="block text-4xl font-serif text-gold">5</span>
              <span className="text-sm text-text-grey uppercase tracking-wider">Cities</span>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <span className="block text-4xl font-serif text-gold">8+</span>
              <span className="text-sm text-text-grey uppercase tracking-wider">Years</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <ProjectFilter 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Projects Grid */}
      <MasonryGrid projects={filteredProjects} />

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

