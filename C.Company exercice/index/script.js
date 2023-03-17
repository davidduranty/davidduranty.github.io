const btn = document.querySelector(".toggle_btn");
const sidebar = document.querySelector(".sidebar");
const loupe = document.querySelector(".loupe");
const search = document.querySelector(".search");


btn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})

loupe.addEventListener("click", () => {
    search.classList.toggle("show")
})