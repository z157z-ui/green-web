"use client";

import { motion } from "framer-motion";
import { Lightbulb, Award, Users } from "lucide-react";

interface Value {
  icon: React.ElementType;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace cutting-edge design trends and technologies to create spaces that are both contemporary and timeless.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "Uncompromising attention to detail and use of premium materials ensure every project exceeds expectations.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your vision drives our process. We collaborate closely to transform your dreams into tangible reality.",
  },
];

export function ValuesSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="luxury-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="luxury-label text-accent">CORE VALUES</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-white">
            What Drives Us
          </h2>
          <p className="mt-6 text-lg text-grey">
            The principles that guide our work and relationships
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ValueCardProps {
  value: Value;
  index: number;
}

function ValueCard({ value, index }: ValueCardProps) {
  const Icon = value.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group"
    >
      <div className="luxury-card rounded-xl p-8 h-full hover:border-accent/30 transition-all duration-500">
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/30 mb-6 group-hover:bg-accent/20 transition-colors duration-300"
        >
          <Icon className="w-8 h-8 text-accent" />
        </motion.div>

        {/* Title */}
        <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-4">
          {value.title}
        </h3>

        {/* Description */}
        <p className="text-grey leading-relaxed">{value.description}</p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
          className="mt-6 h-px w-full origin-left bg-gradient-to-r from-accent to-transparent"
        />
      </div>
    </motion.div>
  );
}

