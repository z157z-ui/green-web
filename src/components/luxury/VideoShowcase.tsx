"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const videos = [
  {
    id: "about-1",
    src: "/videos/about-1.mp4",
    title: "Our Journey",
    description: "Discover the story behind Green Builders & Interiors",
  },
  {
    id: "about-2",
    src: "/videos/about-2.mp4",
    title: "Our Vision",
    description: "Building dreams, one project at a time",
  },
];

export function VideoShowcase() {
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const toggleVideo = (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    if (playingVideo === videoId) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach((v) => {
        if (v && v !== video) {
          v.pause();
        }
      });
      video.play();
      setPlayingVideo(videoId);
    }
  };

  return (
    <section className="relative py-20 md:py-24 bg-primary-dark overflow-hidden">
      <div className="luxury-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="luxury-label text-gold">Our Story</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
            See Us in Action
          </h2>
          <p className="mt-6 text-lg text-text-grey max-w-2xl mx-auto">
            Experience our passion for design and craftsmanship through these visual stories
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {videos.map((video, index) => {
            const isPlaying = playingVideo === video.id;
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative rounded-2xl overflow-hidden bg-black/20 border border-white/10 hover:border-gold/30 transition-all duration-300"
              >
                {/* Video Container */}
                <div className="relative aspect-video">
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    src={video.src}
                    className="w-full h-full object-cover"
                    loop
                    muted
                    playsInline
                    onPlay={() => setPlayingVideo(video.id)}
                    onPause={() => {
                      if (playingVideo === video.id) {
                        setPlayingVideo(null);
                      }
                    }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play/Pause Button */}
                  <button
                    onClick={() => toggleVideo(video.id)}
                    className="absolute inset-0 flex items-center justify-center group/btn"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    <motion.div
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center group-hover/btn:bg-white/20 group-hover/btn:border-gold transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                      ) : (
                        <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" />
                      )}
                    </motion.div>
                  </button>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-2">
                      {video.title}
                    </h3>
                    <p className="text-sm md:text-base text-white/80">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

