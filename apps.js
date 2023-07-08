const imageInputEl = document.getElementById("imageInput");

const voirTour = document.querySelector("#voirTout");
const lastbtn = document.querySelector("#lastbtn");
const middlebtn = document.querySelector("#middlebtn");

console.log(middlebtn);

voirTour.addEventListener("click", function () {
  window.location = "galery.html";
});
lastbtn.addEventListener("click", function () {
  window.location = "galery.html";
});
middlebtn.addEventListener("click", function () {
  window.location = "galery.html";
});





//Get Query String
const queryString = window.location.search;
//Get the url Params
const urlParams = new URLSearchParams(queryString);
const imageUrl = urlParams.get("url");
console.log(imageUrl);

const viewImageEl = document.getElementById("viewImage");
viewImageEl.href = `${imageUrl}`;
imageInputEl.value = `${imageUrl}`;
const nameEl = document.getElementById("name");
nameEl.textContent = urlParams.get("name");
