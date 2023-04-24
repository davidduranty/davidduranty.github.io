let typed = new Typed(".textDefil", {
  strings: ["CALIFORNIA"],
  typeSpeed: 300,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const slide = document.querySelector(".photo-swiper");
const right = document.getElementById("layer+");
const left = document.getElementById("layer-");

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
changeNext();
changePrevious()
