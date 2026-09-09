"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Loader2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Home,
  Building2,
  Store,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn, formatPhoneHref } from "@/lib/utils";
import { COMPANY } from "@/lib/constants";
import type { QuoteRequestPayload } from "@/types";

interface Estimate {
  minPrice: number;
  maxPrice: number;
  estimatedWeeks: number;
  breakdown: { label: string; amount: number }[];
  disclaimer: string;
}

const PROPERTY_TYPES: {
  value: QuoteRequestPayload["propertyType"];
  label: string;
  icon: typeof Home;
}[] = [
  { value: "piso", label: "Piso", icon: Home },
  { value: "casa", label: "Casa", icon: Building2 },
  { value: "local", label: "Local comercial", icon: Store },
];

const SCOPES: { value: QuoteRequestPayload["scope"]; label: string; hint: string }[] = [
  { value: "basico", label: "Básico", hint: "Pintura y acabados puntuales" },
  { value: "medio", label: "Medio", hint: "Cocina, baño o instalaciones" },
  { value: "integral", label: "Integral", hint: "Reforma completa llave en mano" },
];

// Mirrors src/lib/agents/quote-generator-agent.ts, so the slider can show a
// live range before the lead hands over their contact details.
const BASE_PRICE_PER_M2: Record<QuoteRequestPayload["scope"], number> = {
  basico: 350,
  medio: 550,
  integral: 850,
};

const PROPERTY_MULTIPLIER: Record<QuoteRequestPayload["propertyType"], number> = {
  piso: 1,
  casa: 1.1,
  local: 0.9,
};

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export function QuoteCalculator() {
  const [propertyType, setPropertyType] =
    useState<QuoteRequestPayload["propertyType"]>("piso");
  const [scope, setScope] = useState<QuoteRequestPayload["scope"]>("medio");
  const [squareMeters, setSquareMeters] = useState(70);
  const [loading, setLoading] = useState(false);
  const [estimate, setEstimate] = useState<Estimate | null>(null);
  const [step, setStep] = useState<"form" | "contact">("form");

  const livePreview = useMemo(() => {
    const pricePerM2 = BASE_PRICE_PER_M2[scope] * PROPERTY_MULTIPLIER[propertyType];
    const basePrice = pricePerM2 * squareMeters;
    return {
      min: Math.round((basePrice * 0.85) / 100) * 100,
      max: Math.round((basePrice * 1.15) / 100) * 100,
    };
  }, [propertyType, scope, squareMeters]);

  async function handleGetEstimate(
    name: string,
    email: string,
    phone: string,
  ) {
    setLoading(true);
    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: scope,
          propertyType,
          squareMeters,
          scope,
          name,
          email,
          phone,
        }),
      });
      const data = await response.json();
      if (data.estimate) setEstimate(data.estimate);
    } finally {
      setLoading(false);
    }
  }

  if (estimate) {
    const maxItem = Math.max(...estimate.breakdown.map((item) => item.amount));
    return (
      <div className="rounded-3xl border border-line bg-white p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-orange">
          Estimación orientativa
        </p>
        <p className="mt-3 font-display text-4xl font-bold text-carbon">
          {currencyFormatter.format(estimate.minPrice)} –{" "}
          {currencyFormatter.format(estimate.maxPrice)}
        </p>
        <p className="mt-1 text-sm text-stone">
          Plazo estimado: {estimate.estimatedWeeks} semanas
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
          {estimate.breakdown.map((item) => (
            <div key={item.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-stone">{item.label}</span>
                <span className="font-medium text-carbon">
                  {currencyFormatter.format(item.amount)}
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-line">
                <div
                  className="h-full rounded-full bg-orange"
                  style={{ width: `${(item.amount / maxItem) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-stone">
          {estimate.disclaimer}
        </p>

        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row">
          <Button asChild size="lg" className="flex-1">
            <a href={formatPhoneHref(COMPANY.phone)}>
              <PhoneCall className="h-4 w-4" />
              Reservar visita técnica
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="flex-1"
            onClick={() => {
              setEstimate(null);
              setStep("form");
            }}
          >
            <RotateCcw className="h-4 w-4" />
            Calcular otra reforma
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-line bg-white p-8">
      <div className="mb-6 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-orange/10 text-orange">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-carbon">
              Calculadora de presupuesto
            </h3>
            <p className="text-xs text-stone">Estimación orientativa en segundos</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 pt-1" aria-hidden="true">
          <span
            className={cn(
              "h-1.5 rounded-full transition-all",
              step === "form" ? "w-5 bg-orange" : "w-1.5 bg-line",
            )}
          />
          <span
            className={cn(
              "h-1.5 rounded-full transition-all",
              step === "contact" ? "w-5 bg-orange" : "w-1.5 bg-line",
            )}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {step === "form" ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-6"
          >
            <div>
              <Label>Tipo de propiedad</Label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {PROPERTY_TYPES.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setPropertyType(option.value)}
                    className={cn(
                      "flex flex-col items-center gap-1.5 rounded-xl border px-2 py-3 text-xs font-medium transition-colors",
                      propertyType === option.value
                        ? "border-orange bg-orange/10 text-orange-dark"
                        : "border-line text-stone hover:border-carbon/30",
                    )}
                  >
                    <option.icon className="h-4 w-4" />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="squareMeters">
                Metros cuadrados: <span className="text-carbon">{squareMeters} m²</span>
              </Label>
              <input
                id="squareMeters"
                type="range"
                min={20}
                max={300}
                step={5}
                value={squareMeters}
                onChange={(e) => setSquareMeters(Number(e.target.value))}
                className="mt-3 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-line accent-orange"
              />
              <div className="mt-1 flex justify-between text-[11px] text-stone/70">
                <span>20 m²</span>
                <span>300 m²</span>
              </div>
            </div>

            <div>
              <Label>Alcance de la reforma</Label>
              <div className="mt-2 flex flex-col gap-2">
                {SCOPES.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setScope(option.value)}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-4 py-3 text-left transition-colors",
                      scope === option.value
                        ? "border-orange bg-orange/10"
                        : "border-line hover:border-carbon/30",
                    )}
                  >
                    <span>
                      <span className="block text-sm font-semibold text-carbon">
                        {option.label}
                      </span>
                      <span className="block text-xs text-stone">{option.hint}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-carbon px-5 py-4 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Estimación en vivo
              </p>
              <p className="mt-1 font-display text-2xl font-bold tabular-nums">
                {currencyFormatter.format(livePreview.min)} –{" "}
                {currencyFormatter.format(livePreview.max)}
              </p>
              <p className="mt-1 text-xs text-white/50">
                Se ajusta al instante según tus respuestas
              </p>
            </div>

            <Button onClick={() => setStep("contact")} size="lg">
              Ver mi estimación detallada
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              handleGetEstimate(
                String(formData.get("name")),
                String(formData.get("email")),
                String(formData.get("phone")),
              );
            }}
          >
            <button
              type="button"
              onClick={() => setStep("form")}
              className="flex items-center gap-1.5 self-start text-xs font-medium text-stone transition-colors hover:text-carbon"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Volver
            </button>

            <div className="flex items-center justify-between rounded-xl border border-line bg-cloud px-4 py-3">
              <span className="text-xs text-stone">Tu estimación</span>
              <span className="text-sm font-semibold text-carbon tabular-nums">
                {currencyFormatter.format(livePreview.min)} –{" "}
                {currencyFormatter.format(livePreview.max)}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="qc-name">Nombre</Label>
              <Input id="qc-name" name="name" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="qc-email">Email</Label>
              <Input id="qc-email" name="email" type="email" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="qc-phone">Teléfono</Label>
              <Input id="qc-phone" name="phone" required />
            </div>
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Calculator className="h-4 w-4" />
              )}
              {loading ? "Calculando..." : "Ver mi estimación"}
            </Button>
            <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-stone">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-orange" />
              Sin compromiso · No compartimos tus datos con terceros
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
