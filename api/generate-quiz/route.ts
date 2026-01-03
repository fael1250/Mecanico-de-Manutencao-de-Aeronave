import { GoogleGenAI, Type } from "@google/genai";

export async function POST(req: Request) {
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "API Key não configurada" }),
      { status: 500 }
    );
  }

  const { chapter, numberOfQuestions = 10 } = await req.json();

  const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
  });

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "gere o quiz aqui",
  });

  return new Response(JSON.stringify(response.text), { status: 200 });
}
