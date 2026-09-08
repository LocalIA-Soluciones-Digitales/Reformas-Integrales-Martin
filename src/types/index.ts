export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  features: string[];
  image: ImagePlaceholderKey;
}

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  durationWeeks: number;
  area: string;
  description: string;
  beforeImage: ImagePlaceholderKey;
  afterImage: ImagePlaceholderKey;
  gallery: ImagePlaceholderKey[];
  tags: string[];
}

export type ProjectCategory =
  | "integral"
  | "cocina"
  | "bano"
  | "salon"
  | "local"
  | "fachada";

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  projectType: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export type ImagePlaceholderKey =
  | "hero-cinematic"
  | "kitchen-premium"
  | "bathroom-premium"
  | "full-home"
  | "living-room"
  | "bedroom"
  | "commercial-space"
  | "team-working"
  | "before-after"
  | "before-after-dated"
  | "before-after-renovated"
  | "facade";

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  location?: string;
  source?: string;
}

export interface QuoteRequestPayload {
  serviceType: string;
  propertyType: "piso" | "casa" | "local";
  squareMeters: number;
  scope: "basico" | "medio" | "integral";
  name: string;
  email: string;
  phone: string;
}
