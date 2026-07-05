-- =====================================================
-- SCHEMA + SEED: Alto Cali Hotel Boutique — Chatbot
-- Ejecuta todo esto en el SQL Editor de Supabase
-- =====================================================

-- Crear tablas
CREATE TABLE IF NOT EXISTS faqs (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  question text NOT NULL,
  answer text NOT NULL,
  keywords text[]
);

CREATE TABLE IF NOT EXISTS rooms (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  price text NOT NULL,
  description text NOT NULL,
  amenities text[]
);

CREATE TABLE IF NOT EXISTS policies (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL
);

CREATE TABLE IF NOT EXISTS contact_info (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  type text NOT NULL,
  value text NOT NULL
);

-- Limpiar datos existentes (para poder ejecutar el seed varias veces)
TRUNCATE faqs, rooms, policies, contact_info RESTART IDENTITY CASCADE;

-- 1. FAQs
INSERT INTO faqs (question, answer, keywords) VALUES
('¿Cuál es el horario de check-in?',
 'El check-in es a partir de las 15:00 hrs. Si llegas antes, podemos guardar tu equipaje mientras disfrutas de nuestras instalaciones.',
 ARRAY['checkin']),

('¿Cuál es el horario de check-out?',
 'El check-out es hasta las 12:00 hrs. Ofrecemos late check-out sujeto a disponibilidad con un costo adicional.',
 ARRAY['checkout']),

('¿El desayuno está incluido?',
 'Sí, todas nuestras tarifas incluyen desayuno tipo buffet o a la carta, servido de 7:00 a 10:30 hrs en nuestro comedor.',
 ARRAY['desayuno']),

('¿Tienen piscina?',
 'Sí, contamos con una piscina boutique al aire libre con horario de 8:00 a 20:00 hrs. Toallas incluidas.',
 ARRAY['piscina']),

('¿Hay WiFi en el hotel?',
 'Sí, ofrecemos WiFi premium de alta velocidad completamente gratuito para todos nuestros huéspedes en todas las áreas del hotel.',
 ARRAY['wifi']),

('¿Tienen parqueadero?',
 'Sí, tenemos parqueadero privado y vigilado disponible para nuestros huéspedes sin costo adicional.',
 ARRAY['parqueadero']),

('¿Tienen gimnasio?',
 'Sí, nuestro gimnasio está abierto las 24 horas con equipos modernos y espacio para tu rutina de ejercicio.',
 ARRAY['gimnasio']),

('¿Cuál es el horario de atención?',
 'Nuestra recepción está abierta 24/7. Siempre habrá alguien del equipo para ayudarte en cualquier momento.',
 ARRAY['horario']),

('¿Cómo puedo hacer una reserva?',
 'Puedes reservar directamente en nuestra página web, llamando al +57 300 000 0000, o escribiéndonos a reservas@altocali.com. Te recomendamos reservar con anticipación para asegurar disponibilidad.',
 ARRAY['reserva']),

('¿Aceptan mascotas?',
 'Lo sentimos, no aceptamos mascotas en el hotel para garantizar la comodidad de todos nuestros huéspedes.',
 ARRAY['mascotas']),

('¿Cuál es la política de cancelación?',
 'Puedes cancelar sin cargo hasta 48 horas antes de tu llegada. Cancelaciones posteriores pueden tener cargos. Para reservas en temporada alta, la política puede variar. Contáctanos para más detalles.',
 ARRAY['cancelacion']),

('¿Cómo puedo contactarlos?',
 'Puedes llamarnos al +57 300 000 0000, enviar un correo a reservas@altocali.com, o visitarnos en Cl 73 # 3-76, Cali. También estamos en Instagram y Facebook como @altocalihotel.',
 ARRAY['contacto']);

-- 2. Habitaciones (desde data/site.ts)
INSERT INTO rooms (name, slug, price, description, amenities) VALUES
('Habitación estándar', 'estandar', 'Desde $290.000 COP',
 'Un refugio elegante para viajes ejecutivos o escapadas cortas, con acabados cálidos y descanso superior.',
 ARRAY['Queen bed', 'Smart TV', 'WiFi premium', 'Baño privado']),

('Superior', 'superior', 'Desde $360.000 COP',
 'Más amplitud, mejor iluminación y detalles boutique pensados para una estadía memorable en Cali.',
 ARRAY['King bed', 'Zona lounge', 'Café de cortesía', 'Vista ciudad']),

('Deluxe', 'deluxe', 'Desde $480.000 COP',
 'Diseño cinematográfico, baño premium y una atmósfera perfecta para desconectar con estilo.',
 ARRAY['King premium', 'Minibar', 'Amenities luxury', 'Workspace']),

('Suite premium', 'suite-premium', 'Desde $690.000 COP',
 'La experiencia más exclusiva del hotel: sala privada, vistas privilegiadas y servicio personalizado.',
 ARRAY['Sala privada', 'Bañera', 'Vista panorámica', 'Concierge']);

-- 3. Políticas
INSERT INTO policies (title, content, category) VALUES
('Check-in', 'Disponible a partir de las 15:00 hrs.', 'horarios'),
('Check-out', 'Hasta las 12:00 hrs. Late check-out sujeto a disponibilidad.', 'horarios'),
('Desayuno', 'Incluido en todas las tarifas. Servicio de 7:00 a 10:30 hrs.', 'horarios'),
('Piscina', 'Abierta de 8:00 a 20:00 hrs.', 'horarios'),
('Cancelación', 'Sin cargo hasta 48 horas antes de la llegada.', 'reservas'),
('Mascotas', 'No aceptamos mascotas.', 'políticas'),
('Pago', 'Aceptamos efectivo, tarjetas de crédito/débito y transferencias.', 'reservas');

-- 4. Contacto (desde data/site.ts)
INSERT INTO contact_info (type, value) VALUES
('Teléfono', '+57 300 000 0000'),
('Email', 'reservas@altocali.com'),
('Dirección', 'Cl 73 # 3-76, Jorge Eliecer Gaitan, Cali, Valle del Cauca'),
('Instagram', '@altocalihotel'),
('Facebook', 'Alto Cali Hotel Boutique');
