export const COMPANY = {
  name: "Reformas Integrales Martín",
  legalName: "Reformas Integrales Martín",
  owner: "Samuel Martín Cano",
  phone: "679 656 508",
  phoneDisplay: "679 656 508",
  email: "reformasintegralesmartin@gmail.com",
  city: "Barakaldo",
  region: "Bizkaia",
  country: "España",
  addressLocality: "Barakaldo",
  addressRegion: "País Vasco",
  postalCode: "48901",
  foundingYear: 2011,
  yearsExperience: new Date().getFullYear() - 2011,
  serviceArea: [
    "Barakaldo",
    "Sestao",
    "Portugalete",
    "Santurtzi",
    "Bilbao",
    "Getxo",
    "Basauri",
    "Bizkaia",
  ],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
  },
  siteUrl: "https://reformasintegralesmartin.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/empresa", label: "Empresa" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const TRUST_STATS = [
  { value: 14, suffix: "+", label: "Años de experiencia" },
  { value: 320, suffix: "+", label: "Reformas entregadas" },
  { value: 98, suffix: "%", label: "Clientes satisfechos" },
  { value: 100, suffix: "%", label: "Presupuesto sin compromiso" },
] as const;
