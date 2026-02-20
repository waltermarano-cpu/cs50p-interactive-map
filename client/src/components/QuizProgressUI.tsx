import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, TrendingUp, Target } from 'lucide-react';

interface QuizProgressUIProps {
  totalQuestions: number;
  correctAnswers: number;
  currentQuestion: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export default function QuizProgressUI({
  totalQuestions,
  correctAnswers,
  currentQuestion,
  difficulty = 'medium',
}: QuizProgressUIProps) {
  const { t } = useTranslation();
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  const progressPercentage = Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 border-blue-200 dark:border-slate-700 transition-colors duration-300">
      {/* Barra de progresso */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {t('quiz.progress')}
          </span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            {progressPercentage}%
          </span>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-3 gap-3">
        {/* Acurácia */}
        <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-center mb-1">
            <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{accuracy}%</p>
          <p className="text-xs text-slate-600 dark:text-slate-400">{t('quiz.accuracy')}</p>
        </div>

        {/* Corretas */}
        <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-center mb-1">
            <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
          </div>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {correctAnswers}/{totalQuestions}
          </p>
          <p className="text-xs text-slate-600 dark:text-slate-400">{t('quiz.correct')}</p>
        </div>

        {/* Dificuldade */}
        <div className="text-center p-3 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-center mb-1">
            <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <Badge
            className={`block mx-auto text-xs ${
              difficulty === 'easy'
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                : difficulty === 'medium'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                  : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
            }`}
          >
            {t(`quiz.difficulty${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`)}
          </Badge>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t('quiz.difficulty')}</p>
        </div>
      </div>
    </Card>
  );
}
