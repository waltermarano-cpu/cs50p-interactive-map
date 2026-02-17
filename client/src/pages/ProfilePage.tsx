import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Profile from '@/components/Profile';

export default function ProfilePage() {
  const [, setLocation] = useLocation();

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
      </div>

      {/* Profile Component */}
      <Profile onClose={() => setLocation('/')} />
    </div>
  );
}
