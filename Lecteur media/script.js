const lecture = document.querySelector(".lecture");
const pause = document.getElementById("span");
const element = document.querySelector(".audio");
const element2 = document.querySelector(".audio1");
const element3 = document.querySelector(".audio2");
const element4 = document.querySelector(".audio3");
const control = document.getElementById("control1");
const control2 = document.getElementById("control2");
const progress = document.getElementById("progress1");
const progress2 = document.getElementById("progress2");
const fleche = document.getElementById("artistes");
const nav = document.querySelector(".navbar-services");
const l1 = document.querySelector(".lecteur1");
const l2 = document.querySelector(".lecteur2");
const l3 = document.querySelector(".lecteur3");
const l4 = document.querySelector(".lecteur4");
const textLove = document.querySelector(".textLove");
element.onloadedmetadata = function () {
  progress.max = element.duration;
  progress.value = element.currentTime;
};
fleche.addEventListener("click", () => {
  nav.classList.toggle("visibleNavbar");
});
bob1.addEventListener("click", () => {
  l1.classList.toggle("lecteurVisibleLove");
  play();
});
bob2.addEventListener("click", () => {
  l2.classList.toggle("lecteurVisibleJ");
  play2();
});
bob3.addEventListener("click", () => {
  l3.classList.toggle("lecteurVisibleO");
});
bob4.addEventListener("click", () => {
  l4.classList.toggle("lecteurVisibleC");
});
function play() {
  control.addEventListener("click", () => {
    if (control.classList.contains("fa-pause")) {
      element.pause();
      control.classList.remove("fa-pause");
      control.classList.add("fa-play");
    } else {
      element.play();
      control.classList.add("fa-pause");
      control.classList.remove("fa-play");
    }
  });

  if (element.play()) {
    setInterval(() => {
      progress.value = element.currentTime;
    }, 200);
  }
  progress.onchange = function () {
    element.play();
    element.currentTime = progress.value;
    control.classList.add("fa-pause");
    control.classList.remove("fa-play");
  };
}
function play2() {
  control2.addEventListener("click", () => {
    if (control2.classList.contains("fa-pause")) {
      element3.pause();
      control2.classList.remove("fa-pause");
      control2.classList.add("fa-play");
    } else {
      element3.play();
      control2.classList.add("fa-pause");
      control2.classList.remove("fa-play");
    }
  });

  if (element.play()) {
    setInterval(() => {
      progress2.value = element2.currentTime;
    }, 200);
  }
  progress2.onchange = function () {
    element3.play();
    element2.currentTime = progress2.value;
    control2.classList.add("fa-pause");
    control2.classList.remove("fa-play");
  };
}
