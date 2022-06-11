##Javascript

É uma linguagem de **tipagem dinâmica**, ou seja, antes de declarar um valor, você não especifica o **tipo** dele.

**Camel Case** - duas palavras juntas a segunda com primeira Letra Maiúscula

**Upper Case Snake Case** --> Utilizados por constantes, todas as letras em maíscula[_Upper Case_] e separadas por Underline{_snake case_}

Valores dinâmicos:

Palavras reservadas - Var e let </br>
**var** --> scope is global
**let** --> scope is inside the if-block

**Redeclaração** --> var a = 11; :left_speech_bubble: Você informa o tipo, o nome e o valor </br>
**Reatribuição** --> a = 11; :left_speech_bubble: Você só informa o nome e valor

**Hoisting** --> atribuir um valor a uma variável antes de declará-la

Exemplo de como funciona o Hoisting

Neste exemplo irá funcionar porque ele entende que é uma **var**iável global:

```javascript
numberOne = 1;
console.log(numberOne + 2);

var numberOne;
```

Neste exemplo NÃO irá funcionar porque ele entende que a **_let_** é de escopo e precisa ser declarado antes de atribuído:

```javascript
numberOne = 1;
console.log(numberOne + 2);

let numberOne;
```

> :vertical_traffic_light: Redeclaração e Reatribuição

```javascript
var firstName = "João"; // Variável Global
var lastName = "Souza"; // Variável Global
let alias = "Joaozinho"; // Variável de bloco

if (firstName == "João") {
  var firstName = "Pedro"; // Redeclaração da Variável
  lastName = "Silva"; // Reatribuição da Variável

  /* aqui teremos uma nova variável em outro espaço da memória */
  /* Não ficará disponível fora do escopo */
  let alias = "Pedrinho"; // Variável de bloco

  console.log(`Dentro do bloco if: ${firstName} ${lastName} ${alias}`);
}
console.log(`Fora do Bloco if: ${firstName} ${lastName} ${alias}`);
```

#### CONSTANTES

São declaradas em SNAKE_UPPER_CASE, escopo de bloco, não faz **hoisting**

```javascript
const DAYS_IN_A_WEEK = 7; // Variável de bloco
const FIRST_NAME = "Aquiles"; // CONSTANTE declarar com SNAKE_UPPER_CASE
// e Sua atribuição é obrigatória

var LAST_NAME; // Global e não se deve usar com SNAKE_UPPER_CASE
// Uma 'var' pode ser declarada sem atribuição

console.log(FIRST_NAME);

FIRST_NAME = "Maria"; // Constantes não aceitam reatribuição!!!!
// Irá ocorrer erro!
```

![Alt text](./table.jpg "Tabela")

Os dados em Javascript são divididos em 2 grandes grupos: **Primitivos** e os **Composite / Non-Primitive**.

### Primitivos

(numbers, string, boolean, null/underfined)

Não possuem métodos imbutidos, são escritos em letras minúsculas.

Existem funções que criam objetos do tipo primitivos.

#### strings

Em sua declaração podemos utilizar, aspas "" / '' ou crases com interpolação **templates strings** `${}`.

Os dados do tipo **strings** são iteráveis.

Ex.:

```javascript

let nome = "João"
let sobrenome "Pedro"

// tipo de dado iterável. Assim podemos acessar pelo indice
nome[0] // retorna "J"
nome.length() // retorna o tamanho de caracteres (total = 4)
nome.concat(sobrenome) // concatena com outro dado
nome.split("") // retorna uma lista de cada elemento da string separado pelos delimitadores informados.
nome.includes("P") // retorna false por não encontrar o P
nome.startsWith("J") // retorna true se a string começa com O
nome.endsWith("?") // retorna true caso string finalize com ?
nome.replace("ã", "a") // retorna outra string com substituição
```

**Objeto string**

new String()

let exemplo = new String("texto")

Um objeto string possui inúmeros métodos para serem utilizados.

#### numbers

Biblioteca Math

É um Objeto que possui várias funções para ajudar com cálculos.

```javascript
let fiveByThree = 5 / 3;
Math.floor(fiveByThree); // arredonda para baixo
Math.ceil(fivByThree); // arredonda para teto(cima)
```

#### Boleans

```javascript
let validation = 3 === 0;
console.log(validation); // retorna um boleano 'false'
console.log(!validation); // retorna um boleano 'true'
validation.toString(); // retorna seu valor como string
```

### Empty / null / undefinid

```javascript
foo; // foo não existe, não foi definido e jamais foi inicializado:

// "ReferenceError: foo is not defined"

var foo = null; // // foo é conhecido e existe, mas não aponta para nenhum tipo ou valor

console.log(typeof foo); // "null"

// typeof() - método que exibe o tipo do dado
```

O valor null é um literal, e não uma propriedade do objeto global (como o undefined pode ser). O desenhos das APIs, o null as vezes é devolvido no lugar de um objeto que era esperado.

**null** é um valor não definido, mas de forma induzida, ou seja, o programador colocou null em alguma propriedade de objeto

**undefined** é quando um valor de uma variável não está definido

### Composite / Non-Primitive

### Array

```javascript
let array = [];
array.push(3); // insere elemento na posição 0
array.push(2); // insere elemento na posição 0
array.pop(); // elimina o último elemento
array.unshifit(1); // elimina elemento na posição informada
array.includes(2); // retorna true caso encontre o elemento
array.every((item) => item === 5); //verifica se todos são iguais a 5
array.some((item) => item === 5); //verifica se algum é igual a 5
```

### Objetos

São declarado com chaves {} e é composto por chave:valor

```javascript
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
```

A biblioteca Object() possui vários métodos para usar com objetos:

```javascript
Object.keys(obj); // retorna as chaves
Object.values(obj); // retorna os valores
```

### palíndromo

Frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa
"ROMA ME TEM AMOR"

### Substituir números pares

function substituiPares()

### Funções

Spread: uma forma de lidar separadamente com elementos:
const numbers = [1, 2, 3];
...numbers

Rest: combina os argumentos em um array
O Elemento que era independente se torna parte de um array

```javascript
function confereTamanho(...args) {
  console.log(
    `A função confereTamanho recebeu como argumentos um array com ${args.length} elementos`
  );
}
confereTamanho(1, 2);
```

Objetos:
Object Destructuring - Entre chaves {}, podemos filtrar apenas os dados que nos interessam em um objeto.

```javascript
const usuario = {
  id: 42,
  fullName: { firstName: "John", lastname: "Doe" },
};

function userId({ id }) {
  // Desistrutura o Objeto USUARIO em busca da chave "id" e recebe o seu valor
  return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
  // Aqui desistruturação do Objeto vai até a chave fullName e em seu valor que é outro array
  // que contem as chaves firstName e lastName: atribui seu valor a um parametro da função com o nome de "first" e "last"

  return `${first}  ${last}`;
}
```