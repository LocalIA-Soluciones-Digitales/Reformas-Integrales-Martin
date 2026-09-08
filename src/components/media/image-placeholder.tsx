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

const CONFIG: Record<
  ImagePlaceholderKey,
  { icon: React.ElementType; from: string; via: string; to: string; label: string }
> = {
  "hero-cinematic": {
    icon: Film,
    from: "from-carbon",
    via: "via-graphite",
    to: "to-carbon-soft",
    label: "Reforma integral cinematográfica",
  },
  "kitchen-premium": {
    icon: ChefHat,
    from: "from-graphite",
    via: "via-carbon-soft",
    to: "to-orange-dark",
    label: "Cocina de diseño premium",
  },
  "bathroom-premium": {
    icon: ShowerHead,
    from: "from-carbon-soft",
    via: "via-graphite",
    to: "to-graphite-light",
    label: "Baño de diseño premium",
  },
  "full-home": {
    icon: Home,
    from: "from-carbon",
    via: "via-graphite",
    to: "to-orange-dark",
    label: "Reforma integral de vivienda",
  },
  "living-room": {
    icon: Sofa,
    from: "from-graphite-light",
    via: "via-graphite",
    to: "to-carbon",
    label: "Salón contemporáneo",
  },
  bedroom: {
    icon: BedDouble,
    from: "from-carbon-soft",
    via: "via-graphite-light",
    to: "to-carbon",
    label: "Dormitorio reformado",
  },
  "commercial-space": {
    icon: Store,
    from: "from-graphite",
    via: "via-carbon",
    to: "to-orange-dark",
    label: "Reforma de local comercial",
  },
  "team-working": {
    icon: HardHat,
    from: "from-carbon",
    via: "via-graphite-light",
    to: "to-graphite",
    label: "Equipo de profesionales en obra",
  },
  "before-after": {
    icon: ImageIcon,
    from: "from-graphite",
    via: "via-carbon-soft",
    to: "to-carbon",
    label: "Antes y después de la reforma",
  },
  facade: {
    icon: Building2,
    from: "from-carbon-soft",
    via: "via-graphite",
    to: "to-carbon",
    label: "Fachada rehabilitada",
  },
};

interface ImagePlaceholderProps {
  placeholder: ImagePlaceholderKey;
  className?: string;
  iconClassName?: string;
  showLabel?: boolean;
}

export function ImagePlaceholder({
  placeholder,
  className,
  iconClassName,
  showLabel = false,
}: ImagePlaceholderProps) {
  const { icon: Icon, from, via, to, label } = CONFIG[placeholder];

  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        from,
        via,
        to,
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
      <Icon
        className={cn(
          "relative z-10 h-10 w-10 text-white/40",
          iconClassName,
        )}
        strokeWidth={1.25}
      />
      {showLabel ? (
        <span className="absolute bottom-3 left-3 z-10 text-xs font-medium text-white/60">
          {label}
        </span>
      ) : null}
    </div>
  );
}
