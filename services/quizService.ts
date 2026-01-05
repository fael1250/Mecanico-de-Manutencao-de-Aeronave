
import { Chapter, QuizQuestion, QuizDifficulty } from '../types';

/**
 * Gera um simulado geral da ANAC chamando a API de backend (Gemini).
 * 
 * @param difficulty O nível de dificuldade desejado.
 * @param numberOfQuestions O número de questões para o simulado.
 * @returns Uma promessa que resolve para um array de objetos QuizQuestion.
 */
export async function generateAnacQuiz(
  difficulty: QuizDifficulty,
  numberOfQuestions: number = 60
): Promise<QuizQuestion[]> {
  const response = await fetch("/api/generate-anac-quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      difficulty,
      numberOfQuestions,
    }),
  });

  if (!response.ok) {
    try {
        const errorData = await response.json();
        throw new Error(errorData.error || "Falha ao gerar o simulado ANAC.");
    } catch (e) {
        // Se a análise do JSON falhar, significa que o servidor retornou um erro não estruturado (ex: HTML de erro 500).
        const errorText = await response.text();
        console.error("O servidor retornou um erro não-JSON:", errorText);
        throw new Error("Ocorreu um erro inesperado no servidor. Por favor, tente novamente mais tarde.");
    }
  }

  const quiz: QuizQuestion[] = await response.json();
  return quiz;
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
  // OTIMIZAÇÃO: Cria uma versão "leve" do capítulo, removendo o conteúdo textual pesado.
  // A API de backend precisa apenas da estrutura de títulos para criar o prompt para a IA.
  // Isso reduz drasticamente o tamanho do payload da requisição, tornando-a muito mais rápida.
  const chapterOutlinePayload = {
    id: chapter.id,
    title: chapter.title,
    topics: chapter.topics.map(topic => ({
      id: topic.id,
      title: topic.title,
      subTopics: topic.subTopics.map(subTopic => ({
        id: subTopic.id,
        title: subTopic.title,
        // O campo 'content' é intencionalmente omitido aqui.
      })),
    })),
  };

  const response = await fetch("/api/generate-quiz", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chapter: chapterOutlinePayload, // Envia apenas a estrutura leve.
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