import {
  LayoutGrid,
  Home,
  ShowerHead,
  ChefHat,
  PaintRoller,
  PanelsTopLeft,
  Zap,
  Wrench,
  HardHat,
  Building2,
  Store,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  LayoutGrid,
  Home,
  ShowerHead,
  ChefHat,
  PaintRoller,
  PanelsTopLeft,
  Zap,
  Wrench,
  HardHat,
  Building2,
  Store,
};

export function getServiceIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? LayoutGrid;
}
