import type { Agent, QuoteEstimate, QuoteRequestPayload } from "./types";

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

/**
 * Produces an orientative price range only — never a binding quote.
 * A human always reviews and confirms the final figure after the
 * on-site technical visit.
 */
export class QuoteGeneratorAgent
  implements Agent<QuoteRequestPayload, QuoteEstimate>
{
  readonly name = "quote-generator-agent";
  readonly description = "Genera presupuestos orientativos a partir del alcance del proyecto.";

  async run(input: QuoteRequestPayload): Promise<QuoteEstimate> {
    const pricePerM2 =
      BASE_PRICE_PER_M2[input.scope] * PROPERTY_MULTIPLIER[input.propertyType];
    const basePrice = pricePerM2 * input.squareMeters;

    const breakdown = [
      { label: "Mano de obra y gestión de proyecto", amount: Math.round(basePrice * 0.45) },
      { label: "Materiales y acabados", amount: Math.round(basePrice * 0.4) },
      { label: "Instalaciones (electricidad/fontanería)", amount: Math.round(basePrice * 0.15) },
    ];

    const estimatedWeeks = Math.max(
      2,
      Math.round((input.squareMeters / 12) * (input.scope === "integral" ? 1.4 : 1)),
    );

    return {
      minPrice: Math.round(basePrice * 0.85),
      maxPrice: Math.round(basePrice * 1.15),
      estimatedWeeks,
      breakdown,
      disclaimer:
        "Estimación orientativa no vinculante. El presupuesto final se confirma tras la visita técnica gratuita.",
    };
  }
}
