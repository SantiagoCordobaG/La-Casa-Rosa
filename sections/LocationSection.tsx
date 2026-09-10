import { ArrowUpRight, MapPin } from "lucide-react";
import { FadeUp } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

export function LocationSection() {
  return (
    <section id="ubicacion" className="bg-soft py-24 sm:py-32">
      <div className="premium-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <FadeUp>
          <SectionHeading kicker="Ubicación" title="Encuéntranos en Cali.">
            Una ubicación céntrica para que tu visita al spa sea cómoda y fácil de llegar.
          </SectionHeading>
          <div className="mt-8 rounded-3xl border border-brand/10 bg-white p-6 shadow-spa">
            <div className="flex items-start gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white"><MapPin size={22} /></span>
              <div>
                <h3 className="font-display text-2xl text-dark">Dirección del spa</h3>
                <p className="mt-2 font-body text-sm leading-7 text-muted">{siteConfig.address}</p>
                <a href="https://www.google.com/maps/search/?api=1&query=Cl+73+%23+3-76,+Jorge+Eliecer+Gaitan,+Cali,+Valle+del+Cauca" target="_blank" className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-brand" rel="noreferrer">
                  Cómo llegar <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="relative min-h-[520px] overflow-hidden rounded-3xl border border-brand/10 bg-pastel shadow-spa-lg">
            <iframe
              title="Ubicación de La Casa Rosa Spa de Uñas"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.7177781390552!2d-76.50882547153246!3d3.3816546385560646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a11ed4451777%3A0xc25d72fdec60562b!2sCra.%2084%20%2354%2C%20Cali%2C%20Valle%20del%20Cauca!5e0!3m2!1ses-419!2sco!4v1789054847042!5m2!1ses-419!2sco"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
