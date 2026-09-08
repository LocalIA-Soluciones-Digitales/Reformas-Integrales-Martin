import type { LeadPayload, QuoteRequestPayload } from "@/types";

export type LeadPriority = "alta" | "media" | "baja";

export interface LeadQualification {
  priority: LeadPriority;
  score: number;
  reasons: string[];
  suggestedService?: string;
}

export interface QuoteEstimate {
  minPrice: number;
  maxPrice: number;
  estimatedWeeks: number;
  breakdown: { label: string; amount: number }[];
  disclaimer: string;
}

export interface ContentBrief {
  topic: string;
  targetKeyword: string;
  outline: string[];
}

export interface GeneratedArticle {
  title: string;
  metaDescription: string;
  sections: { heading: string; content: string }[];
}

export interface ImageBrief {
  subject: string;
  style: string;
  aspectRatio: "1:1" | "4:3" | "16:9" | "3:4";
}

export interface ImagePromptResult {
  prompt: string;
  negativePrompt: string;
}

export interface ReviewRequest {
  clientName: string;
  clientEmail: string;
  projectSlug: string;
  channel: "email" | "sms" | "whatsapp";
}

export interface FollowUpTask {
  leadId: string;
  scheduledFor: Date;
  channel: "email" | "sms" | "whatsapp" | "call";
  message: string;
}

/**
 * Every agent in this codebase implements this interface so the future
 * orchestrator (see `lib/agents/index.ts`) can register, run, and log any
 * agent without knowing its internals. Today's implementations are
 * deterministic stubs; swapping in a real LLM call means changing the
 * `run` body only, not the surrounding architecture.
 */
export interface Agent<Input, Output> {
  readonly name: string;
  readonly description: string;
  run(input: Input): Promise<Output>;
}

export type { LeadPayload, QuoteRequestPayload };
