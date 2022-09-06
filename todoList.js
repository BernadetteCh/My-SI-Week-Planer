const button = document.querySelector(".addTodo");
const input = document.querySelector(".todoInput");
const todoList = document.getElementById("todo-list");
const deleteAllButton = document.getElementById("delete-AllTodos");
let investedHours = document.querySelector(".finished-in-percent");
let TODOS;
let FINISHEDTASKS;
let countCompletedTodos = 0;
let completedTodo;

/*For the window object, the load event is fired when the whole
webpage (HTML) has loaded fully, including all dependent resources,
including JavaScript files, CSS files, and images. */
window.addEventListener("load", () => {
  TODOS = JSON.parse(localStorage.getItem("todos"));
  FINISHEDTASKS = localStorage.getItem("finish");

  if (TODOS === null) {
    TODOS = [];
    investedHours.innerHTML = 0 + "%";
  } else {
    TODOS = JSON.parse(localStorage.getItem("todos"));
    investedHours.innerHTML = localStorage.getItem("finish") + "%";
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
    displayTodos();
  });

  deleteAllButton.addEventListener("click", () => {
    localStorage.clear("todos");

    if (localStorage.getItem("todos") === null) {
      console.log("empty");
      investedHours.innerHTML = 0 + "%";
      todoList.innerHTML = "";
      TODOS = [];
    }
  });

  displayTodos();
});

function calculateFinish() {
  let result = 0;
  let counter = 0;

  for (let data of TODOS) {
    if (data.completed === true) {
      counter = counter + 1;
      result = Math.round((counter * 100) / TODOS.length);
    }
  }

  localStorage.setItem("finish", JSON.stringify(result));
  investedHours.innerHTML = localStorage.getItem("finish") + "%";
}

function removeTodoFromList(removeTodoArray) {
  removeTodoArray.forEach(function (todo, index) {
    todo.addEventListener("click", () => {
      TODOS.splice(TODOS.indexOf(TODOS[index]), 1);
      localStorage.setItem("todos", JSON.stringify(TODOS));
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
        calculateFinish();
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
