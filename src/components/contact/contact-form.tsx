"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/data/services";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error ?? "No se pudo enviar el formulario");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Ha ocurrido un error inesperado",
      );
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-line bg-cloud px-8 py-16 text-center"
      >
        <CheckCircle2 className="h-12 w-12 text-orange" />
        <h3 className="font-display text-2xl font-semibold text-carbon">
          ¡Mensaje enviado!
        </h3>
        <p className="max-w-sm text-sm text-stone">
          Gracias por contactar con Reformas Integrales Martín. Te
          responderemos en menos de 24 horas laborables.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Enviar otra consulta
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input
        type="text"
        name="honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nombre completo</Label>
          <Input id="name" name="name" required placeholder="Tu nombre" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input id="phone" name="phone" required placeholder="600 000 000" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Tipo de reforma</Label>
        <select
          id="service"
          name="service"
          className="h-13 w-full rounded-xl border border-line bg-white px-4 text-sm text-carbon focus-visible:border-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/20"
        >
          <option value="">Selecciona una opción</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Cuéntanos tu proyecto</Label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Describe brevemente tu proyecto, metros cuadrados y plazos deseados"
        />
      </div>

      {status === "error" && errorMessage ? (
        <p className="text-sm text-red-600">{errorMessage}</p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {status === "loading" ? "Enviando..." : "Enviar solicitud"}
      </Button>
      <p className="text-center text-xs text-stone">
        Al enviar este formulario aceptas ser contactado por Reformas
        Integrales Martín respecto a tu solicitud.
      </p>
    </form>
  );
}
