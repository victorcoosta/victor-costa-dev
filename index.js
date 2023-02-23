document.querySelector (".menu-mobile").addEventListener("click", () => {
    document.querySelector ("nav").classList.add("open")
})

document.querySelector (".menu-close").addEventListener("click", () => {
    document.querySelector ("nav").classList.remove("open")
})