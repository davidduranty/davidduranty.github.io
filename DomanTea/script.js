const container = document.querySelector(".card-container");
const form = document.querySelector(".form");
const loupe = document.querySelector(".loupe");
const input = document.querySelector("input");
const btns = document.querySelectorAll(".btnSort");
const language = document.querySelector(".language");
const lang = document.querySelectorAll(".lang");
const nav = document.querySelector(".navbar");
const body = document.querySelector("body");
const selectOne = document.querySelector(".select1");
const selectTwo = document.querySelector(".select2");
const selectThree = document.querySelector(".select3");
const selectFour = document.querySelector(".select4");
const selectFive = document.querySelector(".select5");
const selectSix = document.querySelector(".select6");
const croissant = document.querySelector(".croissant");
const decroissant = document.querySelector(".decroissant");
const compo = document.querySelectorAll(".compo");

// const btnAll = document.querySelectorAll(".btn")
console.log(compo);
let userThes = [];
let triSort = "";

const fetchThe = async () => {
  await fetch(`db.json`)
    .then((res) => res.json())
    .then((data) => (userThes = data.thes));

  theDisplay();
  console.log(userThes);
};
const theDisplay = () => {
  container.innerHTML = userThes
    .filter((the) =>
      the.name.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => {
      if (triSort === "minToMax") {
        return a.prix - b.prix;
      } else if (triSort === "maxToMin") {
        return b.prix - a.prix;
      }
    })
    .map((the) => {
      return `
      <div class="card">
      <img src=${the.img} alt="Photo de ${the.name}">
      <h1>${the.name}</h1>
      <p class="compo">Composition : ${the.content}</p>
      <div class="select">
      <h4>${the.prix.toFixed(2)} € <span id="span">/ Les 100g</span></h4>
      <button class='btn'>${the.btn}</button>
      </div>
      </div>
      `;
    })
    .join("");
};

loupe.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.toggle("formActive");
});

const theSearch = () => {
  inputSearch.addEventListener("input", theDisplay);
};

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    triSort = e.target.id;
    theDisplay();
  });
});



lang.forEach((el) => {
  el.addEventListener("click", () => {
    language.querySelector(".active").classList.remove("active");
    el.classList.add("active");

    const attr = el.getAttribute("language");
    selectOne.textContent = data[attr].selection;
    selectTwo.textContent = data[attr].selection2;
    selectThree.textContent = data[attr].selection3;
    selectFour.textContent = data[attr].selection4;
    selectFive.textContent = data[attr].selection5;
    selectSix.textContent = data[attr].selection6;
    btns.textContent = data[attr].bouton;
    croissant.textContent = data[attr].bouton;
    decroissant.textContent = data[attr].bouton;
  });
});

// btnAll.forEach((bouton) => {
//   bouton.addEventListener("click", (e) => {
//     console.log(e.target.id);
//   })
// })

fetchThe();
theSearch();

const data = {
  french: {
    selection: "THÉS & INFUSIONS",
    selection2: "BOITES & SACHETS",
    selection3: "COFFRETS & CADEAUX",
    selection4: "ACCESSOIRES",
    selection5: "GOURMANDISES",
    selection6: "FAMILLE DOMAN",
    input: "Recherche THÉ",
    bouton: "Prix ↑",
  },
  english: {
    selection: "TEAS & INFUSION",
    selection2: "BOXES & BAGS",
    selection3: "GIFT & BOXES",
    selection4: "ACCESSORIES",
    selection5: "DELICACIES",
    selection6: "DOMAN FAMILY",
    input: "Search Tea",
    bouton: "Price ↓",
  },
};
