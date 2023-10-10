const decrementBtn = document.querySelector(
  `#counter button[data-action="decrement"]`
);
const incrementBtn = document.querySelector(
  `#counter button[data-action="increment"]`
);
const currentValue = document.querySelector('#value');

let counterValue = 0;
const increment = () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
