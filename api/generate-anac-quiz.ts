
import { GoogleGenAI, Type } from "@google/genai";
import { Chapter, QuizQuestion, QuizDifficulty } from "../src/types";
import { basicModuleContent } from "../data/content";
import { Buffer } from "buffer";

// Função otimizada para criar um "índice" de todos os tópicos, em vez do conteúdo completo.
function getTopicOutline(chapters: Chapter[]): string {
  let outline = "";
  chapters.forEach(chapter => {
    outline += `Capítulo: ${chapter.title}\n`;
    chapter.topics.forEach(topic => {
      outline += `  - Tópico: ${topic.title}\n`;
      topic.subTopics.forEach(subTopic => {
        outline += `    * Subtópico: ${subTopic.title}\n`;
      });
    });
    outline += "\n";
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
        error: "Erro de Configuração do Servidor: A chave de API (API_KEY) não foi encontrada.",
        isConfigError: true,
    }));
  }

  try {
    const buffers: Uint8Array[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(buffers).toString());

    const { difficulty, numberOfQuestions = 60 } = body;
    
    if (!difficulty || !numberOfQuestions) {
        res.statusCode = 400;
        return res.end(JSON.stringify({ error: "Dificuldade e número de questões são obrigatórios."}));
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    });

    const topicOutline = getTopicOutline(basicModuleContent);

    const prompt = `
      Você é um examinador especialista da ANAC criando um simulado completo e realista para a prova de Mecânico de Manutenção de Aeronaves, Módulo Básico.
      Baseado na sua vasta base de conhecimento sobre aviação e usando o seguinte esboço de tópicos como guia, gere um simulado com exatamente ${numberOfQuestions} questões de múltipla escolha.
      
      REGRAS IMPORTANTES:
      1. Nível de Dificuldade: As questões devem ter um nível de dificuldade **${difficulty}**.
      2. Distribuição: As questões devem ser distribuídas de forma equilibrada entre os diferentes capítulos e tópicos listados no esboço. Não concentre as perguntas em apenas uma ou duas áreas.
      3. Formato: Cada questão deve ter exatamente 4 opções de resposta (A, B, C, D).
      4. Resposta Correta: A resposta correta deve ser indicada pelo 'correctAnswerIndex' (um número de 0 a 3).
      5. Justificativa: A 'explanation' deve ser concisa, precisa e justificar a resposta correta com base no conhecimento técnico de aviação.
      6. Qualidade ANAC: As perguntas devem ser claras, objetivas e desafiadoras, espelhando o estilo da prova oficial da ANAC.

      Esboço dos Tópicos do Módulo Básico a serem Cobertos:
      ---
      ${topicOutline}
      ---
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        temperature: 0.8,
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
    console.error("Erro na API do Gemini ao gerar simulado ANAC:", error);
    res.statusCode = 500;
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao gerar o simulado.";
    return res.end(JSON.stringify({ error: `Falha ao se comunicar com a API do Gemini. Detalhes: ${errorMessage}` }));
  }
}
