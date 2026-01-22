let greeting =
  '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';

let parseGreeting = JSON.parse(greeting);
let fromEl = document.getElementById("from");
let toEl = document.getElementById("to");
let greetTextEl = document.getElementById("greetText");

fromEl.textContent = "From: " + parseGreeting.from;
toEl.textContent = "To: " + parseGreeting.to;
greetTextEl.textContent = parseGreeting.greetText;
