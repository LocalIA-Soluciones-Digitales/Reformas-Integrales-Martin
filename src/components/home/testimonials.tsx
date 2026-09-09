import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/json-ld";
import { getReviewSchema } from "@/lib/seo/schema";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-carbon py-24 text-white">
      <JsonLd data={getReviewSchema(TESTIMONIALS)} />
      <div className="absolute right-0 top-0 h-[28rem] w-[28rem] -translate-y-1/3 translate-x-1/3 rounded-full bg-orange/15 blur-[140px]" />
      <div className="absolute bottom-0 left-0 h-[24rem] w-[24rem] -translate-x-1/3 translate-y-1/3 rounded-full bg-graphite/60 blur-[120px]" />

      <div className="container-premium relative">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Badge variant="orange">Testimonios</Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Lo que dicen quienes ya confiaron en nosotros
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]">
                <div>
                  <Quote className="mb-4 h-6 w-6 text-orange" />
                  <p className="text-sm leading-relaxed text-white/75">
                    “{testimonial.text}”
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-white/45">
                      {testimonial.location} · {testimonial.projectType}
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-3.5 w-3.5 fill-orange text-orange"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
