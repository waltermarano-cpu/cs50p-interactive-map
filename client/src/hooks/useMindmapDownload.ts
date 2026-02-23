import { useCallback } from 'react';
import html2canvas from 'html2canvas';

interface DownloadOptions {
  filename?: string;
  quality?: number;
  scale?: number;
  backgroundColor?: string;
}

export const useMindmapDownload = () => {
  const downloadMindmap = useCallback(
    async (elementId: string, options: DownloadOptions = {}) => {
      const {
        filename = 'cs50p-mindmap.png',
        quality = 0.95,
        scale = 2,
        backgroundColor = '#ffffff'
      } = options;

      try {
        const element = document.getElementById(elementId);
        
        if (!element) {
          console.error(`Elemento com ID "${elementId}" não encontrado`);
          return false;
        }

        // Detectar se é mobile
        const isMobile = window.innerWidth < 768;
        const effectiveScale = isMobile ? 1 : scale;

        // Mostrar feedback visual
        const originalCursor = document.body.style.cursor;
        document.body.style.cursor = 'wait';

        // Capturar o elemento como canvas
        const canvas = await html2canvas(element, {
          backgroundColor: backgroundColor,
          scale: effectiveScale,
          useCORS: true,
          allowTaint: true,
          logging: false,
          windowHeight: element.scrollHeight,
          windowWidth: element.scrollWidth,
          onclone: (clonedDocument) => {
            // Remover elementos desnecessários do clone (botões, etc)
            const buttons = clonedDocument.querySelectorAll('button');
            buttons.forEach(btn => {
              btn.style.display = 'none';
            });
          }
        });

        // Restaurar cursor
        document.body.style.cursor = originalCursor;

        // Download com compressão adaptativa
        const effectiveQuality = isMobile ? 0.8 : quality;

        // Converter canvas para blob e fazer download
        canvas.toBlob((blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          }
        }, 'image/png', effectiveQuality);

        return true;
      } catch (error) {
        console.error('Erro ao fazer download do mapa mental:', error);
        document.body.style.cursor = 'default';
        return false;
      }
    },
    []
  );

  return { downloadMindmap };
};
