const todoForm = document.querySelector("#todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");
todoList.style.padding = "30px";

const TODOS_KEY = "todos";

let todos = [];

const saveTodo = todos => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

const deleteTodo = event => {
  const li = event.target.parentElement;
  todos = todos.filter(el => el.id !== li.id);
  li.remove();
  saveTodo(todos);
};

const paintTodo = todoObj => {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(btn);
  todoList.prepend(li);
};

const handleTodoSubmit = event => {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    id: String(Date.now()),
    text: todo
  };
  todos.push(todoObj);
  paintTodo(todoObj);
  saveTodo(todos);
};

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
if (savedTodos) {
  todos = savedTodos;
  todos.forEach(paintTodo);
}
