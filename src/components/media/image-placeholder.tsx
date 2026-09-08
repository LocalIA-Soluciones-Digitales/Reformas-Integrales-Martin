import Image from "next/image";
import {
  ChefHat,
  ShowerHead,
  Home,
  Sofa,
  BedDouble,
  Store,
  HardHat,
  ImageIcon,
  Building2,
  Film,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ImagePlaceholderKey } from "@/types";

const IMAGE_SRC: Partial<Record<ImagePlaceholderKey, string>> = {
  "hero-cinematic": "/images/hero-cinematic.webp",
  "kitchen-premium": "/images/kitchen-premium.webp",
  "bathroom-premium": "/images/bathroom-premium.webp",
  "full-home": "/images/full-home.webp",
  "living-room": "/images/living-room.webp",
  bedroom: "/images/bedroom.webp",
  "commercial-space": "/images/commercial-space.webp",
  "team-working": "/images/team-working.webp",
  "before-after": "/images/before-after.webp",
  facade: "/images/facade.webp",
};

const CONFIG: Record<
  ImagePlaceholderKey,
  { icon: React.ElementType; from: string; via: string; to: string; label: string; code: string }
> = {
  "hero-cinematic": {
    icon: Film,
    from: "from-carbon",
    via: "via-graphite",
    to: "to-carbon-soft",
    label: "Reforma integral",
    code: "RM-00",
  },
  "kitchen-premium": {
    icon: ChefHat,
    from: "from-graphite",
    via: "via-carbon-soft",
    to: "to-orange-dark",
    label: "Cocina de diseño",
    code: "RM-04",
  },
  "bathroom-premium": {
    icon: ShowerHead,
    from: "from-carbon-soft",
    via: "via-graphite",
    to: "to-graphite-light",
    label: "Baño de diseño",
    code: "RM-03",
  },
  "full-home": {
    icon: Home,
    from: "from-carbon",
    via: "via-graphite",
    to: "to-orange-dark",
    label: "Vivienda integral",
    code: "RM-01",
  },
  "living-room": {
    icon: Sofa,
    from: "from-graphite-light",
    via: "via-graphite",
    to: "to-carbon",
    label: "Salón contemporáneo",
    code: "RM-05",
  },
  bedroom: {
    icon: BedDouble,
    from: "from-carbon-soft",
    via: "via-graphite-light",
    to: "to-carbon",
    label: "Dormitorio",
    code: "RM-06",
  },
  "commercial-space": {
    icon: Store,
    from: "from-graphite",
    via: "via-carbon",
    to: "to-orange-dark",
    label: "Local comercial",
    code: "RM-07",
  },
  "team-working": {
    icon: HardHat,
    from: "from-carbon",
    via: "via-graphite-light",
    to: "to-graphite",
    label: "Equipo en obra",
    code: "RM-08",
  },
  "before-after": {
    icon: ImageIcon,
    from: "from-graphite",
    via: "via-carbon-soft",
    to: "to-carbon",
    label: "Antes y después",
    code: "RM-09",
  },
  facade: {
    icon: Building2,
    from: "from-carbon-soft",
    via: "via-graphite",
    to: "to-carbon",
    label: "Fachada rehabilitada",
    code: "RM-02",
  },
};

interface ImagePlaceholderProps {
  placeholder: ImagePlaceholderKey;
  className?: string;
  iconClassName?: string;
  showLabel?: boolean;
  priority?: boolean;
  sizes?: string;
}

export function ImagePlaceholder({
  placeholder,
  className,
  iconClassName,
  showLabel = true,
  priority = false,
  sizes = "100vw",
}: ImagePlaceholderProps) {
  const { icon: Icon, from, via, to, label, code } = CONFIG[placeholder];
  const src = IMAGE_SRC[placeholder];

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "group relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        from,
        via,
        to,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.16]"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id={`grid-${placeholder}`}
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${placeholder})`} />
        </svg>
      )}

      {src ? (
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/0 to-black/5" />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20" />

          {/* Architectural corner crop marks — placeholder-only, removed once a real photo is set */}
          <span className="absolute left-4 top-4 h-4 w-4 border-l border-t border-white/40" />
          <span className="absolute right-4 top-4 h-4 w-4 border-r border-t border-white/40" />
          <span className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/40" />
          <span className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/40" />

          <div className="relative z-10 flex flex-col items-center gap-3 transition-transform duration-500 group-hover:scale-105">
            <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/25 bg-white/5 backdrop-blur-sm">
              <Icon className={cn("h-7 w-7 text-white/80", iconClassName)} strokeWidth={1.25} />
            </div>
            {showLabel ? (
              <span className="text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
                {label}
              </span>
            ) : null}
          </div>

          <span className="absolute bottom-3 right-4 z-10 font-mono text-[10px] tracking-wider text-white/35">
            {code}
          </span>
        </>
      )}
    </div>
  );
}
