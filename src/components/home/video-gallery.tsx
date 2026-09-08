import { VideoBackground } from "@/components/media/video-background";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

const CLIPS = [
  {
    src: "/videos/living-room-walkthrough.mp4",
    poster: "/videos/posters/living-room-walkthrough.webp",
    title: "Salón con paneles de madera a medida",
    location: "Barakaldo · 92 m²",
  },
  {
    src: "/videos/open-plan-walkthrough.mp4",
    poster: "/videos/posters/open-plan-walkthrough.webp",
    title: "Espacio abierto salón-cocina-comedor",
    location: "Bizkaia · 118 m²",
  },
];

export function VideoGallery() {
  return (
    <section className="bg-cloud py-28">
      <div className="container-premium">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <Badge variant="light" className="mx-auto">
            Recorridos en vídeo
          </Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight text-carbon sm:text-5xl">
            Camina por nuestros espacios antes de reformar el tuyo
          </h2>
          <p className="mt-5 text-balance leading-relaxed text-stone">
            Recreaciones fieles a nuestros proyectos reales, para que veas
            con detalle los acabados y la sensación de espacio que
            conseguimos.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {CLIPS.map((clip, i) => (
            <Reveal key={clip.src} delay={i * 0.12}>
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-carbon">
                <VideoBackground
                  src={clip.src}
                  poster={clip.poster}
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/0 to-carbon/10" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {clip.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{clip.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
