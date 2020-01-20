'use strict';

const value = document.querySelector('#value');
const plus = document.querySelector('button[data-action="increment"]');
const minus = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

function increment() {
  counterValue += 1;
  return (value.innerHTML = counterValue);
};

function decrement() {
  counterValue -= 1;
  if (counterValue < 0) {
    counterValue = 0;
  };
  return (value.innerHTML = counterValue);
};

plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);






