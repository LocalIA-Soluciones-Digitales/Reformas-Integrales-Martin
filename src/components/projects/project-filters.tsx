"use client";

import { cn } from "@/lib/utils";
import { PROJECT_CATEGORIES } from "@/data/projects";
import type { Project } from "@/types";

interface ProjectFiltersProps {
  active: Project["category"] | "todos";
  onChange: (value: Project["category"] | "todos") => void;
}

export function ProjectFilters({ active, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {PROJECT_CATEGORIES.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => onChange(category.value)}
          className={cn(
            "rounded-full border px-5 py-2.5 text-sm font-medium transition-colors",
            active === category.value
              ? "border-carbon bg-carbon text-white"
              : "border-line text-stone hover:border-carbon/40 hover:text-carbon",
          )}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
