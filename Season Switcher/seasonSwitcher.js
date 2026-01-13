let springBtnEl = document.getElementById("springBtn");
let summerBtnEl = document.getElementById("summerBtn");
let autmnBtnEl = document.getElementById("autumnBtn");
let winterBtnEl = document.getElementById("winterBtn");

let smallImage = document.getElementById("seasonSmallImage");
let largeImage = document.getElementById("seasonMediumImage");

function springBtn() {
  smallImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-spring-xs-img.png";
  largeImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-spring-md-img.png";
}

function summerBtn() {
  smallImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-summer-xs-img.png";
  largeImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-summer-md-img.png";
}

function autumnBtn() {
  smallImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-autumn-xs-img.png";
  largeImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-autumn-md-img.png";
}

function winterBtn() {
  smallImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-winter-xs-img.png";
  largeImage.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/seasons-switcher-winter-md-img.png";
}
