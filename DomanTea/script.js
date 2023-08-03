const container = document.querySelector(".card-container");
const form = document.querySelector(".form");
const loupe = document.querySelector(".loupe");
const input = document.querySelector("input");
let userThes = [];
console.log(input);

const fetchThe = async () => {
  await fetch(`db.json`)
    .then((res) => res.json())
    .then((data) => (userThes = data.thes));
  
  theDisplay();
  console.log(userThes);
  
}
const theDisplay = () => {
  container.innerHTML = userThes
    .filter((the) => 
      the.name.toLowerCase().includes(inputSearch.value.toLowerCase())
    )
    .sort((a, b) => a.prix - b.prix)
    .map(
      (the) =>
        `
      <div class="card">
        <img src=${the.img} alt="Photo de ${the.name}">
        <h1>${the.name}</h1>
        <p class="compo">Composition : ${the.content}</p>
        <div class="select">
          <h4>${the.prix.toFixed(2)}€ Les 100g</h4>
          <button class="btn">Ajouter</button>
        </div>
      </div>
    `
    )
    .join("");
};



loupe.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.toggle("formActive");
});

const theSearch = () => {
  inputSearch.addEventListener("input", theDisplay);
};

fetchThe();
theSearch();
