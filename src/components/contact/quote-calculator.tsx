"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Loader2, ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { QuoteRequestPayload } from "@/types";

interface Estimate {
  minPrice: number;
  maxPrice: number;
  estimatedWeeks: number;
  breakdown: { label: string; amount: number }[];
  disclaimer: string;
}

const PROPERTY_TYPES: { value: QuoteRequestPayload["propertyType"]; label: string }[] = [
  { value: "piso", label: "Piso" },
  { value: "casa", label: "Casa" },
  { value: "local", label: "Local comercial" },
];

const SCOPES: { value: QuoteRequestPayload["scope"]; label: string; hint: string }[] = [
  { value: "basico", label: "Básico", hint: "Pintura y acabados puntuales" },
  { value: "medio", label: "Medio", hint: "Cocina, baño o instalaciones" },
  { value: "integral", label: "Integral", hint: "Reforma completa llave en mano" },
];

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
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-line bg-white p-8"
      >
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

        <div className="mt-6 flex flex-col gap-2 border-t border-line pt-6">
          {estimate.breakdown.map((item) => (
            <div key={item.label} className="flex items-center justify-between text-sm">
              <span className="text-stone">{item.label}</span>
              <span className="font-medium text-carbon">
                {currencyFormatter.format(item.amount)}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-stone">
          {estimate.disclaimer}
        </p>

        <Button
          variant="outline"
          className="mt-6 w-full"
          onClick={() => {
            setEstimate(null);
            setStep("form");
          }}
        >
          <RotateCcw className="h-4 w-4" />
          Calcular otra reforma
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="rounded-3xl border border-line bg-white p-8">
      <div className="mb-6 flex items-center gap-3">
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

      <AnimatePresence mode="wait">
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
                      "rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors",
                      propertyType === option.value
                        ? "border-orange bg-orange/10 text-orange-dark"
                        : "border-line text-stone hover:border-carbon/30",
                    )}
                  >
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

            <Button onClick={() => setStep("contact")} size="lg">
              Continuar
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
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
