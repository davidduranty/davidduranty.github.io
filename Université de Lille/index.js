// const { default: Swiper } = require("swiper");

const questionContainer = document.querySelector(".nav-links");

const response = document.querySelector(".container");
const invisible = document.querySelector(".header");
const box2 = document.querySelector(".box-2");
// const swiper = new Swiper();
const click = document.querySelector(".click");
//const picture = document.getElementById("picture");

console.log(click);

menu1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("test");
  invisible.classList.toggle("click");
});
// menu.addEventListener("click", (e) => {
//   e.preventDefault;
//   response.classList("show-response");
//   invisible.classList.remove("show-hidden");
// });

//picture.addEventListener("click", () => {
//    picture.style.width = "auto|length|%|initial|inherit";
//})
function zoomin() {
  let GFG = document.getElementById("picture");
  let currWidth = GFG.clientWidth;
  GFG.style.width = currWidth + 100 + "px";
}

function zoomout() {
  let GFG = document.getElementById("picture");
  let currWidth = GFG.clientWidth;
  GFG.style.width = currWidth - 100 + "px";
}
window.addEventListener("scroll", () => {
  if (window.scrollY > 2500) {
    box2.style.opacity = "1";
    //box2.style.transition = "2s";
  }
});
