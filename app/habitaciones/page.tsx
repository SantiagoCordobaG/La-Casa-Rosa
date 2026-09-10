import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/site";

export const metadata: Metadata = { title: "Servicios" };

export default function HabitacionesPage() {
  return (
    <main>
      <PageHero kicker="Servicios" title="Cuidado profesional para tus uñas." image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2200&q=90">
        Tratamientos personalizados con técnicas de vanguardia y productos de primera calidad.
      </PageHero>
      <section className="bg-soft py-24">
        <div className="premium-container grid gap-8">
          {services.map((service, index) => (
            <article id={service.slug} key={service.slug} className="grid overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-spa lg:grid-cols-2">
              <img src={service.image} alt={service.title} className={`h-full min-h-[380px] w-full object-cover ${index % 2 ? "lg:order-2" : ""}`} />
              <div className="p-8 lg:p-12">
                <span className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-brand">{service.price}</span>
                <h2 className="mt-5 font-display text-5xl text-dark">{service.title}</h2>
                <p className="mt-5 font-body text-lg leading-8 text-muted">{service.description}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {service.amenities.map((item) => <div key={item} className="rounded-2xl border border-brand/10 bg-pastel/50 px-4 py-3 font-body text-sm text-dark/70">{item}</div>)}
                </div>
                <a href="https://wa.me/573146741901" target="_blank" className="mt-8 inline-flex rounded-pill bg-brand px-6 py-3 font-body text-sm font-semibold text-white transition hover:bg-accent shadow-spa hover:shadow-spa-lg" rel="noreferrer">Reservar este servicio</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
