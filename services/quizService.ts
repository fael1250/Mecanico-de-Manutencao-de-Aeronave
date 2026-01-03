import { Chapter, QuizQuestion } from "../types";

export async function generateQuizWithGemini(
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
    throw new Error("Erro ao gerar quiz com Gemini");
  }

  const quiz: QuizQuestion[] = await response.json();
  return quiz;
}
