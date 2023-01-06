let playOne = true;

window.addEventListener("scroll", () => {
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight * 100
    if (scrollValue > 1 && playOne) {
        popup.style.opacity = 1;
        popup.style.transform = "none"
        playOne = false
    }
})

closeBtn.addEventListener("click", () => {
    popup.style.opacity = 0;
})