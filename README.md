# Reformas Integrales Martín

Web corporativa premium para **Reformas Integrales Martín**, empresa de
reformas integrales en Barakaldo (Bizkaia) dirigida por Samuel Martín Cano.

- **Teléfono:** 679 656 508
- **Email:** reformasintegralesmartin@gmail.com
- **Ubicación:** Barakaldo, Bizkaia

## Stack técnico

| Área | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Estilos | Tailwind CSS v4 |
| Animación | Framer Motion (reveal, microinteracciones) + GSAP/ScrollTrigger (parallax del hero) |
| Componentes UI | Primitivas propias estilo shadcn/ui sobre Radix UI (accordion, dialog, label, slot) |
| Iconografía | lucide-react |
| Validación | Zod |
| SEO | Metadata API de Next.js, JSON-LD (LocalBusiness, FAQPage, Review, Breadcrumb), sitemap y robots dinámicos, imagen Open Graph generada con `next/og` |

## Empezar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción (incluye type-check y lint) |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |
| `npm run type-check` | Comprobación de tipos sin emitir archivos |

## Estructura del proyecto

```
src/
  app/                  Rutas (App Router): home, servicios, proyectos, empresa, contacto, API
  components/
    home/               Secciones de la home (hero, servicios, antes/después, proceso, testimonios, FAQ, CTA)
    layout/             Navbar, footer, WhatsApp flotante, CTA sticky móvil
    projects/           Galería, filtros, slider antes/después, lightbox
    contact/            Formulario de contacto y calculadora de presupuesto
    ui/                 Primitivas de interfaz (botón, badge, card, accordion, dialog...)
    motion/             Helpers de animación (reveal, contador animado)
    media/              Placeholders de imagen a la espera de fotografía real
    seo/                Inyección de JSON-LD
  data/                 Contenido: servicios, proyectos, testimonios, FAQ, proceso
  lib/
    agents/             Arquitectura modular de agentes IA (ver más abajo)
    seo/                Helpers de metadata y schema.org
    store/               Almacén de leads en memoria (temporal, ver Integraciones pendientes)
  types/                Tipos compartidos
```

## Imágenes

El proyecto usa un componente `ImagePlaceholder` con gradientes de marca en
lugar de fotografía de stock genérica, para no comprometer la calidad visual
premium del sitio hasta contar con fotografía real de obra.

Los prompts listos para generar la fotografía definitiva con Midjourney/Flux
están en [`MIDJOURNEY_PROMPTS.md`](MIDJOURNEY_PROMPTS.md), junto con las
instrucciones para sustituir cada placeholder por la imagen final.

## Arquitectura de agentes IA

`src/lib/agents/` define una arquitectura modular preparada para IA, con una
interfaz `Agent<Input, Output>` común y seis agentes concretos:

- **LeadQualificationAgent** — puntúa y prioriza los formularios entrantes.
- **QuoteGeneratorAgent** — calcula estimaciones de presupuesto orientativas.
- **ContentAgent** — genera outlines de artículos SEO.
- **ImageAgent** — construye prompts de imagen (Midjourney/Flux) a partir de un briefing.
- **ReviewAgent** — redacta solicitudes de reseña tras finalizar un proyecto.
- **FollowUpAgent** — programa el siguiente contacto según la prioridad del lead.

Hoy todos son implementaciones deterministas (heurísticas/plantillas), no
llamadas a un LLM: existen para que la interfaz y los puntos de integración
(`/api/leads`, `/api/contact`, `/api/quotes`) ya estén definidos, de forma que
conectar un modelo real sea un cambio interno a cada agente, no un rediseño.

## API

| Endpoint | Método | Descripción |
|---|---|---|
| `/api/contact` | `POST` | Formulario de contacto principal |
| `/api/leads` | `POST` | Captación de leads genérica (calculadora, futuras landing) |
| `/api/quotes` | `POST` | Calculadora de presupuesto orientativo |
| `/api/projects` | `GET` | Listado de proyectos (filtrable por `?category=`) |
| `/api/testimonials` | `GET` | Listado de testimonios |

## Integraciones pendientes

El proyecto está listo para producción a nivel de frontend, pero las
siguientes integraciones de backend requieren credenciales que no forman
parte de este repositorio:

- **Persistencia de leads**: actualmente en memoria (`src/lib/store/leads-store.ts`),
  se resetea en cada despliegue. Sustituir por una base de datos (Postgres,
  Supabase...) o CRM antes de producción.
- **Notificaciones por email**: no hay envío de emails configurado. Añadir un
  proveedor (Resend, SendGrid...) en `/api/contact`.
- **WhatsApp Business API**: `FollowUpAgent` y `ReviewAgent` generan el
  mensaje pero no lo envían; requiere conectar un proveedor.
- **Panel de administración**: los endpoints de leads no exponen un `GET`
  público a propósito (contienen PII); añadir autenticación antes de
  construir el panel de gestión de leads/proyectos/presupuestos.
- **Agentes IA reales**: sustituir la lógica determinista de `lib/agents/*`
  por llamadas a un modelo (p. ej. la API de Claude) cuando se disponga de
  API key.

Variables de entorno de referencia en [`.env.example`](.env.example).

## SEO

Optimizado para búsquedas locales en Barakaldo y Bizkaia (reformas
integrales, reforma de baños, reforma de cocinas, rehabilitación). Incluye
`robots.ts` y `sitemap.ts` dinámicos, metadata por página vía
`buildMetadata()`, y datos estructurados JSON-LD: `HomeAndConstructionBusiness`,
`FAQPage`, reseñas agregadas y `BreadcrumbList`.

## Despliegue

Optimizado para [Vercel](https://vercel.com/new). El build (`npm run build`)
genera páginas estáticas donde es posible y rutas API server-rendered bajo
demanda.
