const form = document.querySelector(".formulaire");
const spanEmail = document.querySelector(".span");
const spanMdp = document.querySelector(".spanMdp");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="password"]'
);
const input = document.querySelector(".input");
const mdpContainer = document.querySelector(".mdp-oublie");
const croix = document.querySelector(".croix");
const mdpForget = document.querySelector(".mdp");
const btnValide = document.querySelector(".validation");
let email, password;

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    spanEmail.textContent = "Erreur, email invalide";
    spanEmail.style.color = "red";
    email = null;
  } else {
    spanEmail.textContent = "email correct";
    spanEmail.style.color = "green";
    email = value;
  }
};
const passwordChecker = (value) => {
  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    spanMdp.textContent =
      "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial";
    spanMdp.style.color = "red";
    password = null;
  } else {
    spanMdp.textContent = "Mot de passe correct";
    spanMdp.style.color = "green";
    password = value;
  }
};
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

mdpForget.addEventListener("click", (e) => {
  e.preventDefault();
  mdpContainer.classList.add("containerOpen");
});
croix.addEventListener("click", (e) => {
  e.preventDefault();
  mdpContainer.style.opacity = 0;
  window.location.reload();
});
btnValide.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (email && password) {
//     const data = {
//       email,
//       password,
//       };
//       console.log(data);
//     inputs.forEach((input) => (input.value = ""));
//     email = null;
//       password = null;
//       alert("Login ok !")
//   } else {
//       alert("Merci de remplir les champs")
//   }
// });
