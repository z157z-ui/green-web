"use client";

import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

interface LeaderMember {
  name: string;
  role: string;
  education: string[];
  experience: string;
  expertise: string;
  image?: string;
}

interface CoreMember {
  name: string;
  role: string;
}

const leadership: LeaderMember[] = [
  {
    name: "Sanal Das KV",
    role: "Founder & CEO",
    education: ["BSc Interior Design", "Diploma in Building & Construction"],
    experience: "9 years interior design experience, 4 years construction & project management",
    expertise: "Execution, HVAC integration",
    image: "/images/team/Sanal Das KV.png"
  },
  {
    name: "Praveen Kumar R",
    role: "Co-Founder & CTO",
    education: ["BE Electrical & Electronics"],
    experience: "Operations Manager at Awfis Space Solutions, 10 years in space management and facility operations",
    expertise: "HVAC for commercial spaces",
    image: "/images/team/Praveen Kumar R.png"
  },
  {
    name: "Bluvin Ravindran",
    role: "Co-Founder & COO",
    education: ["Mechanical Engineering"],
    experience: "Managing Director at C-Zero, Co-Founder of Super Biochar (New York), Associate Director at Suarcsh Filters Pvt Ltd, 10+ years in business development",
    expertise: "Business development and operations",
    image: "/images/team/Bluvin Ravindran.png"
  }
];

const coreTeam: CoreMember[] = [
  { name: "Arjun", role: "Business Operations & Talent Support Manager" },
  { name: "Abhilash Nair", role: "3D Visualizer" },
  { name: "Naresh Joseph", role: "Principal Architect" },
  { name: "Hrithik", role: "Interior Designer" },
  { name: "Bijoy", role: "Lead Civil Engineer" },
  { name: "Adarsh", role: "Civil Engineer" },
  { name: "Chandrashekhar", role: "Structural Engineer" },
  { name: "Deepesh", role: "HVAC Engineer" },
  { name: "Amal Vijayan", role: "Electrical Engineer" },
  { name: "Akash S", role: "Safety Officer" },
  { name: "Akshay", role: "Media Team Lead" },
  { name: "Adithya", role: "Media Specialist" },
  { name: "Amal", role: "Media Coordinator" },
  { name: "Arathi Krishna", role: "Lead Generation Specialist" }
];

const LeaderCard = ({ member }: { member: LeaderMember }) => {
  return (
    <div className="group bg-card border border-border rounded-sm overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <div className="relative aspect-[4/5] bg-secondary flex items-center justify-center overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <User className="h-20 w-20 text-muted" />
        )}
      </div>
      <div className="p-6 text-left">
        <h3 className="font-body font-semibold text-lg text-text-primary leading-tight">
          {member.name}
        </h3>
        <p className="font-body text-sm text-text-secondary mt-1 mb-4">
          {member.role}
        </p>

        <div className="space-y-3 text-sm">
          <div>
            <p className="font-body font-medium text-text-tertiary text-xs uppercase tracking-wider mb-1">
              Education
            </p>
            {member.education.map((edu, i) => (
              <p key={i} className="font-body text-xs text-text-secondary">
                {edu}
              </p>
            ))}
          </div>

          <div>
            <p className="font-body font-medium text-text-tertiary text-xs uppercase tracking-wider mb-1">
              Experience
            </p>
            <p className="font-body text-xs text-text-secondary">
              {member.experience}
            </p>
          </div>

          <div>
            <p className="font-body font-medium text-text-tertiary text-xs uppercase tracking-wider mb-1">
              Expertise
            </p>
            <p className="font-body text-xs text-text-secondary">
              {member.expertise}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreTeamCard = ({ member }: { member: CoreMember }) => {
  return (
    <div className="group bg-card border border-border rounded-sm overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <div className="relative aspect-[4/5] bg-secondary flex items-center justify-center grayscale">
        <User className="h-20 w-20 text-muted" />
      </div>
      <div className="p-6 text-left">
        <h3 className="font-body font-semibold text-lg text-text-primary leading-tight">
          {member.name}
        </h3>
        <p className="font-body text-sm text-text-secondary mt-1">
          {member.role}
        </p>
      </div>
    </div>
  );
};

const TeamShowcase = () => {
  return (
    <>
      {/* Leadership Section */}
      <section className="bg-background text-foreground py-24 sm:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16">
            <div className="lg:col-span-4 xl:col-span-3">
              <h2 className="font-display text-[42px] leading-tight text-text-primary">
                Leadership team
              </h2>
              <p className="font-body text-body-regular text-text-secondary mt-4">
                Our leadership team brings together decades of expertise in design, construction, and business operations.
              </p>
            </div>
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {leadership.map((member, index) => (
                  <LeaderCard key={index} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="bg-background text-foreground py-24 sm:py-32 border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16">
            <div className="lg:col-span-4 xl:col-span-3">
              <h2 className="font-display text-[42px] leading-tight text-text-primary">
                Core team
              </h2>
              <p className="font-body text-body-regular text-text-secondary mt-4">
                Our talented team of specialists ensures every project is executed with precision and excellence.
              </p>
            </div>
            <div className="lg:col-span-8 xl:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreTeam.map((member, index) => (
                  <CoreTeamCard key={index} member={member} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamShowcase;
