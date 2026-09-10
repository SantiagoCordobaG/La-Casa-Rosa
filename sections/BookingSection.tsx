import { CalendarDays, Users } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import { FadeUp } from "@/components/Motion";

export function BookingSection() {
  const fields = ["Fecha", "Hora", "Servicio", "Nombre"];
  return (
    <section className="bg-pastel py-20">
      <div className="premium-container">
        <FadeUp>
          <div className="glass-panel rounded-3xl p-6 lg:p-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
              {fields.map((field, index) => (
                <label key={field} className="block">
                  <span className="mb-3 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.22em] text-brand">
                    {index < 2 ? <CalendarDays size={15} /> : <Users size={15} />} {field}
                  </span>
                  <div className="rounded-2xl border border-brand/10 bg-white px-4 py-4 font-body text-sm text-dark/50">
                    {field === "Fecha" && "Seleccionar fecha"}
                    {field === "Hora" && "Seleccionar hora"}
                    {field === "Servicio" && "Manicura clásica"}
                    {field === "Nombre" && "Tu nombre"}
                  </div>
                </label>
              ))}
              <ButtonLink href="https://wa.me/573146741901" >Consultar</ButtonLink>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
