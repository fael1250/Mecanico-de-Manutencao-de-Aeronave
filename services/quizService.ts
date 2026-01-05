
import { Chapter, QuizQuestion, QuizDifficulty } from '../types';
import { localQuestionsDB, LocalQuestion } from '../data/questions';

/**
 * Embaralha um array de forma aleatória (algoritmo Fisher-Yates).
 * @param array O array a ser embaralhado.
 */
function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

/**
 * Gera um simulado geral a partir do banco de questões local.
 * Filtra as questões pela dificuldade, embaralha e retorna o número solicitado.
 * 
 * @param difficulty O nível de dificuldade desejado.
 * @param numberOfQuestions O número de questões para o simulado.
 * @returns Um array de objetos QuizQuestion.
 */
export function generateQuiz(difficulty: QuizDifficulty, numberOfQuestions: number): QuizQuestion[] {
  // Filtra as questões do banco de dados pela dificuldade selecionada
  const filteredQuestions: LocalQuestion[] = localQuestionsDB.filter(
    (q) => q.difficulty === difficulty
  );

  // Embaralha as questões filtradas para garantir aleatoriedade
  const shuffledQuestions = shuffleArray(filteredQuestions);

  // Retorna o número de questões solicitado
  return shuffledQuestions.slice(0, numberOfQuestions);
}


/**
 * Gera um quiz para um capítulo específico chamando a API de backend (Gemini).
 * 
 * @param chapter O conteúdo do capítulo para gerar o quiz.
 * @param numberOfQuestions O número de questões a serem geradas.
 * @returns Uma promessa que resolve para um array de objetos QuizQuestion.
 */
export async function generateChapterQuiz(
  chapter: Chapter,
  numberOfQuestions: number = 10
): Promise<QuizQuestion[]> {
  const response = await fetch("/api/generate-quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chapter,
      numberOfQuestions,
    }),
  });

  if (!response.ok) {
    // Se a resposta não for bem-sucedida, extrai a mensagem de erro do corpo
    const errorData = await response.json();
    // Lança um erro com a mensagem específica da API para ser exibida na UI
    throw new Error(errorData.error || "Falha ao gerar o quiz do capítulo.");
  }

  const quiz: QuizQuestion[] = await response.json();
  return quiz;
}
