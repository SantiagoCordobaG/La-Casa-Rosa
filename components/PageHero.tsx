import { ReactNode } from "react";
import Image from "next/image";

export function PageHero({ kicker, title, children, image }: { kicker: string; title: string; children: ReactNode; image: string }) {
  return (
    <section className="relative min-h-[58vh] overflow-hidden bg-dark pt-32">
      <Image src={image} alt="" fill priority sizes="100vw" quality={80} className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/55 to-dark" />
      <div className="premium-container relative z-10 flex min-h-[42vh] items-end pb-16">
        <div className="max-w-4xl">
          <div className="section-kicker"><span className="gold-line" />{kicker}</div>
          <h1 className="font-display text-5xl leading-tight text-white sm:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl font-body text-lg leading-8 text-white/80">{children}</p>
        </div>
      </div>
    </section>
  );
}
