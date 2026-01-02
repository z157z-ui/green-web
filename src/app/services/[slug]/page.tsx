"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getServiceBySlug, getProjectById } from "@/lib/data";
import { 
  Home, Building2, Building, Briefcase, UtensilsCrossed, Scissors,
  Hammer, Wrench, HardHat, Landmark, TreePine, Palette,
  CheckCircle, ArrowRight, Phone
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  Home, Building2, Building, Briefcase, UtensilsCrossed, Scissors,
  Hammer, Wrench, HardHat, Landmark, TreePine, Palette,
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-white mb-4">Service Not Found</h1>
          <p className="text-text-grey mb-8">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link 
            href="/services" 
            className="inline-block px-6 py-3 bg-accent text-white font-bold rounded-lg border-2 border-accent shadow-lg shadow-accent/50 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 opacity-100 z-20 relative"
          >
            View All Services
          </Link>
        </div>
      </main>
    );
  }

  const IconComponent = iconMap[service.icon] || Home;
  const relatedProjects = service.relatedProjects
    .map((id) => getProjectById(id))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 mb-6 bg-accent/10 rounded-full border border-accent/30"
            >
              <IconComponent className="w-5 h-5 text-accent" />
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                {service.category}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-white max-w-4xl"
            >
              {service.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-text-grey max-w-2xl mx-auto"
            >
              {service.shortDescription}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 bg-background">
        <div className="luxury-container max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-text-grey leading-relaxed text-center"
          >
            {service.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-primary-dark">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="luxury-label text-gold">Our Process</span>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-white">
              How We Approach {service.title}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="text-7xl font-serif font-bold text-accent/20 mb-4">
                  {String(step.step).padStart(2, "0")}
                </div>
                
                <h3 className="font-serif text-xl text-white mb-3">{step.title}</h3>
                <p className="text-text-grey text-sm leading-relaxed">{step.description}</p>
                
                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-accent/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="luxury-label text-gold">Why Choose Us</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-white mb-8">
                Benefits of Our {service.title} Service
              </h2>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-text-grey">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-primary-dark">
          <div className="luxury-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="luxury-label text-gold">Recent Work</span>
              <h2 className="mt-4 font-serif text-3xl md:text-4xl text-white">
                {service.title} Projects
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project, index) => (
                project && (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/projects/${project.id}`} className="group block">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group-hover:border-accent/50 transition-colors">
                        <Image
                          src={project.featuredImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="font-serif text-lg text-white">{project.title}</h3>
                          <p className="text-sm text-text-grey">{project.location}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                )
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-accent hover:text-gold transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="luxury-card p-10 md:p-16 text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">
              Ready to Start Your {service.title} Project?
            </h2>
            <p className="text-text-grey max-w-2xl mx-auto mb-8">
              Book a free consultation with our experts and let&apos;s discuss how we can 
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg border-2 border-accent shadow-lg shadow-accent/50 hover:bg-gold hover:border-gold hover:text-white transition-all duration-300 opacity-100 z-20 relative"
              >
                <Phone className="w-5 h-5" />
                Book Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent/80 text-white font-semibold rounded-lg bg-white/5 hover:border-gold hover:text-gold hover:bg-white/10 transition-all duration-300 opacity-100 z-20 relative"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

