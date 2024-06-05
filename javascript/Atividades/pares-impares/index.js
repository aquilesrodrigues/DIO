let array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValues(array);

function returnEvenValues(arrays) {
  let oddNums = [];
  let evenNums = [];
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] % 2 === 0) {
      evenNums.push(arrays[i]);
    } else {
      oddNums.push(arrays[i]);
    }
  }
  console.log("os números pares são:", evenNums);
  console.log("os números ímpares são:", oddNums);
}
console.log("\n ********* END **********\n");

console.log("Substituir números pares ==========");

let lista = [1, 3, 4, 6, 80, 33, 23, 90];

console.log(substituiPares(lista));

function substituiPares(arrays) {
  if (!arrays) {
    return `${-1} - Você não passou o parâmetro!`;
  }
  if (!arrays.length) {
    return `${-1} - O Array não possui elementos!`;
  }
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] === 0) {
      console.log("Você já é zero");
    } else if (arrays[i] % 2 === 0) {
      console.log(`Substituição na posição ${i} com valor ${arrays[i]} para 0`);
      arrays[i] = 0;
    }
  }
  return arrays;
}
