let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

sendPutRequestBtnEl.onclick = function () {
  url = `https://gorest.co.in/public-api/users/${userInputEl.value}`;
  loadingEl.classList.remove("hidden");
  let data = {
    body: requestBodyEl.value,
  };
  let option = {
    method: "PUT",
    headers: {
      "Content-Type": "application.json",
      Accept: "application/json",
      Authorization:
        "Bearer 5cb0d0a03eb00a7a69e581849044b96598b626d21b6ff1f765685cbee23e6096",
    },
    body: JSON.stringify(data),
  };
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
