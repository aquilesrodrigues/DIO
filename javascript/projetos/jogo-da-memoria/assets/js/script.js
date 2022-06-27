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
const total = 6;
const maxIncrement = 8;
const minDecrement = 2;

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
let div = document.createElement("div");
let image = document.createElement("img");
// Número atual do span no html
let currentNumber = Number(currentNumWrapper.innerHTML);
/* *******************************************
   Funções Incremento e Decremento no html.
   Limite/variação total de cartas
   Usando o D.O.M addEventListerner
   *******************************************
*/

domIncrement.addEventListener("click", function increment() {
  if (currentNumber < maxIncrement) {
    currentNumber++;
    currentNumWrapper.innerHTML = currentNumber;
  } else {
    // desabilitar botão Incremento
    domIncrement.Disabled = true;
    domIncrement.style.cursor = "default";
    // habilitar botão decremento
    domDecrement.Disabled = false;
    domDecrement.style.cursor = "pointer";
    alert(`O valor ${currentNumber + 1}, excede o limite permitido!`);
  }
});

domDecrement.addEventListener("click", function decrement() {});

console.log(currentNumber);

/* *******************************************
   Criação das Divs/classes/id/imagens no html
   Usando o D.O.M
   *******************************************
*/
let cardDouble = total * 2;
let inc = 0;
let divs = [];
for (let i = 0; i < cardDouble; ++i) {
  if (i >= total) {
    inc = cardDouble - i;
  } else {
    inc++;
  }
  divs[i] = div.cloneNode();
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
// Fim da montagem das divs/img da página html

const cards = document.querySelectorAll(".card");
