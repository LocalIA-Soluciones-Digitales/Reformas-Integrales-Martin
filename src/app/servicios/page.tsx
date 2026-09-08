import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/data/services";
import { getServiceIcon } from "@/lib/icon-map";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Servicios de Reformas",
  description:
    "Reformas integrales, cocinas, baños, pintura, pladur, electricidad, fontanería, albañilería, rehabilitación y locales comerciales en Barakaldo y Bizkaia.",
  path: "/servicios",
  keywords: [
    "reforma de baños barakaldo",
    "reforma de cocinas bizkaia",
    "pladur barakaldo",
    "electricidad reformas bizkaia",
  ],
});

export default function ServiciosPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/servicios" },
        ])}
      />

      <section className="bg-carbon pb-24 pt-40 text-white">
        <div className="container-premium text-center">
          <Badge variant="orange">Nuestros servicios</Badge>
          <h1 className="mx-auto mt-6 max-w-3xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Un equipo. Todos los oficios. Una sola reforma.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
            Coordinamos cada especialidad para que tu proyecto avance sin
            fricciones, con un único punto de contacto.
          </p>
        </div>
      </section>

      <div className="container-premium flex flex-col divide-y divide-line py-4">
        {SERVICES.map((service, index) => {
          const Icon = getServiceIcon(service.icon);
          const reversed = index % 2 === 1;

          return (
            <section
              key={service.slug}
              id={service.slug}
              className="scroll-mt-24 py-16"
            >
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-mist text-orange">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-carbon">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-stone">
                    {service.description}
                  </p>
                  <ul className="mt-6 flex flex-col gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-graphite">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8">
                    <Link href="/contacto">
                      Pedir presupuesto para {service.title.toLowerCase()}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </Reveal>

                <Reveal delay={0.1}>
                  <ImagePlaceholder
                    placeholder={service.image}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="aspect-[4/3] w-full rounded-3xl"
                    kenBurns="subtle"
                  />
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
