'use strict';

const counter = document.querySelector('#value');
const plusOne = document.querySelector('button[data-action="increment"]');
const minusOne = document.querySelector('button[data-action="decrement"]');
let counterValue = 0;
function increment() {
  counterValue += 1;
  return (counter.innerHTML = counterValue);
}
function decrement() {
  counterValue -= 1;
  return (counter.innerHTML = counterValue);
}
plusOne.addEventListener('click', increment);
minusOne.addEventListener('click', decrement);