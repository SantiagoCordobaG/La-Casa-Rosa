import Link from "next/link";
import { Share2, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-pastel py-14">
      <div className="premium-container grid grid-cols-2 gap-8 gap-x-4 sm:gap-x-6 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-x-10 lg:items-start">
        <div className="col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-6 max-w-sm font-body text-sm leading-7 text-muted">Tu spa de uñas boutique en Cali. Elegancia, cuidado y arte en cada detalle para tus manos y pies.</p>
        </div>
        <div>
          <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.24em] text-brand">Links</h3>
          <div className="grid gap-3">
            {navLinks.slice(1).map((link) => (
              <Link key={link.href} href={link.href} className="font-body text-sm text-dark/70 transition hover:text-brand">{link.label}</Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.24em] text-brand">Contacto</h3>
          <div className="grid gap-4 font-body text-sm text-dark/70">
            <span className="flex gap-3"><Phone size={17} className="text-brand" />{siteConfig.phone}</span>
            <span className="flex gap-3"><Mail size={14} className="shrink-0 text-brand" /><span className="min-w-0 break-all leading-6">{siteConfig.email}</span></span>
            <span className="flex gap-3"><MapPin size={25} className="text-brand" />{siteConfig.address}</span>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <h3 className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.24em] text-brand">Social</h3>
          <div className="flex gap-3">
            {siteConfig.socials.map((item) => (
              <a key={item} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-brand/10 bg-brand/5 transition hover:border-brand hover:text-brand text-dark" aria-label={item}>
                <Share2 size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="premium-container mt-12 border-t border-brand/10 pt-6 font-body text-xs text-dark/45">© 2026 La Casa Rosa - Spa de Uñas. Todos los derechos reservados.</div>
    </footer>
  );
}