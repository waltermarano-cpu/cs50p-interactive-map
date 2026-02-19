import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt-BR' ? 'en-US' : 'pt-BR';
    i18n.changeLanguage(newLang);
  };

  const currentLang = i18n.language === 'pt-BR' ? 'PT' : 'EN';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          className="h-8 w-8 sm:h-11 sm:w-11 p-0 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 text-xs font-semibold"
          style={{ width: '44px', height: '44px' }}
        >
          <span className="hidden sm:inline">{currentLang}</span>
          <Globe className="w-4 h-4 sm:hidden" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="bg-slate-800 text-slate-200 border-slate-700">
        <p>{i18n.language === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}</p>
      </TooltipContent>
    </Tooltip>
  );
}
