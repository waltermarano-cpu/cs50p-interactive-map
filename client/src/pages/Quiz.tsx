import { useState } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

export default function Quiz() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  // Placeholder quiz questions - pode ser expandido depois
  const quizQuestions = [
    {
      question: t('quiz.question') + ' 1: ' + (t('app.subtitle')),
      options: [
        t('quiz.selectLesson'),
        t('quiz.selectLesson'),
        t('quiz.selectLesson'),
        t('quiz.selectLesson'),
      ],
      correct: 0,
    },
  ];

  const handleAnswerClick = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      if (index === quizQuestions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setSelectedLesson(null);
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setAnswered(false);
  };

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
                    onClick={() => setLocation('/')}
                    className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="bg-slate-800 text-slate-200 border-slate-700">
                  <p>{t('navigation.backToMap')}</p>
                </TooltipContent>
              </Tooltip>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                {t('quiz.title')}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 lg:py-12 max-w-2xl">
          {!selectedLesson ? (
            // Lesson Selection
            <div className="space-y-4">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">{t('quiz.selectLesson')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      onClick={() => setSelectedLesson(i)}
                      className="h-12 text-left justify-start"
                    >
                      {t('mindmap.lesson' + i)}
                    </Button>
                  ))}
                </div>
              </Card>
            </div>
          ) : showResults ? (
            // Results Screen
            <Card className="p-6 text-center space-y-6">
              <h2 className="text-2xl font-bold">{t('quiz.results')}</h2>
              <div className="text-5xl font-bold text-blue-600">
                {score}/{quizQuestions.length}
              </div>
              <p className="text-lg text-muted-foreground">
                {t('quiz.score')}: {Math.round((score / quizQuestions.length) * 100)}%
              </p>
              <div className="flex gap-3 justify-center">
                <Button onClick={handleReset} variant="outline">
                  {t('quiz.selectLesson')}
                </Button>
                <Button onClick={() => setLocation('/')}>{t('navigation.backToMap')}</Button>
              </div>
            </Card>
          ) : (
            // Quiz Question
            <Card className="p-6 space-y-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  {t('quiz.question')} {currentQuestion + 1} {t('quiz.of')} {quizQuestions.length}
                </div>
                <h2 className="text-xl font-semibold">{quizQuestions[currentQuestion].question}</h2>
              </div>

              <div className="space-y-3">
                {quizQuestions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedAnswer === index
                        ? index === quizQuestions[currentQuestion].correct
                          ? 'default'
                          : 'destructive'
                        : 'outline'
                    }
                    onClick={() => handleAnswerClick(index)}
                    disabled={answered}
                    className="w-full h-12 justify-start text-left"
                  >
                    {option}
                  </Button>
                ))}
              </div>

              {answered && (
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/50">
                  <p className="text-sm font-semibold">
                    {selectedAnswer === quizQuestions[currentQuestion].correct
                      ? t('quiz.correct')
                      : t('quiz.incorrect')}
                  </p>
                </div>
              )}

              <Button
                onClick={handleNext}
                disabled={!answered}
                className="w-full"
              >
                {currentQuestion === quizQuestions.length - 1 ? t('quiz.finish') : t('quiz.next')}
              </Button>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
