import type { Agent, ImageBrief, ImagePromptResult } from "./types";

const STYLE_SUFFIX =
  "ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark";

const NEGATIVE_PROMPT =
  "cartoon, illustration, 3d render, low quality, blurry, watermark, text, logo, deformed, unrealistic proportions";

/**
 * Turns a short brief into a ready-to-paste Midjourney/Flux prompt.
 * See MIDJOURNEY_PROMPTS.md for the curated prompt set used for this
 * project's launch imagery.
 */
export class ImageAgent implements Agent<ImageBrief, ImagePromptResult> {
  readonly name = "image-agent";
  readonly description = "Genera prompts de imagen para Midjourney/Flux a partir de un briefing.";

  async run(input: ImageBrief): Promise<ImagePromptResult> {
    return {
      prompt: `${input.subject}, ${input.style}, ${STYLE_SUFFIX} --ar ${input.aspectRatio} --v 6.1`,
      negativePrompt: NEGATIVE_PROMPT,
    };
  }
}
