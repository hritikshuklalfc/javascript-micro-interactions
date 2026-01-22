let image = document.getElementById("puppyImage");
let likeIcon = document.getElementById("likeIcon");
let buttonEl = document.getElementById("likeButton");

isLiked = false;

function onClickLikeButton() {
  if (isLiked === false) {
    image.src =
      "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
    likeIcon.src =
      "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/liked.png";
    buttonEl.style.backgroundColor = "#2563eb";
    buttonEl.style.color = "#ffff";

    isLiked = true;
  } else {
    image.src =
      "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
    likeIcon.src =
      "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/hit_like.png";
    buttonEl.style.backgroundColor = "#d1d5db";
    buttonEl.style.color = "#4b5563";

    isLiked = false;
  }
}
