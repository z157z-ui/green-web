"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: "", label: "Select Project Type" },
  { value: "villa", label: "Villa Design" },
  { value: "apartment", label: "Apartment Design" },
  { value: "office", label: "Office Design" },
  { value: "commercial", label: "Commercial Project" },
  { value: "renovation", label: "Renovation" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <CheckCircle2 className="w-16 h-16 text-accent mb-6" />
        </motion.div>
        <h3 className="font-serif text-3xl font-medium text-white mb-4">
          Thank You!
        </h3>
        <p className="text-grey text-lg">
          We've received your message and will get back to you shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      {/* Name */}
      <FloatingLabelInput
        label="Your Name"
        type="text"
        error={errors.name?.message}
        {...register("name")}
      />

      {/* Email */}
      <FloatingLabelInput
        label="Email Address"
        type="email"
        error={errors.email?.message}
        {...register("email")}
      />

      {/* Phone */}
      <FloatingLabelInput
        label="Phone Number"
        type="tel"
        error={errors.phone?.message}
        {...register("phone")}
      />

      {/* Project Type */}
      <div className="relative">
        <select
          {...register("projectType")}
          className="w-full bg-transparent border-b border-white/20 focus:border-accent py-4 text-white appearance-none cursor-pointer transition-colors duration-300 outline-none peer"
        >
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value} className="bg-background text-white">
              {type.label}
            </option>
          ))}
        </select>
        <label className="absolute left-0 -top-3 text-xs text-accent uppercase tracking-wider">
          Project Type
        </label>
        {errors.projectType && (
          <p className="mt-2 text-sm text-red-400">{errors.projectType.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          {...register("message")}
          rows={4}
          className="w-full bg-transparent border-b border-white/20 focus:border-accent py-4 text-white resize-none transition-colors duration-300 outline-none peer"
          placeholder=" "
        />
        <label className="absolute left-0 top-4 text-grey transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase peer-focus:tracking-wider peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider">
          Your Message
        </label>
        {errors.message && (
          <p className="mt-2 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group w-full md:w-auto px-12 py-4 bg-accent text-primary-dark font-medium rounded-full flex items-center justify-center gap-3 hover:bg-accent-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full"
            />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </motion.button>
    </form>
  );
}

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FloatingLabelInput = React.forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, error, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        ref={ref}
        {...props}
        className="w-full bg-transparent border-b border-white/20 focus:border-accent py-4 text-white transition-colors duration-300 outline-none peer"
        placeholder=" "
      />
      <label className="absolute left-0 top-4 text-grey transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-focus:uppercase peer-focus:tracking-wider peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-accent peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider pointer-events-none">
        {label}
      </label>
      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
});

FloatingLabelInput.displayName = "FloatingLabelInput";

// Add React import
import React from "react";

