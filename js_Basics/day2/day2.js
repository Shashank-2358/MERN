const api = "https://api.jikan.moe/v4/seasons/upcoming";
const title = document.querySelector(".title");
const btn = document.querySelector("#btn");

const abc = async () => {
    let response = await fetch(api);
    let data = await response.json();
    title.innerText = data.data[10].title;

}
btn.addEventListener("click", abc);

