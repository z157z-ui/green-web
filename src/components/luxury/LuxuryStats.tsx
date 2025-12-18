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
    <section className="relative -mt-24 z-20">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-primary-dark border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
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
    const duration = 2000;
    const startValue = 0;
    const endValue = stat.value;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(
        easeOutExpo * (endValue - startValue) + startValue
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative text-center group"
    >
      {/* Divider */}
      {index !== 0 && (
        <div className="hidden md:block absolute -left-6 top-1/2 -translate-y-1/2 h-16 w-px bg-white/10" />
      )}

      {/* Number */}
      <div className="mb-2 flex items-baseline justify-center gap-1">
        <motion.span
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-gold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
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
