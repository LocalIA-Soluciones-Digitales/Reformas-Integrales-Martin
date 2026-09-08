"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

const WALLS = [
  "M 40 40 H 460 V 320 H 40 Z",
  "M 220 40 V 160",
  "M 40 160 H 220",
  "M 300 160 V 320",
  "M 300 220 H 460",
];

const ROOMS = [
  { label: "Salón", x: 240, y: 100 },
  { label: "Cocina", x: 120, y: 100 },
  { label: "Dormitorio", x: 120, y: 250 },
  { label: "Baño", x: 380, y: 190 },
  { label: "Vestidor", x: 380, y: 270 },
];

const DIMENSIONS = [
  { x1: 40, y1: 30, x2: 460, y2: 30, label: "8.40 m" },
  { x1: 470, y1: 40, x2: 470, y2: 320, label: "6.10 m" },
];

export function FloorPlan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="overflow-hidden bg-cloud py-28">
      <div className="container-premium grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Badge variant="light">Diseño antes de construir</Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight text-carbon sm:text-5xl">
            Cada reforma empieza con un plano acotado
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-stone">
            Antes de tocar una sola pared, dibujamos la distribución definitiva
            a escala, con cotas reales y render 3D, para que apruebes cada
            metro cuadrado antes de que empiece la obra.
          </p>
          <ul className="mt-8 flex flex-col gap-3 text-sm text-graphite">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Plano acotado incluido en el presupuesto
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Render 3D de cada estancia antes de empezar
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" />
              Cambios de distribución revisados contigo, no improvisados en obra
            </li>
          </ul>
        </Reveal>

        <div
          ref={containerRef}
          className="relative aspect-[4/3] w-full rounded-3xl border border-line bg-white p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.15)]"
        >
          <svg viewBox="0 0 520 360" className="h-full w-full" fill="none">
            <defs>
              <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" stroke="#e7e5e0" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="520" height="360" fill="url(#blueprint-grid)" />

            {WALLS.map((d, i) => (
              <motion.path
                key={d}
                d={d}
                stroke="#0a0a0a"
                strokeWidth={i === 0 ? 3 : 2}
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 1.1, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}

            {DIMENSIONS.map((dim, i) => (
              <motion.g
                key={dim.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 + i * 0.15, duration: 0.5 }}
              >
                <line
                  x1={dim.x1}
                  y1={dim.y1}
                  x2={dim.x2}
                  y2={dim.y2}
                  stroke="#e8621e"
                  strokeWidth={1}
                  strokeDasharray="4 3"
                />
                <text
                  x={(dim.x1 + dim.x2) / 2 + (dim.x1 === dim.x2 ? 10 : 0)}
                  y={(dim.y1 + dim.y2) / 2 + (dim.y1 === dim.y2 ? -8 : 4)}
                  fontSize="11"
                  fill="#b84a14"
                  textAnchor="middle"
                >
                  {dim.label}
                </text>
              </motion.g>
            ))}

            {ROOMS.map((room, i) => (
              <motion.text
                key={room.label}
                x={room.x}
                y={room.y}
                fontSize="13"
                fontWeight={600}
                fill="#232326"
                textAnchor="middle"
                initial={{ opacity: 0, y: room.y + 6 }}
                animate={inView ? { opacity: 1, y: room.y } : { opacity: 0, y: room.y + 6 }}
                transition={{ delay: 1 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {room.label}
              </motion.text>
            ))}
          </svg>

          <span className="absolute bottom-4 right-6 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-stone">
            Escala 1:100 · Reformas Martín
          </span>
        </div>
      </div>
    </section>
  );
}
