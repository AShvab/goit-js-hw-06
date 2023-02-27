// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, 
// тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе
//  в консоль текст заголовку елемента (тегу <h2>) 
//  і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() 
// і властивості навігації по DOM.



const itemsEl = document.querySelectorAll('.item');
// console.log(itemsEl);
console.log('Number of categories:' , itemsEl.length);

itemsEl.forEach(element => {
    const titleEl = element.firstElementChild;
    const liEl = element.lastElementChild.children;
    console.log('Category:' , titleEl.textContent);
    console.log('Elements:' , liEl.length);
});

