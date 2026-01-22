let fromUserInputEl = document.getElementById("fromUserInput");
let toUserInputEl = document.getElementById("toUserInput");
let startBtnEl = document.getElementById("startBtn");
let counterTextEl = document.getElementById("counterText");
let timerId = null;

function onClickStart() {
  let intialTimerValue = parseInt(fromUserInputEl.value);
  let finalTimerValue = parseInt(toUserInputEl.value);

  counterTextEl.textContent = intialTimerValue;

  if (timerId != null) {
    clearInterval(timerId);
  }

  timerId = setInterval(function () {
    if (intialTimerValue === finalTimerValue) {
      counterTextEl.textContent = "Timer is Up!";
      clearInterval(timerId);
    } else {
      if (intialTimerValue < finalTimerValue) {
        intialTimerValue = intialTimerValue + 1;
      } else {
        intialTimerValue = intialTimerValue - 1;
      }
      counterTextEl.textContent = intialTimerValue;
    }
  }, 1000);
}
