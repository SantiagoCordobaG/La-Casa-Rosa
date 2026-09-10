import { FadeUp } from "@/components/Motion";
import { experiences } from "@/data/site";

export function ExperiencesSection() {
  return (
    <section id="experiencias" className="bg-soft py-24 sm:py-32">
      <div className="relative">
        <FadeUp>
          <div className="overflow-x-auto overflow-y-hidden rounded-none border-y border-brand/10 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:overflow-hidden">
            <div className="flex min-h-[400px] min-w-max md:grid md:h-[520px] md:min-w-0 md:grid-cols-[minmax(320px,30vw)_repeat(4,minmax(0,1fr))]">
              <div className="flex w-[88vw] shrink-0 flex-col justify-between border-r border-brand/10 bg-brand/[0.04] px-6 py-8 sm:w-[72vw] sm:px-8 md:w-auto md:min-w-0 md:px-10 md:py-10">
                <div>
                  <span className="section-kicker">Nail Art</span>
                  <h2 className="mt-5 max-w-sm font-display text-4xl leading-tight text-dark sm:text-5xl">Arte que se lleva en las uñas</h2>
                </div>
                <p className="mt-8 max-w-md font-body text-sm leading-8 text-muted sm:text-base">
                  Diseños únicos, tendencias actuales y creatividad sin límites. Cada set de uñas es una obra de arte hecha a tu medida.
                </p>
              </div>
              {experiences.map((item) => (
                <div key={item.title} className="relative h-[400px] w-[72vw] shrink-0 border-r border-brand/10 last:border-r-0 sm:w-[52vw] md:h-full md:w-auto md:min-w-0">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
