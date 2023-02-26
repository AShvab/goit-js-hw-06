
const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
console.log(buttonDecrementEl);

const buttonIncrementEl = document.querySelector('[data-action="increment"]');
console.log(buttonIncrementEl);

const counterEl = document.querySelector("#value");
console.log(counterEl);

let counterValue = 0;


const clickBtnDecrement = () => {
  console.log("Button decrement was clicked"); 
  counterValue -= 1;
  counterEl.textContent = counterValue;
};

const clickBtnIncrement = () => {
    console.log("Button increment was clicked"); 
    counterValue += 1;
    counterEl.textContent = counterValue;
  };

buttonDecrementEl.addEventListener("click", clickBtnDecrement);
buttonIncrementEl.addEventListener("click", clickBtnIncrement);