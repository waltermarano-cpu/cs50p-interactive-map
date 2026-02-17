import { ConceptDetail } from "@/data/conceptDetails";
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface DetailPanelProps {
  concept: ConceptDetail | null;
  onClose: () => void;
}

export default function DetailPanel({ concept, onClose }: DetailPanelProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    if (concept?.codeExample) {
      navigator.clipboard.writeText(concept.codeExample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!concept) {
    return (
      <div className="flex flex-col w-96 bg-white border-l border-slate-200 shadow-lg">
        <div className="flex items-center justify-center h-full text-slate-500">
          <p className="text-center px-6">
            Selecione um conceito no mapa mental para ver detalhes
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-96 bg-white border-l border-slate-200 shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-lg font-bold">{concept.title}</h2>
          <p className="text-sm opacity-90">{concept.description}</p>
        </div>
        <button
          onClick={onClose}
          className="ml-2 p-1 hover:bg-white/20 rounded transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Explicação */}
        <div className="p-4 border-b border-slate-200">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">
            Explicação
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            {concept.explanation}
          </p>
        </div>

        {/* Exemplo de Código */}
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-semibold text-slate-900">
              Exemplo de Código
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyCode}
              className="h-7 px-2 text-xs"
            >
              {copied ? (
                <>
                  <Check size={14} className="mr-1" />
                  Copiado
                </>
              ) : (
                <>
                  <Copy size={14} className="mr-1" />
                  Copiar
                </>
              )}
            </Button>
          </div>
          <pre className="bg-slate-900 text-slate-100 p-3 rounded text-xs overflow-x-auto font-mono leading-relaxed">
            <code>{concept.codeExample}</code>
          </pre>
        </div>

        {/* Pontos-chave */}
        <div className="p-4">
          <h3 className="text-sm font-semibold text-slate-900 mb-3">
            Pontos-chave
          </h3>
          <ul className="space-y-2">
            {concept.keyPoints.map((point, index) => (
              <li
                key={index}
                className="flex gap-2 text-sm text-slate-700"
              >
                <span className="text-blue-600 font-bold flex-shrink-0">
                  •
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
