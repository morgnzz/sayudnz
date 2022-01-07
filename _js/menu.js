let show = true; 
let listItem = document.getElementsByClassName (".nav-list")

let menuSection = document.querySelector(".menu")
let menuToggle = menuSection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

    document.body.style.display = show ? "block" : "initial"

    menuSection.classList.toggle("on", show)
    show = !show;

})

function Close() {
    menuSection.classList.toggle("on", show)
    show = !show;
}