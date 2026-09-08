# Prompts de imagen — Reformas Integrales Martín

11 prompts (10 fotografías + 1 lámina de plano) listos para generar la
imaginería real del sitio. Se mantienen en **inglés** porque los modelos de
imagen dan resultados más consistentes y de mayor calidad en inglés que en
español; el texto explicativo de este documento sí está en español.

Este documento cubre tres herramientas gratuitas: **Microsoft
Designer / Bing Image Creator**, **Leonardo.ai** y **Midjourney / Flux**. El
mismo patrón de estilo está codificado en
[`src/lib/agents/image-agent.ts`](src/lib/agents/image-agent.ts) por si en el
futuro se generan prompts adicionales de forma programática.

---

## Los 11 prompts (formato universal)

Copia y pega el texto tal cual en cualquiera de las tres herramientas — las
instrucciones específicas de cada una (formato/aspect ratio, negative prompt,
modelo a elegir) están más abajo.

**Sufijo de estilo común** (ya incluido en cada prompt, no lo repitas):
`ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark`

| # | Uso en la web | Prompt | Aspect ratio recomendado |
|---|---|---|---|
| 1 | Hero principal (`hero-cinematic`) | Cinematic wide shot of a fully renovated modern living room at golden hour, floor-to-ceiling windows, warm orange accent lighting, minimalist furniture, dramatic depth of field, architectural digest style, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 16:9 |
| 2 | Cocina (`kitchen-premium`) | Modern luxury kitchen renovation, large central island in sintered stone countertop, matte black fixtures, integrated high-end appliances, warm pendant lighting, oak wood accents, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 4:3 |
| 3 | Baño (`bathroom-premium`) | Spa-inspired luxury bathroom renovation, walk-in rain shower with frameless glass, floating vanity, warm indirect LED lighting, natural stone tile, black matte fixtures, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 4:3 |
| 4 | Vivienda integral (`full-home`) | Full apartment renovation, open-plan living and dining area, seamless flow between spaces, contemporary minimalist design, neutral palette with warm wood tones, large windows with natural light flooding in, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 16:9 |
| 5 | Salón (`living-room`) | Contemporary designer living room, custom built-in joinery, statement lighting fixture, neutral tones with orange accent cushions, large area rug, floor-to-ceiling curtains, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 3:4 |
| 6 | Dormitorio (`bedroom`) | Renovated primary bedroom with custom walk-in wardrobe, upholstered headboard, warm ambient lighting, soft neutral textiles, large window with sheer curtains, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 4:3 |
| 7 | Local comercial (`commercial-space`) | Commercial retail space renovation, modern hospitality interior, exposed structural beams combined with warm wood cladding, ambient pendant lighting, polished concrete floor, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 16:9 |
| 8 | Equipo trabajando (`team-working`) | Professional construction crew working on a residential renovation site, wearing safety gear, natural light through scaffolding, tools and materials organized, candid documentary photography style, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 3:2 |
| 9 | Antes/después (`before-after`) | Split composition showing a dated outdated apartment interior on one half transitioning into a fully renovated luxury modern interior on the other half, dramatic lighting contrast, same room angle, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 4:3 |
| 10 | Fachada (`facade`) | Rehabilitated residential building facade, clean modern render finish, energy-efficient exterior insulation system, warm afternoon light, tree-lined urban street in the Basque Country, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark | 16:9 |
| 11 | Plano/blueprint decorativo (bonus) | Top-down architectural floor plan blueprint of a renovated apartment, clean white background, thin black wall lines, orange dimension lines and measurements, minimalist technical drawing style, high resolution, no photorealistic elements, no text labels except numbers, flat vector-style illustration | 4:3 |

> El plano interactivo de la home (`FloorPlan`) ya está construido en código
> (SVG animado), no necesita imagen — el prompt 11 es solo por si quieres una
> lámina de plano adicional como imagen decorativa en otra sección.

---

## Microsoft Designer / Bing Image Creator (recomendado, gratis)

1. Entra en [designer.microsoft.com](https://designer.microsoft.com) o
   [Bing Image Creator](https://www.bing.com/images/create) con una cuenta
   Microsoft gratuita.
2. Pega el prompt de la tabla **tal cual**, en inglés.
3. Selecciona el formato más parecido al "Aspect ratio recomendado" de la
   tabla (Cuadrado / Horizontal / Vertical — Designer no acepta ratios
   exactos como Midjourney, así que elige el más cercano).
4. Genera 3-4 variantes y elige la mejor; DALL·E 3 (el modelo detrás de
   Designer) no admite negative prompt, así que si aparece texto o marcas de
   agua no deseadas, añade al final de tu prompt: `, completely blank
   surfaces, no signage`.

## Leonardo.ai (gratis, ~150 créditos/día)

1. Entra en [leonardo.ai](https://leonardo.ai) y crea una cuenta gratuita.
2. En "AI Image Generation", elige el modelo **Leonardo Phoenix** o
   **PhotoReal** (mejor fotorrealismo arquitectónico) y activa el toggle
   **PhotoReal** si está disponible.
3. Pega el prompt principal de la tabla en el campo *Prompt*.
4. Pega esto en el campo *Negative Prompt*:
   `cartoon, illustration, 3d render, low quality, blurry, watermark, text, logo, deformed, unrealistic proportions`
5. Ajusta *Image Dimensions* al aspect ratio recomendado de la tabla.
6. Genera 4 variantes (Leonardo genera varias por tanda) y descarga la mejor.

## Midjourney / Flux

Añade al final de cada prompt `--ar <ratio> --v 6.1` (Midjourney) o usa el
mismo negative prompt de Leonardo (Flux). Ejemplo para el hero:

> Cinematic wide shot of a fully renovated modern living room at golden hour, floor-to-ceiling windows, warm orange accent lighting, minimalist furniture, dramatic depth of field, architectural digest style, ultra realistic architectural photography, luxury renovation, natural lighting, 8k, photorealistic, magazine quality, no text, no watermark --ar 16:9 --v 6.1

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

Si me pasas las imágenes generadas, puedo optimizarlas e integrarlas
directamente en el código por ti.
