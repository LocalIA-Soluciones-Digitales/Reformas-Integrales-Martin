import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { formatPhoneHref } from "@/lib/utils";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-orange py-24 text-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="container-premium relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <h2 className="text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            ¿Empezamos a transformar tu espacio?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">
            Cuéntanos tu proyecto y recibe un presupuesto detallado y sin
            compromiso en menos de 24 horas.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" variant="dark">
            <Link href="/contacto">
              Solicitar presupuesto
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={formatPhoneHref(COMPANY.phone)}>
              <Phone className="h-4 w-4" />
              {COMPANY.phoneDisplay}
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
