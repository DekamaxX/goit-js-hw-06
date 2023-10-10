const fontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSize.addEventListener('input', () => {
  text.style.fontSize = `${fontSize.value}px`;
});
