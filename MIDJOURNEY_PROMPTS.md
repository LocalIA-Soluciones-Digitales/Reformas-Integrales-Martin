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

## Vídeos con Leonardo Motion

Leonardo tiene una función **Motion** (imagen → vídeo, créditos gratis
incluidos en el plan free) que anima una imagen ya generada en un clip corto
(normalmente 4-5s). Es imagen-a-vídeo de un único fotograma de partida, no
una cámara 3D real navegando por la estancia — así que un "recorrido
inmersivo" completo no sale de un solo clip. La forma realista de conseguir
ese efecto con herramientas gratuitas es: generar 3-4 clips cortos (uno por
estancia) con movimiento de cámara hacia delante, y unirlos en un único
vídeo. Si me pasas los clips descargados, te los edito/uno con ffmpeg y te
los integro como vídeo de fondo en el hero o en una sección nueva "Recorre
la reforma".

### Cómo generar un clip en Leonardo Motion

1. Genera primero la imagen fija con uno de los prompts de la tabla de
   arriba (o usa una que ya tengas en `public/images/`).
2. Ábrela y pulsa **Motion** (o "Animate this image").
3. Pega el prompt de movimiento correspondiente (tabla abajo).
4. Sube el **Motion Strength** a "Medio-Alto" — con "Bajo" apenas se mueve la
   cámara; con "Muy alto" suele deformar los muebles.
5. Descarga en MP4.

### Prompt 1 — Loop ambiental del hero (sustituye/complementa el Ken Burns actual)

> Slow, smooth cinematic camera drift forward into the room, subtle parallax between foreground furniture and background window light, golden hour light gently flickering, no camera shake, stable steady motion, seamless loop

### Prompt 2 — Recorrido inmersivo, "entro caminando en la reforma" (el que pides)

Genera esto sobre 3-4 imágenes distintas (por ejemplo `full-home`,
`living-room`, `kitchen-premium`, `bathroom-premium`) para tener un clip por
estancia, todos con el mismo prompt de movimiento para que el ritmo sea
consistente al unirlos:

> First-person walking POV camera slowly moving forward through the room, gentle steady dolly-in motion as if walking through the space, natural depth parallax between near and far objects, smooth and stable, no distortion, cinematic real estate walkthrough style, subtle motion blur

### Prompt 3 — Detalle con movimiento (para redes sociales / reels)

> Subtle slow-motion camera push-in on the kitchen island countertop, soft reflections moving on the stone surface, warm ambient light, cinematic macro depth of field, steady smooth motion

### Si el resultado de Leonardo Motion no convence

Es el límite normal de animar una sola imagen fija. Si en algún momento
quieres un recorrido más largo y fluido, herramientas gratuitas con más
control de cámara (aunque con menos crédito gratis que Leonardo) son
**Pika Labs** y **Runway Gen-3** (plan free). No es necesario para lanzar la
web — el hero con Ken Burns en código ya da sensación de movimiento sin
depender de vídeo.

---

## Cómo integrar imágenes y vídeos generados

Las 10 fotos de categoría (más el plano) ya están integradas en el código —
`src/components/media/image-placeholder.tsx` las sirve automáticamente en
cuanto existe el archivo `public/images/<clave>.webp` correspondiente, con
`next/image` y, en el hero y las imágenes editoriales grandes, un efecto Ken
Burns continuo (`kenBurns="cinematic" | "subtle"`).

Para añadir un vídeo (por ejemplo, sustituir la imagen del hero por el clip
del Prompt 1):

1. Descarga el MP4 de Leonardo Motion y colócalo en `public/videos/`.
2. Pásamelo (o dime que ya está ahí) y te cambio el hero para reproducir un
   `<video autoPlay muted loop playsInline>` en vez de la imagen estática,
   manteniendo el mismo degradado de legibilidad sobre el texto.

Para añadir imágenes nuevas (variantes de `full-home`, `living-room`, etc.
que se reutilizan mucho — ver conversación anterior sobre repetición):

1. Genera y descarga la imagen con el prompt correspondiente.
2. Optimízala a `.webp`, idealmente `<300KB`.
3. Colócala en `public/images/` con un nombre descriptivo.
4. Dímelo y actualizo `src/data/projects.ts` / `src/data/services.ts` para
   que cada proyecto use su propia variante en vez de repetir la misma foto.
