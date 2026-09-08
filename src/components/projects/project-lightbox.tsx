"use client";

import { MapPin, Calendar, Ruler, Clock } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BeforeAfterSlider } from "@/components/projects/before-after-slider";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import type { Project } from "@/types";

interface ProjectLightboxProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export function ProjectLightbox({ project, onOpenChange }: ProjectLightboxProps) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] overflow-y-auto bg-white p-6 sm:p-8">
        {project ? (
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-mist px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-carbon"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-carbon sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 leading-relaxed text-stone">
                {project.description}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <Stat icon={MapPin} label={project.location} />
                <Stat icon={Calendar} label={String(project.year)} />
                <Stat icon={Ruler} label={project.area} />
                <Stat icon={Clock} label={`${project.durationWeeks} semanas`} />
              </div>
            </div>

            <BeforeAfterSlider
              before={project.beforeImage}
              after={project.afterImage}
            />

            {project.gallery.length > 1 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.gallery.map((image, i) => (
                  <ImagePlaceholder
                    key={`${image}-${i}`}
                    placeholder={image}
                    showLabel={false}
                    sizes="(min-width: 640px) 224px, 45vw"
                    className="aspect-square rounded-xl"
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function Stat({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-graphite">
      <Icon className="h-4 w-4 text-orange" />
      {label}
    </div>
  );
}
