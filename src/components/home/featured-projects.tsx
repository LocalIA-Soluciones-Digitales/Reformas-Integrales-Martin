import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function FeaturedProjects() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="bg-mist py-28">
      <div className="container-premium">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Badge variant="light">Proyectos destacados</Badge>
            <h2 className="mt-5 max-w-xl text-balance font-display text-4xl font-bold tracking-tight text-carbon sm:text-5xl">
              Reformas que hablan de nuestro nivel de detalle
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-carbon underline-offset-4 hover:text-orange hover:underline"
          >
            Ver galería completa
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.1}>
              <Link
                href={`/proyectos#${project.slug}`}
                className="group block overflow-hidden rounded-3xl bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImagePlaceholder
                    placeholder={project.afterImage}
                    showLabel={false}
                    className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute left-4 top-4 flex gap-2">
                    {project.tags.slice(0, 1).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-carbon backdrop-blur"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-carbon">
                    {project.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-1.5 text-sm text-stone">
                    <MapPin className="h-3.5 w-3.5" />
                    {project.location} · {project.area}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
