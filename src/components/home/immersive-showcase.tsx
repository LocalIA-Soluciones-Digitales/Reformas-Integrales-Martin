"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { VideoBackground } from "@/components/media/video-background";
import { Badge } from "@/components/ui/badge";

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export function ImmersiveShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.05]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.65, 0.35, 0.35, 0.65],
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[85vh] min-h-[560px] w-full items-center overflow-hidden bg-carbon"
    >
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <VideoBackground
          src="/videos/kitchen-walkthrough.mp4"
          poster="/videos/posters/kitchen-walkthrough.webp"
          className="h-full w-full"
        />
      </motion.div>
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 -z-10 bg-carbon"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-carbon via-carbon/10 to-carbon/40" />

      <div className="container-premium relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="max-w-xl"
        >
          <Badge variant="orange" className="bg-orange/15 text-orange-light">
            Cocinas de diseño
          </Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Entra en una cocina pensada para vivirla cada día
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/70">
            Materiales nobles, iluminación integrada y una distribución que
            respeta cómo cocinas de verdad. Así imaginamos cada proyecto
            antes de empezar la obra.
          </p>
          <Link
            href="/proyectos"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-light hover:underline"
          >
            Ver proyectos de cocina
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
