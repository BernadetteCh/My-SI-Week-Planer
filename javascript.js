const button = document.querySelector(".addTodo");
const input = document.querySelector(".todoInput");
const todoList = document.getElementById("todo-list");
let todos;
let completedTodo;

/*For the window object, the load event is fired when the whole
webpage (HTML) has loaded fully, including all dependent resources,
including JavaScript files, CSS files, and images. */
window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos"));
  if (todos === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  button.addEventListener("click", (event) => {
    event.preventDefault();
    const todo = {
      content: input.value,
      id: Math.random() * 2.5,
      completed: false,
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
  });
  displayTodos();
});
function displayTodos() {
  todoList.innerHTML = "";
  input.value = "";
  todos.forEach(function (todo) {
    let todoLine = document.createElement("div");
    let todoContent = document.createElement("span");
    todoList.appendChild(todoLine);
    todoLine.appendChild(todoContent);
    todoContent.innerHTML = todo.content;
    todoLine.setAttribute("class", "todos");
    todoContent.setAttribute("class", "text");
    let checkButton = document.createElement("button");
    checkButton.setAttribute("class", "done");
    todoLine.appendChild(checkButton);
    checkButton.innerHTML = "OK";
    let deleteButton = document.createElement("button");
    todoLine.appendChild(deleteButton);
    deleteButton.setAttribute("class", "delete");
    deleteButton.innerHTML = "Delete";
    // input.value.completed = todo.true;
    completedTodo = todo.completed;
    // if (completedTodo === true) {
    // console.log("Yeah");
    // todoContent.style.textDecoration = "line-through";
    // }
  });

  let checkTodo = document.querySelectorAll(".done");
  let removeTodo = document.querySelectorAll(".delete");
  let checkTodoArray = Array.from(checkTodo);
  let removeTodoArray = Array.from(removeTodo);

  markTodoAsChecked(checkTodoArray);
  removeTodoFromList(removeTodoArray);
}
// event.target.previousElementSibling.style.textDecoration = "line-through";
