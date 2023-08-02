const container = document.querySelector(".card-container");

let userThes = [];

const fetchThe = async () => {
  await fetch("db.json")
    .then((res) => res.json())
    .then((data) => (userThes = data.thes));

  console.log(userThes);

  container.innerHTML = userThes
    .sort((a, b) => a.prix - b.prix)
    .map(
      (the) =>
        `
      <div class="card">
        <img src=${the.img} alt="Photo de ${the.name}">
        <h1>${the.name}</h1><span>⭐⭐⭐</span>
        <p class="compo">Composition : ${the.content}</p>
        <div class="select">
          <h4>${the.prix} £ Les 100g</h4>
          <button class="btn">Ajouter</button>
        </div>
      </div>
    `
    )
    .join("");
};

fetchThe();
