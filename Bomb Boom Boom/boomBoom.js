let defuserEl = document.getElementById("defuser");
let timerEl = document.getElementById("timer");

let count = 10;

let counterId = function counter() {
  count = count - 1;
  timerEl.textContent = count;

  if (count === 0) {
    timerEl.textContent = "💥💥💥💥💥";
    clearInterval(intervalID);
  }
};

let intervalID = setInterval(counterId, 1000);

defuserEl.addEventListener("keydown", function (event) {
  let UserValue = defuserEl.value;
  if (UserValue === "defuse" && event.key === "Enter" && count !== 0) {
    timerEl.textContent = "You did it, you saved the humanity";
    clearInterval(intervalID);
  }
});
