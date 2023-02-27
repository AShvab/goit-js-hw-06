// Напиши скрипт, який реагує на зміну значення
//  input#font-size-control (подія input) і змінює інлайн-стиль
//   span#text, оновлюючи властивість font-size. В результаті, 
//   перетягуючи повзунок, буде змінюватися розмір тексту.


const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);

const spanTextEl = document.querySelector("#text");
console.log(spanTextEl);

inputEl.addEventListener("input", (event) => {
    console.log(event);
    spanTextEl.style.fontSize = event.target.value + "px";
});


