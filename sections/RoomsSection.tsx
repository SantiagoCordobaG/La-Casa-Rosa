import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, Stagger, StaggerItem } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site";

export function RoomsSection() {
  return (
    <section id="servicios" className="bg-soft py-24 sm:py-32">
      <div className="premium-container">
        <FadeUp>
          <SectionHeading kicker="Nuestros Servicios" title="Cuidado profesional para tus uñas.">
            Cada servicio combina técnicas de vanguardia, productos premium y una atención personalizada para que salgas radiante.
          </SectionHeading>
        </FadeUp>
        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.slug} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-spa">
              <div className="relative h-72 overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-pill bg-brand px-4 py-2 font-body text-xs font-semibold text-white backdrop-blur-xl">{service.price}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-1 flex-col">
                  <h3 className="min-h-[3.5rem] font-display text-3xl text-dark">{service.title}</h3>
                  <p className="mt-3 flex-1 font-body text-sm leading-7 text-muted">{service.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.amenities.map((item) => <span key={item} className="rounded-pill border border-brand/10 bg-brand/5 px-3 py-1 font-body text-xs text-dark/60">{item}</span>)}
                </div>
                <Link href={`/servicios#${service.slug}`} className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand transition group-hover:gap-3">
                  Ver detalles <ArrowUpRight size={16} />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
