import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { contactSchema } from "@/lib/validations";
import { agentRegistry } from "@/lib/agents";
import { saveLead } from "@/lib/store/leads-store";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Cuerpo de la petición inválido" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  if (parsed.data.honeypot) {
    return NextResponse.json({ success: true });
  }

  const qualification = await agentRegistry.leadQualification.run(parsed.data);

  const lead = saveLead({
    ...parsed.data,
    id: randomUUID(),
    qualification,
    createdAt: new Date().toISOString(),
    source: parsed.data.source ?? "formulario-contacto",
  });

  await agentRegistry.followUp.run({
    lead: parsed.data,
    qualification,
    leadId: lead.id,
  });

  return NextResponse.json({
    success: true,
    message:
      "Gracias por contactarnos. Te responderemos en menos de 24 horas laborables.",
  });
}
