let background = document.getElementById("colorPickerContainer");
let greyButton = document.getElementById("button1");
let greenButton = document.getElementById("button2");
let blueButton = document.getElementById("button3");
let voiletButton = document.getElementById("button4");
let colorDisplay = document.getElementById("selectedColorHexCode");

function changeCol1() {
  background.style.backgroundColor = "#e0e0e0";
  colorDisplay.textContent = "#e0e0e0";
  colorDisplay.style.color = "#e0e0e0";
}

function changeCol2() {
  background.style.backgroundColor = "#6fcf97";
  colorDisplay.textContent = "#6fcf97";
  colorDisplay.style.color = "#6fcf97";
}

function changeCol3() {
  background.style.backgroundColor = "#56ccf2";
  colorDisplay.textContent = "#56ccf2";
  colorDisplay.style.color = "#56ccf2";
}

function changeCol4() {
  background.style.backgroundColor = "#bb6bd9";
  colorDisplay.textContent = "#bb6bd9";
  colorDisplay.style.color = "#bb6bd9";
}
