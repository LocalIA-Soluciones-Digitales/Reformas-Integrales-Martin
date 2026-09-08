import type { Agent, ReviewRequest } from "./types";

interface ReviewRequestResult {
  sent: boolean;
  channel: ReviewRequest["channel"];
  message: string;
}

/**
 * Requests a review from a client after project completion. Today it
 * only builds the message; wiring `sent` to true requires connecting an
 * email/SMS/WhatsApp provider (see README > Integraciones pendientes).
 */
export class ReviewAgent implements Agent<ReviewRequest, ReviewRequestResult> {
  readonly name = "review-agent";
  readonly description = "Solicita reseñas a clientes automáticamente tras finalizar un proyecto.";

  async run(input: ReviewRequest): Promise<ReviewRequestResult> {
    const message = `Hola ${input.clientName}, gracias por confiar en Reformas Integrales Martín. ¿Nos ayudarías dejando tu opinión sobre el proyecto? Tu valoración nos ayuda mucho a seguir mejorando.`;

    return {
      sent: false,
      channel: input.channel,
      message,
    };
  }
}
