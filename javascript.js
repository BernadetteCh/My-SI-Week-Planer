const button = document.querySelector(".addTodo");
const input = document.querySelector(".todoInput");
const todoList = document.getElementById("todo-list");
let todos;

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

// event.target.previousElementSibling.style.textDecoration = "line-through";
