import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2, "Introduce tu nombre completo"),
  email: z.string().email("Introduce un email válido"),
  phone: z
    .string()
    .min(9, "Introduce un teléfono válido")
    .regex(/^[+\d\s()-]+$/, "Introduce un teléfono válido"),
  service: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más sobre tu proyecto"),
  location: z.string().optional(),
  source: z.string().optional(),
  honeypot: z.string().max(0).optional(),
});

export const contactSchema = leadSchema;

export const quoteRequestSchema = z.object({
  serviceType: z.string().min(1),
  propertyType: z.enum(["piso", "casa", "local"]),
  squareMeters: z.number().min(5).max(2000),
  scope: z.enum(["basico", "medio", "integral"]),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
});

export type LeadInput = z.infer<typeof leadSchema>;
export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;
