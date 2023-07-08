const voirTour = document.querySelector("#voirTout");
const voirTourone = document.querySelector("#voirToutone");
const voirTourtwo = document.querySelector("#voirTouttwo");

voirTour.addEventListener("click", function () {
  window.location = "galery.html";
});
voirTourone.addEventListener("click", function () {
  window.location = "galery.html";
});
voirTourtwo.addEventListener("click", function () {
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
