export interface ConceptDetail {
  id: string;
  title: string;
  description: string;
  explanation: string;
  codeExample: string;
  keyPoints: string[];
}

export const conceptDetails: Record<string, ConceptDetail> = {
  // Aula 0
  "aula0-1": {
    id: "aula0-1",
    title: "Funções Integradas",
    description: "print(), input(), len()",
    explanation:
      "Funções integradas são ações que Python já conhece como executar. A função print() exibe texto na tela, input() captura dados do usuário, e len() retorna o comprimento de uma sequência.",
    codeExample: `# Função print() - exibe texto
print("Olá, mundo!")

# Função input() - captura entrada do usuário
nome = input("Qual é seu nome? ")

# Função len() - retorna o comprimento
comprimento = len("Python")
print(comprimento)  # Saída: 6`,
    keyPoints: [
      "print() exibe dados na saída padrão",
      "input() captura dados do usuário como string",
      "len() funciona com strings, listas e outros tipos",
    ],
  },
  "aula0-2": {
    id: "aula0-2",
    title: "Tipos de Dados",
    description: "str, int, float",
    explanation:
      "Python possui diferentes tipos de dados. Strings (str) são sequências de texto, inteiros (int) são números sem casas decimais, e floats são números com casas decimais.",
    codeExample: `# String - texto
nome = "Alice"
print(type(nome))  # <class 'str'>

# Integer - número inteiro
idade = 25
print(type(idade))  # <class 'int'>

# Float - número decimal
altura = 1.75
print(type(altura))  # <class 'float'>

# Conversão de tipos
numero_str = "42"
numero_int = int(numero_str)
print(numero_int + 8)  # Saída: 50`,
    keyPoints: [
      "str para texto entre aspas",
      "int para números inteiros",
      "float para números com decimais",
      "Use int(), str(), float() para converter tipos",
    ],
  },
  "aula0-3": {
    id: "aula0-3",
    title: "Variáveis e F-strings",
    description: "Armazenamento e formatação",
    explanation:
      "Variáveis são contêineres que armazenam valores. F-strings (formatted string literals) permitem inserir variáveis diretamente em strings usando chaves {}.",
    codeExample: `# Atribuição de variável
nome = "Bob"
idade = 30

# Concatenação tradicional
mensagem = "Olá, " + nome + "!"

# F-string (forma moderna)
mensagem_f = f"Olá, {nome}! Você tem {idade} anos."
print(mensagem_f)

# F-string com expressões
resultado = f"Próximo ano você terá {idade + 1} anos."
print(resultado)`,
    keyPoints: [
      "Variáveis armazenam valores com =",
      "F-strings começam com f\"...\"",
      "Use {} para inserir variáveis em f-strings",
      "F-strings permitem expressões dentro das chaves",
    ],
  },
  "aula0-4": {
    id: "aula0-4",
    title: "Definição de Funções",
    description: "def, main(), return",
    explanation:
      "Funções são blocos de código reutilizáveis. Use def para defini-las, main() é a função principal por convenção, e return retorna um valor.",
    codeExample: `# Definir uma função simples
def saudar(nome):
    print(f"Olá, {nome}!")

# Chamar a função
saudar("Carlos")

# Função com return
def quadrado(numero):
    return numero ** 2

resultado = quadrado(5)
print(resultado)  # Saída: 25

# Função main() por convenção
def main():
    nome = input("Seu nome: ")
    saudar(nome)

main()`,
    keyPoints: [
      "Use def para definir funções",
      "Indentação é obrigatória no corpo da função",
      "return encerra a função e retorna um valor",
      "main() é a função principal por convenção",
    ],
  },

  // Aula 1
  "aula1-1": {
    id: "aula1-1",
    title: "Estruturas if/elif/else",
    description: "Ramificação de fluxo",
    explanation:
      "Estruturas condicionais permitem que o programa execute diferentes blocos de código baseado em condições. if testa a primeira condição, elif testa alternativas, e else é o padrão.",
    codeExample: `# Estrutura if/elif/else
idade = 18

if idade < 13:
    print("Você é uma criança")
elif idade < 18:
    print("Você é um adolescente")
elif idade < 65:
    print("Você é um adulto")
else:
    print("Você é um idoso")

# Forma simplificada com uma linha
status = "maior" if idade >= 18 else "menor"
print(status)`,
    keyPoints: [
      "if testa a primeira condição",
      "elif testa condições alternativas",
      "else é executado se nenhuma condição for verdadeira",
      "Indentação define o bloco de código",
    ],
  },
  "aula1-2": {
    id: "aula1-2",
    title: "Operadores Lógicos",
    description: "and, or, not",
    explanation:
      "Operadores lógicos combinam múltiplas condições. and retorna True se ambas forem verdadeiras, or se pelo menos uma for verdadeira, e not inverte o resultado.",
    codeExample: `# Operador and - ambas devem ser verdadeiras
idade = 25
tem_carteira = True

if idade >= 18 and tem_carteira:
    print("Pode dirigir")

# Operador or - pelo menos uma deve ser verdadeira
tem_dinheiro = False
tem_cartao = True

if tem_dinheiro or tem_cartao:
    print("Pode comprar")

# Operador not - inverte o resultado
chovendo = False

if not chovendo:
    print("Vamos ao parque!")`,
    keyPoints: [
      "and retorna True se ambas as condições forem True",
      "or retorna True se pelo menos uma for True",
      "not inverte o valor booleano",
      "Combine operadores para lógica complexa",
    ],
  },
  "aula1-3": {
    id: "aula1-3",
    title: "Operador Modulo",
    description: "% para paridade",
    explanation:
      "O operador modulo (%) retorna o resto da divisão. É útil para verificar se um número é par ou ímpar, ou para outras operações de resto.",
    codeExample: `# Verificar paridade
numero = 10

if numero % 2 == 0:
    print("Número é par")
else:
    print("Número é ímpar")

# Outros usos do modulo
print(17 % 5)  # Saída: 2 (resto de 17 ÷ 5)
print(20 % 4)  # Saída: 0 (divisão exata)

# Verificar múltiplos
if numero % 3 == 0:
    print("É múltiplo de 3")`,
    keyPoints: [
      "% retorna o resto da divisão",
      "numero % 2 == 0 verifica se é par",
      "numero % 2 == 1 verifica se é ímpar",
      "Útil para encontrar múltiplos",
    ],
  },
  "aula1-4": {
    id: "aula1-4",
    title: "Match Statement",
    description: "Pattern matching",
    explanation:
      "Match é uma forma moderna de comparar um valor com múltiplos padrões. Funciona como um switch em outras linguagens, mas com recursos mais poderosos.",
    codeExample: `# Match statement (Python 3.10+)
dia = 3

match dia:
    case 1:
        print("Segunda-feira")
    case 2:
        print("Terça-feira")
    case 3:
        print("Quarta-feira")
    case _:
        print("Dia inválido")

# Com múltiplos valores
fruta = "maçã"

match fruta:
    case "maçã" | "pera" | "uva":
        print("É uma fruta")
    case "cenoura" | "brócolis":
        print("É um vegetal")
    case _:
        print("Alimento desconhecido")`,
    keyPoints: [
      "match compara um valor com múltiplos casos",
      "case define cada padrão",
      "_ é o padrão padrão (como else)",
      "| permite múltiplos valores no mesmo case",
    ],
  },

  // Aula 2
  "aula2-1": {
    id: "aula2-1",
    title: "While Loop",
    description: "Repetição condicional",
    explanation:
      "While loop repete um bloco de código enquanto uma condição for verdadeira. É útil para validação de entrada e repetições baseadas em condições.",
    codeExample: `# While loop simples
contador = 0
while contador < 5:
    print(contador)
    contador += 1

# Validação de entrada
while True:
    idade = input("Digite sua idade: ")
    if idade.isdigit():
        idade = int(idade)
        if 0 < idade < 150:
            print(f"Idade válida: {idade}")
            break
    print("Entrada inválida, tente novamente")

# While com else
numero = 0
while numero < 3:
    print(numero)
    numero += 1
else:
    print("Loop completado")`,
    keyPoints: [
      "while repete enquanto a condição for True",
      "break sai do loop imediatamente",
      "continue pula para a próxima iteração",
      "else executa após o loop terminar normalmente",
    ],
  },
  "aula2-2": {
    id: "aula2-2",
    title: "For Loop",
    description: "Iteração sobre sequências",
    explanation:
      "For loop itera sobre sequências como listas, strings ou ranges. É a forma preferida quando você sabe quantas vezes quer repetir.",
    codeExample: `# For loop com range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# For loop com lista
frutas = ["maçã", "banana", "laranja"]
for fruta in frutas:
    print(fruta)

# For loop com string
for letra in "Python":
    print(letra)

# For com range(inicio, fim, passo)
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# For com else
for numero in range(3):
    print(numero)
else:
    print("Loop completado")`,
    keyPoints: [
      "for itera sobre sequências",
      "range(n) gera números de 0 a n-1",
      "range(inicio, fim, passo) controla a iteração",
      "Variável de loop pode ter qualquer nome",
    ],
  },
  "aula2-3": {
    id: "aula2-3",
    title: "Estruturas de Dados",
    description: "list, dict, range()",
    explanation:
      "Listas armazenam múltiplos itens em ordem, dicionários armazenam pares chave-valor, e range() gera sequências numéricas.",
    codeExample: `# Lista - coleção ordenada
numeros = [1, 2, 3, 4, 5]
print(numeros[0])  # Acesso por índice
numeros.append(6)  # Adicionar item

# Dicionário - pares chave-valor
pessoa = {
    "nome": "Alice",
    "idade": 30,
    "cidade": "São Paulo"
}
print(pessoa["nome"])  # Acesso por chave

# Range - sequência numérica
for i in range(3):
    print(i)

# Iteração sobre dicionário
for chave, valor in pessoa.items():
    print(f"{chave}: {valor}")`,
    keyPoints: [
      "Listas usam [] e são mutáveis",
      "Dicionários usam {} e armazenam chave-valor",
      "range() gera sequências numéricas",
      "Índices começam em 0",
    ],
  },
  "aula2-4": {
    id: "aula2-4",
    title: "Nesting e Abstração",
    description: "Loops aninhados",
    explanation:
      "Loops aninhados permitem iterar sobre múltiplas dimensões. Abstração significa mover lógica para funções para melhorar legibilidade.",
    codeExample: `# Loops aninhados - criar uma grade
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()  # Nova linha

# Abstração - mover lógica para funções
def imprimir_linha(tamanho):
    for _ in range(tamanho):
        print("#", end="")
    print()

def imprimir_quadrado(tamanho):
    for _ in range(tamanho):
        imprimir_linha(tamanho)

imprimir_quadrado(4)`,
    keyPoints: [
      "Loops aninhados permitem múltiplas dimensões",
      "Indentação define o nível de aninhamento",
      "Abstrair em funções melhora legibilidade",
      "Evite aninhamento profundo (máximo 3 níveis)",
    ],
  },

  // Aula 3
  "aula3-1": {
    id: "aula3-1",
    title: "Try/Except/Else",
    description: "Captura de erros",
    explanation:
      "Try/except permite capturar e tratar erros sem que o programa trave. Try contém o código que pode falhar, except trata o erro, e else executa se não houver erro.",
    codeExample: `# Try/except básico
try:
    numero = int(input("Digite um número: "))
    resultado = 10 / numero
    print(resultado)
except ValueError:
    print("Erro: Entrada não é um número válido")
except ZeroDivisionError:
    print("Erro: Não é possível dividir por zero")

# Try/except/else
try:
    arquivo = open("dados.txt")
except FileNotFoundError:
    print("Arquivo não encontrado")
else:
    print("Arquivo aberto com sucesso")
    arquivo.close()`,
    keyPoints: [
      "try contém código que pode falhar",
      "except captura e trata erros específicos",
      "else executa se nenhum erro ocorrer",
      "Sempre capture erros específicos, não genéricos",
    ],
  },
  "aula3-2": {
    id: "aula3-2",
    title: "Tipos de Exceções",
    description: "ValueError, TypeError",
    explanation:
      "Exceções são erros que ocorrem durante a execução. ValueError ocorre com valores inválidos, TypeError com tipos incompatíveis, e há muitas outras.",
    codeExample: `# ValueError - valor inválido
try:
    numero = int("abc")
except ValueError:
    print("Não é um número válido")

# TypeError - tipo incompatível
try:
    resultado = "texto" + 5
except TypeError:
    print("Não pode somar string com número")

# IndexError - índice fora do alcance
try:
    lista = [1, 2, 3]
    print(lista[10])
except IndexError:
    print("Índice não existe")

# KeyError - chave não existe
try:
    dicionario = {"nome": "Alice"}
    print(dicionario["idade"])
except KeyError:
    print("Chave não existe")`,
    keyPoints: [
      "ValueError: valor inválido para o tipo",
      "TypeError: tipo de dado incompatível",
      "IndexError: índice fora do alcance",
      "KeyError: chave não existe no dicionário",
    ],
  },
  "aula3-3": {
    id: "aula3-3",
    title: "Validação de Entrada",
    description: "While True com try/except",
    explanation:
      "Combinar while True com try/except permite validar entrada do usuário até que seja válida, garantindo dados corretos.",
    codeExample: `# Validação de entrada robusta
def obter_idade():
    while True:
        try:
            idade = int(input("Digite sua idade: "))
            if 0 < idade < 150:
                return idade
            else:
                print("Idade deve estar entre 0 e 150")
        except ValueError:
            print("Entrada inválida. Digite um número")

idade = obter_idade()
print(f"Sua idade é {idade}")

# Validação de múltiplos campos
def obter_dados():
    while True:
        try:
            nome = input("Nome: ")
            if len(nome) < 2:
                print("Nome muito curto")
                continue
            idade = int(input("Idade: "))
            return nome, idade
        except ValueError:
            print("Dados inválidos")

nome, idade = obter_dados()`,
    keyPoints: [
      "while True cria um loop infinito",
      "break sai do loop quando dados são válidos",
      "try/except captura erros de entrada",
      "Sempre valide dados do usuário",
    ],
  },

  // Aula 4
  "aula4-1": {
    id: "aula4-1",
    title: "Módulos Padrão",
    description: "random, statistics, sys",
    explanation:
      "Módulos padrão são bibliotecas integradas ao Python. random gera valores aleatórios, statistics calcula estatísticas, e sys interage com o sistema.",
    codeExample: `# Módulo random
import random

numero_aleatorio = random.randint(1, 10)
escolha = random.choice(["maçã", "banana", "laranja"])
lista_embaralhada = random.shuffle([1, 2, 3, 4, 5])

# Módulo statistics
import statistics

dados = [10, 20, 30, 40, 50]
media = statistics.mean(dados)
mediana = statistics.median(dados)
desvio = statistics.stdev(dados)

# Módulo sys
import sys

print(sys.version)  # Versão do Python
print(sys.argv)     # Argumentos da linha de comando
print(sys.platform) # Sistema operacional`,
    keyPoints: [
      "import traz um módulo para o programa",
      "random.randint(a, b) gera número entre a e b",
      "random.choice() escolhe um item aleatório",
      "statistics calcula média, mediana, desvio",
    ],
  },
  "aula4-2": {
    id: "aula4-2",
    title: "Pacotes Externos",
    description: "pip, requests, cowsay",
    explanation:
      "Pacotes externos são bibliotecas criadas por terceiros. Use pip para instalar, requests para requisições HTTP, e cowsay para exibir mensagens criativas.",
    codeExample: `# Instalar pacote (no terminal)
# pip install requests

# Usar requests para API
import requests

resposta = requests.get("https://api.github.com/users/github")
dados = resposta.json()
print(dados["name"])

# Usar cowsay
import cowsay

cowsay.cow("Olá, mundo!")

# Verificar versão
import requests
print(requests.__version__)`,
    keyPoints: [
      "pip install <pacote> instala pacotes",
      "import traz o pacote para o código",
      "requests faz requisições HTTP",
      "Procure documentação no PyPI",
    ],
  },
  "aula4-3": {
    id: "aula4-3",
    title: "APIs e JSON",
    description: "Consumo de dados web",
    explanation:
      "APIs permitem acessar dados de serviços web. JSON é um formato de dados legível. Use requests para buscar dados e json para processá-los.",
    codeExample: `# Consumir uma API e processar JSON
import requests
import json

# Fazer requisição
url = "https://api.github.com/users/octocat"
resposta = requests.get(url)

# Verificar status
if resposta.status_code == 200:
    # Converter para dicionário
    dados = resposta.json()
    
    # Acessar dados
    print(f"Nome: {dados['name']}")
    print(f"Repositórios: {dados['public_repos']}")
else:
    print(f"Erro: {resposta.status_code}")

# Processar JSON manualmente
json_string = '{"nome": "Alice", "idade": 30}'
dados = json.loads(json_string)
print(dados["nome"])`,
    keyPoints: [
      "requests.get() faz requisição HTTP",
      "resposta.json() converte JSON para dicionário",
      "Sempre verifique o status_code",
      "json.loads() converte string JSON",
    ],
  },
  "aula4-4": {
    id: "aula4-4",
    title: "Argumentos de Linha de Comando",
    description: "sys.argv",
    explanation:
      "sys.argv permite passar argumentos ao programa pela linha de comando. O primeiro elemento é o nome do arquivo, os demais são os argumentos.",
    codeExample: `# Acessar argumentos da linha de comando
import sys

print(sys.argv)  # Lista de argumentos

# Exemplo: python programa.py Alice 30
# sys.argv = ['programa.py', 'Alice', '30']

# Processar argumentos
if len(sys.argv) > 1:
    nome = sys.argv[1]
    print(f"Olá, {nome}!")
else:
    print("Uso: python programa.py <nome>")

# Argumentos múltiplos
if len(sys.argv) == 3:
    nome = sys.argv[1]
    idade = int(sys.argv[2])
    print(f"{nome} tem {idade} anos")`,
    keyPoints: [
      "sys.argv é uma lista de argumentos",
      "sys.argv[0] é o nome do arquivo",
      "sys.argv[1:] são os argumentos passados",
      "Sempre valide o número de argumentos",
    ],
  },

  // Aula 5
  "aula5-1": {
    id: "aula5-1",
    title: "Assert",
    description: "Verificação de condições",
    explanation:
      "Assert verifica se uma condição é verdadeira. Se for falsa, dispara um erro. É útil para testes e validação de pressupostos.",
    codeExample: `# Assert básico
def dividir(a, b):
    assert b != 0, "Divisor não pode ser zero"
    return a / b

resultado = dividir(10, 2)
print(resultado)

# Assert em testes
def quadrado(x):
    return x ** 2

# Testes
assert quadrado(2) == 4
assert quadrado(3) == 9
assert quadrado(-2) == 4
print("Todos os testes passaram!")

# Assert com mensagem
def adicionar_idade(idade):
    assert isinstance(idade, int), "Idade deve ser um inteiro"
    assert 0 < idade < 150, "Idade inválida"
    return idade + 1`,
    keyPoints: [
      "assert verifica se uma condição é True",
      "Dispara AssertionError se for False",
      "Use para validar pressupostos",
      "Útil em testes e desenvolvimento",
    ],
  },
  "aula5-2": {
    id: "aula5-2",
    title: "Framework Pytest",
    description: "Automação de testes",
    explanation:
      "Pytest é um framework que automatiza a execução de testes. Permite organizar testes em arquivos separados e executá-los facilmente.",
    codeExample: `# Arquivo: test_calculadora.py
def soma(a, b):
    return a + b

def test_soma_positivos():
    assert soma(2, 3) == 5

def test_soma_negativos():
    assert soma(-2, -3) == -5

def test_soma_zero():
    assert soma(0, 5) == 5

# Executar no terminal:
# pytest test_calculadora.py
# pytest test_calculadora.py -v  (verbose)

# Teste com exceção
def dividir(a, b):
    if b == 0:
        raise ValueError("Divisor não pode ser zero")
    return a / b

def test_divisao_por_zero():
    with pytest.raises(ValueError):
        dividir(10, 0)`,
    keyPoints: [
      "Arquivo de teste começa com test_",
      "Funções de teste começam com test_",
      "pytest descobre e executa testes automaticamente",
      "Use -v para saída detalhada",
    ],
  },
  "aula5-3": {
    id: "aula5-3",
    title: "Cobertura de Testes",
    description: "Casos de borda",
    explanation:
      "Cobertura de testes significa testar todos os caminhos do código. Casos de borda são situações extremas que podem causar problemas.",
    codeExample: `# Função para testar
def validar_email(email):
    if "@" not in email:
        return False
    if "." not in email.split("@")[1]:
        return False
    return True

# Testes abrangentes
def test_email_valido():
    assert validar_email("user@example.com") == True

def test_email_sem_arroba():
    assert validar_email("userexample.com") == False

def test_email_sem_ponto():
    assert validar_email("user@example") == False

def test_email_vazio():
    assert validar_email("") == False

def test_email_apenas_arroba():
    assert validar_email("@") == False

# Casos de borda cobertos:
# - Email válido
# - Sem @
# - Sem ponto no domínio
# - String vazia
# - Apenas @`,
    keyPoints: [
      "Teste casos normais e extremos",
      "Casos de borda: valores vazios, nulos, negativos",
      "Teste limites: 0, -1, valores muito grandes",
      "Cobertura alta = código mais confiável",
    ],
  },

  // Aula 6
  "aula6-1": {
    id: "aula6-1",
    title: "Leitura e Escrita",
    description: "open(), with statement",
    explanation:
      "open() abre arquivos, with garante que sejam fechados corretamente. Modos: 'r' (leitura), 'w' (escrita), 'a' (append).",
    codeExample: `# Leitura simples
with open("dados.txt", "r") as arquivo:
    conteudo = arquivo.read()
    print(conteudo)

# Leitura linha por linha
with open("dados.txt", "r") as arquivo:
    for linha in arquivo:
        print(linha.strip())

# Escrita
with open("saida.txt", "w") as arquivo:
    arquivo.write("Primeira linha\\n")
    arquivo.write("Segunda linha\\n")

# Append (adicionar)
with open("saida.txt", "a") as arquivo:
    arquivo.write("Terceira linha\\n")

# Sem with (menos seguro)
arquivo = open("dados.txt", "r")
conteudo = arquivo.read()
arquivo.close()`,
    keyPoints: [
      "with open() garante fechamento automático",
      "'r' para leitura, 'w' para escrita, 'a' para append",
      "read() lê todo o arquivo",
      "readlines() retorna lista de linhas",
    ],
  },
  "aula6-2": {
    id: "aula6-2",
    title: "Formatos CSV",
    description: "DictReader, DictWriter",
    explanation:
      "CSV (Comma-Separated Values) é um formato tabular. DictReader lê como dicionários, DictWriter escreve como dicionários.",
    codeExample: `import csv

# Leitura com DictReader
with open("pessoas.csv", "r") as arquivo:
    leitor = csv.DictReader(arquivo)
    for linha in leitor:
        print(f"{linha['nome']}: {linha['idade']}")

# Escrita com DictWriter
with open("saida.csv", "w", newline="") as arquivo:
    campos = ["nome", "idade", "cidade"]
    escritor = csv.DictWriter(arquivo, fieldnames=campos)
    
    escritor.writeheader()
    escritor.writerow({"nome": "Alice", "idade": 30, "cidade": "SP"})
    escritor.writerow({"nome": "Bob", "idade": 25, "cidade": "RJ"})

# Arquivo CSV de exemplo:
# nome,idade,cidade
# Alice,30,São Paulo
# Bob,25,Rio de Janeiro`,
    keyPoints: [
      "csv.DictReader lê como dicionários",
      "csv.DictWriter escreve como dicionários",
      "fieldnames define as colunas",
      "writeheader() escreve a primeira linha",
    ],
  },
  "aula6-3": {
    id: "aula6-3",
    title: "Arquivos Binários",
    description: "Pillow para imagens",
    explanation:
      "Arquivos binários como imagens requerem bibliotecas especiais. Pillow é a biblioteca padrão para manipular imagens em Python.",
    codeExample: `from PIL import Image

# Abrir uma imagem
imagem = Image.open("foto.jpg")

# Obter informações
print(imagem.size)      # (largura, altura)
print(imagem.format)    # Formato (JPEG, PNG, etc)

# Redimensionar
imagem_pequena = imagem.resize((100, 100))
imagem_pequena.save("foto_pequena.jpg")

# Rotacionar
imagem_rotacionada = imagem.rotate(90)
imagem_rotacionada.save("foto_rotacionada.jpg")

# Converter formato
imagem.save("foto.png")

# Criar imagem nova
nova_imagem = Image.new("RGB", (200, 200), color="red")
nova_imagem.save("quadrado_vermelho.png")`,
    keyPoints: [
      "from PIL import Image para usar Pillow",
      "Image.open() abre um arquivo de imagem",
      "resize() muda o tamanho",
      "rotate() rotaciona a imagem",
    ],
  },

  // Aula 7
  "aula7-1": {
    id: "aula7-1",
    title: "Módulo re",
    description: "search, match, fullmatch",
    explanation:
      "O módulo re permite buscar padrões em strings. search() encontra a primeira ocorrência, match() verifica o início, fullmatch() verifica a string inteira.",
    codeExample: `import re

texto = "Meu email é alice@example.com"

# search() - encontra primeira ocorrência
resultado = re.search(r"\\w+@\\w+\\.\\w+", texto)
if resultado:
    print(f"Email encontrado: {resultado.group()}")

# match() - verifica o início
if re.match(r"Meu", texto):
    print("Começa com 'Meu'")

# fullmatch() - verifica a string inteira
if re.fullmatch(r"\\d{3}-\\d{3}-\\d{4}", "123-456-7890"):
    print("Telefone válido")

# findall() - encontra todas as ocorrências
emails = re.findall(r"\\w+@\\w+\\.\\w+", 
    "alice@example.com e bob@test.org")
print(emails)`,
    keyPoints: [
      "re.search() encontra primeira ocorrência",
      "re.match() verifica o início da string",
      "re.fullmatch() verifica a string inteira",
      "re.findall() retorna todas as ocorrências",
    ],
  },
  "aula7-2": {
    id: "aula7-2",
    title: "Símbolos Regex",
    description: "., *, +, ?, ^, $, []",
    explanation:
      "Símbolos regex definem padrões. . é qualquer caractere, * é 0 ou mais, + é 1 ou mais, ? é 0 ou 1, ^ é início, $ é fim, [] é conjunto.",
    codeExample: `import re

# . - qualquer caractere
re.search(r"a.c", "abc")  # Encontra
re.search(r"a.c", "adc")  # Encontra

# * - 0 ou mais
re.search(r"ab*c", "ac")   # Encontra (0 b's)
re.search(r"ab*c", "abc")  # Encontra (1 b)
re.search(r"ab*c", "abbc") # Encontra (2 b's)

# + - 1 ou mais
re.search(r"ab+c", "ac")   # Não encontra
re.search(r"ab+c", "abc")  # Encontra

# ? - 0 ou 1
re.search(r"ab?c", "ac")   # Encontra
re.search(r"ab?c", "abc")  # Encontra

# ^ - início
re.search(r"^Python", "Python é ótimo")  # Encontra

# $ - fim
re.search(r"fim$", "Este é o fim")  # Encontra

# [] - conjunto de caracteres
re.search(r"[aeiou]", "hello")  # Encontra vogal
re.search(r"[0-9]", "abc123")   # Encontra dígito`,
    keyPoints: [
      ". = qualquer caractere",
      "* = 0 ou mais repetições",
      "+ = 1 ou mais repetições",
      "? = 0 ou 1 repetição",
      "^ = início da string",
      "$ = fim da string",
    ],
  },
  "aula7-3": {
    id: "aula7-3",
    title: "Validação e Extração",
    description: "Grupos de captura",
    explanation:
      "Grupos de captura permitem extrair partes específicas de uma string. Use parênteses () para definir grupos e group() para acessá-los.",
    codeExample: `import re

# Validar email
padrao_email = r"^[\\w.-]+@[\\w.-]+\\.\\w+$"
email = "alice@example.com"

if re.fullmatch(padrao_email, email):
    print("Email válido")

# Extrair partes com grupos
texto = "Data: 2024-02-17"
padrao = r"Data: (\\d{4})-(\\d{2})-(\\d{2})"
resultado = re.search(padrao, texto)

if resultado:
    ano = resultado.group(1)
    mes = resultado.group(2)
    dia = resultado.group(3)
    print(f"{dia}/{mes}/{ano}")

# Substituir com regex
texto = "Olá mundo"
novo = re.sub(r"mundo", "Python", texto)
print(novo)  # Olá Python

# Dividir com regex
texto = "maçã,banana;laranja"
frutas = re.split(r"[,;]", texto)
print(frutas)  # ['maçã', 'banana', 'laranja']`,
    keyPoints: [
      "() define grupos de captura",
      "group(1) acessa o primeiro grupo",
      "group(0) é a correspondência inteira",
      "re.sub() substitui padrões",
    ],
  },

  // Aula 8
  "aula8-1": {
    id: "aula8-1",
    title: "Classes e Objetos",
    description: "Moldes e instâncias",
    explanation:
      "Classes são moldes para criar objetos. Objetos são instâncias de classes que contêm dados (atributos) e ações (métodos).",
    codeExample: `# Definir uma classe
class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
    
    def saudar(self):
        print(f"Olá, meu nome é {self.nome}")

# Criar objetos (instâncias)
alice = Pessoa("Alice", 30)
bob = Pessoa("Bob", 25)

# Acessar atributos
print(alice.nome)   # Alice
print(bob.idade)    # 25

# Chamar métodos
alice.saudar()      # Olá, meu nome é Alice
bob.saudar()        # Olá, meu nome é Bob`,
    keyPoints: [
      "class define uma classe",
      "__init__ é o construtor",
      "self refere-se à instância",
      "Métodos são funções dentro da classe",
    ],
  },
  "aula8-2": {
    id: "aula8-2",
    title: "Métodos Especiais",
    description: "__init__, @property",
    explanation:
      "__init__ inicializa objetos, @property permite acessar métodos como atributos, @setter permite modificar valores com validação.",
    codeExample: `class Conta:
    def __init__(self, titular, saldo):
        self.titular = titular
        self._saldo = saldo
    
    @property
    def saldo(self):
        return self._saldo
    
    @saldo.setter
    def saldo(self, valor):
        if valor < 0:
            raise ValueError("Saldo não pode ser negativo")
        self._saldo = valor
    
    def __str__(self):
        return f"Conta de {self.titular}: R$ {self._saldo}"

# Usar
conta = Conta("Alice", 1000)
print(conta.saldo)      # 1000 (usa @property)
conta.saldo = 1500      # usa @setter
print(conta)            # Usa __str__`,
    keyPoints: [
      "@property permite ler um atributo como método",
      "@setter permite modificar com validação",
      "__str__ define representação em string",
      "_ (underscore) indica atributo privado",
    ],
  },
  "aula8-3": {
    id: "aula8-3",
    title: "Encapsulamento",
    description: "Proteção de dados",
    explanation:
      "Encapsulamento protege dados internos usando @property e @setter. Permite controlar como os dados são acessados e modificados.",
    codeExample: `class Estudante:
    def __init__(self, nome, nota):
        self.nome = nome
        self._nota = nota  # Privado
    
    @property
    def nota(self):
        return self._nota
    
    @nota.setter
    def nota(self, valor):
        if not 0 <= valor <= 10:
            raise ValueError("Nota deve estar entre 0 e 10")
        self._nota = valor
    
    def passou(self):
        return self._nota >= 6

# Usar
aluno = Estudante("Carlos", 8)
print(aluno.nota)       # 8
aluno.nota = 9          # Válido
# aluno.nota = 15       # Erro: fora do intervalo`,
    keyPoints: [
      "Atributos privados começam com _",
      "@property controla leitura",
      "@setter controla escrita",
      "Valide dados no setter",
    ],
  },
  "aula8-4": {
    id: "aula8-4",
    title: "Herança",
    description: "Compartilhamento de funcionalidades",
    explanation:
      "Herança permite que uma classe herde atributos e métodos de outra. A classe filha estende a funcionalidade da classe pai.",
    codeExample: `# Classe pai
class Animal:
    def __init__(self, nome):
        self.nome = nome
    
    def fazer_som(self):
        print("Som genérico")

# Classe filha
class Cachorro(Animal):
    def fazer_som(self):
        print(f"{self.nome} faz: Au au!")

class Gato(Animal):
    def fazer_som(self):
        print(f"{self.nome} faz: Miau!")

# Usar
dog = Cachorro("Rex")
dog.fazer_som()         # Rex faz: Au au!

cat = Gato("Whiskers")
cat.fazer_som()         # Whiskers faz: Miau!`,
    keyPoints: [
      "class Filha(Pai) herda de Pai",
      "super() chama método da classe pai",
      "Sobrescrita permite redefinir métodos",
      "Herança promove reutilização de código",
    ],
  },

  // Aula 9
  "aula9-1": {
    id: "aula9-1",
    title: "Sets e Comprehensions",
    description: "Coleções e sintaxe concisa",
    explanation:
      "Sets são coleções sem duplicatas. Comprehensions são formas concisas de criar listas, dicionários e sets.",
    codeExample: `# Set - sem duplicatas
numeros = {1, 2, 2, 3, 3, 3}
print(numeros)  # {1, 2, 3}

# Operações com sets
a = {1, 2, 3}
b = {2, 3, 4}
print(a & b)    # {2, 3} - interseção
print(a | b)    # {1, 2, 3, 4} - união
print(a - b)    # {1} - diferença

# List comprehension
quadrados = [x**2 for x in range(5)]
print(quadrados)  # [0, 1, 4, 9, 16]

# Com condição
pares = [x for x in range(10) if x % 2 == 0]
print(pares)  # [0, 2, 4, 6, 8]

# Dict comprehension
quadrados_dict = {x: x**2 for x in range(5)}
print(quadrados_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unicos = {x % 3 for x in range(10)}
print(unicos)  # {0, 1, 2}`,
    keyPoints: [
      "Sets usam {} e não permitem duplicatas",
      "[x for x in ...] cria lista",
      "{x: y for x in ...} cria dicionário",
      "{x for x in ...} cria set",
    ],
  },
  "aula9-2": {
    id: "aula9-2",
    title: "Generators",
    description: "yield e iteradores",
    explanation:
      "Generators usam yield para produzir valores um por um, economizando memória. Úteis para grandes conjuntos de dados.",
    codeExample: `# Generator simples
def contador(n):
    for i in range(n):
        yield i

# Usar generator
for numero in contador(5):
    print(numero)  # 0, 1, 2, 3, 4

# Generator vs List
def numeros_lista(n):
    resultado = []
    for i in range(n):
        resultado.append(i)
    return resultado

def numeros_generator(n):
    for i in range(n):
        yield i

# Generator economiza memória
gen = numeros_generator(1000000)
lista = numeros_lista(1000000)

# Generator produz um valor por vez
proximo = next(gen)  # 0
proximo = next(gen)  # 1

# Generator expression
quadrados_gen = (x**2 for x in range(10))
print(next(quadrados_gen))  # 0
print(next(quadrados_gen))  # 1`,
    keyPoints: [
      "yield produz um valor por vez",
      "Generators economizam memória",
      "next() obtém o próximo valor",
      "Útil para dados grandes",
    ],
  },
  "aula9-3": {
    id: "aula9-3",
    title: "Type Hints",
    description: "Anotações de tipo",
    explanation:
      "Type hints indicam os tipos esperados de parâmetros e retorno. Melhoram legibilidade e permitem detecção de erros.",
    codeExample: `# Type hints básicos
def saudar(nome: str) -> str:
    return f"Olá, {nome}!"

resultado: str = saudar("Alice")

# Com múltiplos parâmetros
def adicionar(a: int, b: int) -> int:
    return a + b

# Com tipos complexos
from typing import List, Dict

def processar_nomes(nomes: List[str]) -> Dict[str, int]:
    return {nome: len(nome) for nome in nomes}

# Optional - pode ser None
from typing import Optional

def obter_idade(nome: str) -> Optional[int]:
    idades = {"Alice": 30, "Bob": 25}
    return idades.get(nome)

# Type hints não são obrigatórios em tempo de execução
# Use mypy para verificar tipos:
# mypy programa.py`,
    keyPoints: [
      "nome: tipo indica o tipo do parâmetro",
      "-> tipo indica o tipo de retorno",
      "List[str] é uma lista de strings",
      "Optional[int] pode ser int ou None",
    ],
  },
  "aula9-4": {
    id: "aula9-4",
    title: "Docstrings",
    description: "Documentação de código",
    explanation:
      "Docstrings são comentários especiais que documentam funções, classes e módulos. Aparecem em help() e ferramentas de documentação.",
    codeExample: `# Docstring de função
def calcular_media(notas: list) -> float:
    """
    Calcula a média aritmética de uma lista de notas.
    
    Args:
        notas: Lista de números representando notas.
    
    Returns:
        A média das notas como float.
    
    Raises:
        ValueError: Se a lista estiver vazia.
    """
    if not notas:
        raise ValueError("Lista de notas não pode estar vazia")
    return sum(notas) / len(notas)

# Docstring de classe
class Pessoa:
    """Representa uma pessoa com nome e idade."""
    
    def __init__(self, nome: str, idade: int):
        """Inicializa uma pessoa."""
        self.nome = nome
        self.idade = idade

# Acessar docstring
print(calcular_media.__doc__)
help(calcular_media)`,
    keyPoints: [
      "Docstrings usam \"\"\" \"\"\"",
      "Primeira linha é um resumo",
      "Args: descreve parâmetros",
      "Returns: descreve o retorno",
    ],
  },
};
