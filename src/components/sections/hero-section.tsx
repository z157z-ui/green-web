"use client";

import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const videoUrl =
    "https://player.vimeo.com/progressive_redirect/playback/1135264675/rendition/1080p/file.mp4%20%281080p%29.mp4?loc=external&signature=6b4870519153433bcce1d871cc466f90a4e367e78bd6f9ba9ece253426bd0ac9";

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        src={videoUrl.replace(/&amp;/g, "&")}
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 h-full w-full bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-pure-white">
        <div className="container px-5 text-center md:px-10">
          <h1 className="font-display text-[4.5rem] font-light leading-none md:text-[6rem] md:leading-[0.9] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.6)' }}>
            CREATE AND CUSTOMIZE YOUR DREAM INTERIOR
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-xl font-normal leading-relaxed text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5)' }}>
            Explore a world of innovative designs and enduring quality with Green Builders and Interiors. We have 8+ years of experience in interior design.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="h-8 w-8 animate-bounce text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;