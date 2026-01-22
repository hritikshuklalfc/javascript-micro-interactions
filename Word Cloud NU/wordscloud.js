let wordCloud = [
  "Hello",
  "hii",
  "how",
  "what",
  "you",
  "yourself",
  "name",
  "victory",
  "food",
  "lovely",
  "beautiful",
  "written",
  "where",
  "who",
  "awesome",
];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let addBtnEl = document.getElementById("addBtn");

for (word of wordCloud) {
  let wordSpan = document.createElement("span");
  wordSpan.textContent = word;
  wordsContainerEl.appendChild(wordSpan);

  let randomFontSize = Math.ceil(Math.random() * 50) + "px";
  wordSpan.classList.add("p-2");
  wordSpan.style.fontSize = randomFontSize;
}

function onAddWordToWordCloud() {
  let userValue = userInputEl.value;
  if (userValue === "") {
    errorMsgEl.textContent = "Please add a word to the word cloud";
  } else {
    let randomFontSize = Math.ceil(Math.random() * 50) + "px";

    let userWordSpan = document.createElement("span");
    userWordSpan.textContent = userValue;
    wordsContainerEl.appendChild(userWordSpan);

    userWordSpan.style.fontSize = randomFontSize;
    userWordSpan.classList.add("p-2");
  }
}
