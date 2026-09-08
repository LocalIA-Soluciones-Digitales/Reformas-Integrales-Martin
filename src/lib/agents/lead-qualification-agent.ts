import type { Agent, LeadPayload, LeadQualification } from "./types";

const HIGH_INTENT_KEYWORDS = [
  "urgente",
  "cuanto antes",
  "esta semana",
  "presupuesto cerrado",
  "reforma integral",
];

/**
 * Scores an incoming lead so sales follow-up can be prioritized.
 * Stubbed with heuristics today; designed to be swapped for an LLM
 * classification call (e.g. Claude) without changing the call site in
 * `/api/leads`.
 */
export class LeadQualificationAgent
  implements Agent<LeadPayload, LeadQualification>
{
  readonly name = "lead-qualification-agent";
  readonly description =
    "Analiza los formularios entrantes y prioriza a los clientes potenciales.";

  async run(input: LeadPayload): Promise<LeadQualification> {
    const reasons: string[] = [];
    let score = 40;

    const text = `${input.message} ${input.service ?? ""}`.toLowerCase();

    if (HIGH_INTENT_KEYWORDS.some((keyword) => text.includes(keyword))) {
      score += 30;
      reasons.push("El mensaje contiene señales de urgencia o intención alta");
    }

    if (input.phone) {
      score += 10;
      reasons.push("Facilitó un teléfono de contacto directo");
    }

    if (input.service) {
      score += 15;
      reasons.push(`Interés específico en: ${input.service}`);
    }

    if (input.message.length > 120) {
      score += 5;
      reasons.push("Mensaje detallado, indica proyecto bien definido");
    }

    score = Math.min(100, score);

    const priority = score >= 70 ? "alta" : score >= 45 ? "media" : "baja";

    return {
      priority,
      score,
      reasons,
      suggestedService: input.service,
    };
  }
}
