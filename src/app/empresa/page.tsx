import type { Metadata } from "next";
import { ShieldCheck, HeartHandshake, Sparkles, Award, Users, Target } from "lucide-react";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/motion/reveal";
import { COMPANY, TRUST_STATS } from "@/lib/constants";
import { Counter } from "@/components/motion/counter";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Empresa",
  description:
    "Conoce Reformas Integrales Martín: historia, misión, valores y garantías de la empresa de reformas de referencia en Barakaldo, Bizkaia.",
  path: "/empresa",
});

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Confianza",
    description:
      "Presupuestos cerrados, plazos reales y comunicación transparente en cada fase de la obra.",
  },
  {
    icon: Award,
    title: "Calidad",
    description:
      "Trabajamos solo con materiales y proveedores de primer nivel para acabados que duran.",
  },
  {
    icon: HeartHandshake,
    title: "Cercanía",
    description:
      "Un único interlocutor te acompaña desde la primera visita hasta la entrega de llaves.",
  },
  {
    icon: Sparkles,
    title: "Innovación",
    description:
      "Diseño 3D, materiales de última generación y soluciones de eficiencia energética.",
  },
];

const COMMITMENTS = [
  "Visita técnica y presupuesto sin compromiso",
  "Contrato claro con calendario de obra detallado",
  "Un único responsable de proyecto como interlocutor",
  "Garantía por escrito de hasta 3 años en todos los trabajos",
  "Limpieza final de obra incluida en el presupuesto",
  "Cumplimiento de la normativa técnica vigente en cada instalación",
];

export default function EmpresaPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Empresa", path: "/empresa" },
        ])}
      />

      <section className="relative overflow-hidden bg-carbon pb-24 pt-40 text-white">
        <div className="container-premium grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Badge variant="orange">Nuestra historia</Badge>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Más de {COMPANY.yearsExperience} años transformando hogares en
              Bizkaia
            </h1>
            <p className="mt-5 leading-relaxed text-white/65">
              {COMPANY.name} nació en Barakaldo de la mano de {COMPANY.owner},
              con la idea de acabar con las reformas llenas de sorpresas:
              plazos que se alargan, presupuestos que suben y una obra sin
              nadie al mando. Desde entonces hemos construido un equipo
              propio de profesionales para ofrecer un servicio integral,
              cercano y con acabados de nivel premium en cada proyecto.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ImagePlaceholder
              placeholder="team-working"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full rounded-3xl"
              kenBurns="subtle"
            />
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line bg-cloud py-16">
        <div className="container-premium grid grid-cols-2 gap-8 md:grid-cols-4">
          {TRUST_STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold text-carbon">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-stone">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="container-premium">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <Badge variant="light">Nuestros valores</Badge>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight text-carbon sm:text-5xl">
              Lo que nos guía en cada proyecto
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-line p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/10 text-orange">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-carbon">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-carbon py-28 text-white">
        <div className="container-premium grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <Badge variant="orange">Nuestro compromiso</Badge>
            <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Garantías que respaldan cada obra
            </h2>
            <p className="mt-4 text-white/60">
              Ponemos por escrito lo que otros solo prometen de palabra.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-4">
            {COMMITMENTS.map((commitment) => (
              <div
                key={commitment}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <Target className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
                <span className="text-sm text-white/80">{commitment}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container-premium flex flex-col items-center gap-6 text-center">
          <Users className="h-8 w-8 text-orange" />
          <h2 className="max-w-xl text-balance font-display text-3xl font-bold tracking-tight text-carbon">
            Un equipo propio de profesionales, no subcontratas improvisadas
          </h2>
          <p className="max-w-lg text-stone">
            Albañiles, electricistas, fontaneros y pintores que trabajan
            juntos desde hace años, coordinados por {COMPANY.owner} en cada
            obra.
          </p>
        </div>
      </section>
    </div>
  );
}
