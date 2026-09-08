# Imágenes reales del proyecto

Esta carpeta está vacía a propósito. El sitio usa `ImagePlaceholder`
(`src/components/media/image-placeholder.tsx`) mientras no exista fotografía
real de las obras.

Para sustituir un placeholder por una imagen real:

1. Genera la imagen con los prompts de [`MIDJOURNEY_PROMPTS.md`](../../MIDJOURNEY_PROMPTS.md)
   (o usa fotografía propia de una obra terminada).
2. Expórtala en `.webp`, idealmente por debajo de 300 KB.
3. Colócala aquí, por ejemplo `public/images/hero-cinematic.webp`.
4. Sustituye el `<ImagePlaceholder placeholder="..." />` correspondiente por
   un `next/image` apuntando a `/images/hero-cinematic.webp`.
