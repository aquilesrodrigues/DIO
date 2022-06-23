/*
    Variables Theme Display
*/
const class1 = "dark-mode";
const class2 = "light-mode";
const text1 = "Modo Dark";
const text2 = "Modo Light";

/*
    Variables D.O.M for Theme Display
*/
const button_id = document.getElementById("mode-selector");
const h1_id = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

function changeMode() {
  changeClass();
  changeText();
}

function changeClass() {
  /* 
  classList.toggle inseri/remove o nome de uma classe no elemento 
  */
  button_id.classList.toggle(class1);
  h1_id.classList.toggle(class1);
  body.classList.toggle(class1);
  footer.classList.toggle(class1);
}
function changeText() {
  if (body.classList.contains(class1)) {
    button_id.innerHTML = text2;
    h1_id.innerHTML = text1 + " ON";
    return;
  }
  button_id.innerHTML = text1;
  h1_id.innerHTML = text2 + " ON";
}

/* Fica Esperando ação de 'click' no 
   document.getElementById: "mode-selector"
   e depois executa o "changeMode"
*/
button_id.addEventListener("click", changeMode);
