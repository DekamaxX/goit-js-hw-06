'use strict';
const textInput = document.querySelector('#name-input');
const textSpan = document.querySelector('#name-output');

const defaultText = textSpan.innerHTML;

const changeTextSpam = () => {
  if (textInput.value !== '') {
    textSpan.innerHTML = textInput.value;
  } else {
    textSpan.innerHTML = defaultText;
  }
};

textInput.addEventListener('input', changeTextSpam);
