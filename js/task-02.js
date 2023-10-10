const ingredientsList = document.querySelector('#ingredients');

const ingredientsArr = ingredients.map(ingredient => {
  const listElement = document.createElement('li');
  listElement.textContent = ingredient;

  listElement.className = 'item';
  return listElement;
});

ingredientsList.append(...ingredientsArr);
