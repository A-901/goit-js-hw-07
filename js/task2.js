'user strict'
const ingredientsList = document.querySelector( '#ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


ingredients.map(item => {
  let createLi = document.createElement('li');
  createLi.insertAdjacentHTML('afterbegin', item);
  ingredientsList.appendChild(createLi);
});
// const addList = ingredients.reduce((string, ingredient) => string + `<li>${ingredient}</li>`, '');
// console.log(addList);
// ingredientsList.innerHTML = addList;