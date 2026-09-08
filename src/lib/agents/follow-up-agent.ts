import type { Agent, FollowUpTask, LeadPayload, LeadQualification } from "./types";

interface FollowUpInput {
  lead: LeadPayload;
  qualification: LeadQualification;
  leadId: string;
}

const DELAY_HOURS_BY_PRIORITY: Record<LeadQualification["priority"], number> = {
  alta: 2,
  media: 24,
  baja: 72,
};

/**
 * Schedules the next touchpoint for a lead based on its qualification
 * score. Today it only returns the task description; a real deployment
 * would push this into a queue (e.g. a cron job or CRM task).
 */
export class FollowUpAgent implements Agent<FollowUpInput, FollowUpTask> {
  readonly name = "follow-up-agent";
  readonly description = "Da seguimiento automático a clientes potenciales según su prioridad.";

  async run({ lead, qualification, leadId }: FollowUpInput): Promise<FollowUpTask> {
    const delayHours = DELAY_HOURS_BY_PRIORITY[qualification.priority];
    const scheduledFor = new Date(Date.now() + delayHours * 60 * 60 * 1000);

    return {
      leadId,
      scheduledFor,
      channel: "whatsapp",
      message: `Hola ${lead.name}, somos Reformas Integrales Martín. Vimos tu interés en ${lead.service ?? "una reforma"} y queríamos saber si tienes alguna duda que podamos resolver.`,
    };
  }
}
