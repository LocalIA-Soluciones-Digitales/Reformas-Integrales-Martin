import type { LeadPayload } from "@/types";
import type { LeadQualification } from "@/lib/agents/types";

export interface StoredLead extends LeadPayload {
  id: string;
  qualification: LeadQualification;
  createdAt: string;
}

/**
 * In-memory store used until a real database/CRM is connected (see
 * README > Integraciones pendientes). This resets on every server
 * restart/deploy and is not shared across serverless instances — it
 * exists only so the API routes and admin panel have a working shape
 * to build against.
 */
const leads: StoredLead[] = [];

export function saveLead(lead: StoredLead) {
  leads.unshift(lead);
  return lead;
}

export function listLeads() {
  return leads;
}
