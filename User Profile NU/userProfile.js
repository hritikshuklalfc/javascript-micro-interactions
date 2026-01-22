let profileDetails = {
  imgSrc:
    "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
  name: "RAHUL ATTULURI",
  age: "Age: 25",
};

let profileContainerEl = document.getElementById("profileContainer");

let imageEl = document.createElement("img");
imageEl.src = profileDetails.imgSrc;
profileContainerEl.appendChild(imageEl);

let nameEl = document.createElement("h1");
nameEl.textContent = profileDetails.name;
profileContainerEl.appendChild(nameEl);
nameEl.classList.add("pt-3", "text-xl", "text-white", "font-bold");

let ageEl = document.createElement("p");
ageEl.textContent = profileDetails.age;
profileContainerEl.appendChild(ageEl);
ageEl.classList.add("text-xl", "text-white", "font-bold");
