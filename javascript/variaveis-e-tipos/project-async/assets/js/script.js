const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const btn = document.getElementById("change-cat");

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json.webpurl;
  } catch (error) {
    console.log(error.message);
  }
};

const loadImg = async () => {
  const img = document.getElementById("cat");
  img.src = await getCats();
};

loadImg();

Btn.addEventListener("click", loadImg);
