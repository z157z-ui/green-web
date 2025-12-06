import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Project {
  title: string;
  image: string;
  width: number;
  height: number;
  practice: string;
  type: string;
  location: string;
  year: string;
  href: string;
}

const projectsData: Project[] = [
  {
    title: "Jumeirah Marsa Al Arab",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Conrad-Tulum-Riviera-Maya-03-1536x1025-29.jpg",
    width: 1536,
    height: 1025,
    practice: "HBA Dubai & Light Directions",
    type: "Hotel & Branded Residences",
    location: "Dubai",
    year: "2025",
    href: "#",
  },
  {
    title: "Fairmont Breakers Long Beach",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Conrad-Jiuzhaigou_HBA-Singapore-1265x1536-15.jpg",
    width: 1265,
    height: 1536,
    practice: "HBA San Francisco",
    type: "Hotel",
    location: "USA",
    year: "2025",
    href: "#",
  },
  {
    title: "One&Only Portonovi, Herceg Novi",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/04-Chedi-Xinchang-1536x864-2.jpg",
    width: 1536,
    height: 864,
    practice: "HBA Singapore",
    type: "Resort",
    location: "Montenegro",
    year: "2021",
    href: "#",
  },
  {
    title: "The Delmore Surfside Residences, Miami",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/AREIC-Tower_HBA-Architecture-1265x1536-16.jpg",
    width: 1265,
    height: 1536,
    practice: "HBA RESIDENTIAL",
    type: "RESIDENCE",
    location: "USA",
    year: "IN PROGRESS",
    href: "#",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const isMultiLineTitle = project.title.includes(',');
  return (
    <Link href={project.href} className="group block">
      <div className="overflow-hidden bg-accent-neutral">
        <Image
          src={project.image}
          alt={`Image of ${project.title}`}
          width={project.width}
          height={project.height}
          className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="mt-6">
        <h3 className="font-display text-2xl font-normal text-text-primary leading-tight">
          {isMultiLineTitle ? (
            <>
              {project.title.split(',')[0]},
              <br />
              {project.title.split(',').slice(1).join(',').trim()}
            </>
          ) : (
            project.title
          )}
        </h3>
        <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-text-tertiary">Practice</p>
            <p className="mt-1 text-sm text-text-primary leading-normal">{project.practice}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-text-tertiary">Type</p>
            <p className="mt-1 text-sm text-text-primary leading-normal">{project.type}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-text-tertiary">Location</p>
            <p className="mt-1 text-sm text-text-primary leading-normal">{project.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.08em] text-text-tertiary">Year</p>
            <p className="mt-1 text-sm text-text-primary leading-normal">{project.year}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

const FeaturedProjectsGrid = () => {
  // Duplicate for a fuller grid showcase
  const displayProjects = [...projectsData, ...projectsData.slice(0, 2)]; 

  return (
    <section className="bg-background text-foreground py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-5 md:px-10">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 md:gap-6">
          {displayProjects.map((project, index) => (
            <div key={index} className="mb-4 md:mb-6 break-inside-avoid">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsGrid;