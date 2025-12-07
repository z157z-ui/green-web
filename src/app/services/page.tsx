import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Our Services - Green Builders and Interiors',
  description: 'Comprehensive interior design and construction services including villa design, apartment design, office designing, renovation, and construction solutions.',
};

const services = [
  {
    id: 'villa-design',
    title: 'Villa Design',
    description: 'Complete villa design including architecture, landscape, electrical, plumbing, furniture design, and civil engineering.',
    features: [
      'Architectural Planning',
      'Landscape Design',
      'Electrical & Plumbing Systems',
      'Furniture Design',
      'Civil Engineering',
      'Premium Finishes'
    ]
  },
  {
    id: 'apartment-design',
    title: 'Apartment Design',
    description: 'Modern apartment interiors designed to maximize space, functionality, and style for contemporary living.',
    features: [
      'Space Optimization',
      'Contemporary Styling',
      'Smart Storage Solutions',
      'Functional Layouts',
      'Quality Materials',
      'Modern Aesthetics'
    ]
  },
  {
    id: 'penthouse-design',
    title: 'Penthouse Interior Design',
    description: 'Luxury penthouse interiors with sophisticated design and premium finishes.',
    features: [
      'Luxury Design Concepts',
      'Premium Materials',
      'Custom Furniture',
      'High-end Finishes',
      'Smart Home Integration',
      'Exclusive Styling'
    ]
  },
  {
    id: 'office-design',
    title: 'Office Designing',
    description: 'Professional workspace design creating productive environments that reflect your brand and enhance employee satisfaction.',
    features: [
      'Brand-aligned Design',
      'Ergonomic Layouts',
      'Collaborative Spaces',
      'Meeting Rooms',
      'Reception Areas',
      'Employee Wellness'
    ]
  },
  {
    id: 'restaurant-design',
    title: 'Restaurant Design',
    description: 'Captivating restaurant interiors that create memorable dining experiences.',
    features: [
      'Ambiance Creation',
      'Dining Area Planning',
      'Kitchen Design',
      'Lighting Design',
      'Themed Interiors',
      'Customer Flow Optimization'
    ]
  },
  {
    id: 'landscape-design',
    title: 'Landscape Design',
    description: 'Beautiful outdoor spaces that complement your architecture.',
    features: [
      'Garden Planning',
      'Outdoor Lighting',
      'Hardscape Design',
      'Plant Selection',
      'Water Features',
      'Sustainable Landscaping'
    ]
  },
  {
    id: 'villa-renovation',
    title: 'Villa Renovation',
    description: 'Transform your existing villa with modern updates and enhanced functionality.',
    features: [
      'Structure Assessment',
      'Modern Updates',
      'Space Reconfiguration',
      'System Upgrades',
      'Aesthetic Enhancement',
      'Value Addition'
    ]
  },
  {
    id: 'apartment-renovation',
    title: 'Apartment Renovation',
    description: 'Modernize your apartment with expert renovation and interior upgrades.',
    features: [
      'Layout Optimization',
      'Modern Fixtures',
      'Quality Upgrades',
      'Style Refresh',
      'Functional Improvements',
      'Budget Planning'
    ]
  },
  {
    id: 'office-renovation',
    title: 'Office Renovation',
    description: 'Refresh your workspace with contemporary design and improved layouts.',
    features: [
      'Workspace Modernization',
      'Layout Improvement',
      'Technology Integration',
      'Branding Update',
      'Energy Efficiency',
      'Minimal Disruption'
    ]
  },
  {
    id: 'villa-construction',
    title: 'Villa Construction',
    description: 'Complete villa construction services from foundation to finishing.',
    features: [
      'Foundation to Finish',
      'Quality Construction',
      'Project Management',
      'Timeline Adherence',
      'Safety Standards',
      'Turnkey Solutions'
    ]
  },
  {
    id: 'curtains',
    title: 'Curtains & Soft Furnishings',
    description: 'Custom curtains and soft furnishings to complete your interior design.',
    features: [
      'Custom Designs',
      'Fabric Selection',
      'Window Treatments',
      'Drapery Solutions',
      'Motorized Options',
      'Professional Installation'
    ]
  },
  {
    id: 'barber-shop-design',
    title: 'Barber Shop Design',
    description: 'Stylish and functional barber shop interiors that attract customers.',
    features: [
      'Brand Identity',
      'Station Design',
      'Customer Comfort',
      'Lighting Planning',
      'Storage Solutions',
      'Trendy Aesthetics'
    ]
  }
];

const designProcess = [
  {
    title: 'Initial Consultation',
    description: 'Understanding your vision, requirements, and budget'
  },
  {
    title: 'Concept Development',
    description: 'Creating initial design concepts and mood boards'
  },
  {
    title: 'Space Planning',
    description: 'Optimizing layouts for functionality and flow'
  },
  {
    title: 'Material & Finish Selections',
    description: 'Choosing premium materials that match your style'
  },
  {
    title: 'Design Presentation',
    description: '3D visualization and detailed design proposals'
  },
  {
    title: 'Budget Alignment',
    description: 'Ensuring the design fits your investment plan'
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background text-text-primary py-20 md:py-32 mt-[60px] md:mt-[80px]">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal mb-6">
              Our Services
            </h1>
            <p className="font-body text-xl md:text-2xl text-text-secondary leading-relaxed">
              Comprehensive interior design and construction solutions tailored to transform your residential and commercial spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-[#e8e4df] py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-4">
              What We Offer
            </h2>
            <p className="font-body text-lg text-text-secondary max-w-3xl">
              From concept to completion, we provide end-to-end design and construction services with 8+ years of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-background p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-display text-2xl font-normal mb-4 text-text-primary">
                  {service.title}
                </h3>
                <p className="font-body text-body-regular text-text-secondary mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-text-secondary flex-shrink-0 mt-0.5" />
                      <span className="font-body text-sm text-text-primary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="bg-background py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-6">
              Core Expertise Areas
            </h2>
            <p className="font-body text-lg text-text-secondary">
              Comprehensive capabilities across all aspects of interior design and construction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {['Design Planning', 'Furniture Design', 'Interior Design', 'Architecture', 'Construction', 'Renovation & Remodeling'].map((expertise) => (
              <div key={expertise} className="text-center">
                <div className="font-display text-lg font-normal text-text-primary">
                  {expertise}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="bg-[#e8e4df] py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-4">
              Our Design Process
            </h2>
            <p className="font-body text-lg text-text-secondary mb-16">
              A systematic approach to bringing your vision to life
            </p>

            <div className="space-y-8">
              {designProcess.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-text-secondary text-background flex items-center justify-center font-display text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-normal mb-2 text-text-primary">
                      {step.title}
                    </h3>
                    <p className="font-body text-body-regular text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-6">
              Why Choose Green Builders and Interiors
            </h2>
            <p className="font-body text-lg text-text-secondary mb-12">
              Our commitment goes beyond just designit's reflected in every detail we handle
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="font-display text-3xl font-light mb-2">Client-Centric</div>
                <p className="font-body text-sm text-text-secondary">
                  Your needs are our priority
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-light mb-2">Detail-Oriented</div>
                <p className="font-body text-sm text-text-secondary">
                  Precision in every aspect
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-light mb-2">Creative & Practical</div>
                <p className="font-body text-sm text-text-secondary">
                  Innovative yet functional
                </p>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-light mb-2">Efficient Execution</div>
                <p className="font-body text-sm text-text-secondary">
                  On-time, on-budget delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2a2a2a] text-white py-20 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="font-body text-lg text-gray-300 mb-8">
              Let's discuss your project and bring your vision to life with our expert team
            </p>
            <Link
              href="/#contact"
              className="inline-block font-body text-sm font-medium uppercase tracking-[0.06em] border-2 border-white text-white rounded-full px-10 py-4 transition-colors duration-300 hover:bg-white hover:text-[#2a2a2a]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
