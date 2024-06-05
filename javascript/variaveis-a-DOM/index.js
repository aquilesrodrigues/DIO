/*  ***********************************************
    TIPOS DE VARIÁVEIS
    ***********************************************
*/
console.log("\n### TIPOS DE VARIÁVEIS ========================");

var firstName = "João"; // Variável Global
var lastName = "Souza"; // Variável Global
let alias = "Joaozinho"; // Variável de bloco do arquivo

if (firstName == "João") {
  var firstName = "Pedro"; // Redeclaração da Variável
  lastName = "Silva"; // Reatribuição da Variável "lastName" declarada fora do bloco if

  /* aqui teremos uma nova variável em outro espaço da memória
     Não ficará disponível fora do escopo do if
  */
  let alias = "Pedrinho"; // Variável de bloco

  console.log(`Dentro do bloco if: ${firstName} ${lastName} ${alias}`);
}
console.log(`Fora do Bloco if: ${firstName} ${lastName} ${alias}`);

/*  ***********************************************
    CONSTANTES
    ***********************************************
*/
console.log("\n### CONSTANTES ========================");

const FIRST_NAME = "Aquiles"; // CONSTANTE sempre declarar com SNAKE_UPPER_CASE
// e sua atribuição é obrigatória

var last_name; // Global e não se deve usar com SNAKE_UPPER_CASE
// Uma 'var' pode ser declarada sem atribuição

console.log(FIRST_NAME);

// FIRST_NAME = "Maria"; // Está comentada por não funcionar
/* Constantes não aceitam reatribuição!!!!
   Por isso, ocorrerá erro caso tentarmos reatribuí-la
*/

let validation = 3 === 0; // Aqui atribuimos a "validation" uma comparação
console.log(validation); // retorna um boleano 'false' pq 3 não é igual a 0
console.log(!validation); // retorna um boleano 'true' pq usamos ! negação do valor
validation.toString(); // retorna seu valor como string

let obj = {};

/* Definindo elementos para o objeto: */
obj.name = "julia";
// a palavra após Um . define o nome da chave e o que está entre " " é o valor que está sendo atribuído
obj["age"] = 20; // também é uma definição para chave(age) e valor(20)

let recebi = "dinheiro"; // criada variável recebi e atribui seu valor "dinheiro"

/* Podemos passar para um objeto valores de variáveis como chave(recebi) e 
   depois atribuir um valor(20) para esta chave 
*/
obj[recebi] = 20; // Será criada uma chave "dinheiro" com valor 20

console.log(obj);

/* Acessando elementos: */
console.log(obj.name);
console.log(obj["name"]);

var foo = null; //foo é conhecido e existe, mas não aponta para nenhum tipo ou valor

// Vamos usar o typeof() - método que exibe o tipo do dado
console.log(typeof foo); // Retornou "null"

console.log("\n ********* END **********\n");

/*  ***********************************************
    TRABALHANDO COM LISTAS E "DICIONÁRIO"
    ***********************************************
*/
console.log(
  "\n### TRABALHANDO COM LISTAS E 'DICIONÁRIO' ========================"
);

let nome = "Aquiles Rodrigues";
let idade = 31;
let idade2 = 18;
let frase = "Reunião do Conselho Esportivo";

console.log("Hello word! /br");
//alert(nome + " tem " + (idade + idade2) + " anos");
console.log(nome + " tem " + (idade + idade2) + " anos");
console.log(
  nome.replace("Rodrigues", "Silva") + " tem " + (idade + idade2) + " anos"
);
console.log(frase.toLowerCase());

let listaFrutas = ["Maçã", "Uva", "Laranja"]; // Listas existe
listaFrutas.push("pêra");
listaFrutas.pop("maçã");

console.log("tamanho da lista; ", listaFrutas.length);
console.log("valor posição 0 da lista: ", listaFrutas[0]);
console.log("Lista reversa: ", listaFrutas.reverse());
console.log("lista to string: ", listaFrutas.toString());
console.log(
  "lista to string: posição 0 do string: ",
  listaFrutas.toString()[0]
);
console.log(listaFrutas.join(" - "));

/*
 Não existe um tipo de 'dicionário' em JavaScript, mas podemos criar pares de chaves - valores usando objetos JavaScript . {}
*/

let dicionario = {}; // Criado Objeto vazio para receber chave e valor
dicionario = { nome: "bola", cor: "vermelha" };

let lista_dic = [
  //Lista com Objetos com chave e valor como um "Dicionário"
  { nome: "mesa", cor: "laranja" },
  { nome: "cadeira", cor: "verde" },
];
dicionario[forma] = "redonda"; // Criando + uma chave(forma) com valor(redonda)
dicionario.cor = "Amarela"; // Alterando chave cor(vemelha) para cor(Amarela)
console.log("Dicionário - indice nome: ", dicionario.nome);
console.log("Dicionário Lista - indice nome, posição 1: ", lista_dic[1].nome);

console.log("********* END **********\n");

/*  ***********************************************
    FUNÇÕES
    ***********************************************
*/
console.log("\n### FUNÇÕES ========================");

console.log("##  ##\n");

console.log("### Autoinvocável (IIFE) ###\n");

console.log("#### (IIFE) - Exemplo 1... :  ####\n");

(function () {
  let name = "Retorno da função autoinvocável \n";
  return console.log(name);
})();

console.log("#### (IIFE) - Exemplo 2... :  ####\n");

let a = 1;
let b = 2;

const somaAuto = (function (val1, val2) {
  return val1 + val2;
})(a, b);

console.log(
  `-- Função autoinvocável -- \n Atribuída a constante "somaAuto" que retorna valor - ${somaAuto}`
);

console.log("********* END **********\n");

/*  ***********************************************
    CALLBACK
    ***********************************************
*/
console.log("\n### Callbacks ========================");

console.log("#### Exemplo callbacks 1... :  ####\n");

const calc = function (num1, num2, outraFuncao) {
  return outraFuncao(num1, num2);
};

const soma2 = function (num1, num2) {
  return num1 + num2;
};

const subtrai = function (num1, num2) {
  return num1 - num2;
};

const resultSoma = calc(1, 2, soma2);
console.log(
  `Constant resultaSoma, recebe função anônima \n 
  calc que precisa de 3 parâmetros 2 valores \N
  + função que precisa de 2 parâmentros e retornou - ${resultSoma} \n`
);

console.log("********* END **********\n");

/*  *********************************************************
    Spread ... :técnica de lidar separadamente com elementos
    *********************************************************
*/
console.log("\n### Callbacks ========================");

function somar(x, y, z) {
  return x + y + z;
}

const numeros = [1, 4, 8];
console.log(
  `Estamos utilizando um array de 3 números e com a técnica Spread 
  "..." passamos cada valor separadamente para a função somar() 
  ${somar(...numeros)}`
);

console.log("********* END **********\n");

/*  *********************************************************
    Rest: técnica de lidar separadamente com elementos
    *********************************************************
*/
console.log("\n### Rest ========================");

console.log("### Rest ...args : combina os argumentos no array ###");

function confereTamanho(...args) {
  console.log(
    `A função confereTamanho recebeu como argumentos um array com 
    ${args.length} elementos`
  );
}
confereTamanho(1, 2);

console.log("********* END **********\n");

/*  *********************************************************
    if/else: Condicional
    *********************************************************
*/
console.log("\n### if/else: Condicional ========================");

function numeroPositivo(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if (ehNegativo) {
    return "Esse número é negativo";
  } else if (!ehNegativo && maiorQueDez) {
    return "Esse número é positivo e maior que 10";
  }
  return "Não é negativo e nem maior que 10, mas, é positivo!";
}
console.log(numeroPositivo(2));

console.log("********* END **********\n");

/*  *********************************************************
    Switch/case: Condicional
    *********************************************************
*/
console.log("\n### Switch/case: Condicional ========================");

function getAnimal(id) {
  switch (id) {
    case 1:
      return "cão";
    case 2:
      return "gato";
    case 3:
      return "pássaro";
    default:
      return "peixe";
  }
}
console.log(`O Switch/case retornou case 3 - ${getAnimal(3)}`);
console.log(
  `O Switch/case recebeu string e por isso retornou o defaut - ${getAnimal(
    "oi"
  )}`
);

console.log("********* END **********\n");

/*  *********************************************************
    For: Laços
    *********************************************************
*/
console.log("\n### For: Loop ========================");

function multiplicaPorDois(arr) {
  let multiplicar = [];

  for (let i = 0; i < arr.length; i++) {
    multiplicar.push(arr[i] * 2);
  }
  return multiplicar;
}

const meusNumeros = [2, 33, 456, 356, 40];
console.log(multiplicaPorDois(meusNumeros));

console.log("********* END **********\n");

/*  *********************************************************
    For...in : Percorre entre propriedades do Objeto
    *********************************************************
*/
console.log("\n### For...in : Percorre entre propriedades do Objeto ====");

console.log("### ###\n");

function usaPropObj(objeto) {
  for (proprio in objeto) {
    console.log(`| ${proprio}: ${objeto[proprio]} `);
  }
}

const meuObjeto = {
  nome: "João",
  idade: "20",
  cidade: "Salvador",
};
console.log(usaPropObj(meuObjeto));

console.log("********* END **********\n");

/*  *********************************************************
    For...of : Loop entre  estruturas iteráveis
    *********************************************************
*/
console.log("\n### For...of : Loop entre  estruturas iteráveis ====");

function LogNumeros(nums) {
  for (numero of nums) {
    console.log(numero);
  }
}

const ofNumeros = [2, 33, 456, 356, 40];
console.log(LogNumeros(ofNumeros));

console.log("********* END **********\n");

/*  *********************************************************
    While : Loop entre  estruturas iteráveis
    *********************************************************
*/
console.log("\n### While : Loop entre  estruturas iteráveis ====");

function exemploWhile() {
  let num = 0;
  while (num <= 5) {
    console.log(num);
    num++;
  }
}
console.log(exemploWhile());

console.log("********* END **********\n");

/*  *********************************************************
    do...While : Loop entre  estruturas iteráveis
    *********************************************************
*/
console.log("\n### do...While : Loop entre  estruturas iteráveis ====");

function exemploWhile() {
  let num = 0;

  do {
    console.log(num);
    num++;
  } while (num <= 5);
}
console.log(exemploWhile());

console.log("********* END **********\n");

/*  *********************************************************
    This : palavra reservada referência do contexto
    *********************************************************
*/
console.log("\n### This : palavra reservada referência do contexto ====");

const alguem = {
  firstName: "Aquiles",
  lastName: "Rodrigues",
  id: 1,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  address: "Rua sem nome",
};

console.log(alguem.fullName());

console.log("********* END **********\n");

/*  *********************************************************
    Método Call/This : método utilizado para acessar o 'this'
    *********************************************************
*/
console.log(
  "\n### Método Call/This : método utilizado para acessar o 'this' ===="
);

const aluno = {
  firstName: "Artemes",
  lastName: "Rodrigues",
  job: "aluno",
};
const professor = {
  firstName: "Alberto",
  lastName: "Barros",
  job: "Professor",
};

function navCall() {
  console.log(this.firstName);
}

console.log(navCall.call(alguem));

console.log("********* END **********\n");

/*  *********************************************************
    Arrow functions
    *********************************************************
*/
console.log("\n### Arrow functions =========================");

const arrowFunct = () => {
  return "Sem palavra reservada 'function'";
};
console.log(arrowFunct());

const arrowFunct1 = () => "Sem function e chaves";

console.log(arrowFunct1());

const soma = (a) => a;

console.log(soma("Sem function, chaves e parênteses"));

console.log("********* END **********\n");
