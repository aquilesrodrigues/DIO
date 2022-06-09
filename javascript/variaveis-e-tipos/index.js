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

function verificapalindromo(string) {
  if (!string) return "string inexistente";

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

//array pares
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
console.log(verificapalindromo("ama"));
console.log(verificapalindromo2("abba"));
console.log(substituiPares(lista));
