/* ******************************************
   Constantes Para DIVs/IMG/Classes/Alt
   para o D.O.M
*/
const mainClass = "memory-game";
const divClass = "card";
const imgFrontClass = "card-front";
const imgFrontAlt = "Face da carta";
const imgFrontPath = "./img/";
const imgBackClass = "card-back";
const imgBackAlt = "Verso da carta";
const imgBackPath = "./img/";
const maxIncrement = 6;
const minDecrement = 2;
// var
let currentNumber = minDecrement;
let divSelectAll = [];

/* **************************************
   GETS - captura valores com D.O.M
   **************************************
*/
let currentNumWrapper = document.getElementById("currentNum");
let domIncrement = document.getElementById("increment");
let domDecrement = document.getElementById("decrement");
const main = document.getElementsByTagName("main")[0];

/* **************************************
   Objetos DOM - Divs/classes/id/imagens
   **************************************
*/
main.classList.add(mainClass);
// Número atual para span no html
currentNumWrapper.innerHTML = currentNumber;

let div = document.createElement("div");
let image = document.createElement("img");

/* *******************************************
   Funções Incremento e Decremento no html.
   Limite/variação total de cartas
   Usando o D.O.M addEventListerner
   *******************************************
*/
domIncrement.addEventListener("click", function increment() {
  if (currentNumber >= minDecrement && currentNumber < maxIncrement) {
    currentNumber++;
    currentNumWrapper.innerHTML = currentNumber;
    domIncrement.style.cursor = "pointer";
  } else {
    // desabilitar botão Incremento
    domIncrement.Disabled = true;
    domIncrement.style.cursor = "default";
    // habilitar botão decremento
    domDecrement.Disabled = false;
    domDecrement.style.cursor = "pointer";
    alert(`O valor ${currentNumber + 1}, está fora da faixa permitida!`);
  }
});

domDecrement.addEventListener("click", function decrement() {
  if (currentNumber > minDecrement && currentNumber <= maxIncrement) {
    currentNumber--;
    currentNumWrapper.innerHTML = currentNumber;
    domDecrement.style.cursor = "pointer";
  } else {
    domDecrement.Disabled = true;
    domDecrement.style.cursor = "default";
    domIncrement.Disabled = false;
    domIncrement.style.cursor = "pointer";
    alert(`O valor ${currentNumber - 1} está fora da faixa permitida!`);
  }
});

/* *******************************************
   Função Criação das Divs/classes/id/imagens no html
   Usando o D.O.M Montamos as cartas
   *******************************************
*/

document.getElementById("shuffled").addEventListener("click", function () {
  //limpar elemntos filhos anteriores no main
  main.innerHTML = "";
  //Iniciar criação de DIVS e seus nós
  let cardDouble = currentNumber * 2;
  let inc = 0;
  let divs = [];
  for (let i = 0; i < cardDouble; ++i) {
    if (i >= currentNumber) {
      inc = cardDouble - i;
    } else {
      inc++;
    }
    divs[i] = div.cloneNode();
    /* *********************************************
       SETs
    */
    divs[i].setAttribute("class", divClass);
    divs[i].setAttribute("data-card", `card${inc}`);
    main.appendChild(divs[i]);
    const imageFront = document.createElement("img");
    const imageBack = document.createElement("img");

    imageFront.setAttribute("class", imgFrontClass);
    imageFront.setAttribute("alt", imgFrontAlt);
    imageFront.src = `${imgFrontPath}card${inc}.png`;
    imageBack.setAttribute("class", imgBackClass);
    imageBack.setAttribute("alt", imgBackAlt);
    imageBack.src = `${imgBackPath}box.png`;

    divs[i].appendChild(imageFront);
    divs[i].appendChild(imageBack);
  }
  //Lista das Divs criadas
  divSelectAll = document.querySelectorAll(".card");

  /* *******************************************
   Função cria/remove classe "flip" no elemento
   selecionado naquele momento. Usando o D.O.M 
   *******************************************
  */
  /* Usar o operad Spread para converter em array
   forEach(indice) =>{comandos}
  */
  /*
  [...divSelectAll].forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("flip");
    });
  });
   */

  /* Além do Spread a segunda maneira de (+ iterações)
     é fazer um loop sobre os elementos nodeList.
     variavel.forEach(indice) =>{comandos}
  */
  divSelectAll.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("flip");
    });
  });
});

// Fim da montagem das divs/img da página html

/*
function flipCard() {
  this.classList.toggle("flip");
}
/*
/* *******************************************
   Foreach percorre cada card  a procura do 
   evento click. Caso encontrado executa flipCard
   *******************************************
*/
//

/*
[...divSelectAll].forEach((card) => {
  card.addEventListener("click", () => {
    card.setAttribute("class", "teste");
  });
});

divSelectAll.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(`3: Text = ${item.innerText}`);
  });
});
*/

/*
for (let i = 0; i < divSelectAll.length; i++) {
  divSelectAll[i].addEventListener("click", function inseriLista() {
    divSelectAll.classList.toggle("flip");
  });
}

divSelectAll.forEach(
  (it) => (it.onclick = () => inLista(`.class = ${it.classList[1]}`))
);

const hoverSpans = document.querySelectorAll("[data-hover-span]");

hoverSpans.forEach(function (span) {
  // Primeiro percorremos o array com forEach... cada elemento será representado pelo parâmetro "span"
  span.addEventListener("mouseover", function () {
    // agora sim podemos usar addEventListener em cada span!
    span.classList.add("opacity");
  });
});
*/
