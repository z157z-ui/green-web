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
      <div className="absolute left-0 top-0 h-full w-full bg-black/30" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-pure-white">
        <div className="container px-5 text-center md:px-10">
          <h1 className="font-display text-[4.5rem] font-light leading-none md:text-[6rem] md:leading-[0.9]">
            GreenBuilders - Design that transforms spaces
          </h1>
          <p className="mx-auto mt-6 max-w-3xl font-body text-xl font-normal leading-relaxed">
            A leading provider of interior design and plumbing solutions
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ArrowDown className="h-8 w-8 animate-bounce text-pure-white" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;