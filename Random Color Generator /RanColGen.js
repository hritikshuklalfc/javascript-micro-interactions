let bgColorsArray = [
  "#e75d7c",
  "#b16cef",
  "#53cca4",
  "#efc84d",
  "#628ef0",
  "#184b73",
  "#883e7f",
  "#ed048b",
];
let backCol = document.getElementById("bgContainer");
let buttonEl = document.getElementById("button");

backCol.style.backgroundColor = bgColorsArray[0];

function onChangeBgColor() {
  let numberOfBgColor = bgColorsArray.length;
  randomColIndex = Math.ceil(Math.random() * numberOfBgColor);
  if (randomColIndex === numberOfBgColor) {
    randomColIndex = numberOfBgColor - 1;
  }
  let randomBgCol = bgColorsArray[randomColIndex];
  backCol.style.backgroundColor = randomBgCol;
}
