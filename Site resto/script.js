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
const propos = document.querySelector(".propos");
const menuBiere = document.querySelector(".menuBiere");
const contact = document.querySelector(".contact");
const btnReserve = document.querySelector(".boutonBtn");
const carteReserve = document.querySelector(".reservation");
const closeReserve = document.querySelector(".close-reserve");
const annule = document.querySelector(".btn-annule");
const nav = document.querySelectorAll(".nav");
const swiper = document.querySelector(".photo-swiper");
const swiperBiere = document.querySelector(".swiper-biere");
const adultSelect = document.getElementById("select-adult");
const enfantSelect = document.getElementById("select-enfant");
const ptr = document.getElementById("ptr");

let adultPrice = 39;
let enfantPrice = 15;


const openReservation = () => {
  btnReserve.addEventListener("click", () => {
    carteReserve.classList.add("moveReserve");
  });
}

const closeReservation = () => {
  closeReserve.addEventListener("click", () => {
    carteReserve.classList.remove("moveReserve");
  });
  annule.addEventListener("click", () => {
    carteReserve.classList.remove("moveReserve");
  });
};

const openCarteBurger = () => {
  btn.addEventListener("click", () => {
    carte.classList.add("carteMove");
  });
}

const closeCarteBurger = () => {
  croix.addEventListener("click", () => {
    carte.classList.remove("carteMove");
  });
}

const openCarteBiere = () => {
  carteDesBieres.addEventListener("click", () => {
    carteBiere.classList.add("carteMoveBox");
  });
}

const closeCarteBiere = () => {
  croixBox.addEventListener("click", () => {
    carteBiere.classList.remove("carteMoveBox");
  });
}

const scrollSite = () => {
  window.addEventListener("scroll", () => {
    const scrollValue =
      ((window.scrollY + window.innerHeight) * 100) / document.body.offsetHeight;
  
    nav.forEach((element) => {
      if (scrollValue > 70) {
        element.style.color = "black";
      } else {
        element.style.color = "rgba(69, 206, 206, 0.759)";
      }
      if (scrollValue > 50) {
        swiper.style.transform = "translateX(0)";
        swiper.style.transition = "1s ease";
      }
      if (scrollValue > 70) {
        swiperBiere.style.transform = "translateX(0)";
        swiperBiere.style.transition = "1s ease";
      }
      if (scrollValue > 80 && scrollValue < 98) {
        propos.style.color = "white";
        menuBiere.style.color = "white";
        contact.style.color = "white";
      }
    });
  });
}

const effectMouse = () => {
  span.addEventListener("mouseover", () => {
    rect.classList.add("rectangle");
  });
  span.addEventListener("mouseout", () => {
    rect.classList.remove("rectangle");
    rect.style.transition = "2s";
  });
}

const dateReservation = () => {
  const dateToday = new Date().toISOString().split("T")[0];
  date.value = dateToday;
  date.min = dateToday;
}

const price = () => {
  formAdult.addEventListener("submit", (e) => {
    e.preventDefault();
    totalAdult.textContent = adultSelect.value * adultPrice + " euros";
    totalA = totalAdult.textContent;
  });

  formEnfant.addEventListener("submit", (e) => {
    e.preventDefault();
    totalEnfant.textContent = enfantSelect.value * enfantPrice + " euros";
    totalE = totalEnfant.textContent;
  });

  //  ptr.innerHTML += `<ul>${totalA}  ${totalE}   euros</ul>`
};



openReservation();
closeReservation();
openCarteBurger();
closeCarteBurger();
openCarteBiere();
closeCarteBiere();
scrollSite();
effectMouse();
dateReservation();
price();
