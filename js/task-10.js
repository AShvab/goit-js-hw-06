// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку 
// Створити, після чого рендериться колекція. Натисненням 
// на кнопку Очистити, колекція елементів очищається.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');
console.log(boxesEl);

createBtnEl.addEventListener('click', getAmount);
destroyBtnEl.addEventListener('click', destroyBoxes);

function getAmount() {
  createBoxes(inputEl.value);
}
function destroyBoxes() {
  boxesEl.innerHTML = '';
}
function createBoxes(amount) {
  let elementSize = 30;
  let newElementSize = 0;
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement('div');
    newElementSize = elementSize + i * 10;
    box.style = `width: ${newElementSize}px; height: ${newElementSize}px;
    background-color: ${getRandomHexColor()}`;
    boxesEl.append(box);
  }
} 