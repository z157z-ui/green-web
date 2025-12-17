"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const menuVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            transition={{ duration: 0.3 }}
          />

          {/* Menu Panel */}
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-md bg-gradient-to-b from-primary-dark to-black rounded-2xl overflow-hidden">
              {/* Close Button */}
              <div className="absolute top-6 right-6 z-10">
                <button
                  onClick={onClose}
                  className="p-2 text-white/70 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Menu Content */}
              <div className="relative px-8 py-16">
                {/* Logo */}
                <motion.div variants={itemVariants} className="mb-12">
                  <Link href="/" onClick={onClose}>
                    <Image
                      src="/images/logos/LOGO-WHITE.png"
                      alt="Green Builders & Interiors"
                      width={180}
                      height={50}
                      className="h-12 w-auto"
                    />
                  </Link>
                </motion.div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group block py-4 px-6 -mx-6 rounded-xl text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300"
                      >
                        <span className="font-serif text-2xl">
                          {link.label}
                        </span>
                        <span className="block h-px w-0 bg-accent mt-2 transition-all duration-300 group-hover:w-12" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button - High Visibility */}
                <motion.div variants={itemVariants} className="mt-12">
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block w-full py-4 bg-gold text-black text-center font-semibold text-lg rounded-full shadow-lg shadow-gold/30 hover:bg-white hover:text-primary-dark transition-all duration-300"
                  >
                    Start Your Project
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
