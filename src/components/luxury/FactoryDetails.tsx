"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Factory, Package, Wrench, Users, Award, Zap } from "lucide-react";

const factoryImages = [
  "/images/factory/factory-1.jpeg",
  "/images/factory/factory-2.jpeg",
  "/images/factory/factory-3.jpeg",
  "/images/factory/factory-4.jpeg",
  "/images/factory/factory-5.jpeg",
];

const factoryFeatures = [
  {
    icon: Factory,
    title: "State-of-the-Art Facility",
    description: "Modern manufacturing space with advanced equipment",
  },
  {
    icon: Package,
    title: "Quality Control",
    description: "Rigorous quality checks at every production stage",
  },
  {
    icon: Wrench,
    title: "Custom Fabrication",
    description: "Bespoke solutions tailored to project requirements",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled craftsmen and technicians",
  },
  {
    icon: Award,
    title: "Certified Standards",
    description: "ISO certified processes and materials",
  },
  {
    icon: Zap,
    title: "Efficient Production",
    description: "Streamlined workflows for timely delivery",
  },
];

export function FactoryDetails() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-20 md:py-24 bg-background overflow-hidden">
      <div className="luxury-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="luxury-label text-gold">Our Facility</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
            Manufacturing Excellence
          </h2>
          <p className="mt-6 text-lg text-text-grey max-w-2xl mx-auto">
            Behind every project is our state-of-the-art manufacturing facility, 
            where precision meets craftsmanship
          </p>
        </motion.div>

        {/* Kanban-Style Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {/* Left Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2"
          >
            <div
              className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(factoryImages[0])}
            >
              <Image
                src={factoryImages[0]}
                alt="Factory Overview"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium">Click to view full size</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Small Images */}
          {factoryImages.slice(1, 3).map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Factory Detail ${index + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}

          {/* Bottom Row - Remaining Images */}
          {factoryImages.slice(3).map((image, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (index + 2) * 0.1 }}
              className="relative h-[200px] md:h-[240px] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Factory Detail ${index + 4}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {factoryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-accent/10 border border-accent/20 group-hover:bg-accent/20 group-hover:border-accent/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs text-text-grey leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Full Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Factory Detail Full Size"
                fill
                className="object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-[60] p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors opacity-100"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

