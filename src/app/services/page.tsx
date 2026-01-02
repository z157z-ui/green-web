"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/data";
import { 
  Home, Building2, Building, Briefcase, UtensilsCrossed, Scissors,
  Hammer, Wrench, HardHat, Landmark, TreePine, Palette, ArrowRight
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Building, Briefcase, UtensilsCrossed, Scissors,
  Hammer, Wrench, HardHat, Landmark, TreePine, Palette,
};

export default function ServicesPage() {
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
            Our Expertise
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white"
          >
            Comprehensive Design Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-text-grey max-w-3xl mx-auto"
          >
            From concept to completion, we offer end-to-end interior design, renovation, 
            and construction services tailored to your unique vision.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20">
        <div className="luxury-container">
          {/* Design Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl text-white mb-2">Design Services</h2>
            <p className="text-text-grey mb-8">Bespoke interior design for every space</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((s) => s.category === "design")
                .map((service, index) => (
                  <ServiceCard key={service.slug} service={service} index={index} />
                ))}
            </div>
          </motion.div>

          {/* Renovation Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-3xl text-white mb-2">Renovation Services</h2>
            <p className="text-text-grey mb-8">Transform your existing spaces</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((s) => s.category === "renovation")
                .map((service, index) => (
                  <ServiceCard key={service.slug} service={service} index={index} />
                ))}
            </div>
          </motion.div>

          {/* Construction & Specialty */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-white mb-2">Construction & Specialty</h2>
            <p className="text-text-grey mb-8">Complete building and finishing solutions</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services
                .filter((s) => s.category === "construction" || s.category === "specialty")
                .map((service, index) => (
                  <ServiceCard key={service.slug} service={service} index={index} />
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark">
        <div className="luxury-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-text-grey max-w-xl mx-auto mb-8">
              Book a free consultation and our experts will guide you through the best 
              solutions for your project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg border-2 border-accent shadow-lg shadow-accent/50 hover:bg-gold hover:text-white hover:border-gold transition-all duration-300 opacity-100 z-20 relative"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

const ServiceCard = React.memo(function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] || Home;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/services/${service.slug}`} className="group block h-full">
        <div className="relative h-full luxury-card overflow-hidden hover:border-accent/50 transition-all duration-500">
          {/* Background Image */}
          <div className="relative h-48 overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            
            {/* Icon */}
            <div className="absolute bottom-4 left-4 p-3 rounded-lg bg-accent/10 backdrop-blur-sm border border-accent/30">
              <IconComponent className="w-6 h-6 text-accent" />
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-serif text-xl text-white mb-2 group-hover:text-accent transition-colors">
              {service.title}
            </h3>
            <p className="text-text-grey text-sm leading-relaxed mb-4">
              {service.shortDescription}
            </p>
            
            {/* Learn More Link */}
            <div className="flex items-center gap-2 text-accent text-sm font-medium">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
});
