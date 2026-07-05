import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { deepseek } from "@/lib/deepseek";
import { buildSystemPrompt, buildContextMessage, detectIntent } from "@/lib/chat-utils";
import { siteConfig } from "@/data/site";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Mensaje inválido" }, { status: 400 });
    }

    const intents = detectIntent(message);

    if (supabase) {
      const { data: faqs } = await supabase
        .from("faqs")
        .select("question, answer, keywords")
        .overlaps("keywords", intents);

      if (faqs && faqs.length > 0) {
        return NextResponse.json({ reply: faqs[0].answer, source: "faq" });
      }
    }

    if (!deepseek) {
      return NextResponse.json(
        {
          reply:
            "Hola de Alto Cali Hotel Boutique! Estamos afinando nuestro asistente virtual. " +
            `Mientras tanto, escríbenos a ${siteConfig.email} o llámanos al ${siteConfig.phone} ` +
            "y te atenderemos con gusto.",
        },
        { status: 200 }
      );
    }

    let context = "";

    if (supabase) {
      const [roomsData, policiesData, contactData] = await Promise.all([
        supabase.from("rooms").select("name, price, description, amenities"),
        supabase.from("policies").select("title, content"),
        supabase.from("contact_info").select("type, value"),
      ]);

      const contextParts: string[] = [];

      if (roomsData.data?.length) {
        const roomsText = roomsData.data
          .map((r) => `${r.name}: ${r.description}. Precio: ${r.price}. Servicios: ${r.amenities?.join(", ")}`)
          .join("\n");
        contextParts.push("HABITACIONES:\n" + roomsText);
      }

      if (policiesData.data?.length) {
        const policiesText = policiesData.data
          .map((p) => `${p.title}: ${p.content}`)
          .join("\n");
        contextParts.push("POLÍTICAS:\n" + policiesText);
      }

      if (contactData.data?.length) {
        const contactText = contactData.data
          .map((c) => `${c.type}: ${c.value}`)
          .join("\n");
        contextParts.push("CONTACTO:\n" + contactText);
      }

      context = contextParts.join("\n\n");
    }

    const completion = await deepseek.chat.completions.create({
      model: "deepseek-chat",
      messages: [
        { role: "system", content: buildSystemPrompt() },
        { role: "user", content: buildContextMessage(context, message) },
      ],
      max_tokens: 300,
      temperature: 0.3,
    });

    const reply = completion.choices[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        { reply: "Lo siento, no pude procesar tu mensaje. Intenta de nuevo." },
        { status: 200 }
      );
    }

    return NextResponse.json({ reply, source: "ai" });
  } catch (error) {
    console.error("Chat error:", error);
    return NextResponse.json(
      { reply: "Ocurrió un error. Por favor intenta más tarde." },
      { status: 200 }
    );
  }
}
