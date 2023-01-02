const questionContainer = document.querySelector(".nav-links");
const menu = document.getElementById("menu1");
const response = document.querySelector(".container");
const invisible = document.querySelector(".header")



menu.addEventListener("click", () => {
    response.classList.toggle("show-response");
    invisible.classList.toggle("show-hidden");
});