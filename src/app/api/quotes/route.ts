import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { quoteRequestSchema } from "@/lib/validations";
import { agentRegistry } from "@/lib/agents";
import { saveLead } from "@/lib/store/leads-store";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = quoteRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const estimate = await agentRegistry.quoteGenerator.run(parsed.data);

  const leadPayload = {
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    service: parsed.data.serviceType,
    message: `Calculadora de presupuesto: ${parsed.data.propertyType}, ${parsed.data.squareMeters}m², alcance ${parsed.data.scope}.`,
    source: "calculadora-presupuesto",
  };

  const qualification = await agentRegistry.leadQualification.run(leadPayload);

  saveLead({
    ...leadPayload,
    id: randomUUID(),
    qualification,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true, estimate });
}
