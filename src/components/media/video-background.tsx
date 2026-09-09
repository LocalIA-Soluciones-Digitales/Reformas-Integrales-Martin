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

    // Restart a hair before the true end instead of relying on the native
    // `loop` attribute: waiting for the end-of-stream/seek-back cycle is what
    // produces the visible black flash on loop in most browsers.
    const LOOP_MARGIN = 0.2;
    const handleTimeUpdate = () => {
      if (
        video.duration &&
        video.currentTime >= video.duration - LOOP_MARGIN
      ) {
        video.currentTime = 0;
        video.play().catch(() => {});
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);

    if (!pauseOffscreen) {
      return () => video.removeEventListener("timeupdate", handleTimeUpdate);
    }

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
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      observer.disconnect();
    };
  }, [pauseOffscreen]);

  return (
    <video
      ref={videoRef}
      className={cn("h-full w-full object-cover", className)}
      poster={poster}
      autoPlay
      muted
      playsInline
      preload="auto"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
