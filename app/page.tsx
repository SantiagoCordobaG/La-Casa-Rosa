import dynamic from "next/dynamic";
import { Hero } from "@/sections/Hero";
import { RoomsSection } from "@/sections/RoomsSection";

const BookingSection = dynamic(() => import("@/sections/BookingSection").then((m) => ({ default: m.BookingSection })));
const LocationSection = dynamic(() => import("@/sections/LocationSection").then((m) => ({ default: m.LocationSection })));
const ExperiencesSection = dynamic(() => import("@/sections/ExperiencesSection").then((m) => ({ default: m.ExperiencesSection })));

export default function HomePage() {
  return (
    <main>
      <Hero />
      <RoomsSection />
      <BookingSection />
      <LocationSection />
      <ExperiencesSection />
    </main>
  );
}
