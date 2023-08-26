const serviceClient = document.querySelector("#serviceClient");
serviceClient.style.display = "none";
console.log(serviceClient);
setTimeout(() => {
  serviceClient.style.display = "flex";
  setTimeout(() => {
    serviceClient.style.display = "none";
  }, 7000);
}, 3000);
