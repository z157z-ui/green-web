"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Facebook, Linkedin, Phone, Mail, MessageCircle } from "lucide-react";

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
            className="fixed inset-0 z-[70] flex items-center justify-center p-2 sm:p-4"
          >
            <div className="relative w-full max-w-md max-h-[90vh] bg-gradient-to-b from-primary-dark to-black rounded-2xl overflow-hidden flex flex-col">
              {/* Close Button */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[80]">
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 text-white/70 hover:text-white transition-colors opacity-100 z-[80] relative"
                  aria-label="Close menu"
                >
                  <X size={24} className="sm:w-7 sm:h-7" />
                </button>
              </div>

              {/* Menu Content - Scrollable */}
              <div className="relative px-4 sm:px-6 py-6 sm:py-8 overflow-y-auto flex-1">
                {/* Logo */}
                <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
                  <Link href="/" onClick={onClose}>
                    <Image
                      src="/images/logos/LOGO.png"
                      alt="Green Builders & Interiors"
                      width={150}
                      height={42}
                      className="h-8 sm:h-10 w-auto"
                    />
                  </Link>
                </motion.div>

                {/* Navigation Links */}
                <nav className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group block py-2.5 sm:py-3 px-4 -mx-4 rounded-lg text-white/90 hover:text-white hover:bg-white/5 transition-all duration-300"
                      >
                        <span className="font-serif text-lg sm:text-xl">
                          {link.label}
                        </span>
                        <span className="block h-px w-0 bg-accent mt-1 transition-all duration-300 group-hover:w-10" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* CTA Button - High Visibility */}
                <motion.div variants={itemVariants} className="mt-6 sm:mt-8 z-20 relative">
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="block w-full py-3 sm:py-3.5 bg-gold text-black text-center font-semibold text-base sm:text-lg rounded-full shadow-lg shadow-gold/30 hover:bg-white hover:text-primary-dark transition-all duration-300 opacity-100 z-20 relative"
                  >
                    Start Your Project
                  </Link>
                </motion.div>

                {/* Contact Options - 2x3 Grid of Icons */}
                <motion.div variants={itemVariants} className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
                  <p className="text-center text-white/60 text-xs sm:text-sm mb-5 sm:mb-6 uppercase tracking-wider">
                    Connect With Us
                  </p>
                  
                  {/* Single Row: All Social Media + Contact Methods */}
                  <div className="flex justify-center">
                    <div className="flex flex-row gap-2 sm:gap-3 flex-wrap justify-center max-w-full">
                      {/* Social Media */}
                      <a
                        href="https://www.instagram.com/greenbuildersandinteriors?igsh=ZGdzdmoxYXplaWJv"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all duration-300 flex-shrink-0"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                      </a>
                      
                      <a
                        href="https://www.facebook.com/share/1Abd1pKroq/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-blue-600 hover:border-transparent hover:text-white transition-all duration-300 flex-shrink-0"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                      </a>
                      
                      <a
                        href="https://www.linkedin.com/company/green-builders-interiors/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-blue-500 hover:border-transparent hover:text-white transition-all duration-300 flex-shrink-0"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                      </a>

                      {/* Contact Methods */}
                      <a
                        href="https://wa.me/919606894352"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-green-500 hover:border-transparent hover:text-white transition-all duration-300 flex-shrink-0"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                      </a>
                      
                      <a
                        href="tel:+919739992779"
                        className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-accent hover:border-transparent hover:text-white transition-all duration-300 flex-shrink-0"
                        aria-label="Phone"
                      >
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                      </a>
                      
                      <a
                        href="mailto:info@greenbuildersandinteriors.com"
                        className="group flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-gold hover:border-transparent hover:text-white transition-all duration-300 flex-shrink-0"
                        aria-label="Email"
                      >
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

