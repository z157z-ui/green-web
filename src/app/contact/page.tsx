'use client';

import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      city: 'Bangalore',
      title: 'Green Builders and Interiors Banglore',
      address: 'Reg Office, G F, NO 6/1, Madivala, Bengaluru, Karnataka, 560068',
      email: 'banglore@greenbuildersandinteriors.com',
      phone: '9739992779, 9606894352',
      isHeadOffice: true
    },
    {
      city: 'Visakhapatnam',
      title: 'Green Builders and Interiors Visakhapatnam',
      address: 'Mastec QuadGen Wireless LLP, 2nd Floor, Synophic Tower, D3/A Hill No 2, IT Tech Park, Madhurawada, Visakhapatnam, Andhra Pradesh 530045',
      email: 'Visakhapatnam@greenbuildersandinteriors.com',
      phone: '9739992779, 9606894352'
    },
    {
      city: 'Hyderabad',
      title: 'Green Builders and Interiors Hyderabad',
      address: 'Ground Floor D\' Desks, Road Number 12, Banjara Hills, Hyderabad, Telangana',
      email: 'hyderabad@greenbuildersandinteriors.com',
      phone: '9739992779, 9606894352'
    },
    {
      city: 'Kochi',
      title: 'Green Builders and Interiors Kochi',
      address: '3rd floor AWFIS office, Mezhukkattil Matrix, Chittoor Road, Mullassery Canal Junction, Ernakulam Kochi 682011',
      email: 'kochi@greenbuildersandinteriors.com',
      phone: '9739992779, 9606894352'
    },
    {
      city: 'Chennai',
      title: 'Green Builders and Interiors Chennai',
      address: '1st Floor, 111 A Rajiv Gandhi Road, Old Mahabalipuram Road, OMR, Kottivakkam, Chennai, Tamil Nadu 600041',
      email: 'chennai@greenbuildersandinteriors.com',
      phone: '9739992779, 9606894352'
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-background">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal mb-6 text-text-primary">
            Get in Touch
          </h1>
          <p className="font-body text-xl md:text-2xl text-text-secondary max-w-3xl leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out to us through any of our locations or send us a message.
          </p>
        </div>
      </section>

      {/* Contact Form and Main Office */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 border-4 border-[#2d5016]">
              <h2 className="font-display text-3xl md:text-4xl font-normal mb-8 text-text-primary">
                Send us a Message
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block font-body text-sm font-medium text-text-primary mb-2">
                    YOUR NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block font-body text-sm font-medium text-text-primary mb-2">
                    YOUR EMAIL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block font-body text-sm font-medium text-text-primary mb-2">
                    MESSAGE <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <p className="text-sm text-text-secondary mb-6">
                  Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#2d5016] text-white font-body text-sm font-medium uppercase tracking-wider px-8 py-4 hover:bg-[#3d6520] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>

            {/* Main Office - Bangalore */}
            <div className="bg-white p-8 md:p-10 border-4 border-[#2d5016]">
              <h2 className="font-display text-3xl md:text-4xl font-normal mb-8 text-[#2d5016]">
                {offices[0].title}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#2d5016] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-body font-semibold text-text-primary mb-2">OUR LOCATION</h3>
                    <p className="font-body text-text-secondary leading-relaxed">
                      {offices[0].address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#2d5016] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-body font-semibold text-text-primary mb-2">OUR MAILBOX:</h3>
                    <a
                      href={`mailto:${offices[0].email}`}
                      className="font-body text-text-secondary hover:text-[#2d5016] transition-colors"
                    >
                      {offices[0].email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#2d5016] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-body font-semibold text-text-primary mb-2">PHONE</h3>
                    <p className="font-body text-text-secondary">
                      {offices[0].phone.split(', ').map((phone, idx) => (
                        <span key={idx}>
                          <a href={`tel:${phone}`} className="hover:text-[#2d5016] transition-colors">
                            {phone}
                          </a>
                          {idx === 0 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Office Locations */}
      <section className="py-12 md:py-16 bg-[#e8e4df]">
        <div className="container">
          <h2 className="font-display text-4xl md:text-5xl font-normal mb-12 text-text-primary text-center">
            Our Other Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.slice(1).map((office, index) => (
              <div
                key={index}
                className="bg-white p-8 border-4 border-[#2d5016]"
              >
                <h3 className="font-display text-2xl md:text-3xl font-normal mb-6 text-[#2d5016]">
                  {office.title}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-body font-semibold text-text-primary mb-1">Address:</p>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">
                      {office.address}
                    </p>
                  </div>

                  <div>
                    <p className="font-body font-semibold text-text-primary mb-1">E-mail:</p>
                    <a
                      href={`mailto:${office.email}`}
                      className="font-body text-sm text-text-secondary hover:text-[#2d5016] transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div>
                    <p className="font-body font-semibold text-text-primary mb-1">Phone:</p>
                    <p className="font-body text-sm text-text-secondary">
                      {office.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section (Optional - can add Google Maps integration) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600 font-body">Map Integration (Google Maps API can be added here)</p>
        </div>
      </section>
    </main>
  );
}
