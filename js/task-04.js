'use strict';
const bthDecrement = document.querySelector('[data-action="decrement"]');
const bthIncrement = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

const decrease = () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
};

const increase = () => {
  counterValue += 1;
  value.innerHTML = counterValue;
};

bthDecrement.addEventListener('click', decrease);
bthIncrement.addEventListener('click', increase);
