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

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
