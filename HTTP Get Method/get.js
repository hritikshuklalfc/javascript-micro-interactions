let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");

sendGetRequestBtnEl.onclick = function () {
  let url = "https://gorest.co.in/public-api/users";
  let option = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, option)
    .then(function (response) {
      requestStatusEl.textContent = response.status;
      return response.json();
    })
    .then(function (jsonData) {
      httpResponseEl.textContent = JSON.stringify(jsonData, null, 2);
    });
};
