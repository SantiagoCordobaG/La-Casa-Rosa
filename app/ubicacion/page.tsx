import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { LocationSection } from "@/sections/LocationSection";

export const metadata: Metadata = { title: "Ubicación" };

export default function UbicacionPage() {
  return (
    <main>
      <PageHero kicker="Ubicación" title="Encuéntranos en Cali." image="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=2200&q=90">
        Un espacio céntrico, acogedor y fácil de llegar para tu cita de spa.
      </PageHero>
      <LocationSection />
    </main>
  );
}
