
import { GoogleGenAI, Type } from "@google/genai";
import { Chapter, QuizQuestion } from "../src/types";
// FIX: Import Buffer to resolve TypeScript error in environments where Node.js globals are not automatically typed.
import { Buffer } from "buffer";

// Função para converter o conteúdo do capítulo em uma string para o prompt
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

  // Verifica a chave de API nas variáveis de ambiente do servidor
  if (!process.env.API_KEY) {
    res.statusCode = 500;
    // Retorna uma mensagem de erro detalhada para facilitar o debug
    return res.end(JSON.stringify({ 
        error: "Erro de Configuração do Servidor: A chave de API (API_KEY) não foi encontrada. Por favor, configure-a nas 'Environment Variables' do seu projeto na Vercel.",
        isConfigError: true,
    }));
  }

  try {
    // Lê o corpo da requisição
    const buffers: Uint8Array[] = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(buffers).toString());

    const { chapter, numberOfQuestions = 10 } = body;

    // Inicializa o cliente do Google GenAI
    const ai = new GoogleGenAI({
      apiKey: process.env.API_KEY,
    });

    // Cria o prompt para a IA
    const prompt = `
      Você é um especialista em aviação e instrutor para a prova da ANAC de Mecânico de Manutenção de Aeronaves.
      Com base EXCLUSivamente no conteúdo do capítulo "${chapter.title}" fornecido abaixo, gere um quiz com ${numberOfQuestions} questões de múltipla escolha.
      
      REGRAS IMPORTANTES:
      1. Cada questão deve ter exatamente 4 opções de resposta.
      2. A resposta correta deve ser indicada pelo 'correctAnswerIndex'.
      3. A 'explanation' deve ser concisa e justificar a resposta usando o conteúdo fornecido.
      4. As questões devem ser desafiadoras e relevantes para um teste de certificação.

      Conteúdo do Capítulo:
      ---
      ${chapterToString(chapter)}
      ---
    `;

    // Chama a API do Gemini
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: quizSchema,
        temperature: 0.7,
      },
    });

    // Parseia a resposta
    const quiz: QuizQuestion[] = JSON.parse(response.text.trim());
    
    if (!quiz || quiz.length === 0) {
        throw new Error("A API do Gemini retornou uma resposta vazia ou inválida.");
    }

    // Envia a resposta de sucesso
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
