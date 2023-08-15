const lecture = document.querySelector(".lecture");
const pause = document.getElementById("span");
const element1 = document.querySelector(".audio1");
const element2 = document.querySelector(".audio2");
const element3 = document.querySelector(".audio3");
const element4 = document.querySelector(".audio4");
const control1 = document.getElementById("control1");
const control2 = document.getElementById("control2");
const control3 = document.getElementById("control3");
const control4 = document.getElementById("control4");
const progress1 = document.getElementById("progress1");
const progress2 = document.getElementById("progress2");
const progress3 = document.getElementById("progress3");
const progress4 = document.getElementById("progress4");
const fleche = document.getElementById("artistes");
const nav = document.querySelector(".navbar-services");
const l1 = document.querySelector(".lecteur1");
const l2 = document.querySelector(".lecteur2");
const l3 = document.querySelector(".lecteur3");
const l4 = document.querySelector(".lecteur4");
const forward1 = document.querySelector(".forward1");
const textLove = document.querySelector(".textLove");
const textOne = document.querySelector(".textOne");
const textJammin = document.querySelector(".textJammin");
const textCould = document.querySelector(".textCould");
const currentDuration = document.querySelector(".current-duration");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

fleche.addEventListener("click", () => {
  nav.classList.toggle("visibleNavbar");
});
bob1.addEventListener("click", () => {
  l1.classList.toggle("lecteurVisibleLove");
  textLove.classList.toggle("textHide");
  // play();
});
bob2.addEventListener("click", () => {
  l2.classList.toggle("lecteurVisibleO");
  textOne.classList.toggle("textOneHide");
  // play();
});
bob3.addEventListener("click", () => {
  l3.classList.toggle("lecteurVisibleJ");
  textJammin.classList.toggle("textJamminHide");
});
bob4.addEventListener("click", () => {
  l4.classList.toggle("lecteurVisibleC");
  textCould.classList.toggle("textCouldHide");
});
btn.addEventListener("click", () => {
  l1.style.scale = 0
  textLove.style.scale = 0
  setTimeout(() => {
  window.location.reload();
  },1000)
});
btn2.addEventListener("click", () => {
  l2.style.scale = 0
  textOne.style.scale = 0
  setTimeout(() => {
    window.location.reload();
    },1000)
});
btn3.addEventListener("click", () => {
  l3.style.scale = 0
  textJammin.style.scale = 0
  setTimeout(() => {
    window.location.reload();
    },1000)
});
btn4.addEventListener("click", () => {
  l4.style.scale = 0
  textCould.style.scale = 0
  setTimeout(() => {
    window.location.reload();
    },1000)
});
function playAudio() {
  let audio = new Audio("./audio/bob-marley-is-this-love.mp3");
  // audio.play();
  control1.addEventListener("click", () => {
    if (control1.classList.contains("fa-pause")) {
      audio.pause();
      control1.classList.remove("fa-pause");
      control1.classList.add("fa-play");
    } else {
      audio.play();
      control1.classList.add("fa-pause");
      control1.classList.remove("fa-play");
    }
  });
}
playAudio();

function playAudio1() {
  let audio = new Audio("./audio/bob-marley-one-love.mp3");
  // audio.play();
  control2.addEventListener("click", () => {
    if (control2.classList.contains("fa-pause")) {
      audio.pause();
      control2.classList.remove("fa-pause");
      control2.classList.add("fa-play");
    } else {
      audio.play();
      control2.classList.add("fa-pause");
      control2.classList.remove("fa-play");
    }
  });
}
playAudio1();

function playAudio2() {
  let audio = new Audio("./audio/bob-marley-jammin.mp3");
  // audio.play();
  control3.addEventListener("click", () => {
    if (control3.classList.contains("fa-pause")) {
      audio.pause();
      control3.classList.remove("fa-pause");
      control3.classList.add("fa-play");
    } else {
      audio.play();
      control3.classList.add("fa-pause");
      control3.classList.remove("fa-play");
    }
  });
}
playAudio2();

function playAudio3() {
  let audio = new Audio("./audio/bob-marley-could-you-be-loved-hq.mp3");
  // audio.play();
  control4.addEventListener("click", () => {
    if (control4.classList.contains("fa-pause")) {
      audio.pause();
      control4.classList.remove("fa-pause");
      control4.classList.add("fa-play");
    } else {
      audio.play();
      control4.classList.add("fa-pause");
      control4.classList.remove("fa-play");
    }
  });
}
playAudio3();

// const setMusic = (i) => {
//   progress1.value = 0;
//   let song = songs[i];
//   currentMusic = i;
//   music.src = song.music;

//   // songName.innerHTML = song.name;
//   // artistName.innerHTML = song.artist;

//   currentTime.innerHTML = "00:00";
//   setTimeout(() => {
//     progress1.max = music.duration;
//     currentDuration.innerHTML = Math.floor(music.duration);
//   }, 300);
// };
// setMusic(0);
// const formatTime = (time) => {
//   let min = Math.floor(time / 60, 10);
//   if (min < 10) {
//     min = `0${min}`;
//   }
//   let sec = Math.floor(time % 60, 10);
//   if (sec < 10) {
//     sec = `0${sec}`;
//   }
//   return `${min} : ${sec}`;
// };
// formatTime();
// setInterval(() => {
//   progress1.value = music.currentTime;
//   currentTime.innerHTML = Math.floor(music.currentTime);
// }, 500);
// element1.onloadedmetadata1 = function () {
//   progress1.max = element1.duration;
//   progress1.value = element1.currentTime;
// };
// element2.onloadedmetadata2 = function () {
//   progress2.max = element2.duration;
//   progress2.value = element2.currentTime;
// };
// element3.onloadedmetadata3 = function () {
//   progress3.max = element3.duration;
//   progress3.value = element3.currentTime;
// };
// element4.onloadedmetadata4 = function () {
//   progress4.max = element4.duration;
//   progress4.value = element4.currentTime;
// };
// fleche.addEventListener("click", () => {
//   nav.classList.toggle("visibleNavbar");
// });
// bob1.addEventListener("click", () => {
//   l1.classList.toggle("lecteurVisibleLove");
//   play();
// });
// bob2.addEventListener("click", () => {
//   l2.classList.toggle("lecteurVisibleJ");
//   play2();
// });
// bob3.addEventListener("click", () => {
//   l3.classList.toggle("lecteurVisibleO");
//   play3();
// });
// bob4.addEventListener("click", () => {
//   l4.classList.toggle("lecteurVisibleC");
//   play4();
// });
// function play() {
//   control1.addEventListener("click", () => {
//     if (control1.classList.contains("fa-pause")) {
//       element1.pause();
//       control1.classList.remove("fa-pause");
//       control1.classList.add("fa-play");
//     } else {
//       element1.play();
//       control1.classList.add("fa-pause");
//       control1.classList.remove("fa-play");
//     }
//   });

//   if (element1.play()) {
//     setInterval(() => {
//       progress1.value = element1.currentTime;
//     },2200);
//   }
//   progress1.onchange = function () {
//     element1.play();
//     element1.currentTime = progress1.value;
//     control1.classList.add("fa-pause");
//     control1.classList.remove("fa-play");
//   };
// }

// function play2() {
//   control2.addEventListener("click", () => {
//     if (control2.classList.contains("fa-pause")) {
//       element2.pause();
//       control2.classList.remove("fa-pause");
//       control2.classList.add("fa-play");
//     } else {
//       element2.play();
//       control2.classList.add("fa-pause");
//       control2.classList.remove("fa-play");
//     }
//   });

//   if (element2.play()) {
//     setInterval(() => {
//       progress2.value = element2.currentTime;
//     }, 2200);
//   }
//   progress2.onchange = function () {
//     element2.play();
//     element2.currentTime = progress2.value;
//     control2.classList.add("fa-pause");
//     control2.classList.remove("fa-play");
//   };
// }
// function play3() {
//   control3.addEventListener("click", () => {
//     if (control3.classList.contains("fa-pause")) {
//       element3.pause();
//       control3.classList.remove("fa-pause");
//       control3.classList.add("fa-play");
//     } else {
//       element3.play();
//       control3.classList.add("fa-pause");
//       control3.classList.remove("fa-play");
//     }
//   });

//   if (element3.play()) {
//     setInterval(() => {
//       progress3.value = element3.currentTime;
//     }, 2200);
//   }
//   progress3.onchange = function () {
//     element3.play();
//     element3.currentTime = progress3.value;
//     control3.classList.add("fa-pause");
//     control3.classList.remove("fa-play");
//   };
// }
// function play4() {
//   control4.addEventListener("click", () => {
//     if (control4.classList.contains("fa-pause")) {
//       element4.pause();
//       control4.classList.remove("fa-pause");
//       control4.classList.add("fa-play");
//     } else {
//       element4.play();
//       control4.classList.add("fa-pause");
//       control4.classList.remove("fa-play");
//     }
//   });

//   if (element4.play()) {
//     setInterval(() => {
//       progress4.value = element4.currentTime;
//     }, 2200);
//   }
//   progress4.onchange = function () {
//     element4.play();
//     element4.currentTime = progress4.value;
//     control4.classList.add("fa-pause");
//     control4.classList.remove("fa-play");
//   };
// }
