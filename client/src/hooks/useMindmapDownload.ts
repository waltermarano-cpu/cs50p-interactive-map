import { useCallback } from 'react';
import html2canvas from 'html2canvas';

interface DownloadOptions {
  filename?: string;
  quality?: number;
  scale?: number;
  backgroundColor?: string;
}

// Converter cores OKLCH para RGB (suportado por html2canvas)
const convertOklchToRgb = (oklchColor: string): string => {
  // Se não for OKLCH, retorna como está
  if (!oklchColor.includes('oklch')) {
    return oklchColor;
  }

  // Extrair valores OKLCH: oklch(L C H)
  const match = oklchColor.match(/oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)deg?\)/);
  if (!match) return oklchColor;

  const [, l, c, h] = match;
  const L = parseFloat(l) / 100;
  const C = parseFloat(c);
  const H = parseFloat(h) * (Math.PI / 180);

  // Converter OKLCH para LMS
  const l_ = L + 0.3963377774 * Math.cos(H) * C + 0.2158037573 * Math.sin(H) * C;
  const m_ = L - 0.1055613458 * Math.cos(H) * C - 0.0638541728 * Math.sin(H) * C;
  const s_ = L - 0.0894841775 * Math.cos(H) * C + 1.2914855480 * Math.sin(H) * C;

  const l__ = l_ * l_ * l_;
  const m__ = m_ * m_ * m_;
  const s__ = s_ * s_ * s_;

  // Converter LMS para RGB
  const r = 4.0767416621 * l__ - 3.3077363322 * m__ + 0.2309101289 * s__;
  const g = -1.2684380046 * l__ + 2.6097574011 * m__ - 0.3413193761 * s__;
  const b = -0.0041960863 * l__ - 0.7034186147 * m__ + 1.7076147010 * s__;

  // Normalizar para 0-255
  const toSRGB = (x: number) => {
    const abs = Math.abs(x);
    const sign = x < 0 ? -1 : 1;
    const v = abs <= 0.0031308 ? 12.92 * abs : 1.055 * Math.pow(abs, 1 / 2.4) - 0.055;
    return Math.round(Math.max(0, Math.min(255, v * 255)) * sign);
  };

  const red = Math.max(0, Math.min(255, toSRGB(r)));
  const green = Math.max(0, Math.min(255, toSRGB(g)));
  const blue = Math.max(0, Math.min(255, toSRGB(b)));

  return `rgb(${red}, ${green}, ${blue})`;
};

// Remover cores OKLCH do elemento clonado
const removeOklchColors = (element: Element) => {
  const allElements = element.querySelectorAll('*');
  allElements.forEach((el) => {
    const style = window.getComputedStyle(el);
    const bgColor = style.backgroundColor;
    const textColor = style.color;
    const borderColor = style.borderColor;

    if (bgColor.includes('oklch')) {
      (el as HTMLElement).style.backgroundColor = convertOklchToRgb(bgColor);
    }
    if (textColor.includes('oklch')) {
      (el as HTMLElement).style.color = convertOklchToRgb(textColor);
    }
    if (borderColor.includes('oklch')) {
      (el as HTMLElement).style.borderColor = convertOklchToRgb(borderColor);
    }
  });
};

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

            // Converter cores OKLCH para RGB
            const clonedElement = clonedDocument.getElementById(elementId);
            if (clonedElement) {
              removeOklchColors(clonedElement);
            }
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
