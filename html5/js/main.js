let nome = "Aquiles Rodrigues";
let idade = 31;
let idade2 = 18;
let frase = "Reunião do conselho federativo";
let dicionario = { nome: "bola", cor: "vermelha" };
let lista = ["maçã", "uva", "laranja"];
lista.push("pêra");
lista.pop("maçã");
let lista_dic = [
  { nome: "bola", cor: "vermelha" },
  { nome: "cadeira", cor: "verde" },
];

alert(nome + " tem " + (idade + idade2) + " anos");
console.log(nome + " tem " + (idade + idade2) + " anos");
console.log(
  nome.replace("Rodrigues", "Silva") + " tem " + (idade + idade2) + " anos"
);
console.log(
  nome.replace("Rodrigues", "Silva") + " tem " + (idade + idade2) + " anos"
);
console.log(frase.toLowerCase());

console.log(lista.length);
console.log(lista[0]);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
console.log(dicionario.nome);
console.log(lista_dic[1].nome);
