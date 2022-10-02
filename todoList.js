const button = document.querySelector(".addTodo");
const input = document.querySelector(".todoInput");
const todoList = document.getElementById("todo-list");
const deleteAllButton = document.getElementById("delete-AllTodos");
const percentageStatus = document.querySelector(".percentage-status");
const saveStatus = document.getElementById("save-status");

const toggleDeleteButton = document.querySelector(".hide-button");
const finishedInPercentageWeekOne = document.querySelector(
  ".finished-in-percent-si-week-one"
);
const finishedInPercentageWeekTwo = document.querySelector(
  ".finished-in-percent-si-week-two"
);
const finishedInPercentageWeekThree = document.querySelector(
  ".finished-in-percent-si-week-three"
);
const finishedInPercentageWeekFour = document.querySelector(
  ".finished-in-percent-si-week-four"
);
const finishedInPercentageWeekFive = document.querySelector(
  ".finished-in-percent-si-week-five"
);
let FINISH;
let TODOS;
let countCompletedTodos = 0;
let completedTodo;
let userInput;
let PERCENTAGE;

/*For the window object, the load event is fired when the whole
webpage (HTML) has loaded fully, including all dependent resources,
including JavaScript files, CSS files, and images. */

window.addEventListener("load", () => {
  PERCENTAGE = JSON.parse(localStorage.getItem(`percentage`));
  TODOS = JSON.parse(localStorage.getItem("todos"));

  if (PERCENTAGE === null) {
    PERCENTAGE = [];
  }

  if (TODOS === null) {
    TODOS = [];
    percentageStatus.innerHTML = 0 + "%";
  } else {
    TODOS = JSON.parse(localStorage.getItem("todos"));
    toggleDeleteButton.classList.remove("hide-button");
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const todo = {
      content: input.value,
      id: Math.random() * 2.5,
      completed: false,
    };
    TODOS.push(todo);
    localStorage.setItem("todos", JSON.stringify(TODOS));
    toggleDeleteButton.classList.remove("hide-button");
    displayTodos();
  });

  deleteAllButton.addEventListener("click", () => {
    window.localStorage.removeItem("todos");
    window.localStorage.removeItem("status");
    window.localStorage.removeItem("percentage");

    if (localStorage.getItem("todos") === null) {
      console.log("empty");
      percentageStatus.innerHTML = 0 + "%";
      todoList.innerHTML = "";
    }

    toggleDeleteButton.classList.add("hide-button");
  });

  saveStatus.addEventListener("click", () => {
    let askUserForSiWeek;
    let correctInput = false;
    while (correctInput === false) {
      askUserForSiWeek = prompt(
        "Fo which SI Week you want to save your progress? please type in a number 😃"
      );
      if (isNaN(askUserForSiWeek)) {
        alert("Nice try, a number please");
      } else {
        userInput = askUserForSiWeek;
        correctInput = true;
      }
    }

    let savePercentageForSiWeek = `finished-percent-week-${userInput}`;
    function checkPercentageData(week) {
      let statusOfPercantage = localStorage.getItem("status");
      PERCENTAGE.push({ [savePercentageForSiWeek]: `${statusOfPercantage}` });
      saveDataForPercentage(PERCENTAGE);
      week.innerHTML = statusOfPercantage + "%";
    }

    if (userInput === "1") {
      checkPercentageData(finishedInPercentageWeekOne);
    } else if (userInput === "2") {
      checkPercentageData(finishedInPercentageWeekTwo);
    } else if (userInput === "3") {
      checkPercentageData(finishedInPercentageWeekThree);
    } else if (userInput === "4") {
      checkPercentageData(finishedInPercentageWeekFour);
    } else if (userInput === "5") {
      checkPercentageData(finishedInPercentageWeekFive);
    }
  });

  displayPercentage();

  displayTodos();
});

function calculatePercentage() {
  let result = 0;
  let counter = 0;

  for (let data of TODOS) {
    if (data.completed === true) {
      counter = counter + 1;
      result = Math.round((counter * 100) / TODOS.length);
    }
  }

  localStorage.setItem("status", JSON.stringify(result));
  percentageStatus.innerHTML = localStorage.getItem("status") + "%";
}

function removeTodoFromList(removeTodoArray) {
  removeTodoArray.forEach(function (todo, index) {
    todo.addEventListener("click", () => {
      TODOS.splice(TODOS.indexOf(TODOS[index]), 1);
      localStorage.setItem("todos", JSON.stringify(TODOS));
      calculatePercentage();
      displayTodos();
    });
  });
}

function markTodoAsChecked(checkTodoArray) {
  checkTodoArray.forEach(function (todo, index) {
    todo.addEventListener("click", () => {
      TODOS[index].completed = true;
      localStorage.setItem("todos", JSON.stringify(TODOS));
      if (TODOS[index].completed === true) {
        calculatePercentage();
      }

      console.log(countCompletedTodos);
      displayTodos();
    });
  });
}

function displayTodos() {
  todoList.innerHTML = "";
  input.value = "";

  TODOS.forEach(function (todo) {
    let todoLine = document.createElement("div");
    let todoContent = document.createElement("span");
    todoList.appendChild(todoLine);
    todoLine.appendChild(todoContent);
    todoContent.innerHTML = todo.content;
    todoLine.setAttribute("class", "todos");
    todoContent.setAttribute("class", "text");
    let deleteButton = document.createElement("button");
    todoLine.appendChild(deleteButton);
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = "Delete";
    let checkButton = document.createElement("button");
    checkButton.setAttribute("class", "done");
    todoLine.appendChild(checkButton);
    checkButton.innerHTML = "OK";
    completedTodo = todo.completed;
    if (completedTodo === true) {
      todoContent.style.textDecoration = "line-through";
      checkButton.disabled = true;
    }
  });

  let checkTodo = document.querySelectorAll(".done");
  let removeTodo = document.querySelectorAll(".delete");
  let checkTodoArray = Array.from(checkTodo);
  let removeTodoArray = Array.from(removeTodo);

  markTodoAsChecked(checkTodoArray);
  removeTodoFromList(removeTodoArray);
}

// event.target.previousElementSibling.style.textDecoration = "line-through";
