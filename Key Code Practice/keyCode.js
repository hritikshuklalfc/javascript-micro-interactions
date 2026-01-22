let userInputEl = document.getElementById("userInput");
let keyListEl = document.getElementById("keyList");

userInputEl.addEventListener("keydown", function (event) {
  let liEl = document.createElement("li");
  liEl.textContent = event.key;
  keyListEl.appendChild(liEl);
});
