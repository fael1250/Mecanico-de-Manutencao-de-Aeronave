
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
  console.log("--- Início da Função generate-quiz (por capítulo) ---");

  if (req.method !== "POST") {
    console.error("Método não permitido:", req.method);
    res.statusCode = 405;
    return res.end(JSON.stringify({ error: "Método não permitido" }));
  }

  if (!process.env.API_KEY) {
    console.error("Chave de API não configurada no servidor.");
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
    console.log(`Recebido pedido para ${numberOfQuestions} questões do capítulo: "${chapter.title}"`);

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
    
    console.log("Enviando requisição para a API do Gemini...");
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        temperature: 0.7,
      },
    });
    console.log("Resposta recebida da API do Gemini.");

    const quiz: QuizQuestion[] = JSON.parse(response.text.trim());
    console.log(`Sucesso! ${quiz.length} questões foram geradas e parseadas.`);
    
    if (!quiz || quiz.length === 0) {
        console.warn("A API do Gemini retornou um array vazio ou inválido.");
        throw new Error("A API do Gemini retornou uma resposta vazia ou inválida.");
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    console.log("--- Fim da Função generate-quiz (Sucesso) ---");
    return res.end(JSON.stringify(quiz));

  } catch (error) {
    console.error("--- ERRO na Função generate-quiz ---");
    console.error("Objeto de erro completo:", error); // Log do objeto de erro completo
    res.statusCode = 500;
    const errorMessage = error instanceof Error ? error.message : "Erro desconhecido ao gerar o quiz.";
    return res.end(JSON.stringify({ error: `Falha ao se comunicar com a API do Gemini. Detalhes: ${errorMessage}` }));
  }
}