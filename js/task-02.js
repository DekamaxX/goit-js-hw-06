"use strict";
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");

const firstItem = document.createElement("li");
firstItem.textContent = ingredients[0];
firstItem.classList.add("item");

const secondItem = document.createElement("li");
secondItem.textContent = ingredients[1];
secondItem.classList.add("item");

const thirdItem = document.createElement("li");
thirdItem.textContent = ingredients[2];
thirdItem.classList.add("item");

const forthItem = document.createElement("li");
forthItem.textContent = ingredients[3];
forthItem.classList.add("item");

const fifthItem = document.createElement("li");
fifthItem.textContent = ingredients[4];
fifthItem.classList.add("item");

const sixthItem = document.createElement("li");
sixthItem.textContent = ingredients[5];
sixthItem.classList.add("item");

listIngredients.append(
  firstItem,
  secondItem,
  thirdItem,
  forthItem,
  fifthItem,
  sixthItem
);
