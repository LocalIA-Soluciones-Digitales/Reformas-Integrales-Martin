import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/projects/before-after-slider";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function BeforeAfter() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 text-white">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute -left-40 top-1/2 h-[32rem] w-[32rem] -translate-y-1/2 rounded-full bg-orange/20 blur-[140px]" />

      <div className="container-premium relative grid items-center gap-14 lg:grid-cols-2">
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
          <BeforeAfterSlider
            before="before-after-dated"
            after="before-after-renovated"
          />
        </Reveal>
      </div>
    </section>
  );
}
