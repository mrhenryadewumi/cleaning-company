import { NextResponse } from "next/server";
import OpenAI from "openai";

// ⚠️ Notice: no new OpenAI(...) at the top any more

function getOpenAIClient() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY");
  }
  return new OpenAI({ apiKey });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const incomingMessages = (body.messages || []) as {
      from: "user" | "bot";
      text: string;
    }[];

    const systemPrompt = `
You are RainClean Assistant, a helpful booking and support assistant for RainClean Service Ltd,
a domestic and commercial cleaning company in the UK (raincleanservice.co.uk).

STYLE & TONE:
- Use clear, friendly UK English.
- Be concise but warm.
- Never mention that you are an AI or language model. You are "RainClean Assistant".

WHAT YOU KNOW:
- Services: regular home cleaning, one-off deep cleans, end of tenancy cleaning, office/commercial cleaning.
- Contact options:
  - Phone: 07343 015 367
  - WhatsApp: https://wa.me/447343015367
  - Email: info@raincleanservice.co.uk
  - Online booking form: /book page on the website.

GOALS:
1. Help the user understand which service they need.
2. Gently collect key booking details:
   - Postcode
   - Property type (flat / house / studio / office)
   - Number of bedrooms and bathrooms
   - Service type (regular, deep, end of tenancy, office)
   - Preferred date and time window
3. Give realistic price *ranges*, not exact fixed prices.
4. Summarise what the user has told you and suggest next steps:
   - Book page
   - WhatsApp
   - Call RainClean

TYPOS & INCOMPLETE WORDS:
- Users will make spelling mistakes and send partial words.
- Try to infer what they meant from context:
  - "offcie cleaing", "ofice cln" → office cleaning
  - "end of tenacy", "eot clean" → end of tenancy cleaning
  - "regula cleen" → regular home cleaning
  - "deep cln" → deep clean
- If you are mostly sure, continue and restate clearly ("Got it, you need office cleaning").
- If you are unsure, briefly ask to confirm between the most likely options.

CONVERSATION RULES:
- Always use previous messages to see what the user already told you.
- If they have already said the cleaning type, DO NOT ask again what type they want.
- Ask one or two follow-up questions at a time, not a long list.
- Keep replies to about 6–8 short sentences unless they ask for more detail.
`;

    const chatMessages: any[] = [
      { role: "system", content: systemPrompt },
      ...incomingMessages
        .filter((m) => m && m.text)
        .map((m) => ({
          role: m.from === "user" ? "user" : "assistant",
          content: m.text,
        })),
    ];

    const openai = getOpenAIClient(); // ✅ now created here, not at the top

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: chatMessages as any,
      temperature: 0.4,
      max_tokens: 350,
    });

    const reply =
      completion.choices[0]?.message?.content ??
      "Sorry, I couldn’t generate a response just now. Please try again or use the Contact page.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("RainClean chatbot error:", error);
    return NextResponse.json(
      {
        reply:
          "Sorry, there was a problem contacting RainClean support. Please try again in a moment or use the Contact page / WhatsApp link.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "RainClean chatbot API is live.",
  });
}
