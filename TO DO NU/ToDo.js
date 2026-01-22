let todoList = [
  {
    text: "Learn HTML",
  },
  {
    text: "Learn CSS",
  },
  {
    text: "Learn JavaScript",
  },
];

let todoItemsContainerEl = document.getElementById("todoItemsContainer");

for (let tasks of todoList) {
  let liEl = document.createElement("li");
  let imgEl = document.createElement("img");
  let textEl = document.createElement("span");

  liEl.classList.add(
    "flex",
    "flex-row",
    "gap-3",
    "items-center",
    "p-2",
    "mb-2",
    "border-2",
    "border-solid",
    "rounded",
    "border-[#bae6fd]",
    "text-[#0369a1]"
  );
  imgEl.classList.add("w-6", "h-6");

  textEl.textContent = tasks.text;
  imgEl.src =
    "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/objects_todo_list_delete_new.png";

  liEl.appendChild(imgEl); // Image goes FIRST (Left)
  liEl.appendChild(textEl); // Text goes SECOND (Right)

  todoItemsContainerEl.appendChild(liEl);
}
