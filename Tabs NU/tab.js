let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");

function onClickAboutTab() {
  aboutTabEl.classList.remove("hidden");
  timeToVisitTabEl.classList.add("hidden");
  attractionsTabEl.classList.add("hidden");

  aboutButtonEl.style.backgroundColor = "white";
  timeToVisitButtonEl.style.backgroundColor = "#dae2ec";
  attractionsButtonEl.style.backgroundColor = "#dae2ec";
}
function onClickTimeToVisitTab() {
  aboutTabEl.classList.add("hidden");
  timeToVisitTabEl.classList.remove("hidden");
  attractionsTabEl.classList.add("hidden");

  aboutButtonEl.style.backgroundColor = "#dae2ec";
  timeToVisitButtonEl.style.backgroundColor = "white";
  attractionsButtonEl.style.backgroundColor = "#dae2ec";
}
function onClickAttractionsTab() {
  aboutTabEl.classList.add("hidden");
  timeToVisitTabEl.classList.add("hidden");
  attractionsTabEl.classList.remove("hidden");

  aboutButtonEl.style.backgroundColor = "#dae2ec";
  timeToVisitButtonEl.style.backgroundColor = "#dae2ec";
  attractionsButtonEl.style.backgroundColor = "white";
}
