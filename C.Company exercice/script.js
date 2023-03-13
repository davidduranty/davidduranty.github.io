const btn = document.querySelector(".toggle_btn");
const sidebar = document.querySelector(".sidebar");


btn.addEventListener("click", () => {
    sidebar.classList.toggle("active")
})
