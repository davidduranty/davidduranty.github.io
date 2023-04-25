let typed = new Typed(".textDefil", {
  strings: ["CALIFORNIA"],
  typeSpeed: 300,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const slide = document.querySelector(".photo-swiper");
const beer = document.querySelector(".img-bieres");
const right = document.getElementById("layer+");
const left = document.getElementById("layer-");
const rightBeer = document.getElementById("layer++");
const leftBeer = document.getElementById("layer--");
function changeNext() {
  right.addEventListener("click", () => {
    slide.scrollLeft += 360;
  });
}
function changePrevious() {
  left.addEventListener("click", () => {
    slide.scrollLeft -= 360;
  });
}
function changeNextBeer() {
  rightBeer.addEventListener("click", () => {
    beer.scrollLeft -= 360;
  });
}
function changePreviousBeer() {
  leftBeer.addEventListener("click", () => {
    beer.scrollLeft += 360;
  });
}
changeNext();
changePrevious();
changeNextBeer();
changePreviousBeer();
