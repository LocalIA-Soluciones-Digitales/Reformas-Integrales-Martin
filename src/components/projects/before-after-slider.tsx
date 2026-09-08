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
        <span className="absolute right-4 top-4 rounded-full bg-carbon/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
          Después
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
        <span className="absolute left-4 top-4 rounded-full bg-carbon/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
          Antes
        </span>
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-carbon shadow-lg">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
