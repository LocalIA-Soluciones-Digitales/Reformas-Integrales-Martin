import { COMPANY } from "@/lib/constants";
import type { FaqItem, Testimonial } from "@/types";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${COMPANY.siteUrl}/#organization`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    founder: {
      "@type": "Person",
      name: COMPANY.owner,
    },
    image: `${COMPANY.siteUrl}/og-image.jpg`,
    url: COMPANY.siteUrl,
    telephone: COMPANY.phone.replace(/\s+/g, ""),
    email: COMPANY.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: COMPANY.addressLocality,
      addressRegion: COMPANY.addressRegion,
      postalCode: COMPANY.postalCode,
      addressCountry: "ES",
    },
    areaServed: COMPANY.serviceArea.map((area) => ({
      "@type": "City",
      name: area,
    })),
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.2975,
      longitude: -2.9899,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
    sameAs: [COMPANY.social.instagram, COMPANY.social.facebook],
  };
}

export function getFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getReviewSchema(testimonials: Testimonial[]) {
  const ratingValue =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${COMPANY.siteUrl}/#organization`,
    name: COMPANY.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(1),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.text,
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${COMPANY.siteUrl}${item.path}`,
    })),
  };
}
