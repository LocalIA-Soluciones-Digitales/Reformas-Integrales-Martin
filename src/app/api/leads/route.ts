import { NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { leadSchema } from "@/lib/validations";
import { agentRegistry } from "@/lib/agents";
import { saveLead } from "@/lib/store/leads-store";

/**
 * General-purpose lead intake endpoint (quote calculator, exit-intent
 * popups, future landing pages). `/api/contact` is the dedicated
 * endpoint for the main contact form.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Datos inválidos", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const qualification = await agentRegistry.leadQualification.run(parsed.data);

  const lead = saveLead({
    ...parsed.data,
    id: randomUUID(),
    qualification,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true, leadId: lead.id, qualification });
}

// A GET handler for listing leads is intentionally omitted: leads
// contain PII (name, email, phone) and must not be exposed without an
// authentication layer, which doesn't exist yet. Add one (see README >
// Integraciones pendientes) before building the admin panel's list view.
