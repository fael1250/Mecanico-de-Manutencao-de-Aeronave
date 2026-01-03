import { GoogleGenAI, Type } from "@google/genai";
import { Chapter } from "../src/types"; // ajuste o caminho se necessário

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
    return res.status(405).json({ error: "Método não permitido" });
  }

  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return res.status(500).json({ error: "API Key não configurada" });
  }

  try {
    const { chapter, numberOfQuestions = 10 } = req.body;

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
    return res.status(200).json(quiz);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao gerar quiz" });
  }
}
