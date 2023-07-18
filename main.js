const textareaElement = document.getElementById("textarea")
const totalCounterElement = document.getElementById("total-counter")
const remainingCounterElement = document.getElementById("remaining-counter")
textareaElement.addEventListener("keyup", () => {
  updateCounter()
})

updateCounter();

function updateCounter() {
  totalCounterElement.innerHTML = textareaElement.value.length
  remainingCounterElement.innerHTML = textareaElement.getAttribute("maxLength") - textareaElement.value.length;
}