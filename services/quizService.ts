
import { Chapter, QuizQuestion, QuizDifficulty } from '../types';

/**
 * Gera um simulado geral da ANAC chamando a API de backend (Gemini) em lotes
 * para evitar timeouts do servidor.
 * 
 * @param difficulty O nível de dificuldade desejado.
 * @param totalQuestions O número total de questões para o simulado.
 * @param onProgress Callback para reportar o progresso da geração.
 * @returns Uma promessa que resolve para um array de objetos QuizQuestion.
 */
export async function generateAnacQuiz(
  difficulty: QuizDifficulty,
  totalQuestions: number = 60,
  onProgress?: (generatedCount: number) => void
): Promise<QuizQuestion[]> {
  const BATCH_SIZE = 10; // Gera 10 questões por chamada de API
  const numBatches = Math.ceil(totalQuestions / BATCH_SIZE);
  let allQuestions: QuizQuestion[] = [];

  for (let i = 0; i < numBatches; i++) {
    const response = await fetch("/api/generate-anac-quiz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        difficulty,
        numberOfQuestions: BATCH_SIZE,
      }),
    });

    if (!response.ok) {
      // Se qualquer lote falhar, para e reporta o erro DETALHADO.
      const errorText = await response.text();
      console.error("O servidor retornou um erro:", errorText);
      // ATUALIZAÇÃO: Lança o erro exato do servidor para ser exibido na UI.
      throw new Error(`Ocorreu um erro inesperado no servidor. Por favor, tente novamente mais tarde. (Detalhes: ${errorText})`);
    }

    const batchQuestions: QuizQuestion[] = await response.json();
    allQuestions = allQuestions.concat(batchQuestions);

    if (onProgress) {
      onProgress(Math.min(allQuestions.length, totalQuestions));
    }
  }

  allQuestions.sort(() => Math.random() - 0.5);

  return allQuestions.slice(0, totalQuestions);
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
  const chapterOutlinePayload = {
    id: chapter.id,
    title: chapter.title,
    topics: chapter.topics.map(topic => ({
      id: topic.id,
      title: topic.title,
      subTopics: topic.subTopics.map(subTopic => ({
        id: subTopic.id,
        title: subTopic.title,
      })),
    })),
  };

  const response = await fetch("/api/generate-quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chapter: chapterOutlinePayload,
      numberOfQuestions,
    }),
  });

  if (!response.ok) {
      const errorText = await response.text();
      console.error("O servidor retornou um erro ao gerar o quiz do capítulo:", errorText);
      // ATUALIZAÇÃO: Lança o erro exato do servidor para ser exibido na UI.
      throw new Error(`Ocorreu um erro inesperado no servidor ao gerar o quiz do capítulo. (Detalhes: ${errorText})`);
  }

  const quiz: QuizQuestion[] = await response.json();
  return quiz;
}