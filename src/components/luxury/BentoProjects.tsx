"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects as allProjects } from "@/lib/data";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  size: "small" | "large" | "medium";
  span?: number; // For custom column spans
}

// Map real projects to component interface, showing 4 featured projects in perfect filled layout
// Layout: 4-column grid - Row 1: Large (2 cols) | Small | Small, Row 2: Small (spans full width or 2 cols)
const projects: Project[] = allProjects
  .filter(project => project.featuredImage) // Filter out projects without images
  .slice(0, 4)
  .map((project, index) => {
    // Create a perfectly filled layout with design hierarchy
    if (index === 0) {
      return {
        id: project.id,
        title: project.title,
        category: project.category.charAt(0).toUpperCase() + project.category.slice(1),
        image: project.featuredImage,
        size: "large" as const,
        span: 2, // Spans 2 columns
      };
    }
    // Last project spans 2 columns to fill the row
    if (index === 3) {
      return {
        id: project.id,
        title: project.title,
        category: project.category.charAt(0).toUpperCase() + project.category.slice(1),
        image: project.featuredImage,
        size: "medium" as const,
        span: 2, // Spans 2 columns to fill the row
      };
    }
    return {
      id: project.id,
      title: project.title,
      category: project.category.charAt(0).toUpperCase() + project.category.slice(1),
      image: project.featuredImage,
      size: "small" as const,
      span: 1, // Spans 1 column
    };
  });

export function BentoProjects() {
  return (
    <section id="projects" className="section-padding-md bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="luxury-label text-accent">OUR PORTFOLIO</span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            Featured Projects
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-grey">
            Transforming spaces into timeless masterpieces
          </p>
        </motion.div>

        {/* Bento Grid - Perfectly filled 4-column layout with design hierarchy */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center text-grey py-12">
            <p>No projects available</p>
          </div>
        )}

        {/* View More Projects Button */}
        {allProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              href="/projects"
              className="btn-outline rounded-full inline-block text-base md:text-lg px-8 md:px-10 py-3 md:py-4"
            >
              View More Projects ({allProjects.length - 4} more)
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const colSpan = project.span || 1;
  const minHeight = project.size === "large" 
    ? "min-h-[450px] md:min-h-[550px] lg:min-h-[650px]" 
    : project.size === "medium"
    ? "min-h-[400px] md:min-h-[450px] lg:min-h-[500px]"
    : "min-h-[350px] md:min-h-[400px] lg:min-h-[450px]";
  
  return (
    <Link href={`/projects/${project.id}`} className="block h-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className={`
          group relative h-full ${minHeight} overflow-hidden rounded-xl border border-white/10 hover:border-accent/50 
          transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02]
          ${colSpan === 2 ? "md:col-span-2 lg:col-span-2" : ""}
        `}
      >
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        unoptimized
        onError={(e) => {
          console.error('Failed to load project image:', project.image);
        }}
      />

      {/* Enhanced Gradient Overlay with better design */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />
      
      {/* Accent border on hover */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 transition-colors duration-500 rounded-xl pointer-events-none" />

      {/* Content with enhanced styling */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          {/* Category Badge */}
          <motion.span 
            className="luxury-label text-accent text-xs md:text-sm mb-3 inline-block px-3 py-1 bg-accent/10 rounded-full backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            {project.category}
          </motion.span>

          {/* Title with responsive sizing */}
          <h3 className={`font-serif font-medium mb-4 leading-tight ${
            project.size === "large" 
              ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" 
              : "text-xl sm:text-2xl md:text-3xl"
          }`}>
            {project.title}
          </h3>

          {/* View Details Link with enhanced design */}
          <motion.div
            className="flex items-center gap-2 text-accent text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
          >
            <span className="relative">
              View Project
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
            </span>
            <motion.svg
              className="h-4 w-4 md:h-5 md:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
    </Link>
  );
}
