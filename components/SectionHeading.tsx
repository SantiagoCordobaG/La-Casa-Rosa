import { ReactNode } from "react";

export function SectionHeading({ kicker, title, children, center = false }: { kicker: string; title: string; children?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-center md:text-left"}>
      <div className={`section-kicker ${center ? "justify-center" : "justify-center md:justify-start"}`}><span className="gold-line" />{kicker}<span className="gold-line" /></div>
      <h2 className="section-title font-display">{title}</h2>
      {children && <p className="section-copy mt-6 font-body">{children}</p>}
    </div>
  );
}
