let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
  name: "Rahul",
  age: 25,
  gender: "Male",
};
let todos = [
  {
    todo: "Attending CCBP sessions",
    todoStatus: "Completed",
  },
  {
    todo: "Completing practice sets",
    todoStatus: "Not Completed",
  },
  {
    todo: "Asking doubts",
    todoStatus: "Completed",
  },
];

let jsonContainerEl = document.getElementById("jsonContainer");

// let paraEl = document.createElement("p");
// let bikeData = JSON.stringify(bikes);
// paraEl.textContent = bikeData;
// jsonContainerEl.appendChild(paraEl);
// paraEl.classList.add(
//   "bg-[#f3f3f3]",
//   "p-[30px]",
//   "font-roboto",
//   "rounded-lg",
//   "m-3",
// );

// let paraEl1 = document.createElement("p");
// let personData = JSON.stringify(person);
// paraEl1.textContent = personData;
// jsonContainerEl.appendChild(paraEl1);
// paraEl1.classList.add(
//   "bg-[#f3f3f3]",
//   "p-[30px]",
//   "font-roboto",
//   "rounded-lg",
//   "m-3",
// );

// let paraEl2 = document.createElement("p");
// let todoData = JSON.stringify(todos);
// paraEl2.textContent = todoData;
// jsonContainerEl.appendChild(paraEl2);
// paraEl2.classList.add(
//   "bg-[#f3f3f3]",
//   "p-[30px]",
//   "font-roboto",
//   "rounded-lg",
//   "m-3",
// );

function createAndAppendJSON(data) {
  let paraEl = document.createElement("p");
  paraEl.textContent = JSON.stringify(data, null, 2);

  paraEl.classList.add(
    "bg-[#f3f3f3]",
    "p-[30px]",
    "font-roboto",
    "rounded-lg",
    "m-3",
    "whitespace-pre",
  );
  jsonContainerEl.appendChild(paraEl);
}

createAndAppendJSON(bikes);
createAndAppendJSON(person);
createAndAppendJSON(todos);
