'use strict';

const idText = document.querySelector('#text');
const span = document.querySelector('#font-size-slider');
idText.style.fontSize = `${span.value}px`;
const fontSize = function () {
  idText.style.fontSize = `${span.value}px`
};
span.addEventListener('input', fontSize);