import { GoogleGenAI, Type } from "@google/genai";
import { Chapter } from "../src/types";

function chapterToString(chapter: Chapter): string {
  let contentString = `Capítulo: ${chapter.title}\n\n`;
  chapter.topics.forEach(topic => {
    contentString += `Tópico: ${topic.title}\n`;
    topic.subTopics.forEach(subTopic => {
      contentString += `Subtópico: ${subTopic.title}\nConteúdo: ${subTopic.content}\n\n`;
    });
  });
  return contentString;
}

const quizSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: { type: Type.STRING },
      options: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
      },
      correctAnswerIndex: { type: Type.INTEGER },
      explanation: { type: Type.STRING },
    },
    required: ["question", "options", "correctAnswerIndex", "explanation"],
  },
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "Método não permitido" }));
  }

  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: "API Key não configurada" }));
  }

  try {
    const buffers: Uint8Array[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(buffers).toString());

    const { chapter, numberOfQuestions = 10 } = body;

    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
    });

    const prompt = `
Com base no seguinte conteúdo do capítulo "${chapter.title}", gere um quiz com ${numberOfQuestions} questões de múltipla escolha.

Conteúdo:
---
${chapterToString(chapter)}
---
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        temperature: 0.7,
      },
    });

    const quiz = JSON.parse(response.text.trim());

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(quiz));

  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: "Erro ao gerar quiz" }));
  }
}
