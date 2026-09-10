"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin, Star } from "lucide-react";
import { ButtonLink } from "@/components/Button";

const heroImg = "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1920&q=80";

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = bgRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          el.style.transform = `translateY(${Math.min(window.scrollY * 0.2, 140)}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark pt-20">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image src={heroImg} alt="" fill priority sizes="100vw" quality={80} className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/55 to-dark" />
      <div className="absolute inset-0 bg-radialBrand" />

      <div className="premium-container relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20">
        <div className="w-full max-w-[22rem] sm:max-w-4xl">
          <div className="hero-delay-0 mb-7 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-pill border border-white/20 bg-white/15 px-4 py-2 backdrop-blur-xl sm:flex-nowrap">
            <Star size={16} className="fill-white text-white" />
            <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/90 sm:text-xs sm:tracking-[0.28em]">Spa de uñas boutique · Cali</span>
          </div>
          <h1 className="hero-delay-1 max-w-[10ch] font-display text-5xl font-semibold leading-[0.94] text-white sm:max-w-none sm:text-7xl sm:leading-[0.92] lg:text-8xl">
            Belleza, arte y cuidado en cada uña.
          </h1>
          <p className="hero-delay-2 mt-7 max-w-[32rem] font-body text-base leading-7 text-white/85 sm:text-xl sm:leading-8">
            Tu spa de uñas favorito en Cali. Manicura, pedicura, soft gel, uñas acrílicas y nail art con la atención y elegancia que mereces.
          </p>
          <div className="hero-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/reservas">Reservar cita</ButtonLink>
          </div>
        </div>
      </div>

      <div className="hero-bounce absolute bottom-8 left-1/2 z-10 flex items-center gap-4 font-body text-xs uppercase tracking-[0.28em] text-white/60">
        Scroll <ArrowDown size={16} />
      </div>
      <div className="absolute bottom-8 left-8 z-10 hidden items-center gap-2 font-body text-sm text-white/75 lg:flex"><MapPin size={16} className="text-white" />Cali, Colombia</div>
    </section>
  );
}
