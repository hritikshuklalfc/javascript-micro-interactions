let stopButton = document.getElementById("stopButton");
let readyButton = document.getElementById("readyButton");
let goButton = document.getElementById("goButton");

let redBulb = document.getElementById("stopLight");
let yellowBulb = document.getElementById("readyLight");
let greenBulb = document.getElementById("goLight");

function stopMate() {
  stopButton.style.backgroundColor = "#cf1124";
  redBulb.style.backgroundColor = "#cf1124";

  readyButton.style.backgroundColor = "#1f1d41";
  yellowBulb.style.backgroundColor = "#4b5069";

  goButton.style.backgroundColor = "#1f1d41";
  greenBulb.style.backgroundColor = "#4b5069";
}

function readyMate() {
  stopButton.style.backgroundColor = "#1f1d41";
  redBulb.style.backgroundColor = "#4b5069";

  readyButton.style.backgroundColor = "#f7c948";
  yellowBulb.style.backgroundColor = "#f7c948";

  goButton.style.backgroundColor = "#1f1d41";
  greenBulb.style.backgroundColor = "#4b5069";
}

function goMate() {
  stopButton.style.backgroundColor = "#1f1d41";
  redBulb.style.backgroundColor = "#4b5069";

  readyButton.style.backgroundColor = "#1f1d41";
  yellowBulb.style.backgroundColor = "#4b5069";

  goButton.style.backgroundColor = "#199473";
  greenBulb.style.backgroundColor = "#199473";
}
