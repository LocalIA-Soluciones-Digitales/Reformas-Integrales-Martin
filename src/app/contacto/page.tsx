import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { QuoteCalculator } from "@/components/contact/quote-calculator";
import { Badge } from "@/components/ui/badge";
import { ImagePlaceholder } from "@/components/media/image-placeholder";
import { COMPANY } from "@/lib/constants";
import { formatPhoneHref } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { getBreadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacta con Reformas Integrales Martín en Barakaldo. Solicita tu presupuesto de reforma sin compromiso por teléfono, WhatsApp o formulario.",
  path: "/contacto",
  keywords: ["contacto reformas barakaldo", "presupuesto reforma bizkaia"],
});

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Teléfono",
    value: COMPANY.phoneDisplay,
    href: formatPhoneHref(COMPANY.phone),
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: `${COMPANY.city}, ${COMPANY.region}`,
    href: "https://maps.google.com/?q=Barakaldo,Bizkaia",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes a viernes, 8:00 - 19:00",
    href: undefined,
  },
];

export default function ContactoPage() {
  return (
    <div className="bg-white">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />

      <section className="relative z-0 overflow-hidden bg-carbon pb-20 pt-40 text-white">
        <ImagePlaceholder
          placeholder="facade"
          className="absolute inset-0 -z-10 h-full w-full"
          showLabel={false}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-carbon/85 via-carbon/80 to-carbon" />
        <div className="container-premium relative text-center">
          <Badge variant="orange">Hablemos de tu proyecto</Badge>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Solicita tu presupuesto sin compromiso
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/65">
            Cuéntanos qué necesitas y te responderemos en menos de 24 horas
            laborables con los siguientes pasos.
          </p>
        </div>
      </section>

      <section className="container-premium -mt-12 grid gap-4 pb-4 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_CARDS.map((card) => {
          const Content = (
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-white p-6 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.25)] transition-transform hover:-translate-y-1">
              <card.icon className="h-5 w-5 text-orange" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-stone">
                  {card.label}
                </p>
                <p className="mt-1 break-words font-medium text-carbon">
                  {card.value}
                </p>
              </div>
            </div>
          );
          return card.href ? (
            <a key={card.label} href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {Content}
            </a>
          ) : (
            <div key={card.label}>{Content}</div>
          );
        })}
      </section>

      <section className="container-premium grid gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h2 className="mb-6 font-display text-2xl font-semibold text-carbon">
            Formulario de contacto
          </h2>
          <ContactForm />
        </div>
        <div>
          <h2 className="mb-6 font-display text-2xl font-semibold text-carbon">
            Calcula tu presupuesto
          </h2>
          <QuoteCalculator />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="aspect-[21/9] w-full">
          <iframe
            title="Ubicación en Barakaldo, Bizkaia"
            src="https://www.google.com/maps?q=Barakaldo,Bizkaia&output=embed"
            className="h-full w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
