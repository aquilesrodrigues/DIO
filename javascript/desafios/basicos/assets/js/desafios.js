





/* *************************************
   ok
   1 / 5 - Dragão!
  *************************************/
// TODO: complete os espaços em branco com sua solução para o problema
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let nivelEnergia;

for (let i = 0; i < qtdEntradas; i++) {
  input = gets();
  nivelEnergia = parseInt(input);

  if (nivelEnergia <= 8000) {
    print("Inseto!");
  } else {
    print("Mais de 8000!");
  }
}

/* *************************************
   ok
   2 / 5 - Soma de números naturais
  *************************************/
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

const A = parseInt(gets());
const B = parseInt(gets());

const total = ((B - A + 1) * (A + B)) / 2;
print(total);

//Escreva o seu código no espaço em branco

/* *************************************
   ok
   3 / 5 - papalegua
   *************************************/
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let input = gets();

let qtdEntradas = parseInt(input);
let melhor = 999;

for (let i = 0; i < qtdEntradas; i++) {
  input = gets();
  let tempo = parseFloat(input);
  if (tempo < melhor) melhor = tempo;
}
print(melhor);

/* *************************************
   ok
   4 / 5 - Arrays Pares
   *************************************/
// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

var array = [2, 3, 5, 7, 11, 13, 18, 34];

//TODO: Complete os espaços em branco com uma possível solução para o desafio

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    print(array[i]);
  }
}

/* *************************************
   ok
   5 / 5 - Contagem de partidas no torneio
   *************************************/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let lines = gets().split("\n");

var numberOfMatches = parseInt(lines.shift);

let n = parseInt(lines.shift());
let totalMatches = 0;
while (n > 1) {
  if (n % 2 === 0) {
    totalMatches += n / 2;
    n = n / 2;
  } else {
    totalMatches += (n - 1) / 2;
    n = (n - 1) / 2 + 1;
  }
}
print(totalMatches);

//Escreva o seu código nos espaços em branco
