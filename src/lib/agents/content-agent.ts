import type { Agent, ContentBrief, GeneratedArticle } from "./types";

/**
 * Placeholder for a future LLM-backed SEO content generator. Returns a
 * structured outline today so the CMS/editorial pipeline can be built
 * against a stable shape before the real model call is wired in.
 */
export class ContentAgent implements Agent<ContentBrief, GeneratedArticle> {
  readonly name = "content-agent";
  readonly description = "Genera artículos SEO a partir de un briefing de palabra clave.";

  async run(input: ContentBrief): Promise<GeneratedArticle> {
    return {
      title: `${input.topic}: guía completa`,
      metaDescription: `Todo lo que necesitas saber sobre ${input.topic.toLowerCase()} en Bizkaia. Consejos, precios orientativos y errores a evitar.`,
      sections: input.outline.map((heading) => ({
        heading,
        content: `[Contenido pendiente de generación para "${heading}" — palabra clave objetivo: ${input.targetKeyword}]`,
      })),
    };
  }
}
