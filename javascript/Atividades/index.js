console.log("### 11 Atividade prática ###\n");

const ano1 = [
  { nome: "João", fase: 1, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 1, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 1, nota: 6, turma: "1C" },
  { nome: "João", fase: 2, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 2, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 2, nota: 6, turma: "1C" },
  { nome: "João", fase: 3, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 3, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 3, nota: 6, turma: "1C" },
  { nome: "João", fase: 4, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 4, nota: 9, turma: "1B" },
  { nome: "Paulo", fase: 4, nota: 6, turma: "1C" },
];

var ano2 = [
  { nome: "Sofia", fase: 1, nota: 5, turma: "1B" },
  { nome: "Aquiles", fase: 1, nota: 6, turma: "1C" },
  { nome: "João", fase: 2, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 2, nota: 9, turma: "1B" },
  { nome: "Aquiles", fase: 2, nota: 6, turma: "1C" },
  { nome: "João", fase: 3, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 3, nota: 9, turma: "1B" },
  { nome: "Aquiles", fase: 3, nota: 6, turma: "1C" },
  { nome: "João", fase: 4, nota: 5, turma: "1B" },
  { nome: "Sofia", fase: 4, nota: 9, turma: "1B" },
  { nome: "Aquiles", fase: 4, nota: 6, turma: "1C" },
  { nome: "João", fase: 4, nota: 5, turma: "1B" },
];

ano2.sort(function (a, b) {
  if (a.nome > b.nome) {
    return 1;
  }
  if (a.nome < b.nome) {
    return -1;
  }
  return 0;
});

console.log(ano2);

for (let i = 0; i < arrAlunos.length; i++) {
  if (arr[i].nota === 2) {
    console.log("xcxx");
  }
}

var entrada;
try {
  if (entrada === undefined) {
    console.log("Variável entrada existe, porém foi declarada sem valor!");
  }
  if (saida === undefined) {
    console.log("Variável saida existe, porém foi declarada sem valor!");
  }
} catch (erro) {
  console.log(`A variável ${erro.message} (Não declarada)`);
}

console.log("********* END **********\n");

console.log("### 11 Atividade prática ###\n");

let nomesPro = ["Aquiles", "Maria", "João", "sofia"];

function mostrarProps(obj, nomeObjeto) {
  var resultado = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      resultado += nomeObjeto + "." + i + " = " + obj[i] + "\n";
    }
  }
  return console.log(resultado);
}
mostrarProps(alunoObj, "alunoObj");

function alunoObj(nomePropriedade) {
  for (i = 0; i != nomePropriedade.length; i++) {
    this.nomePropriedade = 0;
  }
}
var alunoObj = new Object();
let nomePropriedade = "Aquiles";
alunoObj[nomePropriedade] = 0;
nomePropriedade = "Maria";
alunoObj[nomePropriedade] = 0;

var entrada;
try {
  if (entrada === undefined) {
    console.log("Variável entrada existe, porém foi declarada sem valor!");
  }
  if (saida === undefined) {
    console.log("Variável saida existe, porém foi declarada sem valor!");
  }
} catch (erro) {
  console.log(`A variável ${erro.message} (Não declarada)`);
}

console.log("\n ********* END **********\n");

console.log("### 12 Atividade prática ###\n");

function validaArray(arr, tamanho) {
  try {
    if (!arr && !tamanho)
      throw new ReferenceError("throw - Envie os parâmentros");

    if (typeof arr !== "object")
      throw new TypeError("throw - Array precisa ser do tipo object");

    if (typeof tamanho !== "number")
      throw new TypeError("throw - Array precisa ser do tipo number");

    if (arr.length !== tamanho)
      throw new RangeError(
        "throw - Objeto com tamanho diferente do segundo parâmentro!"
      );

    return arr;
  } catch (e) {
    if (e instanceof ReferenceError) {
      console.log("catch - Este erro é um ReferenceError!");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("catch - Este erro é um TypeError!");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("catch - Este erro é um RangeError!");
      console.log(e.message);
    } else {
      console.log("catch - Tipo de erro não esperado:" + e);
    }
  }
}

console.log(validaArray([1, 2], 2));

const myPromisse = new Primise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("Resolvida");
  }, 2000);
});

await myPromisse
  .then((result) => result + " passando pelo then")
  .then((result) => result + " e agora acabou!")
  .catch((err) => console.log(err.message));
