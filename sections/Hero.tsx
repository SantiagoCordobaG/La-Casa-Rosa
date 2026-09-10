"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Star } from "lucide-react";
import { ButtonLink } from "@/components/Button";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 140]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark pt-20">
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/55 to-dark" />
      <div className="absolute inset-0 bg-radialBrand" />

      <div className="premium-container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="w-full max-w-[22rem] sm:max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-7 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-pill border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-xl sm:flex-nowrap">
            <Star size={16} className="fill-white text-white" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs sm:tracking-[0.28em]">Spa de uñas boutique · Cali</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.95, delay: 0.1 }} className="max-w-[10ch] font-display text-5xl font-semibold leading-[0.94] text-white sm:max-w-none sm:text-7xl sm:leading-[0.92] lg:text-8xl">
            Belleza, arte y cuidado en cada uña.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.25 }} className="mt-7 max-w-[32rem] font-body text-base leading-7 text-white/85 sm:text-xl sm:leading-8">
            Tu spa de uñas favorito en Cali. Manicura, pedicura, soft gel, uñas acrílicas y nail art con la atención y elegancia que mereces.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.38 }} className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/reservas">Reservar cita</ButtonLink>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 font-body text-xs uppercase tracking-[0.28em] text-white/60"
      >
        Scroll <ArrowDown size={16} />
      </motion.div>
      <div className="absolute bottom-8 left-8 z-10 hidden items-center gap-2 font-body text-sm text-white/75 lg:flex"><MapPin size={16} className="text-white" />Cali, Colombia</div>
    </section>
  );
}
