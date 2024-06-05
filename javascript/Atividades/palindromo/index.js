/* Frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa
  "ROMA ME TEM AMOR"
  */

console.log("### Palíndromo ==========================");
function verificapalindromo(string) {
  if (!string) throw "string inexistente";

  return string.split("").reverse().join("") === string;
}

function verificapalindromo2(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    // nesta condição vamos verificar se suas extremidades são iguais
    if (string[i] !== string[string.length - i - 1]) {
      //se indice for diferente do outro indice [tamanho - o indice - um]
      return false;
    }
  }
  return true;
}
console.log(verificapalindromo("ama"));
console.log(verificapalindromo2("abba"));
console.log("********* END **********\n");
