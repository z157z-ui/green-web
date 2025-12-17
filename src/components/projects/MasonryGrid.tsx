"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/data";
import { MapPin } from "lucide-react";

interface MasonryGridProps {
  projects: Project[];
}

export function MasonryGrid({ projects }: MasonryGridProps) {
  return (
    <div className="luxury-container py-12">
      <motion.div 
        className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        layout
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  // Determine aspect ratio class based on project data
  const aspectClass = 
    project.aspectRatio === "portrait" 
      ? "aspect-[3/4]" 
      : project.aspectRatio === "landscape" 
        ? "aspect-[4/3]" 
        : "aspect-square";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        layout: { type: "spring", stiffness: 300, damping: 30 }
      }}
      className="break-inside-avoid mb-6"
    >
      <Link href={`/projects/${project.id}`} className="group block">
        <div className={`relative ${aspectClass} overflow-hidden rounded-lg border border-white/10 group-hover:border-accent/50 transition-colors duration-500`}>
          {/* Project Image */}
          <Image
            src={project.featuredImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Dark Overlay - Appears on Hover */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
          
          {/* Content - Appears on Hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {/* Category Tag */}
            <motion.span 
              className="inline-block px-3 py-1 mb-3 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 rounded-full w-fit border border-accent/30"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {project.category}
            </motion.span>
            
            {/* Title */}
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-2 leading-tight">
              {project.title}
            </h3>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-text-grey">
              <MapPin size={14} className="text-gold" />
              <span className="text-sm">{project.location}</span>
            </div>
            
            {/* Year & Size */}
            <div className="flex items-center gap-4 mt-3 text-xs text-text-grey">
              <span>{project.year}</span>
              <span className="w-1 h-1 rounded-full bg-text-grey" />
              <span>{project.size}</span>
            </div>
          </div>
          
          {/* Bottom Gradient - Always visible for readability */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
          
          {/* Basic Info - Always visible, hides on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
            <h3 className="font-serif text-lg text-white font-medium truncate">
              {project.title}
            </h3>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

