function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const backgroundColor = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

changeColorButton.addEventListener('click', () => {
  let currentColor = getRandomHexColor();

  body.style.backgroundColor = `${currentColor}`;
  backgroundColor.textContent = `${currentColor}`;
});
