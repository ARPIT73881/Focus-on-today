// const checkBoxList = document.querySelectorAll(".custom-checkbox");
// const inputFields = document.querySelectorAll(".goal-input");
// const errorLabel = document.querySelector(".error-label");
// const progressBar = document.querySelector(".progress-bar");
// const progressValue = document.querySelector(".progress-value");
// const progressLabel = document.querySelector(".progress-label");

// const allQuotes = [
//   "Raise the bar by completing your goals!",
//   "Well begun is half done!",
//   "Just a step away , keep going!",
//   "Whoa! You just completed all the goals , time for chill 😊",
// ];

// const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
//   first: {
//     name: "",
//     completed: false,
//   },
//   second: {
//     name: "",
//     completed: false,
//   },
//   third: {
//     name: "",
//     completed: false,
//   },
// };

// let completedGoalsCount = Object.values(allGoals).filter(
//   (goal) => goal.completed
// ).length;

// progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;

// progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 Completed`;

// progressLabel.innerText = allQuotes[completedGoalsCount];

// // const allGoals = {};

// // const allGoals = {
// //   first: {
// //     name: "Learn JS",
// //     completed: false,
// //   },
// //   second: {
// //     name: "Learn JS",
// //     completed: false,
// //   },
// //   third: {
// //     name: "Learn JS",
// //     completed: false,
// //   },
// // };

// checkBoxList.forEach((checkbox) => {
//   checkbox.addEventListener("click", () => {
//     const allGoalsAdded = [...inputFields].every((input) => input.value);

//     if (allGoalsAdded) {
//       checkbox.parentElement.classList.toggle("completed");

//       let inputId = checkbox.nextElementSibling.id;

//       allGoals[inputId].completed = !allGoals[inputId].completed;

//       completedGoalsCount = Object.values(allGoals).filter(
//         (goal) => goal.completed
//       ).length;

//       progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;

//       progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 Completed`;

//       progressLabel.innerText = allQuotes[completedGoalsCount];

//       localStorage.setItem("allGoals", JSON.stringify(allGoals));
//     } else progressBar.classList.add("show-error");
//   });
// });

// inputFields.forEach((input) => {
//   input.value = allGoals[input.id].name;

//   if (allGoals[input.id].completed) {
//     input.parentElement.classList.add("completed");
//   }

//   input.addEventListener("focus", () => {
//     progressBar.classList.remove("show-error");
//   });

//   input.addEventListener("input", (e) => {
//     // console.log(e.target.value);
//     // console.log(e.target);
//     // console.log(input.id);

//     // allGoals[input.id] = e.target.value;

//     if (allGoals[input.id].completed) {
//       input.value = allGoals[input.id].name;
//       return;
//     }

//     // allGoals[input.id].name = input.value;

//     allGoals[input.id] = { name: input.value, completed: false };

//     localStorage.setItem("allGoals", JSON.stringify(allGoals));
//   });
// });
