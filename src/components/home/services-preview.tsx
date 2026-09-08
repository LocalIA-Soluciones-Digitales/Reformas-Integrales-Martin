import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";
import { getServiceIcon } from "@/lib/icon-map";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function ServicesPreview() {
  const featured = SERVICES.slice(0, 6);

  return (
    <section className="py-28">
      <div className="container-premium">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="light">Servicios</Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight text-carbon sm:text-5xl">
            Todo lo que necesita tu reforma, bajo un mismo equipo
          </h2>
          <p className="mt-4 text-lg text-stone">
            Desde el proyecto integral hasta el último detalle de acabado,
            coordinamos cada gremio para que tú no tengas que hacerlo.
          </p>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/servicios#${service.slug}`}
                  className="group flex h-full flex-col justify-between gap-8 bg-white p-8 transition-colors duration-300 hover:bg-carbon"
                >
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-mist text-carbon transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                      <Icon className="h-5.5 w-5.5" strokeWidth={1.5} />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-stone opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange group-hover:opacity-100" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-carbon transition-colors duration-300 group-hover:text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone transition-colors duration-300 group-hover:text-white/60">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-carbon underline-offset-4 hover:text-orange hover:underline"
          >
            Ver todos los servicios
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
