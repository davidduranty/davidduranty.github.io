let typed = new Typed(".textDefil", {
  strings: ["CALIFORNIA"],
  typeSpeed: 300,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
const slide = document.querySelector(".photo-swiper");
const beer = document.querySelector(".swiper-biere");
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
    beer.scrollLeft -= 330;
  });
}
function changePreviousBeer() {
  leftBeer.addEventListener("click", () => {
    beer.scrollLeft += 330;
  });
}
changeNext();
changePrevious();
changeNextBeer();
changePreviousBeer();
const carte = document.querySelector(".carte");
const btn = document.getElementById("cartesBurgers");
const croix = document.querySelector(".croix");
const croixBox = document.querySelector(".croixBox");
const carteBiere = document.querySelector(".carteBiere");
const carteDesBieres = document.getElementById("carteDesBieres");
const span = document.querySelector(".btn");
const rect = document.querySelector(".rect");
console.log(carte);
btn.addEventListener("click", () => {
  carte.classList.add("carteMove");
});
croix.addEventListener("click", () => {
  carte.classList.remove("carteMove");
});
carteDesBieres.addEventListener("click", () => {
  carteBiere.classList.add("carteMove");
});
croixBox.addEventListener("click", () => {
  carteBiere.classList.remove("carteMove");
});

const nav = document.querySelectorAll(".nav");
const swiper = document.querySelector(".photo-swiper");

window.addEventListener("scroll", () => {
  const scrollValue =
    ((window.scrollY + window.innerHeight) * 100) / document.body.offsetHeight;
  nav.forEach((element) => {
    if (scrollValue > 70) {
      element.style.color = "black";
    } else {
      element.style.color = "rgba(69, 206, 206, 0.759)";
    }
  });
  if (scrollValue > 50) {
    swiper.style.transform = "translateX(0)";
    swiper.style.transition = "1s ease";
  }
});
span.addEventListener("mouseover", () => {
  rect.classList.add("rectangle");
});
span.addEventListener("mouseout", () => {
  rect.classList.remove("rectangle");
  rect.style.transition = "2s";
});
