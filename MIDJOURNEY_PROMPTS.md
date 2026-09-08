# Prompts de imagen — Reformas Integrales Martín

Prompts listos para pegar en Midjourney (`--v 6.1`) o Flux 1.1 Pro. Todas
siguen el mismo sufijo de estilo para mantener coherencia visual en toda la
web; ajusta el aspect ratio (`--ar`) según dónde se use la imagen.

**Sufijo de estilo común** (ya incluido en cada prompt):
`ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark`

**Negative prompt común** (Flux / herramientas que lo soporten):
`cartoon, illustration, 3d render, low quality, blurry, watermark, text, logo, deformed, unrealistic proportions`

Este mismo patrón está codificado en [`src/lib/agents/image-agent.ts`](src/lib/agents/image-agent.ts),
para generar prompts adicionales de forma programática en el futuro.

---

## 1. Hero principal cinematográfico
> Cinematic wide shot of a fully renovated modern living room at golden hour, floor-to-ceiling windows, warm orange accent lighting, minimalist furniture, dramatic depth of field, architectural digest style, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 16:9 --v 6.1

## 2. Reforma de cocina moderna premium
> Modern luxury kitchen renovation, large central island in sintered stone countertop, matte black fixtures, integrated high-end appliances, warm pendant lighting, oak wood accents, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 4:3 --v 6.1

## 3. Reforma de baño moderno premium
> Spa-inspired luxury bathroom renovation, walk-in rain shower with frameless glass, floating vanity, warm indirect LED lighting, natural stone tile, black matte fixtures, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 4:3 --v 6.1

## 4. Reforma integral de vivienda
> Full apartment renovation, open-plan living and dining area, seamless flow between spaces, contemporary minimalist design, neutral palette with warm wood tones, large windows with natural light flooding in, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 16:9 --v 6.1

## 5. Salón de diseño contemporáneo
> Contemporary designer living room, custom built-in joinery, statement lighting fixture, neutral tones with orange accent cushions, large area rug, floor-to-ceiling curtains, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 3:4 --v 6.1

## 6. Dormitorio reformado
> Renovated primary bedroom with custom walk-in wardrobe, upholstered headboard, warm ambient lighting, soft neutral textiles, large window with sheer curtains, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 4:3 --v 6.1

## 7. Reforma de local comercial
> Commercial retail space renovation, modern hospitality interior, exposed structural beams combined with warm wood cladding, ambient pendant lighting, polished concrete floor, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 16:9 --v 6.1

## 8. Equipo de profesionales trabajando
> Professional construction crew working on a residential renovation site, wearing safety gear, natural light through scaffolding, tools and materials organized, candid documentary photography style, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 3:2 --v 6.1

## 9. Antes y después impactante
> Split composition showing a dated outdated apartment interior on one half transitioning into a fully renovated luxury modern interior on the other half, dramatic lighting contrast, same room angle, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 4:3 --v 6.1

## 10. Fachadas rehabilitadas
> Rehabilitated residential building facade, clean modern render finish, energy-efficient exterior insulation system, warm afternoon light, tree-lined urban street in the Basque Country, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 16:9 --v 6.1

---

## Cómo integrar las imágenes generadas

1. Genera y descarga las imágenes con el prompt correspondiente.
2. Optimízalas a formato `.webp` (recomendado, `<300KB` cada una).
3. Colócalas en `public/images/` con nombres descriptivos, por ejemplo:
   `public/images/hero-cinematic.webp`.
4. Sustituye el componente `<ImagePlaceholder placeholder="hero-cinematic" />`
   correspondiente por una etiqueta `next/image` apuntando al archivo real
   (ver `src/components/media/image-placeholder.tsx` para la lista completa
   de claves usadas en todo el sitio).
