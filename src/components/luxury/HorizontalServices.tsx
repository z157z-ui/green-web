"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Briefcase,
  Wrench,
  Paintbrush,
  Trees,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Villa Design",
    description: "Bespoke luxury villas with contemporary aesthetics",
  },
  {
    icon: Building2,
    title: "Apartment Design",
    description: "Modern urban living spaces maximizing style and function",
  },
  {
    icon: Briefcase,
    title: "Office Design",
    description: "Productive workspaces that inspire innovation",
  },
  {
    icon: Wrench,
    title: "Office Renovation",
    description: "Transform existing spaces with modern updates",
  },
  {
    icon: Paintbrush,
    title: "Interior Renovation",
    description: "Refresh and modernize your current interiors",
  },
  {
    icon: Trees,
    title: "Landscape Design",
    description: "Harmonizing outdoor spaces with architectural vision",
  },
];

export function HorizontalServices() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-20 md:py-24">
      <div className="luxury-container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="luxury-label text-accent">WHAT WE OFFER</span>
          <h2 className="mt-4 font-serif text-4xl font-medium text-white md:text-5xl lg:text-6xl">
            Our Services
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-grey">
            Comprehensive solutions from concept to completion
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 hide-scrollbar md:px-12 snap-x snap-mandatory">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary-dark to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary-dark to-transparent" />
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-6 text-center"
      >
        <p className="text-sm text-grey">← Scroll to explore →</p>
      </motion.div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group relative min-w-[320px] snap-center md:min-w-[380px]"
    >
      <div className="h-full bg-background-elevated border border-white/10 hover:border-accent/30 rounded-xl p-8 transition-all duration-500 hover:shadow-2xl">
        {/* Icon */}
        <div className="mb-auto">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/10"
          >
            <Icon className="h-7 w-7 text-accent" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="mt-24">
          <h3 className="font-serif text-2xl font-medium text-white mb-3">
            {service.title}
          </h3>
          <p className="text-grey text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
