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

        // Criar wrapper com estilos RGB simples (sem OKLCH)
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
          position: absolute;
          left: -9999px;
          top: -9999px;
          width: ${element.offsetWidth}px;
          background-color: ${backgroundColor};
          padding: 0;
          margin: 0;
        `;

        // Clonar elemento e remover classes problemáticas
        const clonedElement = element.cloneNode(true) as HTMLElement;
        
        // Remover todos os elementos de botão
        const buttons = clonedElement.querySelectorAll('button');
        buttons.forEach(btn => btn.remove());

        // Remover classes Tailwind que usam OKLCH e aplicar estilos RGB simples
        const allElements = clonedElement.querySelectorAll('*');
        allElements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          
          // Remover todas as classes (para evitar OKLCH)
          htmlEl.className = '';
          
          // Aplicar estilos RGB simples baseado no tipo de elemento
          const tagName = htmlEl.tagName.toLowerCase();
          
          if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3' || tagName === 'h4' || tagName === 'h5' || tagName === 'h6') {
            htmlEl.style.cssText = `
              color: #1e293b;
              background-color: transparent;
              font-weight: bold;
              margin: 8px 0;
              padding: 4px;
            `;
          } else if (tagName === 'p' || tagName === 'span' || tagName === 'div') {
            htmlEl.style.cssText = `
              color: #334155;
              background-color: transparent;
              margin: 4px 0;
              padding: 2px;
            `;
          } else if (tagName === 'button') {
            htmlEl.style.display = 'none';
          }
          
          // Aplicar estilos de fundo para boxes/cards
          if (htmlEl.getAttribute('data-node') || htmlEl.className.includes('node')) {
            htmlEl.style.cssText = `
              background-color: #e0f2fe;
              border: 2px solid #0284c7;
              border-radius: 8px;
              padding: 12px;
              margin: 8px;
              color: #0c4a6e;
              font-weight: 500;
            `;
          }
        });

        wrapper.appendChild(clonedElement);
        document.body.appendChild(wrapper);

        // Capturar o wrapper com html2canvas
        const canvas = await html2canvas(wrapper, {
          backgroundColor: backgroundColor,
          scale: effectiveScale,
          useCORS: true,
          allowTaint: true,
          logging: false,
          windowHeight: wrapper.scrollHeight,
          windowWidth: wrapper.scrollWidth,
        });

        // Remover wrapper do DOM
        document.body.removeChild(wrapper);

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
