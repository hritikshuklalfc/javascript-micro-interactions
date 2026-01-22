let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let timer = null;

function startTimer(seconds) {
  if (timer != null) {
    clearInterval(timer);
  }

  timerTextEl.textContent = seconds + " seconds left";

  timer = setInterval(function () {
    seconds = seconds - 1;
    timerTextEl.textContent = seconds + " seconds left";

    if (seconds === 0) {
      clearInterval(timer);
      timerTextEl.textContent = "Timer is Up!";
    }
  }, 1000);
}

twentySecondsBtnEl.onclick = function () {
  startTimer(20);
};

thirtySecondsBtnEl.onclick = function () {
  startTimer(30);
};
fortySecondsBtnEl.onclick = function () {
  startTimer(40);
};
oneMinuteBtnEl.onclick = function () {
  startTimer(60);
};
