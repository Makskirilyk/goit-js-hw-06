const changeColorButton = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");

changeColorButton.addEventListener("click", function() {
const body = document.querySelector("body");
const color = getRandomHexColor();
body.style.backgroundColor = color;
colorSpan.textContent = color;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
