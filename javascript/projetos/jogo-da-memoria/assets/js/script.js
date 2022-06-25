/*
  Parâmentros
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

let div = document.createElement("div");
let image = document.createElement("img");

const main = document.getElementsByTagName("main")[0];
main.classList.add(mainClass);
let cardDouble = total * 2;
let inc = 0;
let divs = [];
for (let i = 0; i < cardDouble; ++i) {
  if (i >= total) {
    inc = cardDouble - i;
  } else {
    inc = inc + 1;
  }
  divs[i] = div.cloneNode();
  divs[i].setAttribute("class", divClass);
  divs[i].setAttribute("data-card", `card${inc}`);
  main.appendChild(divs[i]);
  const imageFront = document.createElement("img");
  const imageBack = document.createElement("img");

  imageFront.setAttribute("clas", imgFrontClass);
  imageFront.setAttribute("alt", imgFrontAlt);
  imageFront.src = `${imgFrontPath}card${inc}.png`;
  imageBack.setAttribute("class", imgBackClass);
  imageBack.setAttribute("alt", imgBackAlt);
  imageBack.src = `${imgBackPath}box.png`;
  divs[i].appendChild(imageFront);
  divs[i].appendChild(imageBack);
}
