import { useCallback } from 'react';
import html2canvas from 'html2canvas';

interface DownloadOptions {
  filename?: string;
  quality?: number;
  scale?: number;
  backgroundColor?: string;
}

// Converter cores OKLCH para RGB (suportado por html2canvas)
const oklchToRgb = (oklchStr: string): string => {
  // Se não for OKLCH, retorna como está
  if (!oklchStr || !oklchStr.includes('oklch')) {
    return oklchStr;
  }

  try {
    // Extrair valores OKLCH: oklch(L C H / alpha) ou oklch(L C H)
    const match = oklchStr.match(/oklch\(([\d.]+)%?\s+([\d.]+)\s+([\d.]+)(?:deg)?\s*(?:\/\s*([\d.]+))?\)/);
    if (!match) return oklchStr;

    const L = parseFloat(match[1]) / 100;
    const C = parseFloat(match[2]);
    const H = parseFloat(match[3]) * (Math.PI / 180);
    const alpha = match[4] ? parseFloat(match[4]) : 1;

    // Converter OKLCH para LMS
    const l_ = L + 0.3963377774 * Math.cos(H) * C + 0.2158037573 * Math.sin(H) * C;
    const m_ = L - 0.1055613458 * Math.cos(H) * C - 0.0638541728 * Math.sin(H) * C;
    const s_ = L - 0.0894841775 * Math.cos(H) * C + 1.2914855480 * Math.sin(H) * C;

    const l__ = l_ * l_ * l_;
    const m__ = m_ * m_ * m_;
    const s__ = s_ * s_ * s_;

    // Converter LMS para RGB linear
    const r = 4.0767416621 * l__ - 3.3077363322 * m__ + 0.2309101289 * s__;
    const g = -1.2684380046 * l__ + 2.6097574011 * m__ - 0.3413193761 * s__;
    const b = -0.0041960863 * l__ - 0.7034186147 * m__ + 1.7076147010 * s__;

    // Aplicar gamma correction
    const toSRGB = (x: number) => {
      if (x <= 0.0031308) return 12.92 * x;
      return 1.055 * Math.pow(x, 1 / 2.4) - 0.055;
    };

    const red = Math.round(Math.max(0, Math.min(1, toSRGB(r))) * 255);
    const green = Math.round(Math.max(0, Math.min(1, toSRGB(g))) * 255);
    const blue = Math.round(Math.max(0, Math.min(1, toSRGB(b))) * 255);

    if (alpha < 1) {
      return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
    }
    return `rgb(${red}, ${green}, ${blue})`;
  } catch (e) {
    console.warn('Erro ao converter cor OKLCH:', oklchStr, e);
    return oklchStr;
  }
};

// Aplicar estilos RGB a todos os elementos (ANTES de capturar)
const applyRgbStyles = (element: Element) => {
  const allElements = element.querySelectorAll('*');
  const originalStyles: Array<{ el: HTMLElement; styles: Partial<CSSStyleDeclaration> }> = [];

  allElements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    const style = window.getComputedStyle(el);
    const backup: Partial<CSSStyleDeclaration> = {};

    // Verificar e converter backgroundColor
    if (style.backgroundColor && style.backgroundColor.includes('oklch')) {
      backup.backgroundColor = htmlEl.style.backgroundColor;
      htmlEl.style.backgroundColor = oklchToRgb(style.backgroundColor);
    }

    // Verificar e converter color (text color)
    if (style.color && style.color.includes('oklch')) {
      backup.color = htmlEl.style.color;
      htmlEl.style.color = oklchToRgb(style.color);
    }

    // Verificar e converter borderColor
    if (style.borderColor && style.borderColor.includes('oklch')) {
      backup.borderColor = htmlEl.style.borderColor;
      htmlEl.style.borderColor = oklchToRgb(style.borderColor);
    }

    // Verificar e converter borderTopColor, borderRightColor, etc
    ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'].forEach(prop => {
      const value = style[prop as any];
      if (value && value.includes('oklch')) {
        backup[prop as any] = htmlEl.style[prop as any];
        htmlEl.style[prop as any] = oklchToRgb(value);
      }
    });

    if (Object.keys(backup).length > 0) {
      originalStyles.push({ el: htmlEl, styles: backup });
    }
  });

  return originalStyles;
};

// Restaurar estilos originais
const restoreStyles = (originalStyles: Array<{ el: HTMLElement; styles: Partial<CSSStyleDeclaration> }>) => {
  originalStyles.forEach(({ el, styles }) => {
    Object.entries(styles).forEach(([key, value]) => {
      if (value !== undefined) {
        el.style[key as any] = value as string;
      }
    });
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

      let originalStyles: Array<{ el: HTMLElement; styles: Partial<CSSStyleDeclaration> }> = [];

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

        // APLICAR ESTILOS RGB ANTES DE CAPTURAR
        originalStyles = applyRgbStyles(element);

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

        // Restaurar estilos originais
        restoreStyles(originalStyles);

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
        
        // Restaurar estilos em caso de erro
        if (originalStyles.length > 0) {
          restoreStyles(originalStyles);
        }
        
        document.body.style.cursor = 'default';
        return false;
      }
    },
    []
  );

  return { downloadMindmap };
};
