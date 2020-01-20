'use strict';

const validation = document.querySelector('#validation-input');
const lengthMassage = validation.getAttribute('data-length');


const inputValidation = function () {
  if (validation.value.length === Number(lengthMassage)) {
    validation.classList.add('valid');
    validation.classList.replace('invalid', 'valid');
  } else {
    validation.classList.add('invalid');
    validation.classList.replace('valid', 'invalid');
  }
};

validation.addEventListener('blur', inputValidation);





