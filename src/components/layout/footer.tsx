import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { formatPhoneHref } from "@/lib/utils";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M14 9h2.5V6H14c-1.9 0-3.5 1.6-3.5 3.5V12H8v3h2.5v6H13v-6h2.3l.7-3H13V9.8c0-.5.2-.8.7-.8Z" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon text-white">
      <div className="container-premium grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <span className="font-display text-xl font-bold tracking-tight">
            REFORMAS <span className="text-orange">MARTÍN</span>
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Reformas integrales de vivienda y locales comerciales en
            Barakaldo y toda Bizkaia. Calidad premium, plazos garantizados.
          </p>
          <div className="mt-2 flex items-center gap-3">
            <a
              href={COMPANY.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors hover:border-orange hover:text-orange"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={COMPANY.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 transition-colors hover:border-orange hover:text-orange"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Navegación
          </h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-orange"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Servicios
          </h3>
          <ul className="flex flex-col gap-3">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicios#${service.slug}`}
                  className="text-sm text-white/70 transition-colors hover:text-orange"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
            Contacto
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-white/70">
            <li>
              <a
                href={formatPhoneHref(COMPANY.phone)}
                className="flex items-center gap-3 transition-colors hover:text-orange"
              >
                <Phone className="h-4 w-4 shrink-0 text-orange" />
                {COMPANY.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 transition-colors hover:text-orange"
              >
                <Mail className="h-4 w-4 shrink-0 text-orange" />
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange" />
              {COMPANY.city}, {COMPANY.region}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-premium flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {COMPANY.name}. Todos los derechos reservados.
          </p>
          <p>{COMPANY.owner} · CIF/NIF a solicitud</p>
        </div>
      </div>
    </footer>
  );
}
