"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { getProjectById, getAdjacentProjects } from "@/lib/data";
import { ProjectDetailHero, ProjectGallery } from "@/components/projects";
import { ArrowLeft, ArrowRight, Target, Lightbulb } from "lucide-react";

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  
  const project = getProjectById(projectId);
  const { prev, next } = getAdjacentProjects(projectId);

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Project Not Found</h1>
          <p className="text-text-grey mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/projects" 
            className="inline-block px-6 py-3 bg-accent text-primary-dark font-semibold rounded-lg"
          >
            View All Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <ProjectDetailHero project={project} />

      {/* Project Specs */}
      <section className="py-16 bg-primary-dark">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-6 border border-white/10 rounded-lg"
            >
              <span className="text-xs uppercase tracking-widest text-accent mb-2 block">Location</span>
              <span className="font-serif text-2xl text-white">{project.location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 border border-white/10 rounded-lg"
            >
              <span className="text-xs uppercase tracking-widest text-accent mb-2 block">Size</span>
              <span className="font-serif text-2xl text-white">{project.size}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 border border-white/10 rounded-lg"
            >
              <span className="text-xs uppercase tracking-widest text-accent mb-2 block">Year</span>
              <span className="font-serif text-2xl text-white">{project.year}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Story - Challenge & Solution */}
      <section className="py-20 bg-background">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="luxury-label text-gold">The Story</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-white">
              Behind The Design
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="luxury-card p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-gold/10">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-2xl text-gold">The Challenge</h3>
              </div>
              <p className="text-text-grey leading-relaxed text-lg">
                {project.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="luxury-card p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-accent">Our Solution</h3>
              </div>
              <p className="text-text-grey leading-relaxed text-lg">
                {project.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <ProjectGallery images={project.images} title={project.title} />

      {/* Project Navigation */}
      <section className="py-16 bg-primary-dark border-t border-white/10">
        <div className="luxury-container">
          <div className="flex items-center justify-between">
            {/* Previous Project */}
            {prev ? (
              <Link 
                href={`/projects/${prev.id}`}
                className="group flex items-center gap-4 text-text-grey hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                <div className="text-left">
                  <span className="text-xs uppercase tracking-widest text-accent block mb-1">Previous</span>
                  <span className="font-serif text-lg">{prev.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {/* All Projects Link */}
            <Link 
              href="/projects"
              className="hidden md:flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-text-grey hover:text-white hover:border-accent transition-all"
            >
              <span className="text-sm uppercase tracking-widest">All Projects</span>
            </Link>

            {/* Next Project */}
            {next ? (
              <Link 
                href={`/projects/${next.id}`}
                className="group flex items-center gap-4 text-text-grey hover:text-white transition-colors"
              >
                <div className="text-right">
                  <span className="text-xs uppercase tracking-widest text-accent block mb-1">Next</span>
                  <span className="font-serif text-lg">{next.title}</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="luxury-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Inspired by This Project?
            </h2>
            <p className="text-text-grey max-w-xl mx-auto mb-8">
              Let&apos;s discuss how we can create something equally stunning for your space.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-gold transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

