"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppFloat({
  phoneNumber = "919739992779",
  message = "Hi! I'd like to discuss my interior design project.",
}: WhatsAppFloatProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      {/* Ping Animation */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
      
      {/* Main Button */}
      <div className="relative w-14 h-14 bg-accent hover:bg-accent-dark rounded-full flex items-center justify-center shadow-2xl transition-all duration-300">
        <MessageCircle className="w-7 h-7 text-primary-dark" strokeWidth={2} />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-white text-primary-dark px-4 py-2 rounded-lg shadow-xl whitespace-nowrap text-sm font-medium">
          Chat with us on WhatsApp
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white" />
        </div>
      </div>
    </motion.button>
  );
}
