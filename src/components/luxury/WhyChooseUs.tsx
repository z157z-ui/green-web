"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Clock,
  Users,
  Shield,
  Sparkles,
  Target,
} from "lucide-react";
import Image from "next/image";

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    icon: Award,
    title: "8+ Years of Excellence",
    description:
      "Proven track record of delivering premium projects across residential and commercial sectors throughout India.",
  },
  {
    icon: Users,
    title: "Expert Design Team",
    description:
      "Talented architects and designers who bring creativity, innovation, and technical expertise to every project.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control at every stage, using only premium materials and trusted construction practices.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "Committed to meeting deadlines without compromising on quality, ensuring smooth project handovers.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Solutions",
    description:
      "Fully customized designs tailored to your unique vision, lifestyle, and functional requirements.",
  },
  {
    icon: Target,
    title: "End-to-End Service",
    description:
      "From initial consultation to final walkthrough, we manage every aspect of your project seamlessly.",
  },
];

const images = [
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80",
];

export function WhyChooseUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-white section-padding-lg overflow-hidden">
      <div className="luxury-container">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="luxury-label text-gold">Why Choose Us</span>
              <h2 className="mt-4 mb-8 font-display text-4xl font-light md:text-6xl text-gray-900">
                Setting the Standard
                <br />
                in Luxury Design
              </h2>
              <p className="mb-12 text-lg text-gray-600 leading-relaxed">
                We don't just build spaces—we craft experiences that elevate
                everyday living and inspire lasting memories.
              </p>
            </motion.div>

            {/* Reasons List */}
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <ReasonItem key={index} reason={reason} index={index} />
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-gold px-8 py-4 text-black font-medium tracking-wide transition-all hover:bg-black hover:text-gold border-2 border-gold"
              >
                <span>Start Your Project</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right Side - Animated Image Gallery */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-24"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Main Image Carousel */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentImageIndex]}
                      alt="Luxury Interior"
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Gold Frame Overlay */}
                <div className="absolute inset-0 border-8 border-gold/20 pointer-events-none" />

                {/* Rotating Stats Badge */}
                <motion.div
                  className="absolute -top-8 -right-8 z-10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="relative h-32 w-32 rounded-full bg-gold flex items-center justify-center shadow-2xl">
                    <div className="text-center">
                      <div className="font-display text-3xl font-bold text-black">
                        8+
                      </div>
                      <div className="text-xs text-black/80">
                        Years
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <FloatingElements />

                {/* Image Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 transition-all ${
                        index === currentImageIndex
                          ? "w-8 bg-gold"
                          : "w-2 bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`View image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ReasonItemProps {
  reason: Reason;
  index: number;
}

function ReasonItem({ reason, index }: ReasonItemProps) {
  const Icon = reason.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group flex gap-6"
    >
      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border-2 border-gold/20 bg-gold/5 transition-colors group-hover:border-gold group-hover:bg-gold/10"
      >
        <Icon className="h-7 w-7 text-gold" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 pt-1">
        <h3 className="mb-2 text-xl font-medium text-gray-900">
          {reason.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{reason.description}</p>
      </div>
    </motion.div>
  );
}

function FloatingElements() {
  const elements = [
    { size: 12, top: "20%", right: "10%", duration: 8, delay: 0 },
    { size: 8, bottom: "30%", left: "5%", duration: 10, delay: 2 },
    { size: 10, top: "60%", right: "15%", duration: 12, delay: 4 },
  ];

  return (
    <>
      {elements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute h-3 w-3 rounded-full bg-gold/30"
          style={{
            top: el.top,
            bottom: el.bottom,
            left: el.left,
            right: el.right,
            width: el.size,
            height: el.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: el.duration,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
