"use client";

import Image from "next/image";
import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group inline-flex items-center gap-3" aria-label="La Casa Rosa - Spa de Uñas">
      <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-brand/40 bg-white shadow-glow transition group-hover:border-brand">
        <Image src="/logo-casa-rosa.jpg" alt="La Casa Rosa" width={44} height={44} className="h-full w-full object-cover" />
      </span>
      <span className="hidden leading-none sm:block">
        <span className={`block font-display text-lg tracking-wide ${light ? "text-white" : "text-dark"}`}>La Casa Rosa</span>
        <span className={`block font-body text-[10px] uppercase tracking-[0.34em] ${light ? "text-white/60" : "text-muted"}`}>Spa de Uñas</span>
      </span>
    </Link>
  );
}