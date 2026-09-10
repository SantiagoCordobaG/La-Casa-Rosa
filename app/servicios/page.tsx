import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RoomsSection } from "@/sections/RoomsSection";

export const metadata: Metadata = { title: "Servicios" };

export default function ServiciosPage() {
  return (
    <main>
      <PageHero kicker="Servicios" title="Todo lo que tus uñas necesitan." image="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=2200&q=90">
        Desde manicura clásica hasta nail art personalizado, ofrecemos una variedad de servicios para consentirte.
      </PageHero>
      <RoomsSection />
    </main>
  );
}