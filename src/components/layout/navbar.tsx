"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { cn, formatPhoneHref } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-carbon/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent",
      )}
    >
      <nav className="container-premium flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold tracking-tight text-white">
            REFORMAS <span className="text-orange">MARTÍN</span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/50">
            Barakaldo · Bizkaia
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium text-white/75 transition-colors hover:text-white",
                pathname === link.href && "text-white",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-orange"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={formatPhoneHref(COMPANY.phone)}
            className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            {COMPANY.phoneDisplay}
          </a>
          <Button asChild size="sm">
            <Link href="/contacto">Solicitar presupuesto</Link>
          </Button>
        </div>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center text-white md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="container-premium flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white",
                    pathname === link.href && "text-white",
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href={formatPhoneHref(COMPANY.phone)}
                  className="flex items-center gap-2 px-3 text-sm text-white/80"
                >
                  <Phone className="h-4 w-4" /> {COMPANY.phoneDisplay}
                </a>
                <Button asChild className="mx-3">
                  <Link href="/contacto">Solicitar presupuesto</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
