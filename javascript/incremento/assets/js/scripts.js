/* carregar elemento dom currentNumber */

let currentNumberWrapper = document.getElementById("currentNumber");
let domIncrement = document.getElementById("increment");
let domDecrement = document.getElementById("decrement");
currentNumber = 0;

domIncrement.addEventListener("click", function increment() {
  if (currentNumber >= 0 && currentNumber < 10) {
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    domIncrement.disabled = true;
    domIncrement.style.cursor = "default";
    domDecrement.disabled = false;
    domDecrement.style.cursor = "pointer";
    alert(`O valor ${currentNumber + 1} ,  excede o limite permitido!`);
  }
});

domDecrement.addEventListener("click", function increment() {
  if (currentNumber > 0 && currentNumber <= 10) {
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
  } else {
    domIncrement.disabled = false;
    domIncrement.style.cursor = "pointer";
    domDecrement.disabled = true;
    domDecrement.style.cursor = "default";
    alert(`O valor ${currentNumber - 1} excede o limite permitido!`);
  }
});
/* window.addEventListener("load",funcao ); */
