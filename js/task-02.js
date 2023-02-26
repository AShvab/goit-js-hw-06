
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulListItems = document.querySelector('#ingredients');
console.log(ulListItems);


const liItemsList = ingredients.map(element => {

  const itemEl = document.createElement('li');  

  itemEl.classList.add('item');
  itemEl.textContent = `${element}`;

  return itemEl;
});

console.log(liItemsList);
ulListItems.append(...liItemsList);




