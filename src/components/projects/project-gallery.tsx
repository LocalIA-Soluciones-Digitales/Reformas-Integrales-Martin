"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { MapPin, Ruler, ZoomIn } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { ProjectFilters } from "@/components/projects/project-filters";
import { ProjectLightbox } from "@/components/projects/project-lightbox";
import type { Project } from "@/types";

export function ProjectGallery() {
  const [category, setCategory] = useState<Project["category"] | "todos">("todos");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      category === "todos"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === category),
    [category],
  );

  return (
    <div>
      <ProjectFilters active={category} onChange={setCategory} />

      <LayoutGroup>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.button
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveProject(project)}
                id={project.slug}
                className="group scroll-mt-24 overflow-hidden rounded-3xl bg-white text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImagePlaceholder
                    placeholder={project.afterImage}
                    showLabel={false}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-carbon/0 transition-colors duration-300 group-hover:bg-carbon/40">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-carbon backdrop-blur">
                    {project.tags[0]}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-carbon">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex items-center gap-4 text-xs text-stone">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Ruler className="h-3.5 w-3.5" />
                      {project.area}
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </LayoutGroup>

      <ProjectLightbox
        project={activeProject}
        onOpenChange={(open) => !open && setActiveProject(null)}
      />
    </div>
  );
}
