import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizContainer from './QuizContainer';

interface QuizModalProps {
  isOpen: boolean;
  moduleNumber: number;
  moduleName: string;
  onClose: () => void;
}

export default function QuizModal({ isOpen, moduleNumber, moduleName, onClose }: QuizModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-lg shadow-2xl overflow-hidden flex flex-col transition-colors duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          aria-label="Fechar quiz"
        >
          <X className="w-6 h-6 text-slate-600 dark:text-slate-400" />
        </button>

        {/* Quiz Content */}
        <div className="flex-1 overflow-auto">
          <QuizContainer
            moduleNumber={moduleNumber}
            moduleName={moduleName}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
}
