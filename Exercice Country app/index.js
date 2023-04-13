// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort")
console.log(btnSort);
let response = [];
let sortMethod = "maxToMin";

const countriesApp = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (response = data));

  countriesDisplay();
};

window.addEventListener("load", countriesApp);

const countriesDisplay = () => {
  countriesContainer.innerHTML = response
    .filter((countries) =>
      countries.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )
    .slice(0, inputRange.value)
    .sort((a, b) => {
      if (sortMethod === "maxToMin") {
        return b.population - a.population;
      } else if (sortMethod === "minToMax") {
        return a.population - b.population;
      } else if (sortMethod === "alpha") {
        return a.translations.fra.common.localeCompare(b.translations.fra.common)
      }
    })
    .map(
      (countries) =>
        `
      <div class="card">
        <img src = ${countries.flags.svg} alt= "drapeau ${
          countries.translations.fra.common
        }">
        <h1> ${countries.translations.fra.common}</h1>
        <h3>Capitale: ${countries.capital}</h3>
        <p> Population: ${countries.population.toLocaleString()}</p>
      </div>

      `
    )
    .join("");
};
countriesDisplay();
const countriesSearch = () => {
  inputSearch.addEventListener("input", countriesDisplay);
};

countriesSearch();
const countriesRange = () => {
  inputRange.addEventListener("input", () => {
    countriesDisplay();
    rangeValue.textContent = inputRange.value;
  });
};
countriesRange();

btnSort.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortMethod = e.target.id;
    countriesDisplay()
  })
  
})