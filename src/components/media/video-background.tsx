"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoBackgroundProps {
  src: string;
  poster: string;
  className?: string;
  /** Pause playback when scrolled out of view to save CPU/battery. */
  pauseOffscreen?: boolean;
}

export function VideoBackground({
  src,
  poster,
  className,
  pauseOffscreen = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      video.pause();
      return;
    }

    if (!pauseOffscreen) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [pauseOffscreen]);

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full object-cover", className)}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
