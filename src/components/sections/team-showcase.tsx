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

interface TeamDepartment {
  name: string;
  description: string;
  members: CoreMember[];
}

const teamDepartments: TeamDepartment[] = [
  {
    name: "Design & Architecture",
    description: "Creative minds shaping spaces with vision and precision",
    members: [
      { name: "Naresh Joseph", role: "Principal Architect" },
      { name: "Abhilash Nair", role: "Senior Interior Designer" },
      { name: "Hrithik", role: "Interior Designer" },
    ]
  },
  {
    name: "Engineering & Technical",
    description: "Expert engineers ensuring structural excellence",
    members: [
      { name: "Bijoy", role: "Lead Civil Engineer" },
      { name: "Adarsh", role: "Civil Engineer" },
      { name: "Chandrashekhar", role: "Structural Engineer" },
      { name: "Deepesh", role: "HVAC Engineer" },
      { name: "Amal Vijayan", role: "Electrical Engineer" },
    ]
  },
  {
    name: "Admin & Operations",
    description: "Managing seamless project delivery and business operations",
    members: [
      { name: "Arjun", role: "Business Operations & Talent Support Manager" },
      { name: "Akash S", role: "Safety Officer" },
    ]
  },
  {
    name: "Marketing & Business Development",
    description: "Building relationships and growing our presence",
    members: [
      { name: "Aditya", role: "Media Specialist" },
      { name: "Amal", role: "Media Coordinator" },
    ]
  }
];

const LeaderCard = ({ member }: { member: LeaderMember }) => {
  return (
    <div className="group bg-card border border-border rounded-sm overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg h-full flex flex-col">
      <div className="relative aspect-[3/4] max-h-[280px] bg-secondary flex items-center justify-center overflow-hidden">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <User className="h-16 w-16 text-muted" />
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-body font-semibold text-base text-text-primary leading-tight mb-1">
          {member.name}
        </h3>
        <p className="font-body text-sm text-text-secondary mb-4">
          {member.role}
        </p>

        <div className="space-y-2.5 text-sm flex-1">
          <div>
            <p className="font-body font-medium text-text-tertiary text-xs uppercase tracking-wider mb-1">
              Education
            </p>
            {member.education.map((edu, i) => (
              <p key={i} className="font-body text-xs text-text-secondary leading-relaxed">
                {edu}
              </p>
            ))}
          </div>

          <div>
            <p className="font-body font-medium text-text-tertiary text-xs uppercase tracking-wider mb-1">
              Experience
            </p>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
              {member.experience}
            </p>
          </div>

          <div>
            <p className="font-body font-medium text-text-tertiary text-xs uppercase tracking-wider mb-1">
              Expertise
            </p>
            <p className="font-body text-xs text-text-secondary leading-relaxed">
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
    <div className="group bg-card border border-border rounded-sm overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg h-full flex flex-col">
      <div className="relative aspect-[3/4] max-h-[240px] bg-secondary flex items-center justify-center grayscale">
        <User className="h-16 w-16 text-muted" />
      </div>
      <div className="p-5 flex-1 flex flex-col justify-center">
        <h3 className="font-body font-semibold text-base text-text-primary leading-tight mb-1">
          {member.name}
        </h3>
        <p className="font-body text-sm text-text-secondary">
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
      <section className="bg-background text-foreground py-16 md:py-20">
        <div className="luxury-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12">
            <div className="lg:col-span-4 xl:col-span-3">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-text-primary mb-4">
                Leadership team
              </h2>
              <p className="font-body text-base md:text-lg text-text-secondary">
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

      {/* Department Sections */}
      {teamDepartments.map((dept, deptIndex) => (
        <section 
          key={dept.name}
          className="bg-background text-foreground py-16 md:py-20 border-t border-border"
        >
          <div className="luxury-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12">
              <div className="lg:col-span-4 xl:col-span-3">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-text-primary mb-4">
                  {dept.name}
                </h2>
                <p className="font-body text-base md:text-lg text-text-secondary">
                  {dept.description}
                </p>
              </div>
              <div className="lg:col-span-8 xl:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {dept.members.map((member, index) => (
                    <CoreTeamCard key={index} member={member} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Technical Team Count */}
      <section className="bg-primary-dark text-foreground py-16 md:py-20">
        <div className="luxury-container text-center">
          <p className="text-gold font-serif text-5xl md:text-6xl font-light mb-4">+19</p>
          <h3 className="font-serif text-3xl md:text-4xl font-medium text-text-primary mb-2">
            Technical Team Members
          </h3>
          <p className="font-body text-text-secondary max-w-lg mx-auto text-base md:text-lg">
            Our extended technical team includes skilled craftsmen, site supervisors, 
            and specialists who bring every project to life.
          </p>
        </div>
      </section>
    </>
  );
};

export default TeamShowcase;
