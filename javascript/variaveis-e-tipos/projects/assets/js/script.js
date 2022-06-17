const BASE_URL = "https://dog.ceo/api/breeds/image/random";
const btn = document.getElementById("change-animal");

const getAnimal = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.message;
  } catch (error) {
    console.log(error.message);
  }
};

const loadImg = async () => {
  const img = document.getElementsByTagName("img")[0];
  img.src = await getAnimal();
};

loadImg();

btn.addEventListener("click", loadImg);
