let bulb = document.getElementById("bulbImage");
let cat = document.getElementById("catImage");
let status = document.getElementById("switchStatus");
let off = document.getElementById("offSwitch"); //e12d39
let onn = document.getElementById("onSwitch"); //cbd2d9

function switchOff() {
  bulb.src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
  cat.src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
  status.textContent = "Switched Off";
  off.style.backgroundColor = "#cbd2d9";
  onn.style.backgroundColor = "#22c55e";
}

function switchOn() {
  bulb.src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
  cat.src =
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
  status.textContent = "Switched Onn";
  off.style.backgroundColor = "#e12d39";
  onn.style.backgroundColor = "#cbd2d9";
}
