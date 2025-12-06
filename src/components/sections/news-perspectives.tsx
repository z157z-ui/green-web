"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    category: 'MEDIA',
    date: '11.11.25',
    headline: 'HBA featured in Forbes’ America’s Top Hospitality Architects & Designers 2026',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Careers-Jumeirah_Marsa-Al-Arab-HBA-Dubai-new-3.jpg',
    link: '#',
  },
  {
    category: 'AWARDS & ACCOLADES',
    date: '20.08.25',
    headline: 'HBA retains #1 ranking – Interior Design’s 2025 Top 100 Giants Hospitality List',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/perpectives-Interior-Design_HBA-Hospitality-Giants-30.jpg',
    link: '#',
  },
  {
    category: 'AWARDS & ACCOLADES',
    date: '01.12.25',
    headline: 'Jumeirah Marsa Al Arab, Dubai, wins the 2025 AHEAD MEA',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Jumeirah-Marsa-Al-Arab-24-2048x1365-4.jpg',
    link: '#',
  },
  {
    category: 'MEDIA',
    date: '26.11.25',
    headline: 'Olise Magazines profiles Katie Earl, HBA Residential, among 33 Icons of Today',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/Careers-Jumeirah_Marsa-Al-Arab-HBA-Dubai-new-3.jpg',
    link: '#',
  },
  {
    category: 'AWARDS & ACCOLADES',
    date: '25.11.25',
    headline: 'HBA Digital celebrates a double win at the Big 5 Global Impact Awards 2025',
    imageUrl: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6eace6e6-a7a2-4765-a9bd-4fcc11fb14c0-hba-com/assets/images/perpectives-Interior-Design_HBA-Hospitality-Giants-30.jpg',
    link: '#',
  },
];

const NewsPerspectives = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[0] as HTMLElement;
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 32; // Corresponds to gap-8
        const scrollAmount = cardWidth + gap;

        carouselRef.current.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section className="bg-background py-[120px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-5 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-10">
          <h2 className="font-display text-[42px] leading-none text-text-primary">Perspectives</h2>
          <a href="/perspectives" className="text-button border border-button-border rounded-full px-8 py-3 uppercase tracking-[0.06em] hover:bg-black/5 transition-colors duration-300 mt-4 md:mt-0 self-start whitespace-nowrap">
            View All
          </a>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-8 pb-8 -mx-5 lg:-mx-10 px-5 lg:px-10 overflow-x-auto scroll-snap-x-mandatory scrollbar-hide"
        >
          {newsItems.map((item, index) => (
            <div key={index} className="flex-shrink-0 snap-start w-[calc(100vw-40px)] md:w-[400px]">
              <a href={item.link} className="group block bg-card rounded-lg h-[500px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={item.imageUrl}
                    alt={item.headline}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-metadata">
                    <p>{item.category}</p>
                    <p>{item.date}</p>
                  </div>
                  <h4 className="font-display text-2xl mt-4 text-text-primary leading-snug flex-grow">
                    {item.headline}
                  </h4>
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Previous Post"
            className="w-14 h-14 rounded-full border border-text-primary flex items-center justify-center text-text-primary transition-colors hover:bg-black/5"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Next Post"
            className="w-14 h-14 rounded-full border border-text-primary flex items-center justify-center text-text-primary transition-colors hover:bg-black/5"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsPerspectives;