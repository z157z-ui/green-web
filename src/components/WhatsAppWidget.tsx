'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  // WhatsApp business number (you can change this to your actual number)
  const whatsappNumber = '919739992779'; // Format: country code + number without + or spaces
  const defaultMessage = 'Hello! I would like to inquire about your services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-lg shadow-2xl p-6 max-w-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-display text-xl font-semibold text-[#2d5016] mb-1">
                  Chat with us
                </h3>
                <p className="font-body text-sm text-text-secondary">
                  We typically reply within minutes
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="bg-[#f0f4f8] rounded-lg p-4 mb-4">
              <p className="font-body text-sm text-text-primary mb-2">
                <strong>Green Builders and Interiors</strong>
              </p>
              <p className="font-body text-sm text-text-secondary">
                Hello! How can we help you today?
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#22c55e] text-white font-body font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors duration-300"
            >
              <MessageCircle size={20} />
              Start WhatsApp Chat
            </button>

            <p className="font-body text-xs text-text-secondary text-center mt-3">
              Available: Mon-Sat, 9:00 AM - 6:00 PM
            </p>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#25D366] hover:bg-[#22c55e] text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 group"
          aria-label="Open WhatsApp Chat"
        >
          {isOpen ? (
            <X size={28} className="transition-transform duration-300" />
          ) : (
            <MessageCircle size={28} className="transition-transform duration-300 group-hover:scale-110" />
          )}
        </button>

        {/* Notification Badge (optional - can show unread messages) */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            1
          </div>
        )}
      </div>
    </>
  );
}
