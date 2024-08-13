//
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleButton");
  const toggleElement = document.getElementById("toggleElement");

  toggleButton.addEventListener("click", () => {
    toggleElement.classList.toggle("visible");
  });
});
//
document.getElementById("toggleBtn").addEventListener("click", function () {
  var elements = document.querySelectorAll("[data-lang]");
  var buttonElement = document.getElementById("toggleBtn");

  elements.forEach(function (element) {
    var currentLang = element.getAttribute("data-lang");
    if (currentLang === "en") {
      element.innerText = element.getAttribute("data-fr");
      element.setAttribute("data-lang", "fr");
      buttonElement.innerText = "English";
    } else {
      element.innerText = element.getAttribute("data-en");
      element.setAttribute("data-lang", "en");
      buttonElement.innerText = "Francais";
    }
  });
});
//

//
// Select all the grid images
const gridImages = document.querySelectorAll(".grid-image");
// Select the large display image
const largeImage = document.getElementById("largeImage");

// Function to change the large image
function changeLargeImage(event) {
  // Get the clicked image's src
  const newSrc = event.target.src;
  // Hide the current large image
  largeImage.style.display = "none";
  // Update the large image's src
  largeImage.src = newSrc;
  // Show the updated large image
  largeImage.style.display = "block";
}

// Attach click event listeners to each grid image
gridImages.forEach((img) => {
  img.addEventListener("click", changeLargeImage);
});
