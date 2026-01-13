let bgImg = document.getElementById("bgContainer");
let head = document.getElementById("heading");
let inputBoxEl = document.getElementById("themeUserInput");

function changeTheme() {
  let themeValue = inputBoxEl.value;
  if (themeValue === "Dark") {
    bgImg.style.backgroundImage =
      "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
    head.style.color = "white";
  } else if (themeValue === "Light") {
    bgImg.style.backgroundImage =
      "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
    head.style.color = "#014d40";
  } else {
    inputBoxEl.value = "enter a valid theme";
  }
}
