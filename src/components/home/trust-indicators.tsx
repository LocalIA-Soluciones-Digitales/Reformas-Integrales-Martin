import { ShieldCheck, Clock, Award, FileCheck } from "lucide-react";
import { TRUST_STATS } from "@/lib/constants";
import { Counter } from "@/components/motion/counter";
import { Reveal } from "@/components/motion/reveal";

const HIGHLIGHTS = [
  { icon: ShieldCheck, label: "Garantía por escrito" },
  { icon: Clock, label: "Plazos cerrados" },
  { icon: Award, label: "Acabados premium" },
  { icon: FileCheck, label: "Presupuesto sin compromiso" },
];

export function TrustIndicators() {
  return (
    <section className="border-b border-line bg-cloud py-16">
      <div className="container-premium">
        <div className="grid grid-cols-2 gap-8 border-b border-line pb-14 md:grid-cols-4">
          {TRUST_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center md:text-left">
                <div className="font-display text-4xl font-bold text-carbon sm:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm text-stone">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-10 md:justify-between">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 text-sm font-medium text-graphite"
            >
              <item.icon className="h-4.5 w-4.5 text-orange" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
