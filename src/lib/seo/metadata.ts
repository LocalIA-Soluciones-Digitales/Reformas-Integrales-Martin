import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

const DEFAULT_TITLE = "Reformas Integrales Martín | Reformas en Barakaldo y Bizkaia";
const DEFAULT_DESCRIPTION =
  "Empresa de reformas integrales en Barakaldo con más de 14 años de experiencia. Reforma de cocinas, baños y viviendas en toda Bizkaia. Presupuesto sin compromiso.";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  keywords = [],
}: BuildMetadataOptions = {}): Metadata {
  const fullTitle = title ? `${title} | ${COMPANY.name}` : DEFAULT_TITLE;
  const url = new URL(path, COMPANY.siteUrl).toString();

  return {
    title: fullTitle,
    description,
    keywords: [
      "reformas integrales barakaldo",
      "empresa de reformas barakaldo",
      "reformas bizkaia",
      "reforma de baños barakaldo",
      "reforma de cocinas bizkaia",
      "reformas de viviendas bizkaia",
      ...keywords,
    ],
    authors: [{ name: COMPANY.owner }],
    creator: COMPANY.name,
    publisher: COMPANY.name,
    metadataBase: new URL(COMPANY.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      locale: "es_ES",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const DEFAULT_METADATA = buildMetadata();
