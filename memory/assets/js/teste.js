let nome = "Aquiles Rodrigues";
let idade = 31;
let idade2 = 18;
let frase = "Reunião do conselho federativo";
let dicionario = { nome: "bola", cor: "vermelha" };
let lista = ["Maçã", "Uva", "Laranja"];
lista.push("pêra");
lista.pop("maçã");
let lista_dic = [
  { nome: "mesa", cor: "laranja" },
  { nome: "cadeira", cor: "verde" },
];
let array = [1, 2, 3, 4, 5, 6, 7, 8];
returnEvenValues(array);

console.log("Hello word! /br");
//alert(nome + " tem " + (idade + idade2) + " anos");
console.log(nome + " tem " + (idade + idade2) + " anos");
console.log(
  nome.replace("Rodrigues", "Silva") + " tem " + (idade + idade2) + " anos"
);
console.log(frase.toLowerCase());

console.log("tamanho da lista; ", lista.length);
console.log("valor posição 0 da lista: ", lista[0]);
console.log("Lista reversa: ", lista.reverse());
console.log("lista to string: ", lista.toString());
console.log("lista to string: posição 0 do string: ", lista.toString()[0]);
console.log(lista.join(" - "));
console.log("Dicionário - indice nome: ", dicionario.nome);
console.log("Dicionário Lista - indice nome, posição 1: ", lista_dic[1].nome);

function returnEvenValues(array) {
  let oddNums = [];
  let evenNums = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenNums.push(array[i]);
    } else {
      oddNums.push(array[i]);
    }
  }
  console.log("os números pares são:", evenNums);
  console.log("os números ímpares são:", oddNums);
}
