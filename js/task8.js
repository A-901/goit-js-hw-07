'use strict'; 


const inputForm = document.querySelector('#controls input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const renderBox = document.querySelector('#boxes');

function generateRandomColor() {
    const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor;    
};

function createBoxes() {
  let amount = Number(inputForm.value);  
  for (let i = 0; i < amount  ; i += 1) {
    renderBox.insertAdjacentHTML('beforebegin', `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${generateRandomColor()};"></div>`, );
  }
};

function destroyBox() {
  renderBox.innerHTML = '';
  inputForm.value = 0;
};

renderBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBox);

