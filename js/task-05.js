// Напиши скрипт, який під час набору тексту в інпуті
//  input#name-input (подія input), підставляє його поточне 
//  значення в span#name-output. Якщо інпут порожній,
//  у спані повинен відображатися рядок "Anonymous"


const inputEl = document.querySelector("#name-input");
console.log(inputEl);

const spanNameOutput = document.querySelector("#name-output");
console.log(spanNameOutput);

inputEl.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() === "" ){
    spanNameOutput.textContent = "Anonymous";
    } else {
        spanNameOutput.textContent = event.currentTarget.value;
    }
});

