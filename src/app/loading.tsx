"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(183, 231, 161, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Loading Content */}
      <div className="relative flex flex-col items-center">
        {/* Logo / Initials */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer Ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-accent/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: 120, height: 120, margin: -10 }}
          />

          {/* Main Logo Container */}
          <motion.div
            className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/20 to-gold/20 border border-accent/50 flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 20px rgba(183, 231, 161, 0.2)",
                "0 0 40px rgba(183, 231, 161, 0.4)",
                "0 0 20px rgba(183, 231, 161, 0.2)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* GBI Initials */}
            <motion.span
              className="font-serif text-3xl font-bold"
              animate={{
                color: ["#B7E7A1", "#C5A572", "#B7E7A1"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              GBI
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-text-grey text-sm uppercase tracking-widest mb-4">
            Loading
          </p>
          
          {/* Loading Dots */}
          <div className="flex items-center justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-accent"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.p
          className="mt-8 font-serif text-lg text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Green Builders & Interiors
        </motion.p>
      </div>

      {/* Skeleton Preview (optional visual) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-dark/50 to-transparent pointer-events-none" />
    </div>
  );
}

