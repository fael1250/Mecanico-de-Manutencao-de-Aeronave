
import { GoogleGenAI, Type } from "@google/genai";
import { Chapter, QuizQuestion } from "../src/types";
import { Buffer } from "buffer";

// Função OTIMIZADA para criar um "índice" dos tópicos do capítulo.
function getChapterOutline(chapter: Chapter): string {
  let outline = `Capítulo: ${chapter.title}\n\n`;
  chapter.topics.forEach(topic => {
    outline += `Tópico: ${topic.title}\n`;
    topic.subTopics.forEach(subTopic => {
      outline += `  - Subtópico: ${subTopic.title}\n`;
    });
    outline += '\n';
  });
  return outline;
}

// Schema para a saída JSON esperada da API do Gemini
const quizSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: { type: Type.STRING, description: "A pergunta do quiz." },
      options: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "Um array com exatamente 4 opções de resposta (A, B, C, D)."
      },
      correctAnswerIndex: { type: Type.INTEGER, description: "O índice da resposta correta no array 'options' (de 0 a 3)." },
      explanation: { type: Type.STRING, description: "Uma breve explicação sobre o porquê da resposta estar correta, baseada no conteúdo fornecido." },
    },
    required: ["question", "options", "correctAnswerIndex", "explanation"],
  },
};

// Handler da Função Serverless Vercel
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "Método não permitido" }));
  }

  if (!process.env.API_KEY) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ 
        error: "Erro de Configuração do Servidor: A chave de API (API_KEY) não foi encontrada. Por favor, configure-a nas 'Environment Variables' do seu projeto na Vercel.",
        isConfigError: true,
    }));
  }

  try {
    const buffers: Uint8Array[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(buffers).toString());

    const { chapter, numberOfQuestions = 10 } = body;

    const ai = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    });
    
    const chapterOutline = getChapterOutline(chapter);

    const prompt = `
      Você é um especialista em aviação e instrutor para a prova da ANAC de Mecânico de Manutenção de Aeronaves.
      Baseado na sua vasta base de conhecimento sobre aviação e usando o seguinte esboço de tópicos do capítulo "${chapter.title}" como guia, gere um quiz com ${numberOfQuestions} questões de múltipla escolha.
      
      REGRAS IMPORTANTES:
      1. Cada questão deve ter exatamente 4 opções de resposta.
      2. As questões devem ser diretamente relacionadas aos tópicos e subtópicos listados no esboço.
      3. A resposta correta deve ser indicada pelo 'correctAnswerIndex'.
      4. A 'explanation' deve ser concisa e justificar a resposta com base no conhecimento técnico de aviação relacionado ao tópico.
      5. As questões devem ser desafiadoras e relevantes para um teste de certificação.

      Esboço dos Tópicos do Capítulo:
      ---
      ${chapterOutline}
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

    const quiz: QuizQuestion[] = JSON.parse(response.text.trim());
    
    if (!quiz || quiz.length === 0) {
        throw new Error("A API do Gemini retornou uma resposta vazia ou inválida.");
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(quiz));

  } catch (error) {
    console.error("Erro na API do Gemini:", error);
    res.statusCode = 500;
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao gerar o quiz.";
    return res.end(JSON.stringify({ error: `Falha ao se comunicar com a API do Gemini. Detalhes: ${errorMessage}` }));
  }
}