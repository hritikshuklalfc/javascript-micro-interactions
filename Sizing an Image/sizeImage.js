let imageEl = document.getElementById("image");
let warningMessageEl = document.getElementById("warningMessage");
let imageWidthEl = document.getElementById("imageWidth");

let size = 200;

function onIncrement() {
  if (size >= 300) {
    warningMessageEl.textContent = "Too Big, Decrease the size of the image";
  } else {
    size = size + 5;
    imageEl.style.width = size + "px";
    imageWidthEl.textContent = size + "px";
    warningMessageEl.textContent = "";
  }
}

function onDecrement() {
  if (size <= 100) {
    warningMessageEl.textContent = "Too Small, Increase the size of the image";
  } else {
    size = size - 5;
    imageEl.style.width = size + "px";
    imageWidthEl.textContent = size + "px";
    warningMessageEl.textContent = "";
  }
}
