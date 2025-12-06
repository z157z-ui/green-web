'use client';

import React from 'react';
import { User } from 'lucide-react';

interface TeamMember {
  name: string;
  title: string;
  location: string;
  image: string; // Placeholder for now
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ian Carr',
    title: 'Partner & Co-CEO',
    location: 'HBA | Singapore',
    image: '/placeholder-team-1.jpg',
  },
  {
    name: 'Chris Godfrey',
    title: 'Partner & Co-CEO',
    location: 'HBA | Singapore',
    image: '/placeholder-team-2.jpg',
  },
  {
    name: 'Meghann Day',
    title: 'Partner & President The Americas',
    location: 'HBA | San Francisco',
    image: '/placeholder-team-3.jpg',
  },
  {
    name: 'Andrew Moore',
    title: 'Partner & President Middle East & KSA',
    location: 'HBA | Dubai',
    image: '/placeholder-team-4.jpg',
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="group bg-card border border-border rounded-sm overflow-hidden transform transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
      <div className="relative aspect-[4/5] bg-secondary flex items-center justify-center grayscale">
        <User className="h-20 w-20 text-muted" />
        {/* Placeholder for an actual image */}
        {/* <Image src={member.image} alt={`Portrait of ${member.name}`} layout="fill" objectFit="cover" className="grayscale" /> */}
      </div>
      <div className="p-6 text-left">
        <h3 className="font-body font-semibold text-lg text-text-primary leading-tight">
          {member.name}
        </h3>
        <p className="font-body text-sm text-text-secondary mt-1 mb-0">
          {member.title}
        </p>
        <p className="text-metadata mt-4 mb-0">{member.location}</p>
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