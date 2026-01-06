
import { Chapter, QuizQuestion, QuizDifficulty } from '../types';

/**
 * Analisa uma resposta de erro da API e lança uma exceção com uma mensagem clara.
 * Tenta extrair a mensagem de um JSON, caso contrário, usa o texto bruto da resposta.
 * @param response A resposta da API que falhou.
 */
async function handleApiError(response: Response): Promise<never> {
    const errorText = await response.text();
    console.error("O servidor retornou um erro:", errorText);
    
    try {
        // Tenta analisar o erro como JSON (formato esperado da nossa API)
        const errorJson = JSON.parse(errorText);
        if (errorJson && errorJson.error) {
            // Se for um JSON com a propriedade 'error', lança essa mensagem
            throw new Error(errorJson.error);
        }
    } catch (e) {
        // Se não for JSON, ou não tiver a propriedade 'error', o texto bruto é usado no fallback abaixo.
    }

    // Fallback para o texto completo se o parsing JSON falhar.
    // Isso é útil para capturar erros de timeout da Vercel (que retornam HTML) ou outros erros inesperados.
    throw new Error(errorText);
}


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
  const BATCH_SIZE = 5; // REDUZIDO PARA 5 PARA EVITAR TIMEOUT DO SERVIDOR
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
        await handleApiError(response);
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
      await handleApiError(response);
  }

  const quiz: QuizQuestion[] = await response.json();
  return quiz;
}