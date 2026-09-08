import type { Service } from "@/types";

export const SERVICES: Service[] = [
  {
    slug: "reformas-integrales",
    title: "Reformas Integrales",
    shortDescription:
      "Transformamos tu vivienda de principio a fin, con un único interlocutor y un proyecto llave en mano.",
    description:
      "Gestionamos cada fase de tu reforma integral: diseño, demolición, instalaciones, acabados y decoración. Un equipo, un presupuesto cerrado y un plazo garantizado, para que tú solo tengas que disfrutar del resultado.",
    icon: "LayoutGrid",
    features: [
      "Proyecto y diseño 3D incluido",
      "Un único responsable de obra",
      "Plazos y presupuesto cerrados",
      "Garantía por escrito hasta 3 años",
    ],
    image: "full-home",
  },
  {
    slug: "reforma-viviendas",
    title: "Reforma de Viviendas",
    shortDescription:
      "Pisos y casas completas adaptadas a cómo vives hoy, con distribuciones inteligentes y materiales de calidad.",
    description:
      "Optimizamos la distribución de tu vivienda, mejoramos la eficiencia energética y actualizamos instalaciones obsoletas, cuidando cada detalle estético y funcional.",
    icon: "Home",
    features: [
      "Redistribución de espacios",
      "Mejora de eficiencia energética",
      "Actualización de instalaciones",
      "Acabados premium a medida",
    ],
    image: "living-room",
  },
  {
    slug: "reforma-banos",
    title: "Reforma de Baños",
    shortDescription:
      "Baños funcionales y atemporales, con impermeabilización certificada y griferías de alta gama.",
    description:
      "Diseñamos baños que combinan estética hotelera con soluciones prácticas: platos de ducha a ras de suelo, mamparas a medida, mueble suspendido y sistemas de ventilación eficientes.",
    icon: "ShowerHead",
    features: [
      "Impermeabilización certificada",
      "Ducha a ras de suelo",
      "Griferías y sanitarios premium",
      "Instalación en 5-10 días",
    ],
    image: "bathroom-premium",
  },
  {
    slug: "reforma-cocinas",
    title: "Reforma de Cocinas",
    shortDescription:
      "Cocinas diseñadas para cocinar y para vivir, con muebles a medida y electrodomésticos integrados.",
    description:
      "Desde la distribución en isla hasta los acabados en piedra sinterizada, diseñamos cocinas funcionales, luminosas y con un acabado propio de una revista de interiorismo.",
    icon: "ChefHat",
    features: [
      "Diseño 3D antes de empezar",
      "Muebles a medida",
      "Encimeras en piedra sinterizada",
      "Instalación eléctrica y de gas normativa",
    ],
    image: "kitchen-premium",
  },
  {
    slug: "pintura",
    title: "Pintura",
    shortDescription:
      "Acabados impecables en interior y exterior, con productos de alta durabilidad.",
    description:
      "Aplicamos pinturas plásticas, esmaltes y estucos con técnicas profesionales, protegiendo el mobiliario existente y minimizando el tiempo de secado entre manos.",
    icon: "PaintRoller",
    features: [
      "Preparación y lijado de superficies",
      "Pinturas ecológicas de bajo olor",
      "Esmaltados de carpintería",
      "Protección total del mobiliario",
    ],
    image: "living-room",
  },
  {
    slug: "pladur",
    title: "Pladur y Falsos Techos",
    shortDescription:
      "Tabiquería seca, falsos techos técnicos e iluminación integrada.",
    description:
      "Creamos divisiones de espacio limpias y rápidas, falsos techos con iluminación LED integrada y soluciones de aislamiento acústico y térmico con sistemas de pladur certificados.",
    icon: "PanelsTopLeft",
    features: [
      "Aislamiento acústico y térmico",
      "Iluminación LED integrada",
      "Ejecución rápida y limpia",
      "Ideal para altillos y áticos",
    ],
    image: "full-home",
  },
  {
    slug: "electricidad",
    title: "Electricidad",
    shortDescription:
      "Instalaciones eléctricas normativas, boletines incluidos y domótica opcional.",
    description:
      "Renovamos cuadros eléctricos, cableado y mecanismos con certificación oficial, e integramos soluciones domóticas de iluminación, climatización y seguridad.",
    icon: "Zap",
    features: [
      "Boletín eléctrico oficial",
      "Cuadros y cableado normativos",
      "Domótica e iluminación inteligente",
      "Certificado de instalación",
    ],
    image: "team-working",
  },
  {
    slug: "fontaneria",
    title: "Fontanería",
    shortDescription:
      "Renovación de instalaciones de agua, saneamiento y climatización.",
    description:
      "Sustituimos tuberías obsoletas, mejoramos la presión de agua y el saneamiento, e instalamos sistemas de climatización eficientes con garantía de estanqueidad.",
    icon: "Wrench",
    features: [
      "Sustitución de tuberías",
      "Sistemas de climatización",
      "Detección de fugas",
      "Garantía de estanqueidad",
    ],
    image: "bathroom-premium",
  },
  {
    slug: "albanileria",
    title: "Albañilería",
    shortDescription:
      "Trabajos estructurales, tabiquería y saneado con acabados de precisión.",
    description:
      "Ejecutamos derribos, aperturas de vanos, saneado de humedades y tabiquería tradicional con mano de obra especializada y control de calidad en cada fase.",
    icon: "HardHat",
    features: [
      "Derribos y aperturas de vanos",
      "Saneado de humedades",
      "Tabiquería tradicional",
      "Control de calidad por fases",
    ],
    image: "team-working",
  },
  {
    slug: "rehabilitacion",
    title: "Rehabilitación",
    shortDescription:
      "Recuperamos fachadas, cubiertas y edificios completos con máxima eficiencia energética.",
    description:
      "Rehabilitamos fachadas, cubiertas y elementos comunitarios, mejorando el aislamiento térmico y cumpliendo la normativa de eficiencia energética vigente.",
    icon: "Building2",
    features: [
      "Rehabilitación de fachadas",
      "Mejora de aislamiento térmico",
      "Cubiertas y cubriciones",
      "Gestión de ayudas y subvenciones",
    ],
    image: "facade",
  },
  {
    slug: "locales-comerciales",
    title: "Locales Comerciales",
    shortDescription:
      "Reformas de locales y oficinas con plazos ajustados a tu actividad.",
    description:
      "Adaptamos locales comerciales, oficinas y hostelería a la normativa vigente, minimizando el tiempo de cierre y maximizando el impacto visual del espacio.",
    icon: "Store",
    features: [
      "Adecuación a normativa de actividad",
      "Plazos ajustados al negocio",
      "Diseño de imagen comercial",
      "Instalaciones técnicas completas",
    ],
    image: "commercial-space",
  },
];
