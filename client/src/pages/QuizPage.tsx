import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLocation } from 'wouter';
import Quiz from '@/components/Quiz';
import { ArrowLeft, BookOpen } from 'lucide-react';

export default function QuizPage() {
  const [, setLocation] = useLocation();
  const [selectedAula, setSelectedAula] = useState<number | undefined>(undefined);
  const [quizStarted, setQuizStarted] = useState(false);

  if (quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 p-4 sm:p-6 transition-colors duration-300">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => {
              setQuizStarted(false);
              setSelectedAula(undefined);
            }}
            className="gap-2"
          >
            <ArrowLeft size={16} />
            Voltar
          </Button>
        </div>
        <Quiz
          aula={selectedAula}
          onClose={() => {
            setQuizStarted(false);
            setSelectedAula(undefined);
          }}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 p-4 sm:p-6 transition-colors duration-300">
      {/* Header */}
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => setLocation('/')}
          className="gap-2 mb-4"
        >
          <ArrowLeft size={16} />
          Voltar ao Mapa Mental
        </Button>
        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
          Quiz CS50P
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Teste seus conhecimentos sobre os conceitos do curso
        </p>
      </div>

      {/* Seleção de Aula */}
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Escolha uma aula ou faça um quiz geral
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {Array.from({ length: 10 }).map((_, i) => (
              <Button
                key={i}
                variant="outline"
                onClick={() => {
                  setSelectedAula(i);
                  setQuizStarted(true);
                }}
                className="h-auto p-4 text-left hover:bg-blue-50 hover:border-blue-300"
              >
                <div>
                  <div className="font-semibold">Aula {i}</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    5 perguntas
                  </div>
                </div>
              </Button>
            ))}
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">Ou faça um quiz geral</h3>
            <Button
              onClick={() => {
                setSelectedAula(undefined);
                setQuizStarted(true);
              }}
              className="w-full"
            >
              Quiz Geral (10 perguntas aleatórias)
            </Button>
          </div>
        </Card>

        {/* Informações sobre Quiz */}
        <Card className="p-6 bg-blue-50 border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">ℹ️ Sobre os Quizzes</h3>
          <ul className="text-sm text-blue-800 space-y-2">
            <li>✓ Cada quiz de aula tem 5 perguntas</li>
            <li>✓ O quiz geral tem 10 perguntas aleatórias</li>
            <li>✓ Você recebe explicações para cada resposta</li>
            <li>✓ Seu progresso é salvo automaticamente</li>
            <li>✓ Acumule pontos e suba de nível</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
