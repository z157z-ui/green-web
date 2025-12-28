"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
  },
  {
    value: 98,
    suffix: "%",
    label: "On-Time Delivery",
  },
  {
    value: 45,
    suffix: "",
    label: "Day Avg Completion",
  },
  {
    value: 8,
    suffix: "",
    label: "Sectors Served",
  },
];

export function LuxuryStats() {
  return (
    <section className="relative py-12 md:py-16 bg-background">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(183, 231, 161, 0.15) 0%, rgba(150, 196, 127, 0.2) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(183, 231, 161, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            zIndex: 0,
          }}
        >
          {/* Glossy overlay effect */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(183, 231, 161, 0.05) 100%)',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface StatItemProps {
  stat: Stat;
  index: number;
}

function StatItem({ stat, index }: StatItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2500; // Increased duration for smoother animation
    const startValue = 0;
    const endValue = stat.value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Smoother easing function - cubic ease out
      const easeOutCubic = progress === 1 ? 1 : 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(
        easeOutCubic * (endValue - startValue) + startValue
      );

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1]
      }}
      className="relative text-center group"
    >
      {/* Divider */}
      {index !== 0 && (
        <div className="hidden md:block absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 h-16 w-px bg-accent/20" />
      )}

      {/* Number */}
      <div className="mb-2 flex items-baseline justify-center gap-1">
        <motion.span
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-gold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
        >
          {count}
        </motion.span>
        <span className="font-serif text-3xl md:text-4xl font-medium text-gold">
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="text-sm md:text-base text-white font-light">{stat.label}</p>
    </motion.div>
  );
}
