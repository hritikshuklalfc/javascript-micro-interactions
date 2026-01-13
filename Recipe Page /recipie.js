let recipeObj = {
  title: "Tomato Pasta",
  imgSrc:
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: [
    "Pasta",
    "Oil",
    "Onions",
    "Salt",
    "Tomato Pasta Sauce",
    "Cheese",
  ],
};

let recipeTitleEl = document.getElementById("recipeTitle");
let imgContainerEl = document.getElementById("imgContainer");
let imgEl = document.getElementById("img");
let ingredientListContainerEl = document.getElementById(
  "ingredientListContainer"
);

recipeTitleEl.textContent = recipeObj.title;

imgEl.src = recipeObj.imgSrc;

for (let ingredient of recipeObj.ingredients) {
  let unorderedListEl = document.createElement("li");
  ingredientListContainerEl.appendChild(unorderedListEl);
  unorderedListEl.textContent = ingredient;

  unorderedListEl.classList.add("text-white", "text-xl");
}
