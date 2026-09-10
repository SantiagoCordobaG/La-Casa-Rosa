import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/sections/BookingSection";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Reservas" };

export default function ReservasPage() {
  return (
    <main>
      <PageHero kicker="Reservas" title="Agenda tu cita fácilmente." image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=2200&q=90">
        Reserva por WhatsApp o completa el formulario para garantizar tu lugar en La Casa Rosa.
      </PageHero>
      <BookingSection />
      <section className="bg-soft pb-24">
        <div className="premium-container grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.slug} className="rounded-3xl border border-brand/10 bg-white p-5 shadow-spa">
              <img src={service.image} alt={service.title} className="h-48 w-full rounded-2xl object-cover" />
              <h2 className="mt-5 font-display text-3xl text-dark">{service.title}</h2>
              <p className="mt-2 font-body text-sm text-brand">{service.price}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
