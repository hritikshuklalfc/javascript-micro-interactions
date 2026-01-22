const secretCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const targetString = secretCode.join("");
const display = document.getElementById("inputDisplay");

const keyMap = {
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
  b: "B",
  a: "A",
};

let userHistory = [];

window.addEventListener("keydown", (e) => {
  userHistory.push(e.key);

  if (userHistory.length > secretCode.length) {
    userHistory.shift();
  }

  if (display.innerText.includes("_waiting")) display.innerHTML = "";

  const block = document.createElement("div");
  block.className =
    "h-10 w-10 border border-zinc-700 flex items-center justify-center text-sm text-white transition-all duration-300 flash-effect";

  if (keyMap[e.key]) {
    block.innerText = keyMap[e.key];
    block.classList.add("border-zinc-500");
  } else {
    block.innerText = "*";
    block.classList.add("text-zinc-600", "border-zinc-800");
  }

  display.appendChild(block);

  if (display.children.length > secretCode.length) {
    display.removeChild(display.firstChild);
  }

  const currentSequence = userHistory.join("");
  if (currentSequence === targetString) {
    setTimeout(() => {
      alert("ACCESS GRANTED: CHEAT CODE ACTIVATED");

      display.innerHTML =
        '<span class="text-green-500 text-sm">ACCESS_GRANTED</span>';
      userHistory = [];
    }, 100);
  }
});
