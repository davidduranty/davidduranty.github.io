const container = document.querySelector(".card-container");
const form = document.querySelector(".form");
const loupe = document.querySelector(".loupe");
const input = document.querySelector("input");
const btns = document.querySelectorAll(".btnSort");

let userThes = [];
let triSort = "minToMax";

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

fetchThe();
theSearch();
