// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
const countriesContainer = document.querySelector(".countries-container");
let response = [];

const countriesApp = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (response = data));
  console.log(response);
  countriesDisplay();
};

window.addEventListener("load", countriesApp);

const countriesDisplay = () => {
  countriesContainer.innerHTML = response
    .filter((countries) =>
      countries.translations.fra.common.includes(inputSearch.value)
    )
    .map(
      (countries) =>
        `
      <div class="card">
        <img src = ${countries.flags.png} alt= "drapeau ${
          countries.translations.fra.common
        }">
        <h1> ${countries.translations.fra.common}</h1>
        <h3>Capitale: ${countries.capital}</h3>
        <p> Population: ${countries.population}</p>
      </div>

      `
    )
    .join("");
};
countriesDisplay();
