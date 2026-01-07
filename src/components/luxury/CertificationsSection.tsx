"use client";

import { motion } from "framer-motion";
import { FileText, Shield, Award, Download } from "lucide-react";
import Link from "next/link";

const certifications = [
  {
    title: "GSTIN Certificate",
    number: "29AVHPV0225A1ZT",
    description: "Registered under GST with Government of India",
    icon: FileText,
    pdfLink: "/documents/gstin-certificate.pdf",
  },
  {
    title: "Udyam Registration",
    number: "UDYAM-KR-03-0312492",
    description: "MSME registered enterprise (Udyam Certificate)",
    icon: Shield,
    pdfLink: "/documents/udyam-registration.pdf",
  },
  {
    title: "NIC Classification",
    number: "9 Categories",
    description: "National Industry Classification (included in MSME certificate)",
    icon: Award,
    pdfLink: "/documents/udyam-registration.pdf", // Same document as MSME since NIC is included
  },
];

const nicCodes = [
  { code: "25111", activity: "Doors, Windows & Shutters" },
  { code: "31009", activity: "Furniture Manufacturing" },
  { code: "71100", activity: "Architectural Services" },
  { code: "80200", activity: "Security Systems" },
  { code: "81300", activity: "Landscape Care" },
  { code: "42909", activity: "Civil Engineering" },
  { code: "43211", activity: "Electrical Installation" },
  { code: "43212", activity: "Telecom Wiring" },
  { code: "41001", activity: "Building Construction" },
];

export function CertificationsSection() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="luxury-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="luxury-label text-gold">Legal & Compliance</span>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Certifications & Licenses
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-text-grey">
            Fully registered and compliant with all government regulations
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/10 bg-primary-dark/50 hover:border-gold/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 text-gold">
                <cert.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-medium text-white mb-2">
                {cert.title}
              </h3>
              <p className="text-gold font-mono text-sm mb-3">{cert.number}</p>
              <p className="text-text-grey text-sm mb-6">{cert.description}</p>

              {/* Download Link */}
              <Link
                href={cert.pdfLink}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-gold hover:text-accent transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Certificate</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* NIC Codes Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-10 rounded-2xl border border-white/10 bg-primary-dark/30"
        >
          <h3 className="text-xl font-medium text-white mb-6">
            National Industry Classification Codes
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {nicCodes.map((nic, index) => (
              <motion.div
                key={nic.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 rounded-xl bg-background/50 border border-white/5 hover:border-gold/20 transition-all duration-300"
              >
                <p className="text-gold font-mono text-lg font-medium mb-1">
                  {nic.code}
                </p>
                <p className="text-text-grey text-xs">{nic.activity}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GSTIN Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <p className="text-text-grey text-sm">
            GSTIN:{" "}
            <span className="text-gold font-mono">29AVHPV0225A1ZT</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

















