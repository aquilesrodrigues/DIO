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
// var exibição total de cartas
let currentNumber = minDecrement;
let divSelectAll = [];

// variáveis Comparação
let firstCard, secondCard;
//  VirarCartão false
let hasFlippedCard = false;
// Card bloqueado
let lockBoard = false;

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
//document.getElementById("final").style.display = "none";
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
  // captura a data e hora início da partida
  let hourIn = new Date();
  console.log(`Início da partida: ${hourIn}`);
  //limpar elemntos filhos anteriores no main
  main.innerHTML = "";
  // oculta div central de mensagem
  document.getElementById("winner").style.display = "none";

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
  } //fim do for

  //Lista das Divs criadas com classe "card"
  divSelectAll = document.querySelectorAll(".card");
  // Ordena de forma randômica as divs card
  divSelectAll.forEach((card) => {
    let ramdomPosition = Math.floor(Math.random() * cardDouble);
    card.style.order = ramdomPosition;
  });

  /* *************************************
    Div que exibe total do jogo
    **************************************** 
  */

  /* *******************************************
    Função cria/remove classe "flip" no elemento 
    selecionado naquele momento. Usando o D.O.M 
    ********************************************
  */

  function flipCard() {
    if (lockBoard) {
      return;
    }
    if (this === firstCard) {
      return;
    }
    //adiciona classe flip no card selecionado
    this.classList.add("flip");

    //se cartão não está virado
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      console.log(`firstCard = ${firstCard}`);
      return;
    }
    secondCard = this;
    console.log(`secondCard = ${secondCard}`);
    hasFlippedCard = false;
    checkForMath();
  }
  /* *************************************
     Função de verificação da igualdade dos 
     objetos firstCard = secondCard
  */
  function checkForMath() {
    if (firstCard.dataset.card === secondCard.dataset.card) {
      DisabledCards();
      const classFlipAll = document.querySelectorAll(".flip");

      verifyTotalFlip(classFlipAll.length, cardDouble);
      return;
    }
    unFlipCards();
  }

  function DisabledCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
  }
  function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      lockBoard = false;
      // Zera variáveis
      resetBoard();
    }, 1500);
  }
  /*
    A cada par comparado iremos verificar 
    se o total de cartões com classe flip
    é igual
  */
  function verifyTotalFlip(totalClass, totalCard) {
    if (totalClass == totalCard) {
      let hourOut = new Date();
      console.log(`DIVs com Class ${totalClass} = Total de Cards ${totalCard}`);
      // exibir div central de mensagem
      document.getElementById(
        "texto"
      ).innerHTML = `Você conseguiu!<br> Você gastou: ${timeRangeTxt(
        hourIn,
        hourOut
      )} para concluir`;
      document.getElementById("thumb").src = `${imgFrontPath}trofeu.png`;
      document.getElementById("winner").style.display = "block";
    }
  }

  /* *************************************
      Nesta função iremos zerar as varíaveis
      possibilitando zerar seus status
  */
  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }
  /* *************************************
      Nesta função calculamos intervalo por
      segundos
  */
  function timeRangeTxt(timein, timeout) {
    // não usado
    let diffMs = timeout - timein;
    let diffHrs = Math.floor((diffMs % 86400000) / 3600000);
    let diffMin = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    // usado
    let diff = new Date(timeout - timein);
    let elapsedTime = `${diff.getUTCMinutes()} minutos ${diff.getUTCSeconds()} segundos`;
    return elapsedTime;
  }

  /* *************************************
    Além do Spread a segunda maneira de (+ iterações)
     é fazer um loop sobre os elementos nodeList.
     variavel.forEach(indice) =>{comandos}
  */
  divSelectAll.forEach((item) => {
    item.addEventListener("click", flipCard);
  });
});

/* insere classe "flip" no card
   No css a classe flip vira carta
*/

// Fim da montagem das divs/img da página html
