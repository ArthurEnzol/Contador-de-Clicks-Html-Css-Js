"user strict"

let counter = 0

const button = document.getElementById("button")
const spancounter = document.getElementById("counter")
const button_reset = document.getElementById("button-reset")

button.addEventListener("click", () => {
    counter++
    spancounter.textContent = counter
})

button_reset.addEventListener("click", () => {
    counter = 0
    spancounter.textContent = counter
})
