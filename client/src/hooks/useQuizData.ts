import { useState, useEffect } from 'react';
import { QuizModule, Question } from '@/types/quiz';

export function useQuizData(moduleNumber: number) {
  const [module, setModule] = useState<QuizModule | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        setLoading(true);
        // Importar dinamicamente o arquivo JSON
        const quizData = await import(`@/data/quiz/quiz-data-aula${moduleNumber}.json`);
        
        // Adicionar moduleId a cada pergunta
        const questionsWithModuleId: Question[] = quizData.questions.map((q: any) => ({
          ...q,
          moduleId: quizData.moduleId,
        }));

        setModule({
          ...quizData,
          questions: questionsWithModuleId,
        });
        setError(null);
      } catch (err) {
        setError(`Erro ao carregar quiz da aula ${moduleNumber}`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadQuizData();
  }, [moduleNumber]);

  return { module, loading, error };
}

// Hook para embaralhar perguntas
export function useShuffledQuestions(questions: Question[], seed?: number) {
  const [shuffled, setShuffled] = useState<Question[]>([]);

  useEffect(() => {
    const shuffle = (array: Question[]) => {
      const arr = [...array];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    setShuffled(shuffle(questions));
  }, [questions, seed]);

  return shuffled;
}
