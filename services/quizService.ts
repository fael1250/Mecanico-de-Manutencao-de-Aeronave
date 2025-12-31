import { QuizQuestion, QuizDifficulty, Chapter } from '../types';
import { localQuestionsDB } from '../data/questions';

/**
 * Embaralha um array (Fisher-Yates Shuffle)
 */
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export const generateQuiz = async (
    content: Chapter[], 
    difficulty: QuizDifficulty,
    numberOfQuestions: number = 60,
    requestExplanation: boolean = true
): Promise<QuizQuestion[]> => {
    // Simula um delay de carregamento para UX
    await new Promise(resolve => setTimeout(resolve, 1200));

    const chapterIds = content.map(c => c.id);
    
    // Se estivermos pedindo o simulado geral (60 questões), ignoramos o filtro estrito de dificuldade 
    // se o banco não tiver questões suficientes desse nível, para garantir as 60 questões variadas.
    let filteredQuestions = localQuestionsDB.filter(q => 
        chapterIds.includes(q.chapterId) && q.difficulty === difficulty
    );

    // Se o pool for pequeno (como no simulado de 60), pegamos questões de outras dificuldades também
    if (filteredQuestions.length < numberOfQuestions) {
        filteredQuestions = localQuestionsDB.filter(q => chapterIds.includes(q.chapterId));
    }

    // Se ainda assim estiver vazio, pega tudo o que houver
    if (filteredQuestions.length === 0) {
        filteredQuestions = localQuestionsDB;
    }

    // Embaralha as questões encontradas
    const shuffled = shuffleArray(filteredQuestions);

    // Retorna a quantidade solicitada (ou o máximo disponível)
    const result = shuffled.slice(0, numberOfQuestions).map(q => ({
        question: q.question,
        options: q.options,
        correctAnswerIndex: q.correctAnswerIndex,
        explanation: requestExplanation ? q.explanation : undefined
    }));

    return result;
};
