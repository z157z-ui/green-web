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
                      src="/images/logos/LOGO.png"
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

                {/* Contact Options - Bottom Middle */}
                <motion.div variants={itemVariants} className="mt-12 pt-8 border-t border-white/10">
                  <p className="text-center text-white/60 text-sm mb-6 uppercase tracking-wider">
                    Connect With Us
                  </p>
                  
                  {/* Social Media Links */}
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <a
                      href="https://www.instagram.com/greenbuildersandinteriors?igsh=ZGdzdmoxYXplaWJv"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 hover:border-transparent hover:text-white transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    
                    <a
                      href="https://www.facebook.com/share/1Abd1pKroq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-blue-600 hover:border-transparent hover:text-white transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/company/green-builders-interiors/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/20 text-white/70 hover:bg-blue-500 hover:border-transparent hover:text-white transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  </div>

                  {/* Contact Methods */}
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/919739992779"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-green-500/20 hover:border-green-500/50 hover:text-white transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">WhatsApp</span>
                    </a>
                    
                    <a
                      href="tel:+919739992779"
                      className="group flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-accent/20 hover:border-accent/50 hover:text-white transition-all duration-300"
                    >
                      <Phone className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">+91 97399 92779</span>
                    </a>
                    
                    <a
                      href="mailto:info@greenbuildersandinteriors.com"
                      className="group flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/80 hover:bg-gold/20 hover:border-gold/50 hover:text-white transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-gold group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Email Us</span>
                    </a>
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

