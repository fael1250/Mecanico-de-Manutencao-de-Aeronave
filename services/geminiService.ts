import { GoogleGenAI, Type } from '@google/genai';
import { Chapter, QuizQuestion } from '../types';

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
      question: {
        type: Type.STRING,
        description: "A pergunta do quiz."
      },
      options: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
        description: "Um array com 4 opções de resposta."
      },
      correctAnswerIndex: {
        type: Type.INTEGER,
        description: "O índice (0 a 3) da resposta correta no array de opções."
      },
      explanation: {
        type: Type.STRING,
        description: "Uma breve explicação do porquê a resposta está correta, baseada no conteúdo fornecido."
      },
    },
    required: ["question", "options", "correctAnswerIndex", "explanation"],
  },
};

export const generateChapterQuiz = async (
    chapter: Chapter,
    numberOfQuestions: number = 10
): Promise<QuizQuestion[]> => {
    if (!process.env.API_KEY) {
        throw new Error("A chave de API do Gemini não está configurada.");
    }
    const ai = new GoogleGenAI({apiKey: process.env.API_KEY});
    
    const chapterContent = chapterToString(chapter);

    const prompt = `
    Com base no seguinte conteúdo do capítulo "${chapter.title}" de um manual para Mecânico de Manutenção de Aeronaves, gere um quiz com ${numberOfQuestions} questões de múltipla escolha.

    Instruções:
    1. As questões devem avaliar o entendimento do conteúdo fornecido.
    2. Crie exatamente 4 opções de resposta para cada pergunta.
    3. As opções devem ser plausíveis, mas apenas uma pode ser a correta.
    4. Forneça uma breve explicação para a resposta correta, citando a lógica baseada no material.
    5. Retorne a resposta estritamente no formato JSON, seguindo o schema fornecido.

    Conteúdo do Capítulo:
    ---
    ${chapterContent}
    ---
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: quizSchema,
                temperature: 0.7,
            },
        });

        const jsonText = response.text.trim();
        const quizData = JSON.parse(jsonText);

        // Validate the structure
        if (!Array.isArray(quizData)) {
            throw new Error("A resposta da IA não é um array.");
        }

        return quizData.map((item: any): QuizQuestion => {
            if (
                typeof item.question !== 'string' ||
                !Array.isArray(item.options) ||
                item.options.length !== 4 ||
                typeof item.correctAnswerIndex !== 'number' ||
                typeof item.explanation !== 'string'
            ) {
                throw new Error("Um dos itens do quiz retornado pela IA tem formato inválido.");
            }
            return {
                question: item.question,
                options: item.options,
                correctAnswerIndex: item.correctAnswerIndex,
                explanation: item.explanation
            };
        });

    } catch (error) {
        console.error("Erro ao gerar quiz com Gemini:", error);
        throw new Error("Não foi possível gerar as questões. A IA pode estar indisponível ou a resposta foi inválida. Tente novamente.");
    }
};