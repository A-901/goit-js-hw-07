'use strict';
const categoryCountItem = document.querySelectorAll('.item');

console.log(`Общее кол-во категорий ${categoryCountItem.length}`);
categoryCountItem.forEach(item => console.log(`Категория: ${item.children[0].textContent} Количество элементов: ${item.children[1].children.length}`,),);

