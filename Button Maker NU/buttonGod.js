let bgColEl = document.getElementById("bgColorInput");
let fontColEl = document.getElementById("fontColorInput");
let fontSizeeEl = document.getElementById("fontSizeInput");
let fontWeightEl = document.getElementById("fontWeightInput");
let paddingEl = document.getElementById("paddingInput");
let borderRadEl = document.getElementById("borderRadiusInput");
let custonBtnEl = document.getElementById("customButton");

function onApplyProperties() {
  let bgCol = bgColEl.value;
  let fontCol = fontColEl.value;
  let fontSizee = fontSizeeEl.value;
  let fontWeightt = fontWeightEl.value;
  let paddingg = paddingEl.value;
  let borderRad = borderRadEl.value;

  custonBtnEl.style.backgroundColor = bgCol;
  custonBtnEl.style.color = fontCol;
  custonBtnEl.style.fontSize = fontSizee;
  custonBtnEl.style.fontWeight = fontWeightt;
  custonBtnEl.style.padding = paddingg;
  custonBtnEl.style.borderRadius = borderRad;
}
