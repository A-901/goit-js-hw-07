'use strict';

const inputForm = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const renderBox = document.querySelector('#boxes');

function generateRandomColor() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;    
};

const render = function createBoxes() {
  let amount = Number(inputForm.value);  
  for (let i = 0; amount < i ; i + 1) {
    renderBox.insertAdjacentHTML('beforeend', `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${generateRandomColor()};"></div>`, );
  }
};

const destroy = function destroyBox() {
  renderBox.insertAdjacentHTML = '';
};

renderBtn.addEventListener('click', render);
destroyBtn.addEventListener('click', destroy);

