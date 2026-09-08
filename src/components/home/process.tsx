import { PROCESS_STEPS } from "@/data/process";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";

export function Process() {
  return (
    <section className="py-28">
      <div className="container-premium">
        <Reveal className="mx-auto mb-20 max-w-2xl text-center">
          <Badge variant="light">Cómo trabajamos</Badge>
          <h2 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight text-carbon sm:text-5xl">
            Un proceso claro, de principio a fin
          </h2>
        </Reveal>

        <div className="relative grid gap-x-8 gap-y-14 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-line md:block" />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative">
              <div className="relative z-10 mb-6 grid h-12 w-12 place-items-center rounded-full border border-line bg-white font-display text-sm font-bold text-orange">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-semibold text-carbon">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
