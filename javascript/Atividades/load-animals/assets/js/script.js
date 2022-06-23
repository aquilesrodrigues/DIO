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
