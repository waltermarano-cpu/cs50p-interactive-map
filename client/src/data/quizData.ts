export interface QuizQuestion {
  id: string;
  aula: number;
  pergunta: string;
  opcoes: string[];
  resposta_correta: number;
  explicacao: string;
  dificuldade: 'fácil' | 'médio' | 'difícil';
}

export const quizQuestions: QuizQuestion[] = [
  // Aula 0: Funções e Variáveis
  {
    id: 'q0-1',
    aula: 0,
    pergunta: 'Qual função integrada do Python retorna o tipo de um objeto?',
    opcoes: ['type()', 'typeof()', 'get_type()', 'class()'],
    resposta_correta: 0,
    explicacao: 'A função type() retorna o tipo de um objeto em Python. Por exemplo: type(5) retorna <class "int">.',
    dificuldade: 'fácil',
  },
  {
    id: 'q0-2',
    aula: 0,
    pergunta: 'Como você define uma função em Python?',
    opcoes: ['function nome():', 'def nome():', 'func nome():', 'define nome():'],
    resposta_correta: 1,
    explicacao: 'Em Python, funções são definidas com a palavra-chave "def" seguida do nome e parênteses.',
    dificuldade: 'fácil',
  },
  {
    id: 'q0-3',
    aula: 0,
    pergunta: 'Qual é a diferença entre um parâmetro e um argumento?',
    opcoes: [
      'Não há diferença',
      'Parâmetro é na definição, argumento é na chamada',
      'Argumento é na definição, parâmetro é na chamada',
      'Parâmetros são apenas para números',
    ],
    resposta_correta: 1,
    explicacao: 'Parâmetros são variáveis na definição da função, enquanto argumentos são os valores passados ao chamar a função.',
    dificuldade: 'médio',
  },
  {
    id: 'q0-4',
    aula: 0,
    pergunta: 'O que a função len() faz?',
    opcoes: ['Retorna o comprimento de uma sequência', 'Retorna o maior valor', 'Retorna o menor valor', 'Retorna a média'],
    resposta_correta: 0,
    explicacao: 'len() retorna o número de elementos em uma sequência (string, lista, tupla, etc.).',
    dificuldade: 'fácil',
  },

  // Aula 1: Condicionais
  {
    id: 'q1-1',
    aula: 1,
    pergunta: 'Qual operador é usado para "e lógico" em Python?',
    opcoes: ['&&', '&', 'and', '||'],
    resposta_correta: 2,
    explicacao: 'Em Python, o operador "and" é usado para lógica AND. Exemplo: if x > 5 and x < 10:',
    dificuldade: 'fácil',
  },
  {
    id: 'q1-2',
    aula: 1,
    pergunta: 'O que a instrução elif faz?',
    opcoes: [
      'Encerra o programa',
      'Verifica uma condição alternativa se a anterior for falsa',
      'Repete um bloco de código',
      'Define uma função',
    ],
    resposta_correta: 1,
    explicacao: 'elif (else if) verifica uma condição alternativa se a condição if anterior for falsa.',
    dificuldade: 'fácil',
  },
  {
    id: 'q1-3',
    aula: 1,
    pergunta: 'Qual é o resultado de "not True"?',
    opcoes: ['True', 'False', 'None', 'Error'],
    resposta_correta: 1,
    explicacao: 'O operador "not" inverte o valor booleano. "not True" resulta em False.',
    dificuldade: 'fácil',
  },
  {
    id: 'q1-4',
    aula: 1,
    pergunta: 'Como você verifica se um valor está em uma lista?',
    opcoes: ['if valor in lista:', 'if lista.contains(valor):', 'if valor == lista:', 'if search(valor, lista):'],
    resposta_correta: 0,
    explicacao: 'O operador "in" verifica se um valor existe em uma sequência. Exemplo: if "Python" in linguagens:',
    dificuldade: 'médio',
  },

  // Aula 2: Loops
  {
    id: 'q2-1',
    aula: 2,
    pergunta: 'Qual é a diferença entre while e for?',
    opcoes: [
      'while é mais rápido',
      'for itera sobre sequências, while continua enquanto condição é verdadeira',
      'Não há diferença',
      'while é para strings, for é para números',
    ],
    resposta_correta: 1,
    explicacao: 'for é usado para iterar sobre sequências (listas, strings), enquanto while continua enquanto uma condição é verdadeira.',
    dificuldade: 'médio',
  },
  {
    id: 'q2-2',
    aula: 2,
    pergunta: 'O que a função range(5) produz?',
    opcoes: ['[0, 1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[5]'],
    resposta_correta: 1,
    explicacao: 'range(5) produz números de 0 a 4 (não inclui 5). Para incluir 5, use range(6).',
    dificuldade: 'fácil',
  },
  {
    id: 'q2-3',
    aula: 2,
    pergunta: 'Como você sai de um loop antes do final?',
    opcoes: ['exit()', 'break', 'stop', 'quit()'],
    resposta_correta: 1,
    explicacao: 'A instrução "break" sai imediatamente do loop, enquanto "continue" pula para a próxima iteração.',
    dificuldade: 'médio',
  },
  {
    id: 'q2-4',
    aula: 2,
    pergunta: 'Qual é o resultado de list(range(1, 6, 2))?',
    opcoes: ['[1, 2, 3, 4, 5, 6]', '[1, 3, 5]', '[2, 4, 6]', '[1, 2, 3, 4, 5]'],
    resposta_correta: 1,
    explicacao: 'range(1, 6, 2) começa em 1, vai até 5 (não inclui 6), com passo de 2. Resultado: [1, 3, 5].',
    dificuldade: 'médio',
  },

  // Aula 3: Exceções
  {
    id: 'q3-1',
    aula: 3,
    pergunta: 'Qual exceção é levantada quando você divide por zero?',
    opcoes: ['ValueError', 'ZeroDivisionError', 'MathError', 'DivisionError'],
    resposta_correta: 1,
    explicacao: 'ZeroDivisionError é levantada quando você tenta dividir um número por zero.',
    dificuldade: 'fácil',
  },
  {
    id: 'q3-2',
    aula: 3,
    pergunta: 'O que a cláusula "finally" faz?',
    opcoes: [
      'Encerra o programa',
      'Executa código que sempre roda, independente de exceção',
      'Define uma nova exceção',
      'Ignora todas as exceções',
    ],
    resposta_correta: 1,
    explicacao: 'finally garante que o bloco de código seja executado sempre, mesmo se houver uma exceção.',
    dificuldade: 'médio',
  },
  {
    id: 'q3-3',
    aula: 3,
    pergunta: 'Como você captura uma exceção em Python?',
    opcoes: ['catch Exception:', 'try/except', 'handle Exception:', 'trap Exception:'],
    resposta_correta: 1,
    explicacao: 'Em Python, usa-se try/except para capturar exceções. Exemplo: try: ... except ValueError: ...',
    dificuldade: 'fácil',
  },
  {
    id: 'q3-4',
    aula: 3,
    pergunta: 'Qual exceção é levantada quando você acessa um índice inválido em uma lista?',
    opcoes: ['IndexError', 'KeyError', 'ValueError', 'AttributeError'],
    resposta_correta: 0,
    explicacao: 'IndexError é levantada quando você tenta acessar um índice que não existe em uma sequência.',
    dificuldade: 'médio',
  },

  // Aula 4: Bibliotecas
  {
    id: 'q4-1',
    aula: 4,
    pergunta: 'Como você importa uma função específica de um módulo?',
    opcoes: ['import modulo.funcao', 'from modulo import funcao', 'include modulo.funcao', 'use modulo.funcao'],
    resposta_correta: 1,
    explicacao: 'Use "from modulo import funcao" para importar uma função específica. Exemplo: from math import sqrt',
    dificuldade: 'fácil',
  },
  {
    id: 'q4-2',
    aula: 4,
    pergunta: 'O que a biblioteca "random" faz?',
    opcoes: [
      'Gera números aleatórios',
      'Embaralha listas',
      'Ambas as opções',
      'Nenhuma das opções',
    ],
    resposta_correta: 2,
    explicacao: 'A biblioteca random pode gerar números aleatórios (random.random()) e embaralhar listas (random.shuffle()).',
    dificuldade: 'médio',
  },
  {
    id: 'q4-3',
    aula: 4,
    pergunta: 'Como você usa um alias ao importar um módulo?',
    opcoes: ['import modulo as alias', 'import modulo -> alias', 'import modulo = alias', 'import modulo alias'],
    resposta_correta: 0,
    explicacao: 'Use "as" para criar um alias. Exemplo: import numpy as np',
    dificuldade: 'fácil',
  },
  {
    id: 'q4-4',
    aula: 4,
    pergunta: 'Qual função da biblioteca "math" calcula a raiz quadrada?',
    opcoes: ['math.root()', 'math.sqrt()', 'math.square_root()', 'math.pow()'],
    resposta_correta: 1,
    explicacao: 'math.sqrt() calcula a raiz quadrada. Exemplo: math.sqrt(16) retorna 4.0',
    dificuldade: 'médio',
  },

  // Aula 5: Unit Tests
  {
    id: 'q5-1',
    aula: 5,
    pergunta: 'Qual é o objetivo de um teste unitário?',
    opcoes: [
      'Testar o programa inteiro',
      'Testar partes pequenas do código isoladamente',
      'Testar apenas a interface',
      'Testar o desempenho',
    ],
    resposta_correta: 1,
    explicacao: 'Testes unitários testam pequenas partes do código (funções) isoladamente para garantir que funcionam corretamente.',
    dificuldade: 'médio',
  },
  {
    id: 'q5-2',
    aula: 5,
    pergunta: 'Qual biblioteca Python é usada para testes unitários?',
    opcoes: ['testing', 'unittest', 'test', 'pytest (também válido)'],
    resposta_correta: 1,
    explicacao: 'A biblioteca "unittest" é usada para testes unitários em Python. Também pode usar pytest.',
    dificuldade: 'fácil',
  },
  {
    id: 'q5-3',
    aula: 5,
    pergunta: 'O que assertEqual faz em um teste?',
    opcoes: [
      'Verifica se dois valores são iguais',
      'Verifica se dois valores são diferentes',
      'Verifica se um valor é verdadeiro',
      'Verifica se um valor é nulo',
    ],
    resposta_correta: 0,
    explicacao: 'assertEqual verifica se dois valores são iguais. Se não forem, o teste falha.',
    dificuldade: 'fácil',
  },
  {
    id: 'q5-4',
    aula: 5,
    pergunta: 'Como você executa testes em Python?',
    opcoes: ['run tests', 'python -m unittest', 'test.py', 'python test()'],
    resposta_correta: 1,
    explicacao: 'Use "python -m unittest" para executar testes. Exemplo: python -m unittest test_modulo.py',
    dificuldade: 'médio',
  },

  // Aula 6: File I/O
  {
    id: 'q6-1',
    aula: 6,
    pergunta: 'Como você abre um arquivo em Python?',
    opcoes: ['open(arquivo)', 'open(arquivo, "r")', 'Ambas as opções', 'file.open(arquivo)'],
    resposta_correta: 2,
    explicacao: 'open(arquivo) abre em modo leitura por padrão. open(arquivo, "r") é explícito. Ambas funcionam.',
    dificuldade: 'fácil',
  },
  {
    id: 'q6-2',
    aula: 6,
    pergunta: 'Qual modo abre um arquivo para escrita?',
    opcoes: ['"r"', '"w"', '"a"', '"x"'],
    resposta_correta: 1,
    explicacao: '"w" abre para escrita (sobrescreve). "a" abre para append (adiciona ao final).',
    dificuldade: 'fácil',
  },
  {
    id: 'q6-3',
    aula: 6,
    pergunta: 'O que a instrução "with" faz com arquivos?',
    opcoes: [
      'Nada especial',
      'Garante que o arquivo seja fechado automaticamente',
      'Abre múltiplos arquivos',
      'Criptografa o arquivo',
    ],
    resposta_correta: 1,
    explicacao: 'with garante que o arquivo seja fechado automaticamente, mesmo se houver erro. Exemplo: with open(arquivo) as f:',
    dificuldade: 'médio',
  },
  {
    id: 'q6-4',
    aula: 6,
    pergunta: 'Qual método lê todas as linhas de um arquivo?',
    opcoes: ['read()', 'readline()', 'readlines()', 'read_all()'],
    resposta_correta: 2,
    explicacao: 'readlines() retorna uma lista de todas as linhas. read() retorna uma string, readline() retorna uma linha.',
    dificuldade: 'médio',
  },

  // Aula 7: Regex
  {
    id: 'q7-1',
    aula: 7,
    pergunta: 'Qual biblioteca Python é usada para expressões regulares?',
    opcoes: ['regex', 're', 'regular', 'pattern'],
    resposta_correta: 1,
    explicacao: 'A biblioteca "re" é usada para expressões regulares em Python.',
    dificuldade: 'fácil',
  },
  {
    id: 'q7-2',
    aula: 7,
    pergunta: 'O que o padrão "." representa em regex?',
    opcoes: ['Um ponto literal', 'Qualquer caractere', 'Fim da string', 'Espaço'],
    resposta_correta: 1,
    explicacao: '"." em regex representa qualquer caractere (exceto quebra de linha por padrão).',
    dificuldade: 'médio',
  },
  {
    id: 'q7-3',
    aula: 7,
    pergunta: 'O que o padrão "+" significa em regex?',
    opcoes: ['Um ou mais', 'Zero ou mais', 'Exatamente um', 'Adição'],
    resposta_correta: 0,
    explicacao: '"+" significa uma ou mais ocorrências. "*" significa zero ou mais. "?" significa zero ou um.',
    dificuldade: 'médio',
  },
  {
    id: 'q7-4',
    aula: 7,
    pergunta: 'Como você encontra todas as correspondências em regex?',
    opcoes: ['re.find()', 're.findall()', 're.search()', 're.match()'],
    resposta_correta: 1,
    explicacao: 're.findall() retorna uma lista de todas as correspondências. re.search() retorna a primeira.',
    dificuldade: 'médio',
  },

  // Aula 8: OOP
  {
    id: 'q8-1',
    aula: 8,
    pergunta: 'Como você define uma classe em Python?',
    opcoes: ['class Nome:', 'class Nome():', 'def Nome():', 'type Nome:'],
    resposta_correta: 0,
    explicacao: 'Classes são definidas com "class Nome:" (com ou sem parênteses vazios).',
    dificuldade: 'fácil',
  },
  {
    id: 'q8-2',
    aula: 8,
    pergunta: 'O que é o método __init__?',
    opcoes: [
      'Um método normal',
      'O construtor da classe, chamado ao criar uma instância',
      'Um método privado',
      'Um método estático',
    ],
    resposta_correta: 1,
    explicacao: '__init__ é o construtor, chamado automaticamente ao criar uma nova instância da classe.',
    dificuldade: 'médio',
  },
  {
    id: 'q8-3',
    aula: 8,
    pergunta: 'O que "self" representa em uma classe?',
    opcoes: [
      'Uma variável global',
      'A instância atual da classe',
      'Uma função',
      'Um módulo',
    ],
    resposta_correta: 1,
    explicacao: '"self" representa a instância atual da classe. É o primeiro parâmetro em métodos de instância.',
    dificuldade: 'médio',
  },
  {
    id: 'q8-4',
    aula: 8,
    pergunta: 'O que é herança em OOP?',
    opcoes: [
      'Copiar código de outro arquivo',
      'Uma classe herdar atributos e métodos de outra',
      'Importar uma biblioteca',
      'Criar múltiplas instâncias',
    ],
    resposta_correta: 1,
    explicacao: 'Herança permite que uma classe herde atributos e métodos de outra classe (superclasse).',
    dificuldade: 'médio',
  },

  // Aula 9: Et Cetera
  {
    id: 'q9-1',
    aula: 9,
    pergunta: 'O que é uma list comprehension?',
    opcoes: [
      'Uma lista de comentários',
      'Uma forma concisa de criar listas',
      'Uma função que comprime listas',
      'Um tipo de loop',
    ],
    resposta_correta: 1,
    explicacao: 'List comprehension é uma forma concisa de criar listas. Exemplo: [x*2 for x in range(5)]',
    dificuldade: 'médio',
  },
  {
    id: 'q9-2',
    aula: 9,
    pergunta: 'O que a função map() faz?',
    opcoes: [
      'Cria um mapa',
      'Aplica uma função a cada elemento de uma sequência',
      'Encontra um elemento',
      'Ordena elementos',
    ],
    resposta_correta: 1,
    explicacao: 'map() aplica uma função a cada elemento de uma sequência. Exemplo: list(map(str.upper, ["a", "b"]))',
    dificuldade: 'médio',
  },
  {
    id: 'q9-3',
    aula: 9,
    pergunta: 'O que é uma lambda em Python?',
    opcoes: [
      'Uma variável',
      'Uma função anônima de uma linha',
      'Um tipo de dado',
      'Uma biblioteca',
    ],
    resposta_correta: 1,
    explicacao: 'Lambda é uma função anônima. Exemplo: lambda x: x*2 é equivalente a def f(x): return x*2',
    dificuldade: 'médio',
  },
  {
    id: 'q9-4',
    aula: 9,
    pergunta: 'O que a função filter() faz?',
    opcoes: [
      'Remove duplicatas',
      'Filtra elementos baseado em uma condição',
      'Ordena elementos',
      'Conta elementos',
    ],
    resposta_correta: 1,
    explicacao: 'filter() retorna elementos que satisfazem uma condição. Exemplo: list(filter(lambda x: x > 5, [1,6,3,8]))',
    dificuldade: 'médio',
  },
];

export function getQuestionsByAula(aula: number): QuizQuestion[] {
  return quizQuestions.filter((q) => q.aula === aula);
}

export function getRandomQuestions(count: number, aula?: number): QuizQuestion[] {
  let questions = aula !== undefined ? getQuestionsByAula(aula) : quizQuestions;
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
