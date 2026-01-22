let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let loadingEl = document.getElementById("loading");
let httpResponseEl = document.getElementById("httpResponse");

sendDeleteRequestBtnEl.onclick = function () {
  let url = `https://gorest.co.in/public-api/users/${userInputEl.value}`;

  let option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 5cb0d0a03eb00a7a69e581849044b96598b626d21b6ff1f765685cbee23e6096",
    },
  };

  loadingEl.classList.remove("hidden");

  fetch(url, option)
    .then(function (response) {
      requestStatusEl.textContent = response.status;
      loadingEl.classList.add("hidden");
      return response.json();
    })
    .then(function (jsonData) {
      httpResponseEl.textContent = JSON.stringify(jsonData, null, 2);
    });
};
