"use client";

import { useRef, useCallback } from "react";
import { FadeUp } from "@/components/Motion";
import { SectionHeading } from "@/components/SectionHeading";
import { nailServices } from "@/data/site";

export function ServicesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    startX.current = e.clientX;
    startScroll.current = track.scrollLeft;
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const track = trackRef.current;
    if (!track) return;
    const dx = e.clientX - startX.current;
    track.scrollLeft = startScroll.current - dx;
  }, []);

  const endDrag = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <section id="nail-services" className="relative overflow-hidden bg-pastel py-24 sm:py-32">
      <div className="absolute inset-0 bg-radialBrand opacity-80" />
      <div className="premium-container relative">
        <FadeUp>
          <SectionHeading center kicker="Servicios" title="Todo lo que tus uñas necesitan.">
            Desde una manicura clásica hasta diseños de nail art completamente personalizados. Mantén presionado y arrastra para explorar.
          </SectionHeading>
        </FadeUp>
        <FadeUp delay={0.1} className="mt-14">
          <div
            ref={trackRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="flex cursor-grab select-none gap-5 overflow-x-auto pb-2 active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {nailServices.map(({ title, description, icon: Icon }) => (
              <div key={title} className="w-[78vw] shrink-0 sm:w-[46vw] lg:w-[17.5rem] xl:w-[18.5rem]" draggable={false}>
                <div className="group h-full rounded-3xl border border-brand/10 bg-white/80 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:shadow-spa">
                  <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-dark">{title}</h3>
                  <p className="mt-3 font-body text-sm leading-7 text-muted">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}