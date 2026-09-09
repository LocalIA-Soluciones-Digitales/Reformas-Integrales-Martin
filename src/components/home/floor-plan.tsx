"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";

// Scale: 50px = 1m. Plan origin at (70, 70), building footprint 8.40m x 6.10m.
const X0 = 70;
const Y0 = 70;
const X1 = 490; // X0 + 8.40 * 50
const Y1 = 375; // Y0 + 6.10 * 50
const ROW_Y = 225; // horizontal split, 3.10m from top
const COL_TOP_1 = 250; // Dormitorio / Baño split
const COL_TOP_2 = 350; // Baño / Vestidor split
const COL_BOTTOM = 230; // Cocina / Salón split

const EXTERIOR_WALLS = [
  `M ${X0} ${Y0} H ${X1}`,
  `M ${X1} ${Y0} V ${Y1}`,
  `M ${X1} ${Y1} H ${COL_BOTTOM}`,
  `M ${COL_BOTTOM} ${Y1} H 395`,
  `M 350 ${Y1} H ${X0}`,
  `M ${X0} ${Y1} V ${Y0}`,
];

const INTERIOR_WALLS = [
  // Dormitorio / Baño (with door gap 150-195)
  `M ${COL_TOP_1} ${Y0} V 70`,
  `M ${COL_TOP_1} ${Y0} V ${ROW_Y}`,
  // Baño / Vestidor (with door gap 110-150)
  `M ${COL_TOP_2} ${Y0} V 110`,
  `M ${COL_TOP_2} 150 V ${ROW_Y}`,
  // Row split above Dormitorio (door gap 150-195)
  `M 70 ${ROW_Y} H 150`,
  `M 195 ${ROW_Y} H ${COL_TOP_1}`,
  // Row split above Baño (door gap 290-330)
  `M ${COL_TOP_1} ${ROW_Y} H 290`,
  `M 330 ${ROW_Y} H ${COL_TOP_2}`,
  // Row split above Vestidor (full, no door)
  `M ${COL_TOP_2} ${ROW_Y} H ${X1}`,
  // Cocina / Salón (door gap 270-315)
  `M ${COL_BOTTOM} ${ROW_Y} V 270`,
  `M ${COL_BOTTOM} 315 V ${Y1}`,
];

const DOORS = [
  // Entrance, swings into Salón
  { leaf: "M 350 375 L 350 330", arc: "M 350 330 A 45 45 0 0 1 395 375" },
  // Cocina <-> Salón
  { leaf: "M 230 270 L 275 270", arc: "M 275 270 A 45 45 0 0 1 230 315" },
  // Dormitorio <-> Cocina
  { leaf: "M 150 225 L 150 270", arc: "M 150 270 A 45 45 0 0 0 195 225" },
  // Baño <-> Salón
  { leaf: "M 330 225 L 330 185", arc: "M 330 185 A 40 40 0 0 0 290 225" },
  // Vestidor <-> Baño
  { leaf: "M 350 110 L 390 110", arc: "M 390 110 A 40 40 0 0 1 350 150" },
];

const WINDOWS = [
  { type: "h" as const, x1: 110, x2: 190, y: Y0 },
  { type: "h" as const, x1: 420, x2: 480, y: Y1 },
  { type: "v" as const, y1: 270, y2: 340, x: X0 },
  { type: "v" as const, y1: 110, y2: 170, x: X1 },
];

const ROOMS = [
  { label: "Dormitorio", area: "11.2", x: 160, y: 145 },
  { label: "Baño", area: "6.2", x: 300, y: 145 },
  { label: "Vestidor", area: "8.7", x: 420, y: 145 },
  { label: "Cocina", area: "9.6", x: 150, y: 298 },
  { label: "Salón", area: "15.6", x: 360, y: 298 },
];

const DIMENSIONS = [
  {
    x1: X0,
    y1: 45,
    x2: X1,
    y2: 45,
    ext: [
      { x1: X0, y1: Y0, x2: X0, y2: 40 },
      { x1: X1, y1: Y0, x2: X1, y2: 40 },
    ],
    label: "8.40 m",
    labelX: (X0 + X1) / 2,
    labelY: 33,
  },
  {
    x1: 515,
    y1: Y0,
    x2: 515,
    y2: Y1,
    ext: [
      { x1: X1, y1: Y0, x2: 520, y2: Y0 },
      { x1: X1, y1: Y1, x2: 520, y2: Y1 },
    ],
    label: "6.10 m",
    labelX: 537,
    labelY: (Y0 + Y1) / 2,
  },
];

function Tick({ x, y, angle }: { x: number; y: number; angle: number }) {
  const r = (angle * Math.PI) / 180;
  const dx = Math.cos(r) * 5;
  const dy = Math.sin(r) * 5;
  return (
    <line
      x1={x - dx}
      y1={y - dy}
      x2={x + dx}
      y2={y + dy}
      stroke="#b84a14"
      strokeWidth={1.5}
    />
  );
}

export function FloorPlan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="overflow-hidden bg-cloud py-24">
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
          <svg viewBox="0 0 560 400" className="h-full w-full" fill="none">
            <defs>
              <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" stroke="#e7e5e0" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="560" height="400" fill="url(#blueprint-grid)" />

            {/* Exterior walls */}
            {EXTERIOR_WALLS.map((d, i) => (
              <motion.path
                key={`ext-${d}`}
                d={d}
                stroke="#0a0a0a"
                strokeWidth={3.5}
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}

            {/* Interior partitions */}
            {INTERIOR_WALLS.map((d, i) => (
              <motion.path
                key={`int-${d}`}
                d={d}
                stroke="#0a0a0a"
                strokeWidth={2.25}
                strokeLinecap="square"
                initial={{ pathLength: 0 }}
                animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}

            {/* Doors: leaf + swing arc */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {DOORS.map((door) => (
                <g key={door.leaf}>
                  <path d={door.leaf} stroke="#0a0a0a" strokeWidth={1.25} />
                  <path
                    d={door.arc}
                    stroke="#0a0a0a"
                    strokeWidth={0.75}
                    strokeDasharray="3 2"
                  />
                </g>
              ))}
            </motion.g>

            {/* Windows: gap in wall + double glazing lines */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              {WINDOWS.map((w) =>
                w.type === "h" ? (
                  <g key={`${w.x1}-${w.y}`}>
                    <rect x={w.x1 - 2} y={w.y - 3} width={w.x2 - w.x1 + 4} height={6} fill="white" />
                    <line x1={w.x1} y1={w.y - 2} x2={w.x2} y2={w.y - 2} stroke="#0a0a0a" strokeWidth={1} />
                    <line x1={w.x1} y1={w.y} x2={w.x2} y2={w.y} stroke="#0a0a0a" strokeWidth={1} />
                    <line x1={w.x1} y1={w.y + 2} x2={w.x2} y2={w.y + 2} stroke="#0a0a0a" strokeWidth={1} />
                  </g>
                ) : (
                  <g key={`${w.x}-${w.y1}`}>
                    <rect x={w.x - 3} y={w.y1 - 2} width={6} height={w.y2 - w.y1 + 4} fill="white" />
                    <line x1={w.x - 2} y1={w.y1} x2={w.x - 2} y2={w.y2} stroke="#0a0a0a" strokeWidth={1} />
                    <line x1={w.x} y1={w.y1} x2={w.x} y2={w.y2} stroke="#0a0a0a" strokeWidth={1} />
                    <line x1={w.x + 2} y1={w.y1} x2={w.x + 2} y2={w.y2} stroke="#0a0a0a" strokeWidth={1} />
                  </g>
                ),
              )}
            </motion.g>

            {/* Dimension lines with extension lines and end ticks */}
            {DIMENSIONS.map((dim, i) => (
              <motion.g
                key={dim.label}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.3 + i * 0.15, duration: 0.5 }}
              >
                {dim.ext.map((e) => (
                  <line
                    key={`${e.x1}-${e.y1}-${e.x2}-${e.y2}`}
                    x1={e.x1}
                    y1={e.y1}
                    x2={e.x2}
                    y2={e.y2}
                    stroke="#e8621e"
                    strokeWidth={0.75}
                  />
                ))}
                <line
                  x1={dim.x1}
                  y1={dim.y1}
                  x2={dim.x2}
                  y2={dim.y2}
                  stroke="#e8621e"
                  strokeWidth={1}
                />
                <Tick x={dim.x1} y={dim.y1} angle={dim.x1 === dim.x2 ? 25 : 65} />
                <Tick x={dim.x2} y={dim.y2} angle={dim.x1 === dim.x2 ? 25 : 65} />
                <text
                  x={dim.labelX}
                  y={dim.labelY}
                  fontSize="11"
                  fontWeight={600}
                  fill="#b84a14"
                  textAnchor="middle"
                  transform={dim.x1 === dim.x2 ? `rotate(90 ${dim.labelX} ${dim.labelY})` : undefined}
                >
                  {dim.label}
                </text>
              </motion.g>
            ))}

            {/* Room labels + area */}
            {ROOMS.map((room, i) => (
              <motion.g
                key={room.label}
                initial={{ opacity: 0, y: room.y + 6 }}
                animate={inView ? { opacity: 1, y: room.y } : { opacity: 0, y: room.y + 6 }}
                transition={{ delay: 1 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <text x={room.x} y={0} fontSize="12.5" fontWeight={600} fill="#232326" textAnchor="middle">
                  {room.label}
                </text>
                <text x={room.x} y={15} fontSize="9.5" fill="#8a8a86" textAnchor="middle">
                  {room.area} m²
                </text>
              </motion.g>
            ))}

            {/* North arrow */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
            >
              <circle cx={34} cy={46} r={16} fill="white" stroke="#0a0a0a" strokeWidth={1} />
              <path d="M 34 34 L 39 52 L 34 48 L 29 52 Z" fill="#e8621e" stroke="#0a0a0a" strokeWidth={0.5} />
              <text x={34} y={66} fontSize="8.5" fontWeight={700} fill="#232326" textAnchor="middle">
                N
              </text>
            </motion.g>
          </svg>

          <div className="absolute bottom-4 right-4 flex divide-x divide-line overflow-hidden rounded-md border border-line bg-white/95 text-[9px] leading-tight text-stone shadow-sm">
            <div className="px-3 py-1.5">
              <p className="font-display font-semibold uppercase tracking-[0.1em] text-carbon">
                Reformas Martín
              </p>
              <p className="uppercase tracking-[0.08em]">Planta general acotada</p>
            </div>
            <div className="px-3 py-1.5 uppercase tracking-[0.08em]">
              <p>Escala 1:100</p>
              <p>Plano n.º A-01</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
