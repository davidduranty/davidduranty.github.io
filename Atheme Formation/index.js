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

icon.addEventListener("click", (e) => {
  e.preventDefault();
  search.classList.toggle("show-response");
});
veille.addEventListener("mouseover", () => {
  theme.classList.toggle("theme-visible");
});
// theme.addEventListener('mouseout', () => {
//   theme.style.opacity = 0;
// })
theme.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "numerique":
      window.location.href = "http:numerique.html";
      break;
    case "envir":
      window.location.href = "http:environnement.html";
      break;
    case "sante":
      window.location.href = "http:sante.html";
      break;
    case "mobilite":
      window.location.href = "mobilite.html";
      break;
    case "btp":
      window.location.href = "btp.html";
      break;
    case "commerce":
      window.location.href = "commerce.html";
      break;
    case "culture":
      window.location.href = "culture.html";
      break;
    case "cohesion":
      window.location.href = "cohesion.html";
      break;
    case "industrie":
      window.location.href = "industrie.html";
      break;
    case "finance":
      window.location.href = "finance.html";
      break;
    case "service":
      window.location.href = "";
      break;
    case "competence":
      window.location.href = "";
      break;
    default:
      null;
  }
});

menu.forEach((clicked) => {
  clicked.addEventListener("click", () => {
    clicked.classList.toggle("menu-js");
  });
});

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.style.transform = "rotate(-10deg)";
//   });
// });

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 400) {
    nav.style.top = "500px";
    console.log(nav);
  }
});
