function getColor() {
  const popup = document.querySelector(".popup");
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb( ${r}, ${g}, ${b} )`;

  window.addEventListener("scroll", () => {
    let scrollValue =
      ((window.scrollY + window.innerHeight) / document.body.offsetHeight) *
      100;
    if (scrollValue > 80) {
      popup.style.opacity = 1;
      popup.style.transform = "none";
    }
  });

  popup.style.background = color;
}

setInterval(getColor, 2000);
