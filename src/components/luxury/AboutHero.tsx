"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-background pt-32 pb-20">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="luxury-label text-accent"
          >
            ABOUT GREEN BUILDERS
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight"
          >
            Our Story
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 space-y-6 text-lg md:text-xl text-grey leading-relaxed"
          >
            <p>
              At Green Builders and Interiors, we create spaces that beautifully combine 
              design, functionality, and comfort. Headquartered in <span className="text-white font-medium">Bangalore</span>, 
              we specialize in complete interior design and construction solutions for 
              homes, offices, and commercial projects.
            </p>
            <p>
              Founded by <span className="text-white font-medium">Sanal Das KV</span> in 2017 
              with a vision to blend design and construction into one seamless experience. 
              With <span className="text-accent font-medium">8+ years of expertise</span> and{" "}
              <span className="text-gold font-medium">5 offices across South India</span>, 
              we transform every project into a space that truly reflects your vision and lifestyle.
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-12 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}

