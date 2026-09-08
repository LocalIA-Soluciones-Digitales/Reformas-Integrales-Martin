export * from "./types";
export { LeadQualificationAgent } from "./lead-qualification-agent";
export { QuoteGeneratorAgent } from "./quote-generator-agent";
export { ContentAgent } from "./content-agent";
export { ImageAgent } from "./image-agent";
export { ReviewAgent } from "./review-agent";
export { FollowUpAgent } from "./follow-up-agent";

import { LeadQualificationAgent } from "./lead-qualification-agent";
import { QuoteGeneratorAgent } from "./quote-generator-agent";
import { ContentAgent } from "./content-agent";
import { ImageAgent } from "./image-agent";
import { ReviewAgent } from "./review-agent";
import { FollowUpAgent } from "./follow-up-agent";

/**
 * Central registry so future orchestration code (a cron job, an admin
 * panel action, a webhook) can look up an agent by name instead of
 * importing every class individually.
 */
export const agentRegistry = {
  leadQualification: new LeadQualificationAgent(),
  quoteGenerator: new QuoteGeneratorAgent(),
  content: new ContentAgent(),
  image: new ImageAgent(),
  review: new ReviewAgent(),
  followUp: new FollowUpAgent(),
} as const;
