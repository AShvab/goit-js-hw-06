// Напиши скрипт, який під час втрати фокусу
//  на інпуті (подія blur), перевіряє його вміст 
//  щодо правильної кількості 
// введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається 
// в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border 
// інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і 
// invalid, які ми вже додали у вихідні файли завдання.


const inputEl = document.querySelector("#validation-input");
console.log(inputEl);



  inputEl.addEventListener("blur", (event) => {
    if (event.currentTarget.value.trim().length === Number(event.currentTarget.dataset.length)) {
        event.currentTarget.classList.add("valid")
    }
    else {
        event.currentTarget.classList.add("invalid");
    }
  });

inputEl.addEventListener("focus", (event) => {
    event.currentTarget.classList.remove("invalid", "valid");
});

