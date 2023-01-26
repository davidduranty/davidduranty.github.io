const invisible = document.querySelectorAll(".header, .nav-bar")


console.log(invisible);


menu1.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("test");
    invisible.classList.toggle("click");
  });