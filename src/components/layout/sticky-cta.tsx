"use client";

import Link from "next/link";
import { Phone, ClipboardList } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { formatPhoneHref } from "@/lib/utils";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-carbon/95 backdrop-blur-xl md:hidden">
      <a
        href={formatPhoneHref(COMPANY.phone)}
        className="flex flex-1 items-center justify-center gap-2 border-r border-white/10 py-4 text-sm font-semibold text-white"
      >
        <Phone className="h-4 w-4 text-orange" />
        Llamar
      </a>
      <Link
        href="/contacto"
        className="flex flex-1 items-center justify-center gap-2 bg-orange py-4 text-sm font-semibold text-white"
      >
        <ClipboardList className="h-4 w-4" />
        Presupuesto
      </Link>
    </div>
  );
}
