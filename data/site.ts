import { Clock, Droplets, Gem, Heart, Palette, Paintbrush, Scissors, Sparkles, Star, Wand2, Flower2, CircleDot } from "lucide-react";

export const siteConfig = {
  name: "La Casa Rosa - Spa de Uñas",
  description: "Spa de uñas boutique en Cali. Manicura, pedicura, soft gel, uñas acrílicas y nail art con estilo y elegancia.",
  url: "https://lacasarosa-spa.vercel.app",
  address: "Cra. 84 #54, Cali, Valle del Cauca",
  phone: "+57 314 674 1901",
  email: "lacasarosa@gmail.com",
  socials: ["Instagram", "Facebook", "TikTok"]
};

export const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nail Art", href: "/nail-art" },
  { label: "Ubicación", href: "/ubicacion" }
];

export const services = [
  {
    title: "Manicura Clásica",
    slug: "manicura-clasica",
    price: "Desde $35.000 COP",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
    description: "Un tratamiento completo que incluye limado, cutícula, masaje hidratante y esmalte de tu elección.",
    amenities: ["Limado", "Cutícula", "Hidratación", "Esmalte"]
  },
  {
    title: "Pedicura Spa",
    slug: "pedicura-spa",
    price: "Desde $45.000 COP",
    image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1200&q=85",
    description: "Relaja tus pies con exfoliación, mascarilla hidratante, masaje y acabado impecable.",
    amenities: ["Exfoliación", "Mascarilla", "Masaje", "Esmalte"]
  },
  {
    title: "Soft Gel",
    slug: "soft-gel",
    price: "Desde $65.000 COP",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1200&q=85",
    description: "Uñas naturales con acabado en gel semipermanente. Brillo duradero por más de 3 semanas.",
    amenities: ["Semipermanente", "3+ semanas", "Brillo extra", "Sin daño"]
  },
  {
    title: "Uñas Acrílicas",
    slug: "acrilicas",
    price: "Desde $80.000 COP",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=85",
    description: "Diseño personalizado con acrílico de alta resistencia. Largo, forma y estilo a tu medida.",
    amenities: ["Personalizado", "Alta resistencia", "Forma libre", "Relleno"]
  }
];

export const nailServices = [
  { title: "Manicura", description: "Cuidado completo para tus manos con acabados impecables.", icon: Sparkles },
  { title: "Pedicura", description: "Relajación y belleza para tus pies con tratamientos premium.", icon: Flower2 },
  { title: "Soft Gel", description: "Uñas semipermanentes con brillo duradero y natural.", icon: Droplets },
  { title: "Acrílicas", description: "Diseños personalizados con la máxima resistencia.", icon: Gem },
  { title: "Nail Art", description: "Arte y creatividad en cada uña con detalles únicos.", icon: Palette },
  { title: "Esmaltado", description: "Esmalte tradicional o semipermanente en tonos temporada.", icon: Paintbrush },
  { title: "Relleno", description: "Mantenimiento para mantener tus uñas siempre perfectas.", icon: CircleDot },
  { title: "Retiro", description: "Retiro seguro y profesional de gel o acrílico sin daño.", icon: Scissors }
];

export const experiences = [
  {
    title: "Nail Art Floral",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85",
    description: "Diseños florales delicados que aportan elegancia a cada dedo."
  },
  {
    title: "French Moderno",
    image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1200&q=85",
    description: "La clásica francesa reinventada con líneas modernas y toques de color."
  },
  {
    title: "Geometría & Líneas",
    image: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=85",
    description: "Formas geométricas minimalistas para un look contemporáneo y sofisticado."
  },
  {
    title: "Glitter & Brillo",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
    description: "Destellos y brillos para ocasiones especiales y momentos únicos."
  }
];

export const gallery = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1457972729786-0411a3b2b626?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85"
];

export const highlights = [
  { label: "Servicios", value: "12+" },
  { label: "Clientes felices", value: "2K+" },
  { label: "Rating", value: "4.9" },
  { label: "Años", value: "5+" }
];
