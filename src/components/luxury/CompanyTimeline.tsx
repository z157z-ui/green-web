"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

interface TimelineEra {
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineEras: TimelineEra[] = [
  {
    year: "2017",
    title: "The Foundation",
    description:
      "Founded by Sanal Das KV with a vision to transform spaces through innovative design and quality craftsmanship. Starting with a small team of passionate designers, we embarked on a journey to redefine luxury interiors in South India.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  },
  {
    year: "2018",
    title: "Strategic Growth",
    description:
      "Expansion of our core team with the addition of HVAC specialists, project management experts, and skilled craftsmen. This period marked our transition from a boutique studio to a comprehensive design and construction firm.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
  },
  {
    year: "2021",
    title: "Complete Integration",
    description:
      "Evolved into a full-service turnkey solution provider, offering seamless end-to-end services from initial concept to final completion. This integration allowed us to maintain quality control and deliver exceptional results consistently.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80",
  },
  {
    year: "2023",
    title: "Portfolio Diversification",
    description:
      "Successfully delivered over 30 residential and 20 commercial projects across multiple sectors. Our portfolio now spans luxury villas, corporate offices, hospitality spaces, and bespoke residential interiors.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
  },
  {
    year: "2025",
    title: "Regional Presence",
    description:
      "Expanded operations to 5 strategic offices across South India — Bengaluru, Hyderabad, Chennai, Kochi, and Visakhapatnam. This expansion enables us to serve clients across the region with localized expertise and dedicated teams.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80",
  },
];

export function CompanyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 bg-background overflow-hidden"
    >
      <div className="luxury-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24 md:mb-32"
        >
          <span className="luxury-label text-accent">OUR JOURNEY</span>
          <h2 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
            A Legacy of
            <br />
            Excellence
          </h2>
          <p className="mt-6 text-lg md:text-xl text-grey max-w-2xl">
            Eight years of innovation, growth, and unwavering commitment to
            transforming spaces into timeless masterpieces.
          </p>
        </motion.div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Subtle Progress Line */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px ml-48">
            <div className="absolute inset-0 bg-white/5" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute top-0 left-0 right-0 bg-accent origin-top"
            />
          </div>

          {/* Timeline Eras */}
          <div className="space-y-32 md:space-y-48">
            {timelineEras.map((era, index) => (
              <TimelineEra key={index} era={era} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineEraProps {
  era: TimelineEra;
  index: number;
}

function TimelineEra({ era, index }: TimelineEraProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20%" });

  return (
    <div ref={ref} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
      {/* Year - Massive, Sticky on Desktop */}
      <div className="lg:col-span-3 lg:sticky lg:top-32 self-start">
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0.3, scale: 0.95 }
          }
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Outline Year (Background) */}
          <div
            className="font-serif text-8xl md:text-9xl font-bold leading-none select-none"
            style={{
              WebkitTextStroke: "1px rgba(183, 231, 161, 0.2)",
              color: "transparent",
            }}
          >
            {era.year}
          </div>

          {/* Solid Year (Foreground - Reveals on scroll) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute inset-0 font-serif text-8xl md:text-9xl font-bold text-accent leading-none"
          >
            {era.year}
          </motion.div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block mt-8 h-px w-24 bg-accent origin-left"
        />
      </div>

      {/* Content - Right Column */}
      <div className="lg:col-span-9 space-y-8">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-[16/9] overflow-hidden rounded-lg"
        >
          <motion.div
            animate={
              isInView ? { scale: 1 } : { scale: 1.1 }
            }
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <img
              src={era.image}
              alt={era.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-white">
            {era.title}
          </h3>

          <p className="text-lg text-grey leading-relaxed max-w-3xl">
            {era.description}
          </p>

          {/* Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-px w-32 bg-gradient-to-r from-accent to-transparent origin-left"
          />
        </motion.div>

        {/* Era Number */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-accent/30 bg-accent/5"
        >
          <span className="font-serif text-sm font-medium text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
