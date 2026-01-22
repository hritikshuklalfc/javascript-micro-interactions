let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadingEl = document.getElementById("loading");

let url = "https://gorest.co.in/public-api/users";

sendPostRequestBtnEl.onclick = function () {
  let userData = requestBodyEl.value;

  loadingEl.classList.remove("hidden");
  requestStatusEl.textContent = "";
  httpResponseEl.textContent = "";

  let option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "Bearer 5cb0d0a03eb00a7a69e581849044b96598b626d21b6ff1f765685cbee23e6096",
    },
    body: JSON.stringify(userData),
  };

  fetch(url, option)
    .then(function (response) {
      requestStatusEl.textContent = response.status;
      return response.json();
    })
    .then(function (jsonData) {
      loadingEl.classList.add("hidden");
      httpResponseEl.textContent = JSON.stringify(jsonData, null, 2);
    });
};
