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
  size: "small" | "large";
}

export function BentoProjects() {
  // Map real projects to component interface, using first 4 projects
  const displayProjects: Project[] = allProjects && allProjects.length > 0 
    ? allProjects.slice(0, 4).map((project, index) => ({
        id: project.id,
        title: project.title,
        category: project.category.charAt(0).toUpperCase() + project.category.slice(1),
        image: project.featuredImage,
        size: index % 3 === 0 ? "large" : "small" as "small" | "large",
      }))
    : [];

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

        {/* Bento Grid */}
        {displayProjects.length > 0 ? (
          <div className="grid auto-rows-[400px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-grey">
            <p>No projects available at the moment.</p>
          </div>
        )}

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center z-20 relative"
        >
          <Link
            href="/projects"
            className="px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 border-accent/80 text-accent bg-white/5 hover:bg-accent hover:text-white hover:border-accent inline-block opacity-100 z-20 relative shadow-lg shadow-accent/20"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  if (!project || !project.id || !project.image) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`
        group relative overflow-hidden rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-500
        ${project.size === "large" ? "md:col-span-2" : ""}
      `}
    >
      <Link 
        href={`/projects/${project.id}`} 
        className="absolute inset-0 z-20 cursor-pointer"
        aria-label={`View ${project.title}`}
      />
      {/* Image */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Category */}
          <span className="luxury-label text-accent text-xs mb-3 inline-block">
            {project.category}
          </span>

          {/* Title */}
          <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
            {project.title}
          </h3>

          {/* View Details Link */}
          <motion.div
            className="flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            whileHover={{ x: 5 }}
          >
            <span>View Project</span>
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
