export interface MindmapNode {
  id: string;
  title: string;
  description: string;
  color: string;
  children?: MindmapNode[];
}

export const mindmapData: MindmapNode = {
  id: "root",
  title: "CS50P: Python",
  description: "Introdução à Programação com Python",
  color: "from-blue-600 to-blue-400",
  children: [
    {
      id: "aula0",
      title: "Aula 0: Funções e Variáveis",
      description: "Fundamentos de programação",
      color: "from-emerald-500 to-emerald-300",
      children: [
        {
          id: "aula0-1",
          title: "Funções Integradas",
          description: "print(), input(), len()",
          color: "from-emerald-400 to-emerald-200",
        },
        {
          id: "aula0-2",
          title: "Tipos de Dados",
          description: "str, int, float",
          color: "from-emerald-400 to-emerald-200",
        },
        {
          id: "aula0-3",
          title: "Variáveis e F-strings",
          description: "Armazenamento e formatação",
          color: "from-emerald-400 to-emerald-200",
        },
        {
          id: "aula0-4",
          title: "Definição de Funções",
          description: "def, main(), return",
          color: "from-emerald-400 to-emerald-200",
        },
      ],
    },
    {
      id: "aula1",
      title: "Aula 1: Condicionais",
      description: "Lógica de decisão",
      color: "from-cyan-500 to-cyan-300",
      children: [
        {
          id: "aula1-1",
          title: "Estruturas if/elif/else",
          description: "Ramificação de fluxo",
          color: "from-cyan-400 to-cyan-200",
        },
        {
          id: "aula1-2",
          title: "Operadores Lógicos",
          description: "and, or, not",
          color: "from-cyan-400 to-cyan-200",
        },
        {
          id: "aula1-3",
          title: "Operador Modulo",
          description: "% para paridade",
          color: "from-cyan-400 to-cyan-200",
        },
        {
          id: "aula1-4",
          title: "Match Statement",
          description: "Pattern matching",
          color: "from-cyan-400 to-cyan-200",
        },
      ],
    },
    {
      id: "aula2",
      title: "Aula 2: Loops",
      description: "Repetição e iteração",
      color: "from-purple-500 to-purple-300",
      children: [
        {
          id: "aula2-1",
          title: "While Loop",
          description: "Repetição condicional",
          color: "from-purple-400 to-purple-200",
        },
        {
          id: "aula2-2",
          title: "For Loop",
          description: "Iteração sobre sequências",
          color: "from-purple-400 to-purple-200",
        },
        {
          id: "aula2-3",
          title: "Estruturas de Dados",
          description: "list, dict, range()",
          color: "from-purple-400 to-purple-200",
        },
        {
          id: "aula2-4",
          title: "Nesting e Abstração",
          description: "Loops aninhados",
          color: "from-purple-400 to-purple-200",
        },
      ],
    },
    {
      id: "aula3",
      title: "Aula 3: Exceções",
      description: "Tratamento de erros",
      color: "from-orange-500 to-orange-300",
      children: [
        {
          id: "aula3-1",
          title: "Try/Except/Else",
          description: "Captura de erros",
          color: "from-orange-400 to-orange-200",
        },
        {
          id: "aula3-2",
          title: "Tipos de Exceções",
          description: "ValueError, TypeError",
          color: "from-orange-400 to-orange-200",
        },
        {
          id: "aula3-3",
          title: "Validação de Entrada",
          description: "While True com try/except",
          color: "from-orange-400 to-orange-200",
        },
      ],
    },
    {
      id: "aula4",
      title: "Aula 4: Bibliotecas",
      description: "Reutilização de código",
      color: "from-pink-500 to-pink-300",
      children: [
        {
          id: "aula4-1",
          title: "Módulos Padrão",
          description: "random, statistics, sys",
          color: "from-pink-400 to-pink-200",
        },
        {
          id: "aula4-2",
          title: "Pacotes Externos",
          description: "pip, requests, cowsay",
          color: "from-pink-400 to-pink-200",
        },
        {
          id: "aula4-3",
          title: "APIs e JSON",
          description: "Consumo de dados web",
          color: "from-pink-400 to-pink-200",
        },
        {
          id: "aula4-4",
          title: "Argumentos de Linha de Comando",
          description: "sys.argv",
          color: "from-pink-400 to-pink-200",
        },
      ],
    },
    {
      id: "aula5",
      title: "Aula 5: Unit Tests",
      description: "Garantia de qualidade",
      color: "from-red-500 to-red-300",
      children: [
        {
          id: "aula5-1",
          title: "Assert",
          description: "Verificação de condições",
          color: "from-red-400 to-red-200",
        },
        {
          id: "aula5-2",
          title: "Framework Pytest",
          description: "Automação de testes",
          color: "from-red-400 to-red-200",
        },
        {
          id: "aula5-3",
          title: "Cobertura de Testes",
          description: "Casos de borda",
          color: "from-red-400 to-red-200",
        },
      ],
    },
    {
      id: "aula6",
      title: "Aula 6: File I/O",
      description: "Persistência de dados",
      color: "from-indigo-500 to-indigo-300",
      children: [
        {
          id: "aula6-1",
          title: "Leitura e Escrita",
          description: "open(), with statement",
          color: "from-indigo-400 to-indigo-200",
        },
        {
          id: "aula6-2",
          title: "Formatos CSV",
          description: "DictReader, DictWriter",
          color: "from-indigo-400 to-indigo-200",
        },
        {
          id: "aula6-3",
          title: "Arquivos Binários",
          description: "Pillow para imagens",
          color: "from-indigo-400 to-indigo-200",
        },
      ],
    },
    {
      id: "aula7",
      title: "Aula 7: Regex",
      description: "Padrões em strings",
      color: "from-teal-500 to-teal-300",
      children: [
        {
          id: "aula7-1",
          title: "Módulo re",
          description: "search, match, fullmatch",
          color: "from-teal-400 to-teal-200",
        },
        {
          id: "aula7-2",
          title: "Símbolos Regex",
          description: "., *, +, ?, ^, $, []",
          color: "from-teal-400 to-teal-200",
        },
        {
          id: "aula7-3",
          title: "Validação e Extração",
          description: "Grupos de captura",
          color: "from-teal-400 to-teal-200",
        },
      ],
    },
    {
      id: "aula8",
      title: "Aula 8: OOP",
      description: "Programação orientada a objetos",
      color: "from-amber-500 to-amber-300",
      children: [
        {
          id: "aula8-1",
          title: "Classes e Objetos",
          description: "Moldes e instâncias",
          color: "from-amber-400 to-amber-200",
        },
        {
          id: "aula8-2",
          title: "Métodos Especiais",
          description: "__init__, @property",
          color: "from-amber-400 to-amber-200",
        },
        {
          id: "aula8-3",
          title: "Encapsulamento",
          description: "Proteção de dados",
          color: "from-amber-400 to-amber-200",
        },
        {
          id: "aula8-4",
          title: "Herança",
          description: "Compartilhamento de funcionalidades",
          color: "from-amber-400 to-amber-200",
        },
      ],
    },
    {
      id: "aula9",
      title: "Aula 9: Et Cetera",
      description: "Recursos avançados",
      color: "from-lime-500 to-lime-300",
      children: [
        {
          id: "aula9-1",
          title: "Sets e Comprehensions",
          description: "Coleções e sintaxe concisa",
          color: "from-lime-400 to-lime-200",
        },
        {
          id: "aula9-2",
          title: "Generators",
          description: "yield e iteradores",
          color: "from-lime-400 to-lime-200",
        },
        {
          id: "aula9-3",
          title: "Type Hints",
          description: "Anotações de tipo",
          color: "from-lime-400 to-lime-200",
        },
        {
          id: "aula9-4",
          title: "Docstrings",
          description: "Documentação de código",
          color: "from-lime-400 to-lime-200",
        },
      ],
    },
  ],
};
