import { useState } from 'react';
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Question } from '@/types/quiz';
import { Button } from '@/components/ui/button';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean, questionId: string, moduleId: string) => void;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuizQuestion({
  question,
  onAnswer,
  questionNumber,
  totalQuestions,
}: QuizQuestionProps) {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionClick = (option: string) => {
    if (!showFeedback) {
      setSelectedOption(option);
      setShowFeedback(true);
      setTimeout(() => {
        onAnswer(option === question.correctAnswer, question.id, question.moduleId || '');
      }, 1500);
    }
  };

  const isCorrectOption = (option: string) => option === question.correctAnswer;
  const isSelectedOption = (option: string) => option === selectedOption;

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 max-w-2xl mx-auto transition-colors duration-300">
      {/* Header com progresso */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest uppercase">
          {t('quiz.question')} {questionNumber} {t('quiz.of')} {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`h-1 w-6 rounded-full transition-colors duration-300 ${
                i < questionNumber - 1
                  ? 'bg-blue-500'
                  : i === questionNumber - 1
                    ? 'bg-blue-400'
                    : 'bg-slate-300 dark:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Pergunta */}
      <h2 className="text-xl font-semibold mb-6 leading-relaxed text-slate-900 dark:text-slate-100">
        {question.questionText}
      </h2>

      {/* Dificuldade */}
      <div className="mb-4">
        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            question.difficulty === 'easy'
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
              : question.difficulty === 'medium'
                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
          }`}
        >
          {t(`quiz.difficulty${question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1)}`)}
        </span>
      </div>

      {/* Opções */}
      <div className="space-y-3 mb-6">
        {question.options?.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleOptionClick(option)}
            disabled={showFeedback}
            variant="outline"
            className={`w-full text-left p-4 h-auto justify-between transition-all group ${
              showFeedback
                ? isCorrectOption(option)
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-600'
                  : isSelectedOption(option)
                    ? 'border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-600'
                    : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/30'
                : 'border-slate-200 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-500/50'
            }`}
          >
            <span className="text-slate-900 dark:text-slate-100">{option}</span>
            {showFeedback && isSelectedOption(option) &&
              (isCorrectOption(option) ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              ))}
            {showFeedback && !isSelectedOption(option) && isCorrectOption(option) && (
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            )}
            {!showFeedback && <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 flex-shrink-0" />}
          </Button>
        ))}
      </div>

      {/* Explicação */}
      {showFeedback && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg animate-in fade-in">
          <h3 className="font-bold text-lg mb-2 text-slate-900 dark:text-slate-100">
            {t('quiz.explanation')}:
          </h3>
          <p className="text-slate-700 dark:text-slate-300">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
