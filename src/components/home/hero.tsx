"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import { useGsapParallax } from "@/hooks/use-gsap-parallax";
import { VideoBackground } from "@/components/media/video-background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { COMPANY } from "@/lib/constants";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGsapParallax(sectionRef, imageRef);

  return (
    <section
      ref={sectionRef}
      className="relative z-0 flex h-screen min-h-[720px] w-full items-end overflow-hidden bg-carbon"
    >
      <div ref={imageRef} className="absolute inset-0 -z-10 h-[120%] w-full">
        <VideoBackground
          src="/videos/hero-sunset-living.mp4"
          poster="/videos/posters/hero-sunset-living.webp"
          pauseOffscreen={false}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-carbon via-carbon/50 to-carbon/20" />

      <div className="container-premium relative z-10 flex w-full flex-col gap-8 pb-28 pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
        >
          <Badge variant="orange" className="bg-orange/15 text-orange-light">
            Reformas premium en Barakaldo · Bizkaia
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: easeOutExpo }}
          className="max-w-4xl text-balance font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Transformamos espacios.
          <br />
          Creamos <span className="text-orange">hogares</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easeOutExpo }}
          className="max-w-xl text-balance text-lg leading-relaxed text-white/70"
        >
          Especialistas en reformas integrales en Barakaldo y Bizkaia. Más de{" "}
          {COMPANY.yearsExperience} años convirtiendo viviendas y locales en
          espacios con acabados de calidad premium.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: easeOutExpo }}
          className="flex flex-wrap items-center gap-4 pt-2"
        >
          <Button asChild size="lg">
            <Link href="/contacto">
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/proyectos">
              <PlayCircle className="h-4 w-4" />
              Ver proyectos
            </Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 right-8 z-10 hidden text-white/50 md:block"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
