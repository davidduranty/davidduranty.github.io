// const menu = document.querySelector(".menu");
// const rotate = document.getElementById("menu");

// menu.addEventListener("mousemove", () => {

//     menu.style.background = "lightgrey"
//     menu.style.borderRadius = "30px"
//     menu.style.transition = "2s"
// })

// rotate.addEventListener("mousemove", () => {
//     console.log(rotate)
//     rotate.style.transform = "rotate(5deg)";
// })

const menu = document.querySelectorAll("#a, #b, #c, #d, #e, #f, #g, #h");
const buttons = document.querySelectorAll("button");
const nav = document.querySelector(".container");
const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const veille = document.querySelector(".veille-nav");
const theme = document.querySelector(".theme");

console.log(veille);
icon.addEventListener("click", (e) => {
  e.preventDefault();
  search.classList.toggle("show-response");
});
veille.addEventListener("mouseover", () => {
  theme.classList.toggle("theme-visible");
});

menu.forEach((clicked) => {
  clicked.addEventListener("click", () => {
    clicked.classList.toggle("menu-js");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "rotate(-10deg)";
  });
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 400) {
    nav.style.top = "500px";
    console.log(nav);
  }
});
