const menuToggle = document.querySelector(".toggle")
const showcase = document.querySelector(".showcase")

menuToggle.addEventListener("click", (e) => {
    e.stopPropagation()
    menuToggle.classList.toggle("active")
    showcase.classList.toggle("active")
})

showcase.addEventListener("click", () => {
    if (showcase.classList.contains("active") && menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active")
        showcase.classList.remove("active")
    }
})