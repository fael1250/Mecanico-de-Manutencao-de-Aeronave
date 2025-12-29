
export enum View {
  Dashboard = 'DASHBOARD',
  Quiz = 'QUIZ',
}

export interface SubTopic {
  id: string;
  title: string;
  content: string;
}

export interface Topic {
  id: string;
  title: string;
  subTopics: SubTopic[];
}

export interface Chapter {
  id: string;
  title: string;
  topics: Topic[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export type Progress = {
  [subTopicId: string]: boolean;
};

export enum QuizDifficulty {
    Facil = "Fácil",
    Medio = "Médio",
    Dificil = "Difícil"
}