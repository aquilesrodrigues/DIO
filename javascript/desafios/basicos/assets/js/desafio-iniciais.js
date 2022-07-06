// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

/* *****************************************************
    DESAFIO: 1 / 3 - Patinhos

    Cinco patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só quatro patinhos voltaram de lá. Quatro patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só três patinhos voltaram de lá. Três patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só dois patinhos voltaram de lá. Dois patinhos foram passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas só um patinho voltou de lá. Um patinho foi passear. Além das montanhas. Para brincar. A mamãe gritou: quá, quá, quá, quá. Mas nenhum patinho voltou de lá.

    A mamãe patinha ficou tão triste naquele dia que resolveu pedir sua ajuda para procurar além das montanhas, na beira do mar, quantos patinhos não voltaram de lá.
    ====================================================
    Entrada
        Haverá vários casos de testes, a primeira linha de cada caso de teste contém um inteiro (0 ≤ P ≤ 1019) representando a quantidade total de patos, a entrada termina com P = -1.

    Saída
        O arquivo de saída deve conter a quantidade de patinhos que retornaram.
*/

let n = parseInt(gets());

//TODO: Complete os espaços em branco com uma possível solução para o desafio

while (n != -1) {
  if (n >= 1) print(n - 1);
  else print(0);
  n = parseInt(gets());
}

/* *****************************************************
    DESAFIO: 2 / 3 - Pedra, Papel, Ataque Aéreo

    Pedra, Papel, Ataque Aéreo é um jogo antigo mas que é popular até hoje. Nele, duas ou mais pessoas fazem gestos com a mão para vencer o adversário. 

    As partidas são muito simples. Os jogadores podem escolher entre o sinal de uma Pedra (o punho), o sinal de um Papel (a palma aberta), e o sinal para o Ataque Aéreo (igual o do Papel, mas com apenas o polegar e o mindinho estendidos).


    Uma partida, com dois jogadores, possuem as seguintes regras para se definir um vencedor:

    Ataque Aéreo vs. Pedra: Neste caso, o jogador com o Ataque Aéreo derrota o jogador com a Pedra, por razões óbvias.
    Pedra vs. Papel: Neste caso, o jogador com a Pedra derrota o com Papel, porque a Pedra machuca muito mais.
    Papel vs. Ataque Aéreo: Aqui o Ataque Aéreo ganha, porque Ataque Aéreo sempre ganha e o Papel é patético.
    Papel vs. Papel: Nesta variação, ambos os jogadores ganham, porque o Papel é inútil e ninguém que enfrenta o Papel pode perder.
    Pedra vs. Pedra: Para este caso não há ganhador, porque depende do que os jogadores decidem fazer com a Pedra e normalmente não fazem nada.
    Ataque Aéreo vs. Ataque Aéreo: Quando isto acontece, todos os jogadores perdem, devido a Aniquilação Mútua.
    Agora desenvolva um programa que, dada as escolhas de dois jogadores, informe quem venceu o jogo.
    ====================================================
    Entrada
        A entrada consiste de N (1 ≤ N ≤ 1000) casos de teste. N deve ser lido na primeira linha da entrada. Cada caso de teste é composto por duas linhas, cada uma contendo uma string. A primeira string representa o sinal escolhido pelo jogador 1 e a segunda string representa o sinal escolhido pelo jogador 2. Essas strings podem ser:

        “ataque”: para representar o Ataque Aéreo
        “pedra”: para representar a Pedra
        “papel”: para representar o Papel

        C U I D A D O !
        ===============
        As entradas podem conter espaços indesejados

    Saída
        A saída deve conter o seguinte:

        “Jogador 1 venceu”: se o Jogador Um tiver vencido a partida
        “Jogador 2 venceu”: se o Jogador Dois tiver vencido a partida
        “Ambos venceram”: se os dois jogadores tiverem vencido a partida
        “Sem ganhador”: se não houver ganhador
        “Aniquilacao mutua”: se ocorrer Aniquilação Mútua
    Cada saída de um caso de teste deve estar em uma linha.
*/

let N = parseInt(gets());
let jogador1, jogador2;
for (let i = 0; i < N; i++) {
  jogador1 = gets();
  jogador2 = gets();

  jogador1 = jogador1.trim(); // TODO Para evitar entrada de texto com espaços em branco antes e depois
  jogador2 = jogador2.trim(); // TODO Para evitar entrada de texto com espaços em branco antes e depois

  //TODO: Complete os espaços em branco com uma possível solução para o desafio

  if (
    jogador1.toUpperCase() === "ATAQUE" &&
    jogador2.toUpperCase() === "ATAQUE"
  )
    print("Aniquilacao mutua");
  else if (
    jogador1.toUpperCase() === "PAPEL" &&
    jogador2.toUpperCase() === "PAPEL"
  )
    print("Ambos venceram");
  else if (
    jogador1.toUpperCase() === "ATAQUE" &&
    (jogador2.toUpperCase() === "PEDRA" || jogador2.toUpperCase() === "PAPEL")
  )
    print("Jogador 1 venceu");
  else if (
    jogador1.toUpperCase() === "PAPEL" &&
    (jogador2.toUpperCase() === "ATAQUE" || jogador2.toUpperCase() === "PEDRA")
  )
    print("Jogador 2 venceu");
  else if (
    jogador1.toUpperCase() === "PEDRA" &&
    jogador2.toUpperCase() === "PAPEL"
  )
    print("Jogador 1 venceu");
  else if (
    jogador1.toUpperCase() === "PEDRA" &&
    jogador2.toUpperCase() === "ATAQUE"
  )
    print("Jogador 2 venceu");
  else print("Sem ganhador");
}
