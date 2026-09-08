import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-carbon px-6 py-40 text-center text-white">
      <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-orange">
        Error 404
      </span>
      <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        Esta página no existe
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        Puede que el enlace esté roto o que la página se haya movido.
        Vuelve al inicio o solicita tu presupuesto directamente.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contacto">Solicitar presupuesto</Link>
        </Button>
      </div>
    </div>
  );
}
