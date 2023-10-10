const validation = document.querySelector(`#validation-input`);
const inputLength = validation.getAttribute('data-length');

validation.addEventListener('blur', () => {
  if (validation.value.length != inputLength) {
    validation.classList.add('invalid');
  } else {
    validation.classList.remove('invalid');
    validation.classList.add('valid');
  }
});
