import { useState, useEffect } from 'react';

export interface UserProfile {
  nome: string;
  email: string;
  nivel: 'iniciante' | 'intermediário' | 'avançado';
  pontos_totais: number;
  quizzes_completados: number;
  aulas_exploradas: number[];
  melhor_pontuacao: number;
  data_criacao: string;
  ultimo_acesso: string;
}

export interface QuizResult {
  aula: number;
  pontuacao: number;
  total_perguntas: number;
  data: string;
  tempo_decorrido: number; // em segundos
}

const STORAGE_KEY = 'cs50p_user_profile';
const RESULTS_KEY = 'cs50p_quiz_results';

const DEFAULT_PROFILE: UserProfile = {
  nome: 'Estudante',
  email: '',
  nivel: 'iniciante',
  pontos_totais: 0,
  quizzes_completados: 0,
  aulas_exploradas: [],
  melhor_pontuacao: 0,
  data_criacao: new Date().toISOString(),
  ultimo_acesso: new Date().toISOString(),
};

export function useUserProfile() {
  const [profile, setProfile] = useState<UserProfile>(DEFAULT_PROFILE);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carregar perfil do localStorage
  useEffect(() => {
    const savedProfile = localStorage.getItem(STORAGE_KEY);
    const savedResults = localStorage.getItem(RESULTS_KEY);

    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (error) {
        console.error('Erro ao carregar perfil:', error);
      }
    }

    if (savedResults) {
      try {
        setResults(JSON.parse(savedResults));
      } catch (error) {
        console.error('Erro ao carregar resultados:', error);
      }
    }

    setIsLoaded(true);
  }, []);

  // Salvar perfil no localStorage
  const saveProfile = (updatedProfile: UserProfile) => {
    console.log('saveProfile chamado com:', updatedProfile);
    setProfile(updatedProfile);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
    console.log('Salvo no localStorage:', localStorage.getItem(STORAGE_KEY));
  };

  // Atualizar nome do usuário
  const updateNome = (nome: string) => {
    console.log('updateNome chamado com:', nome);
    console.log('Profile atual:', profile);
    const updated = { ...profile, nome };
    console.log('Profile atualizado:', updated);
    saveProfile(updated);
  };

  // Atualizar email do usuário
  const updateEmail = (email: string) => {
    const updated = { ...profile, email };
    saveProfile(updated);
  };

  // Atualizar nome e email juntos
  const updateProfile = (nome: string, email: string) => {
    console.log('updateProfile chamado com nome:', nome, 'email:', email);
    const updated = { ...profile, nome, email };
    console.log('Profile atualizado:', updated);
    saveProfile(updated);
  };

  // Adicionar aula explorada
  const addAulaExplorada = (aulaId: number) => {
    if (!profile.aulas_exploradas.includes(aulaId)) {
      const updated = {
        ...profile,
        aulas_exploradas: [...profile.aulas_exploradas, aulaId],
      };
      saveProfile(updated);
    }
  };

  // Registrar resultado de quiz
  const addQuizResult = (result: QuizResult) => {
    const newResults = [...results, result];
    setResults(newResults);
    localStorage.setItem(RESULTS_KEY, JSON.stringify(newResults));

    // Atualizar perfil
    const pontos = result.pontuacao;
    const novoTotal = profile.pontos_totais + pontos;
    const novaMelhor = Math.max(profile.melhor_pontuacao, result.pontuacao);
    const novoNivel = calcularNivel(novoTotal);

    const updated = {
      ...profile,
      pontos_totais: novoTotal,
      quizzes_completados: profile.quizzes_completados + 1,
      melhor_pontuacao: novaMelhor,
      nivel: novoNivel,
      ultimo_acesso: new Date().toISOString(),
    };
    saveProfile(updated);
  };

  // Obter resultados de uma aula específica
  const getResultsByAula = (aula: number): QuizResult[] => {
    return results.filter((r) => r.aula === aula);
  };

  // Obter estatísticas gerais
  const getStatistics = () => {
    const totalPerguntas = results.reduce((sum, r) => sum + r.total_perguntas, 0);
    const totalAcertos = results.reduce((sum, r) => sum + r.pontuacao, 0);
    const taxaAcerto = totalPerguntas > 0 ? (totalAcertos / totalPerguntas) * 100 : 0;
    const tempoTotal = results.reduce((sum, r) => sum + r.tempo_decorrido, 0);

    return {
      total_quizzes: results.length,
      total_perguntas: totalPerguntas,
      total_acertos: totalAcertos,
      taxa_acerto: taxaAcerto.toFixed(1),
      tempo_total_minutos: (tempoTotal / 60).toFixed(1),
      aulas_exploradas: profile.aulas_exploradas.length,
    };
  };

  // Resetar perfil
  const resetProfile = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(RESULTS_KEY);
    setProfile(DEFAULT_PROFILE);
    setResults([]);
  };

  return {
    profile,
    results,
    isLoaded,
    updateNome,
    updateEmail,
    updateProfile,
    addAulaExplorada,
    addQuizResult,
    getResultsByAula,
    getStatistics,
    resetProfile,
  };
}

function calcularNivel(pontos: number): 'iniciante' | 'intermediário' | 'avançado' {
  if (pontos >= 500) return 'avançado';
  if (pontos >= 250) return 'intermediário';
  return 'iniciante';
}
