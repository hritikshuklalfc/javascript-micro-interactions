let chatbotMsgList = [
  "Hi",
  "Hey",
  "Good Morning",
  "Good Evening",
  "How can I help you?",
  "Thank You",
];

let chatContainerEl = document.getElementById("chatContainer");
let inputEl = document.getElementById("userInput");

function sendMsgToChatbot() {
  let valueOfInputEl = inputEl.value;
  if (valueOfInputEl === "") {
    return;
  }

  let userMessageElement = document.createElement("span");

  userMessageElement.textContent = valueOfInputEl;

  userMessageElement.classList.add(
    "bg-[#9aa6b1]",
    "p-5",
    "m-2",
    "rounded",
    "self-end",
    "text-right",
    "self-end",
    "text-white",
    "text-xl"
  );
  chatContainerEl.appendChild(userMessageElement);

  let botText =
    chatbotMsgList[Math.floor(Math.random() * chatbotMsgList.length)];

  let botMessageElement = document.createElement("span");

  botMessageElement.textContent = botText;

  botMessageElement.classList.add(
    "bg-[#e57742]",
    "p-5",
    "m-2",
    "rounded",
    "self-start",
    "text-left",
    "text-white",
    "text-xl"
  );
  chatContainerEl.appendChild(botMessageElement);
}
