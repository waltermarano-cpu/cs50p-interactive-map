export type QuestionType = 'multiple_choice' | 'true_false';
export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  type: QuestionType;
  questionText: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: DifficultyLevel;
  tags: string[];
  moduleId?: string;
}

export interface QuizModule {
  moduleId: string;
  moduleTitle: string;
  questions: Question[];
}

export interface QuizResult {
  questionId: string;
  moduleId: string;
  isCorrect: boolean;
  timestamp: number;
}

export interface UserQuizStats {
  totalAttempts: number;
  totalCorrect: number;
  accuracy: number;
  moduleScores: Record<string, ModuleScore>;
}

export interface ModuleScore {
  moduleId: string;
  totalQuestions: number;
  correctAnswers: number;
  accuracy: number;
  lastAttempt: number;
  attempts: number;
}
