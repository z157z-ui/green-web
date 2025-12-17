"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Architectural Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Vertical Lines */}
          {[10, 25, 40, 55, 70, 85].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="100"
              stroke="#B7E7A1"
              strokeWidth="0.1"
            />
          ))}
          {/* Horizontal Lines */}
          {[20, 40, 60, 80].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#B7E7A1"
              strokeWidth="0.1"
            />
          ))}
          {/* Diagonal */}
          <line x1="0" y1="100" x2="100" y2="0" stroke="#C5A572" strokeWidth="0.2" />
        </svg>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-dark/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <span className="font-serif text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-b from-accent/30 to-transparent bg-clip-text text-transparent">
            404
          </span>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-serif text-4xl md:text-5xl text-white mb-6"
        >
          Space Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-text-grey text-lg mb-10 max-w-md mx-auto"
        >
          The page you&apos;re looking for seems to have been redesigned out of existence. 
          Let&apos;s get you back to familiar territory.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-primary-dark font-semibold rounded-lg hover:bg-gold transition-colors"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
          
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:border-accent hover:text-accent transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Projects
          </Link>
        </motion.div>

        {/* Back Link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={() => window.history.back()}
          className="mt-8 inline-flex items-center gap-2 text-text-grey hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Go Back</span>
        </motion.button>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.8 }}
        className="absolute bottom-10 left-10 font-serif text-9xl text-accent pointer-events-none hidden lg:block"
      >
        &ldquo;
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ delay: 0.8 }}
        className="absolute top-10 right-10 font-serif text-9xl text-gold pointer-events-none hidden lg:block"
      >
        &rdquo;
      </motion.div>
    </main>
  );
}

