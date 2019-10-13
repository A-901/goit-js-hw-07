'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const conponentsList = document.querySelector('#ingredients');
ingredients.map(addList => {
  const loadList = document.createElement('li')
  loadList.insertAdjacentHTML('afterbegin', addList);
  conponentsList.appendChild(loadList);
})