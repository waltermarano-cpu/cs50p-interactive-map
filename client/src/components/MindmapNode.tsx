import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { MindmapNode as MindmapNodeType } from "@/data/mindmapData";
import { ConceptDetail, conceptDetails } from "@/data/conceptDetails";

interface MindmapNodeProps {
  node: MindmapNodeType;
  level: number;
  isRoot?: boolean;
  onSelectConcept?: (concept: ConceptDetail) => void;
  selectedId?: string;
}

export default function MindmapNode({
  node,
  level,
  isRoot = false,
  onSelectConcept,
  selectedId,
}: MindmapNodeProps) {
  const [isExpanded, setIsExpanded] = useState(isRoot);

  const hasChildren = node.children && node.children.length > 0;
  const isLevel0 = level === 0;
  const isLevel1 = level === 1;

  // Tamanhos responsivos
  const sizeClasses = isRoot
    ? "px-6 py-4 text-lg"
    : isLevel0
      ? "px-5 py-3 text-base"
      : "px-4 py-2 text-sm";

  const bgGradient = isRoot
    ? `bg-gradient-to-r ${node.color}`
    : `bg-gradient-to-r ${node.color}`;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Se tem filhos, expande/recolhe
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
    // Se é um conceito (não raiz), seleciona para o painel
    if (!isRoot && onSelectConcept) {
      const detail = conceptDetails[node.id];
      if (detail) {
        onSelectConcept(detail);
      }
    }
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <button
        onClick={handleClick}
        className={`
          relative group
          ${sizeClasses}
          ${bgGradient}
          rounded-lg
          text-white font-semibold
          shadow-md hover:shadow-lg
          transition-all duration-300
          transform hover:scale-105
          flex items-center gap-2
          whitespace-nowrap
          border border-white/20
          backdrop-blur-sm
          ${selectedId === node.id ? "ring-2 ring-white ring-offset-2" : ""}
        `}
      >
        {hasChildren && (
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 flex-shrink-0 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        )}
        <div className="flex flex-col items-start">
          <span className="font-bold">{node.title}</span>
          {node.description && (
            <span className="text-xs opacity-90 font-normal">
              {node.description}
            </span>
          )}
        </div>

        {/* Efeito hover */}
        <div className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
      </button>

      {/* Filhos expandidos */}
      {hasChildren && isExpanded && (
        <div
          className={`
            flex flex-col gap-3 pl-6 border-l-2 border-gray-300
            transition-all duration-300
            ${isExpanded ? "opacity-100" : "opacity-0"}
          `}
        >
          {node.children?.map((child) => (
            <MindmapNode
              key={child.id}
              node={child}
              level={level + 1}
              isRoot={false}
              onSelectConcept={onSelectConcept}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
