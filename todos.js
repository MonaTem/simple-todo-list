// select the form from the DOM
var form = document.querySelector("#addTodo");
// select the todoList from the DOM
var todoList = document.querySelector("#todos")

form.addEventListener("submit", handleAddTodo)

function handleAddTodo(event) {
  // prevent page from trying to submit the form
  event.preventDefault();

  var newTodo = buildTodo({
    title:       form.querySelector("#title").value,
    description: form.querySelector("#description").value
  });

  todoList.appendChild(newTodo);
}


function buildTodo(params) {
  var newLi       = document.createElement("li");
  var title       = document.createElement("h2");
  var description = document.createElement("p");

  title.innerHTML       = params.title;
  description.innerHTML = params.description;

  newLi.appendChild(title);
  newLi.appendChild(description);

  return newLi;
}
