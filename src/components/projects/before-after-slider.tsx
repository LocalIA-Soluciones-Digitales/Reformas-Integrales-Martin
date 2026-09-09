"use client";

import { useCallback, useRef, useState } from "react";
import { GripVertical } from "lucide-react";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { cn } from "@/lib/utils";
import type { ImagePlaceholderKey } from "@/types";

interface BeforeAfterSliderProps {
  before: ImagePlaceholderKey;
  after: ImagePlaceholderKey;
  className?: string;
}

export function BeforeAfterSlider({
  before,
  after,
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, percent)));
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative aspect-[4/3] w-full touch-none select-none overflow-hidden rounded-3xl",
        className,
      )}
      onPointerDown={(e) => {
        setDragging(true);
        updatePosition(e.clientX);
      }}
      onPointerMove={(e) => {
        if (dragging) updatePosition(e.clientX);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerLeave={() => setDragging(false)}
    >
      <div className="absolute inset-0">
        <ImagePlaceholder
          placeholder={after}
          showLabel={false}
          sizes="(min-width: 640px) 896px, 92vw"
          className="h-full w-full"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        <span className="absolute right-5 top-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          Después
          <span className="h-px w-5 bg-orange" />
        </span>
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <ImagePlaceholder
          placeholder={before}
          showLabel={false}
          sizes="(min-width: 640px) 896px, 92vw"
          className="h-full w-full"
        />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
        <span className="absolute left-5 top-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
          <span className="h-px w-5 bg-orange" />
          Antes
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-10 w-px bg-white/80"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-carbon/40 text-white backdrop-blur-md shadow-lg transition-colors group-hover:border-orange group-hover:text-orange">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
