import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, RotateCcw } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import QuizQuestion from './QuizQuestion';
import QuizProgressUI from './QuizProgressUI';
import { useQuizData, useShuffledQuestions } from '@/hooks/useQuizData';
import { useUserProfile } from '@/hooks/useUserProfile';
import { Question, QuizResult } from '@/types/quiz';

interface QuizContainerProps {
  moduleNumber: number;
  moduleName: string;
  onClose?: () => void;
}

export default function QuizContainer({ moduleNumber, moduleName, onClose }: QuizContainerProps) {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const { module, loading, error } = useQuizData(moduleNumber);
  const { profile, updateProfile } = useUserProfile();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);

  // Embaralhar perguntas quando o módulo for carregado
  useEffect(() => {
    if (module?.questions) {
      setQuestions(module.questions);
    }
  }, [module]);

  const handleAnswer = (isCorrect: boolean, questionId: string, moduleId: string) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    }

    const result: QuizResult = {
      questionId,
      moduleId,
      isCorrect,
      timestamp: Date.now(),
    };

    setResults([...results, result]);

    // Ir para próxima pergunta ou mostrar resultados
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        setShowResults(true);
        // Atualizar perfil com novo quiz completado
        updateProfile(profile.nome, profile.email);
      }, 1500);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowResults(false);
    setResults([]);
    setQuestions(module?.questions || []);
  };

  const handleBackToMap = () => {
    if (onClose) {
      onClose();
    } else {
      setLocation('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
        <Card className="p-8">
          <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
            {t('quiz.loading')}...
          </p>
        </Card>
      </div>
    );
  }

  if (error || !module) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex items-center justify-center">
        <Card className="p-8 max-w-md">
          <p className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
            {t('quiz.error')}
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{error}</p>
          <Button onClick={handleBackToMap} className="w-full">
            {t('navigation.backToMap')}
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 flex flex-col transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm shadow-sm dark:shadow-lg transition-colors duration-300">
        <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4 lg:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleBackToMap}
                    className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-slate-800 text-slate-200 border-slate-700">
                  <p>{t('navigation.backToMap')}</p>
                </TooltipContent>
              </Tooltip>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {moduleName}
                </h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {t('quiz.title')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 lg:py-12 max-w-4xl">
          {!showResults ? (
            <div className="space-y-6">
              {/* Progress UI */}
              <QuizProgressUI
                totalQuestions={questions.length}
                correctAnswers={correctAnswers}
                currentQuestion={currentQuestionIndex + 1}
                difficulty={questions[currentQuestionIndex]?.difficulty}
              />

              {/* Question */}
              {questions.length > 0 && (
                <QuizQuestion
                  question={questions[currentQuestionIndex]}
                  onAnswer={handleAnswer}
                  questionNumber={currentQuestionIndex + 1}
                  totalQuestions={questions.length}
                />
              )}
            </div>
          ) : (
            // Results Screen
            <Card className="p-8 max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                  {t('quiz.results')}
                </h2>
                <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {correctAnswers}/{questions.length}
                </div>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                  {t('quiz.score')}: {Math.round((correctAnswers / questions.length) * 100)}%
                </p>
              </div>

              {/* Feedback */}
              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <p className="text-slate-700 dark:text-slate-300">
                  {correctAnswers === questions.length
                    ? t('quiz.perfectScore')
                    : correctAnswers >= questions.length * 0.8
                      ? t('quiz.greatJob')
                      : correctAnswers >= questions.length * 0.6
                        ? t('quiz.goodJob')
                        : t('quiz.tryAgain')}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 justify-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      onClick={handleRestart}
                      variant="outline"
                      className="gap-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      {t('quiz.restart')}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-slate-800 text-slate-200 border-slate-700">
                    <p>{t('quiz.restartDescription')}</p>
                  </TooltipContent>
                </Tooltip>
                <Button onClick={handleBackToMap}>
                  {t('navigation.backToMap')}
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
