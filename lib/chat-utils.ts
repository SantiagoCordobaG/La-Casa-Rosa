const FAQ_KEYWORDS: Record<string, string[]> = {
  checkin: ["check-in", "checkin", "check in", "llegada", "entrada", "hora de llegada", "ingreso", "registro"],
  checkout: ["check-out", "checkout", "check out", "salida", "hora de salida"],
  desayuno: ["desayuno", "desayunar", "desayuna", "comer", "almuerzo", "cena", "restaurante", "comida"],
  piscina: ["piscina", "nadar", "pileta", "alberca"],
  wifi: ["wifi", "internet", "conexion", "conectividad"],
  parqueadero: ["parqueadero", "parqueo", "estacionamiento", "carro", "estacionar", "parking"],
  gimnasio: ["gimnasio", "ejercicio", "entrenar", "gym"],
  horario: ["horario", "hora", "atienden", "abren", "cierran"],
  reserva: ["reserva", "reservar", "booking", "habitacion disponible", "disponibilidad", "precio", "costo", "tarifa", "cuanto cuesta"],
  contacto: ["contacto", "telefono", "celular", "whatsapp", "correo", "email", "direccion", "ubicacion", "donde queda", "mapa"],
  mascotas: ["mascota", "mascotas", "perro", "gato", "animal", "pet", "pets"],
  cancelacion: ["cancelar", "cancelacion", "cancelación", "cancel policy", "politica de cancelacion", "reembolso", "devolucion"],
};

export function detectIntent(message: string): string[] {
  const lower = message.toLowerCase();
  const intents: string[] = [];

  for (const [intent, keywords] of Object.entries(FAQ_KEYWORDS)) {
    if (keywords.some((kw) => lower.includes(kw))) {
      intents.push(intent);
    }
  }

  return intents;
}

export function buildSystemPrompt(): string {
  return (
    "Eres un asistente virtual del hotel 'Alto Cali Hotel Boutique' en Cali, Colombia. " +
    "Responde ÚNICAMENTE sobre: reservas, habitaciones, horarios, servicios del hotel, políticas, " +
    "información de contacto y ubicación. " +
    "Sé breve, amable y directo. Siempre responde en español. " +
    "Si no sabes la respuesta o no está relacionado con el hotel, " +
    "di amablemente que solo puedes ayudar con información del hotel."
  );
}

export function buildContextMessage(supabaseContext: string, userMessage: string): string {
  if (!supabaseContext) return userMessage;
  return (
    `Contexto del hotel:\n${supabaseContext}\n\n` +
    `Pregunta del usuario: ${userMessage}\n\n` +
    `Responde basándote en el contexto anterior. Si la información no está en el contexto, ` +
    `indica amablemente que no tienes esa información disponible.`
  );
}
