'use strict';

const ulCategoriesAllItem = document.querySelectorAll('.item');
console.log(`В списке ${ulCategoriesAllItem.length} категории.`);
ulCategoriesAllItem.forEach(item => console.log(`Категория: ${item.children[0].textContent} 
Количество элементов: ${item.children[1].children.length}`))