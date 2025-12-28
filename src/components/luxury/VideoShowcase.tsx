"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Loader2 } from "lucide-react";

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
  const [isPlayingLoading, setIsPlayingLoading] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const toggleVideo = async (videoId: string) => {
    const video = videoRefs.current[videoId];
    if (!video) return;

    // Guard against concurrent video loading
    // Capture current loading state safely
    const currentLoadingId = isPlayingLoading;
    if (currentLoadingId === videoId) {
      // Same video is already loading, ignore click
      return;
    }
    if (currentLoadingId !== null && currentLoadingId !== videoId) {
      // Another video is currently loading, ignore click
      return;
    }

    if (playingVideo === videoId) {
      video.pause();
      if (mountedRef.current) {
        setPlayingVideo(null);
      }
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach((v) => {
        if (v && v !== video) {
          v.pause();
        }
      });
      
      // Set loading state before async operation
      if (mountedRef.current) {
        setIsPlayingLoading(videoId);
      }

      try {
        await video.play();
        if (mountedRef.current) {
          setPlayingVideo(videoId);
        }
      } catch (error) {
        // Handle autoplay policy or other play() errors
        console.error(`Failed to play video ${videoId}:`, error);
        if (mountedRef.current) {
          setPlayingVideo(null);
        }
        // Ensure video is paused on error
        video.pause();
      } finally {
        // Always clear loading state, even on error
        if (mountedRef.current) {
          setIsPlayingLoading(null);
        }
      }
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
            const isLoading = isPlayingLoading === video.id;
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
                    onPlay={() => {
                      if (mountedRef.current) {
                        setPlayingVideo(video.id);
                      }
                    }}
                    onPause={() => {
                      if (mountedRef.current) {
                        setPlayingVideo((prev) => (prev === video.id ? null : prev));
                      }
                    }}
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play/Pause Button */}
                  <button
                    onClick={() => toggleVideo(video.id)}
                    disabled={isLoading}
                    className="absolute inset-0 flex items-center justify-center group/btn disabled:cursor-not-allowed disabled:opacity-75"
                    aria-label={isPlaying ? "Pause video" : "Play video"}
                  >
                    <motion.div
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 flex items-center justify-center group-hover/btn:bg-white/20 group-hover/btn:border-gold transition-all duration-300"
                      whileHover={!isLoading ? { scale: 1.1 } : {}}
                      whileTap={!isLoading ? { scale: 0.95 } : {}}
                    >
                      {isLoading ? (
                        <Loader2 className="w-8 h-8 md:w-10 md:h-10 text-white animate-spin" />
                      ) : isPlaying ? (
                        <Pause className="w-8 h-8 md:w-10 md:h-10 text-white" />
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

