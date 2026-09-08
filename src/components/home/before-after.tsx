import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function BeforeAfter() {
  return (
    <section className="bg-carbon py-28 text-white">
      <div className="container-premium grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Badge variant="orange">Resultados reales</Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            El antes y después habla por nosotros
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
            El mismo salón, de dejado y sin reformar a una transformación
            integral de lujo — así son nuestras reformas en Bizkaia.
          </p>
          <Link
            href="/proyectos"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-orange hover:underline"
          >
            Ver todos los proyectos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
            <ImagePlaceholder
              placeholder="before-after"
              showLabel={false}
              sizes="(min-width: 640px) 896px, 92vw"
              className="h-full w-full"
            />
            <span className="absolute left-4 top-4 rounded-full bg-carbon/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
              Antes
            </span>
            <span className="absolute right-4 top-4 rounded-full bg-carbon/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
              Después
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
