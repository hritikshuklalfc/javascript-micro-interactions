let firstNumberEl = document.getElementById("firstNumber");
let secondNumberEl = document.getElementById("secondNumber");
let userInputEl = document.getElementById("userInput");
let gameResultEl = document.getElementById("gameResult");

let num1;
let num2;

function restartGame() {
  num1 = Math.ceil(Math.random() * 100);
  num2 = Math.ceil(Math.random() * 100);
  firstNumberEl.textContent = num1;
  secondNumberEl.textContent = num2;

  userInputEl.value = "";
  gameResultEl.textContent = "";
  gameResultEl.style.backgroundColor = "white";
}

function checkResult() {
  let userTypedNumber = parseInt(userInputEl.value);
  if (parseInt(num1) + parseInt(num2) === userTypedNumber) {
    gameResultEl.textContent = "congratulations! Correct Answer";
    gameResultEl.style.backgroundColor = "#028a0f";
  } else {
    gameResultEl.textContent = "please try again!";
    gameResultEl.style.backgroundColor = "#1e217c";
  }
}

restartGame();
