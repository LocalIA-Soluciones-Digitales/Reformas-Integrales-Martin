import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos",
  description:
    "Descubre nuestros proyectos de reformas integrales, cocinas, baños, locales comerciales y fachadas en Barakaldo y Bizkaia. Antes y después reales.",
  path: "/proyectos",
  keywords: ["proyectos reformas bizkaia", "antes y despues reforma barakaldo"],
});

export default function ProyectosPage() {
  return (
    <div className="bg-mist">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Proyectos", path: "/proyectos" },
        ])}
      />

      <section className="relative z-0 overflow-hidden bg-carbon pb-24 pt-40 text-white">
        <ImagePlaceholder
          placeholder="before-after"
          className="absolute inset-0 -z-10 h-full w-full"
          showLabel={false}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-carbon/85 via-carbon/80 to-carbon" />
        <div className="container-premium relative text-center">
          <Badge variant="orange">Nuestro trabajo</Badge>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Proyectos que reflejan nuestro nivel de exigencia
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
            Filtra por tipo de reforma y haz clic en cualquier proyecto para
            ver el antes y después en detalle.
          </p>
        </div>
      </section>

      <section className="container-premium py-20">
        <ProjectGallery />
      </section>
    </div>
  );
}
