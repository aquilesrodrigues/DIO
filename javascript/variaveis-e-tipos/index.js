/* numberOne = 1;
console.log(numberOne + 2);

var numberOne; */

/* Exemplo 2 */

/* var firstName = "João"; // Variável Global
var lastName = "Souza"; // Variável Global
let alias = "Joaozinho"; // Variável de bloco

if (firstName == "João") {
  var firstName = "Pedro"; // Redeclaração da Variável
  lastName = "Silva"; // Reatribuição da Variável
 */
/* aqui teremos uma nova variável em outro espaço da memória
     Não ficará disponível fora do escopo */
/* let alias = "Pedrinho"; // Variável de bloco

  console.log(`Dentro do bloco if: ${firstName} ${lastName} ${alias}`);
}
console.log(`Fora do Bloco if: ${firstName} ${lastName} ${alias}`); */

/* Exemplo 3 */

const FIRST_NAME = "Aquiles"; // CONSTANTE declarar com SNAKE_UPPER_CASE
// e Sua atribuição é obrigatória

var LAST_NAME; // Global e não se deve usar com SNAKE_UPPER_CASE
// Uma 'var' pode ser declarada sem atribuição

console.log(FIRST_NAME);

//FIRST_NAME = "Maria"; // Constantes não aceitam reatribuição!!!!
// Irá ocorrer erro!

let validation = 3 === 0;
console.log(validation); // retorna um boleano 'false'
console.log(!validation); // retorna um boleano 'true'
validation.toString(); // retorna seu valor como string

let obj = {};
/* Definindo elementos para o objeto: */
obj.name = "julia"; // a palavra após Um . define o nome da chave e o que está entre " " é o valor que está sendo atribuído
obj["age"] = 20; // também é uma definição para chave e valor

let recebi = "dinheiro"; // criada variável recebi e atribui valor

/* Podemos passar para um objeto valores de variáveis como chave e depois atribuir um valor para esta chave */

obj[recebi] = 20;

/* Desta forma será criada uma chave "dinheiro" e ela receberá valor 20*/
console.log(obj);
/* Acessando elementos: */
console.log(obj.name);
console.log(obj["name"]);

//foo1; // foo não existe, não foi definido e jamais foi inicializado:

// "ReferenceError: foo is not defined"

var foo = null; // // foo é conhecido e existe, mas não aponta para nenhum tipo ou valor

console.log(typeof foo); // "null"

// typeof() - método que exibe o tipo do dado

console.log("### Palíndromo ==========================");
/* Frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa
  "ROMA ME TEM AMOR"
  */

function verificapalindromo(string) {
  if (!string) throw "string inexistente";

  return string.split("").reverse().join("") === string;
}

function verificapalindromo2(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    // nesta condição vamos verificar se suas extremidades são iguais
    if (string[i] !== string[string.length - i - 1]) {
      //se indice for diferente do outro indice [tamanho - o indice - um]
      return false;
    }
  }
  return true;
}
console.log(verificapalindromo("ama"));
console.log(verificapalindromo2("abba"));
console.log("********* END **********\n");

console.log("Substituir números pares ==========");
function substituiPares(array) {
  if (!array) {
    return `${-1} - Você não passou o parâmetro!`;
  }
  if (!array.length) {
    return `${-1} - O Array não possui elementos!`;
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      console.log("Você já é zero");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituição na posição ${i} com valor ${array[i]} para 0`);
      array[i] = 0;
    }
  }
  return array;
}

let lista = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(lista));

console.log("********* END **********\n");

console.log("## FUNÇÕES ##\n");

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

console.log("### Callbacks ... :  ##\n");

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
  `Constant resultaSoma, recebe função anônima \n calc que precisa de 3 parâmetros 2 valores + função que precisa de 2 parâmentros e retornou - ${resultSoma} \n`
);

console.log("********* END **********\n");
console.log("### Spread ... : técnica de lidar separadamente com elementos##");

function somar(x, y, z) {
  return x + y + z;
}

const numeros = [1, 4, 8];
console.log(
  `Estamos utilizando um array de 3 números e com a técnica Spread ... passamos cada valor separadamente para a função somar(...numeros) ${somar(
    ...numeros
  )}`
);

console.log("********* END **********\n");

console.log("### Rest: combina os argumentos em um array ###");

function confereTamanho(...args) {
  console.log(
    `A função confereTamanho recebeu como argumentos um array com ${args.length} elementos`
  );
}
confereTamanho(1, 2);

console.log("********* END **********\n");

console.log("### if/else: Condicional ###\n");

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

console.log("### Switch/case: Condicional ###\n");

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

console.log("### For: Loop ###\n");

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

console.log("### For...in : Percorre entre propriedades do Objeto###\n");

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

console.log("### For...of : Loop entre  estruturas iteráveis ###\n");

function LogNumeros(nums) {
  for (numero of nums) {
    console.log(numero);
  }
}

const ofNumeros = [2, 33, 456, 356, 40];
console.log(LogNumeros(ofNumeros));

console.log("********* END **********\n");

console.log("### While : Loop entre  estruturas iteráveis ###\n");

function exemploWhile() {
  let num = 0;
  while (num <= 5) {
    console.log(num);
    num++;
  }
}
console.log(exemploWhile());

console.log("********* END **********\n");

console.log("### do...While : Loop entre  estruturas iteráveis ###\n");

function exemploWhile() {
  let num = 0;

  do {
    console.log(num);
    num++;
  } while (num <= 5);
}
console.log(exemploWhile());

console.log("********* END **********\n");

console.log("### This : palavra reservada referência do contexto. ###\n");

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

console.log(
  "### Método Call/This : método utilizado para acessar o **this**. ###\n"
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

console.log("### arrow functions ###\n");

const arrowFunct = () => {
  return "Sem palavra reservada 'function'";
};
console.log(arrowFunct());

const arrowFunct1 = () => "Sem function e chaves";

console.log(arrowFunct1());

const soma = (a) => a;

console.log(soma("Sem function, chaves e parênteses"));

console.log("********* END **********\n");

console.log("### 11 Atividade prática ###\n");

const ano1 = [
  { nome: "João", fase: 1, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 1, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 1, nota: 6, turma: "1C" },
  { nome: "João", fase: 2, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 2, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 2, nota: 6, turma: "1C" },
  { nome: "João", fase: 3, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 3, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 3, nota: 6, turma: "1C" },
  { nome: "João", fase: 4, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 4, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 4, nota: 6, turma: "1C" },
];

var ano2 = [
  { nome: "Sofia", fase: 1, nota: 5, turma: "1B" },
  { nome: "Aquiles", fase: 1, nota: 6, turma: "1C" },
  { nome: "João", fase: 2, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 2, nota: 9, turma: "1B" },
  { nome: "Aquiles", fase: 2, nota: 6, turma: "1C" },
  { nome: "João", fase: 3, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 3, nota: 9, turma: "1B" },
  { nome: "Aquiles", fase: 3, nota: 6, turma: "1C" },
  { nome: "João", fase: 4, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 4, nota: 9, turma: "1B" },
  { nome: "Aquiles", fase: 4, nota: 6, turma: "1C" },
  { nome: "João", fase: 4, nota: 5, turma: "1B" },
];

ano2.sort(function (a, b) {
  if (a.nome > b.nome) {
    return 1;
  }
  if (a.nome < b.nome) {
    return -1;
  }
  return 0;
});

console.log(ano2);
/*
  for (let i = 0; i < arrAlunos.length; i++) {
      if (arr[i].nota === 2) {
      console.log("xcxx");
    }
  }
}

var entrada;
try {
  if (entrada === undefined) {
    console.log("Variável entrada existe, porém foi declarada sem valor!");
  }
  if (saida === undefined) {
    console.log("Variável saida existe, porém foi declarada sem valor!");
  }
} catch (erro) {
  console.log(`A variável ${erro.message} (Não declarada)`);
}

console.log("********* END **********\n");

console.log("### 11 Atividade prática ###\n");

let nomesPro = ["Aquiles", "Maria", "João", "sofia"];

function mostrarProps(obj, nomeObjeto) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeObjeto + "." + i + " = " + obj[i] + "\n";
    }
  }
  return console.log(resultado);
}
mostrarProps(alunoObj, "alunoObj");

function alunoObj(nomePropriedade) {
  for (i = 0; i != nomePropriedade.length; i++) {
    this.nomePropriedade = 0;
  }
}
var alunoObj = new Object();
let nomePropriedade = "Aquiles";
alunoObj[nomePropriedade] = 0;
nomePropriedade = "Maria";
alunoObj[nomePropriedade] = 0;

*/

var entrada;
try {
  if (entrada === undefined) {
    console.log("Variável entrada existe, porém foi declarada sem valor!");
  }
  if (saida === undefined) {
    console.log("Variável saida existe, porém foi declarada sem valor!");
  }
} catch (erro) {
  console.log(`A variável ${erro.message} (Não declarada)`);
}
