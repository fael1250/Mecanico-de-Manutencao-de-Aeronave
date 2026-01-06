
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
    // Cada iteração do loop é uma requisição de lote
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
      // Se qualquer lote falhar, para e reporta o erro.
      const responseClone = response.clone();
      try {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao gerar um lote de questões.");
      } catch (e) {
        const errorText = await responseClone.text();
        console.error("O servidor retornou um erro não-JSON:", errorText);
        throw new Error("Ocorreu um erro inesperado no servidor. Por favor, tente novamente mais tarde.");
      }
    }

    const batchQuestions: QuizQuestion[] = await response.json();
    allQuestions = allQuestions.concat(batchQuestions);

    if (onProgress) {
      onProgress(Math.min(allQuestions.length, totalQuestions)); // Atualiza o progresso
    }
  }

  // Embaralha todas as questões coletadas para garantir aleatoriedade
  allQuestions.sort(() => Math.random() - 0.5);

  // Retorna o número exato de questões solicitadas
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
  // OTIMIZAÇÃO: Cria uma versão "leve" do capítulo para a requisição.
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
    // Usa a mesma lógica robusta de clonagem para tratamento de erros.
    const responseClone = response.clone();
    try {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao gerar o quiz do capítulo.");
    } catch (e) {
        const errorText = await responseClone.text();
        console.error("O servidor retornou um erro não-JSON:", errorText);
        throw new Error("Ocorreu um erro inesperado no servidor ao gerar o quiz do capítulo.");
    }
  }

  const quiz: QuizQuestion[] = await response.json();
  return quiz;
}
