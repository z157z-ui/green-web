"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Project } from "@/lib/data";
import { MapPin, Calendar, Maximize } from "lucide-react";

interface ProjectDetailHeroProps {
  project: Project;
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src={project.featuredImage}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4"
        style={{ opacity }}
      >
        {/* Category Badge */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-4 py-2 mb-6 text-xs font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full border border-accent/30"
        >
          {project.category}
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium text-white max-w-5xl leading-tight"
        >
          {project.title}
        </motion.h1>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-2 mt-6 text-gold"
        >
          <MapPin size={18} />
          <span className="text-lg font-medium">{project.location}</span>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center gap-8 mt-12"
        >
          <div className="flex items-center gap-3 text-text-grey">
            <Calendar size={18} className="text-accent" />
            <span>{project.year}</span>
          </div>
          <div className="w-px h-6 bg-white/20" />
          <div className="flex items-center gap-3 text-text-grey">
            <Maximize size={18} className="text-accent" />
            <span>{project.size}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 text-text-grey"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}

