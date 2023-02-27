function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonChangeColor = document.querySelector(".change-color");
console.log(buttonChangeColor);

const spanEl = document.querySelector(".color");
console.log(spanEl);

buttonChangeColor.addEventListener('click', () => {
document.body.style.backgroundColor = getRandomHexColor();
spanEl.textContent = getRandomHexColor();
});

