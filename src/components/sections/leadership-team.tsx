'use client';

import React from 'react';
import { User } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  education: string[];
  experience: string;
  expertise: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sanal Das KV',
    title: 'Founder & CEO',
    education: ['BSc Interior Design', 'Diploma in Building & Construction'],
    experience: '9 years interior design experience, 4 years construction & project management',
    expertise: 'Execution, HVAC integration',
  },
  {
    name: 'Praveen Kumar R',
    title: 'Co-Founder & CTO',
    education: ['BE Electrical & Electronics'],
    experience: 'Operations Manager at Awfis Space Solutions, 10 years in space management and facility operations',
    expertise: 'HVAC for commercial spaces',
  },
  {
    name: 'Bluvin Ravindran',
    title: 'Co-Founder & COO',
    education: ['Mechanical Engineering'],
    experience: 'Managing Director at C-Zero, Co-Founder of Super Biochar (New York), Associate Director at Suarcsh Filters Pvt Ltd, 10+ years in business development',
    expertise: 'Business development and operations',
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group bg-card border border-border rounded-sm overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <div className="relative aspect-[4/5] bg-secondary flex items-center justify-center grayscale">
        <User className="h-20 w-20 text-muted" />
      </div>
      <div className="p-6 text-left">
        <h3 className="font-body font-semibold text-lg text-text-primary leading-tight">
          {member.name}
        </h3>
        <p className="font-body text-sm text-text-secondary mt-1 mb-4">
          {member.title}
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

const LeadershipTeam = () => {
  return (
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
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
