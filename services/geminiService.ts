import { GoogleGenAI, Type } from "@google/genai";
import { Chapter, QuizDifficulty, QuizQuestion } from '../types';

// Fix: Adhering to guideline to use process.env.API_KEY for the API key. This also resolves the TypeScript error on import.meta.env.
const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    // Fix: Updated error message to reflect the new environment variable name.
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const quizQuestionSchema = {
    type: Type.OBJECT,
    properties: {
        question: { type: Type.STRING, description: "A pergunta a ser feita." },
        options: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Uma lista de 4 opções de resposta."
        },
        correctAnswerIndex: { type: Type.INTEGER, description: "O índice (0-3) da resposta correta na lista de opções." },
        explanation: { type: Type.STRING, description: "Uma breve explicação de por que a resposta está correta. Este campo é opcional." }
    },
    required: ["question", "options", "correctAnswerIndex"],
};

const quizSchema = (numberOfQuestions: number) => ({
    type: Type.OBJECT,
    properties: {
        questions: {
            type: Type.ARRAY,
            items: quizQuestionSchema,
            description: `Uma lista de ${numberOfQuestions} questões de múltipla escolha.`
        }
    },
    required: ["questions"]
});

export const generateQuiz = async (
    content: Chapter[], 
    difficulty: QuizDifficulty,
    numberOfQuestions: number = 60,
    requestExplanation: boolean = true
): Promise<QuizQuestion[]> => {
    // Fix: Using a more powerful model for a complex task like quiz generation, as per guidelines.
    const model = 'gemini-3-pro-preview';

    const textContent = content.map(chapter => 
        `Capítulo ${chapter.title}:\n` +
        chapter.topics.map(topic => 
            `Tópico ${topic.title}:\n` +
            topic.subTopics.map(sub => `Subtópico ${sub.title}: ${sub.content}`).join('\n')
        ).join('\n\n')
    ).join('\n\n---\n\n');

    const explanationRule = requestExplanation 
        ? "6. Forneça uma breve explicação para a resposta correta, em um tom conversacional e direto, sem iniciar com frases como \"O texto define...\". Explique o conceito de forma clara e concisa."
        : "6. Não inclua uma explicação para a resposta.";

    const prompt = `Baseado estritamente no seguinte texto sobre física para mecânicos de aeronaves, gere um quiz de ${numberOfQuestions} questões de múltipla escolha.
    
    Nível de Dificuldade: ${difficulty}.
    
    Regras:
    1. Crie exatamente ${numberOfQuestions} questões.
    2. Cada questão deve ter 4 opções de resposta (a, b, c, d).
    3. Indique claramente qual opção é a correta.
    4. As perguntas devem ser relevantes para um mecânico de manutenção de aeronaves.
    5. Não invente informações que não estejam no texto fornecido.
    ${explanationRule}

    Texto de referência:
    ${textContent}
    `;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: quizSchema(numberOfQuestions),
                temperature: difficulty === QuizDifficulty.Facil ? 0.4 : (difficulty === QuizDifficulty.Medio ? 0.7 : 1.0),
            }
        });
        
        const jsonText = response.text.trim();
        const parsedResponse = JSON.parse(jsonText);

        if (parsedResponse && parsedResponse.questions) {
            return parsedResponse.questions;
        } else {
            console.error("Resposta da API não contém 'questions'");
            return [];
        }

    } catch (error) {
        console.error("Erro ao gerar quiz com Gemini API:", error);
        throw new Error("Não foi possível gerar o quiz. Tente novamente.");
    }
};
