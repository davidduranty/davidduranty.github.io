// const { default: Swiper } = require("swiper");

const questionContainer = document.querySelector(".nav-links");
const response = document.querySelector(".container");
const invisible = document.querySelector(".header");
const box2 = document.querySelector(".box-2");
const click = document.querySelector(".click");


console.log(click);

menu1.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("test");
  invisible.classList.toggle("click");
});
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
    
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    fete.style.opacity = 0
    fete.style.transition = "0.3s"
  } else if (window.scrollY < 400) {
    fete.style.opacity = 1
    fete.style.transition = "0.9s"
  } else {
    fete.style.position = "fixed"
  }
})
