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

FIRST_NAME = "Maria"; // Constantes não aceitam reatribuição!!!!
// Irá ocorrer erro!
