"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { Logo } from "@/components/Logo";
import { ButtonLink } from "@/components/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-brand/10 bg-white/25 backdrop-blur-xl">
      <nav className="premium-container flex h-20 items-center justify-between">
        <Logo light />
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="font-body text-sm text-white transition hover:text-brand">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden lg:block">
          <ButtonLink href="/reservas">Reservar cita</ButtonLink>
        </div>
        <button
          aria-label="Abrir menú"
          className="grid h-11 w-11 place-items-center rounded-full border border-brand bg-brand text-white shadow-spa lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        className={`overflow-hidden border-t border-brand/10 bg-white/60 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-t-0"
        }`}
      >
        <div className="grid gap-4 px-5 py-5">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-body rounded-2xl px-4 py-3 text-dark/80 hover:bg-brand/5">
              {link.label}
            </Link>
          ))}
          <ButtonLink href="/reservas">Reservar cita</ButtonLink>
        </div>
      </div>
    </header>
  );
}
