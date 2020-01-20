'use strict';

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');


const addN = function (arg) {  
  outputName.textContent = arg.target.value ? arg.target.value : 'незнакомец';
};

inputName.addEventListener('input', addN);
