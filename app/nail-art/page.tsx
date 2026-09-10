import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ExperiencesSection } from "@/sections/ExperiencesSection";
import { gallery } from "@/data/site";

export const metadata: Metadata = { title: "Nail Art" };

export default function NailArtPage() {
  return (
    <main>
      <PageHero kicker="Nail Art" title="Arte y creatividad en cada uña." image="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=2200&q=90">
        Diseños personalizados, tendencias actuales y una galería de nuestro trabajo para inspirarte.
      </PageHero>
      <ExperiencesSection />
      <section id="galeria" className="bg-pastel py-24">
        <div className="premium-container columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((image, index) => (
            <img key={image} src={image} alt={`Nail Art La Casa Rosa ${index + 1}`} className="mb-6 w-full break-inside-avoid rounded-3xl border border-brand/10 object-cover shadow-spa" />
          ))}
        </div>
      </section>
    </main>
  );
}