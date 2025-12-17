"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export function LuxuryHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0">
        {/* Placeholder gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-background to-black" />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="luxury-label text-accent">
            8+ YEARS OF EXCELLENCE
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="mb-8 font-serif text-4xl font-medium leading-[1.1] text-white md:text-6xl lg:text-7xl max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          WE DON&apos;T JUST BUILD STRUCTURES{" "}
          <span className="text-gold">WE BUILD DREAMS</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-12 max-w-2xl text-lg text-grey md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Complete interior design and construction solutions for homes, offices, and commercial projects
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-primary-dark font-semibold rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            Start Your Project
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-medium rounded-full hover:bg-gold hover:text-primary-dark transition-all duration-300"
          >
            View Portfolio
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-8 w-8 text-accent" />
      </motion.div>
    </section>
  );
}
