const main_class = "memory-game";
const div_class = "card";
const img_class = "";
const total = 4;

let div = document.createElement("div");
let image = document.createElement("img");

const main = document.getElementsByTagName("main")[0];
main.classList.add(main_class);

let divs = [];
for (let i = 0; i < 4; i++) {
  divs[i] = div.cloneNode();
  divs[i].setAttribute("class", div_class);
  divs[i].setAttribute("data-card", "card" + i);
  main.appendChild(divs[i]);
}
