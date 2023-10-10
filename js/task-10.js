const inputNumber = document.querySelector('input');
const bthCreate = document.querySelector('[data-create]');
const bthDestroy = document.querySelector('[data-destroy]');
const parentDiv = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let oneElement;

const createBoxes = () => {
  parentDiv.innerHTML = '';
  const amount = inputNumber.value;
  const arrowElements = [];
  for (let i = 0; i < amount; i++) {
    arrowElements.push(oneElement);
  }
  arrowElements.forEach((element, index) => {
    element = document.createElement('div');
    element.style.backgroundColor = getRandomHexColor();
    element.style.width = `${30 + index * 10}px`;
    element.style.height = `${30 + index * 10}px`;
    parentDiv.append(element);
  });
};

const destroyBoxes = () => {
  parentDiv.innerHTML = '';
};

bthCreate.addEventListener('click', createBoxes);
bthDestroy.addEventListener('click', destroyBoxes);
