'use strict';
const fontControlPanel = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const changeFontSize = function () {
  text.style.fontSize = `${fontControlPanel.value}px`; 
};

fontControlPanel.addEventListener('input', changeFontSize);