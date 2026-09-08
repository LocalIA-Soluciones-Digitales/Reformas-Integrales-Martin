"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { formatWhatsappHref } from "@/lib/utils";

export function WhatsappButton() {
  return (
    <motion.a
      href={formatWhatsappHref(
        COMPANY.phone,
        "Hola, me gustaría solicitar información sobre una reforma.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-22 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] md:bottom-8 md:right-8 md:h-15 md:w-15"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/50" />
      <MessageCircle className="relative z-10 h-7 w-7" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
