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
const carte = document.querySelector(".carte")
const btn = document.getElementById("cartesBurgers")
const croix = document.querySelector(".croix")
const croixBox = document.querySelector(".croixBox")
const carteBiere = document.querySelector(".carteBiere")
const carteDesBieres = document.getElementById("carteDesBieres")
btn.addEventListener("click", () => {
  carte.classList.add("carteMove")
})
carteDesBieres.addEventListener("click", () => {
  carteBiere.classList.add("carteMoveBox")
})

croix.addEventListener("click", () => {
  carte.classList.add("carteRemove")
  
  setTimeout(() => {

    window.location.reload();
  },1000)
})
croixBox.addEventListener("click", () => {
  carteBiere.classList.add("carteRemove")
  
  setTimeout(() => {

    window.location.reload();
  },1000)
})
