import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/projects/before-after-slider";
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
            Arrastra el control deslizante para descubrir la transformación
            real de una de nuestras últimas reformas integrales en Bizkaia.
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
          <BeforeAfterSlider before="full-home" after="living-room" />
        </Reveal>
      </div>
    </section>
  );
}
