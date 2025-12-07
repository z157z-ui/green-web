"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  projectType: string;
  message: string;
  howDidYouHear: string;
}

const LuxuryContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    message: '',
    howDidYouHear: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for reaching out. We typically respond within 2-3 business days.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        projectType: '',
        message: '',
        howDidYouHear: ''
      });
    }, 1000);
  };

  const inputClassName = "w-full bg-transparent border-b border-[#111111]/20 pb-3 text-[#111111] text-base font-light placeholder:text-[#111111]/30 focus:outline-none focus:border-[#9B7E5C] transition-colors duration-300";
  const labelClassName = "block text-[11px] uppercase tracking-[0.15em] text-[#111111]/60 mb-3 font-medium";

  return (
    <div>
      {/* Contact Details */}
      <div className="mb-16">
        <div className="space-y-8">
          <div>
            <div className={labelClassName}>ADDRESS</div>
            <p className="text-base text-[#111111] leading-relaxed font-light">
              G F, NO 6/1, Madivala<br />
              Bengaluru, Karnataka, 560068
            </p>
          </div>

          <div>
            <div className={labelClassName}>EMAIL</div>
            <a
              href="mailto:info@greenbuildersandinteriors.com"
              className="text-base text-[#111111] hover:text-[#9B7E5C] transition-colors duration-300 font-light"
            >
              info@greenbuildersandinteriors.com
            </a>
          </div>

          <div>
            <div className={labelClassName}>PHONE</div>
            <a
              href="tel:+919739992779"
              className="text-base text-[#111111] hover:text-[#9B7E5C] transition-colors duration-300 font-light"
            >
              +91 97399 92779
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <label htmlFor="firstName" className={labelClassName}>
              FIRST NAME
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="lastName" className={labelClassName}>
              LAST NAME
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className={inputClassName}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClassName}>
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClassName}
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className={labelClassName}>
            PROJECT TYPE
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className={`${inputClassName} cursor-pointer`}
          >
            <option value="">Select a project type</option>
            <option value="residential">Residential Interior</option>
            <option value="commercial">Commercial Interior</option>
            <option value="villa">Villa Design</option>
            <option value="apartment">Apartment Design</option>
            <option value="office">Office Design</option>
            <option value="restaurant">Restaurant Design</option>
            <option value="renovation">Renovation</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClassName}>
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className={`${inputClassName} resize-none`}
            placeholder="Tell us about your project..."
          />
        </div>

        {/* How did you hear */}
        <div>
          <label htmlFor="howDidYouHear" className={labelClassName}>
            HOW DID YOU HEAR ABOUT US? (OPTIONAL)
          </label>
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            value={formData.howDidYouHear}
            onChange={handleChange}
            className={`${inputClassName} cursor-pointer`}
          >
            <option value="">Select an option</option>
            <option value="search">Search Engine</option>
            <option value="social">Social Media</option>
            <option value="referral">Referral</option>
            <option value="website">Another Website</option>
            <option value="advertisement">Advertisement</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative px-12 py-4 bg-[#9B7E5C] text-white text-[11px] uppercase tracking-[0.15em] font-medium overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{
              backgroundColor: '#8A6D4F',
              boxShadow: '0 4px 12px rgba(155, 126, 92, 0.3)'
            }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <motion.span
              animate={{
                color: isHovered ? '#FFFFFF' : '#FFFFFF'
              }}
              transition={{ duration: 0.2 }}
            >
              {isSubmitting ? 'SENDING...' : 'START A CONVERSATION'}
            </motion.span>
          </motion.button>

          <p className="mt-4 text-[13px] text-[#111111]/50 font-light leading-relaxed">
            We typically respond within 2–3 business days.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LuxuryContactForm;
