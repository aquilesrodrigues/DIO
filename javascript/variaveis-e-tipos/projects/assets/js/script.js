/* **********************************
   Javascript Assíncrono
   **********************************
   Nesta atividade, vamos criar uma página que carrega fotos aleatórias de cães sempre que clicamos no botão ou a página for carregada.

   Utilize a API https://dog.ceo/api/breeds/image/random para fazer as chamadas com o método fetch();
   Utilize seus conhecimentos na manipulação do DOM para criar a imagem e ativar o evento de clique do botão!
*/
const BASE_URL = "https://dog.ceo/api/breeds/image/random";
const btn = document.getElementById("change-animal");

const getAnimal = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    /* A url https://dog.ceo/api/breeds/image/random retorna:

       {"message":"https:\/\/images.dog.ceo\/breeds\/
       terrier-yorkshire\/n02094433_6672.jpg","status":"success"}

       Então vamos pegar o atributo "message", pois nele contém o caminho da imagem e entregar com return
    */
    return json.message;
  } catch (error) {
    console.log(error.message);
  }
};

const loadImg = async () => {
  const img = document.getElementById("image");
  img.src = await getAnimal();
};

loadImg();

btn.addEventListener("click", loadImg);

/* **********************************
   Javascript - Orientação a Objetos
   **********************************
   Nesta atividade, vamos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

   1.Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
   2.Dentro de ContaBancaria, construa o getter e o setter de saldo;
   3.Dentro de ContaBancaria, crie os métodos sacar e depositar;
   4.Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
   5.Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
   6.Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
   7.Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
   8.Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
   9.Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
*/

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }
  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    this._saldo = valor;
  }
  sacar(valor) {
    if (valor > this._saldo) {
      return console.log("Operação não pode ser completada em ContaBancaria!");
    }

    this._saldo = this._saldo - valor;
    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }
  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}
class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupança";
  }
}
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Universitária";
  }

  //sobrescrever o método sacar
  sacar(valor) {
    if (valor > 500) {
      return console.log(
        "Operação não pode ser completada em ContaUniversitária!"
      );
    }
    this._saldo = this._saldo - valor;
  }
}
