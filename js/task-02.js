
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allLiItems = document.querySelector('#ingredients');

const itemsList = ingredients.map(element => {

  const itemEl = document.createElement('li');  
  itemEl.classList.add('item');
  itemEl.textContent = `${element}`; 
  return itemEl;
});

// console.log(itemsList);
allLiItems.append(...itemsList);
// console.log(allLiItems);

