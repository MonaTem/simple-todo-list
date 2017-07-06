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

  listenToCheckBox(newTodo.querySelector(".checkbox"), newTodo);

  todoList.appendChild(newTodo);
}


function listenToCheckBox(box, newTodo) {
  box.addEventListener("click", function () {
    newTodo.classList.toggle("done")
  })
}

function buildTodo(params) {
  var newLi       = document.createElement("li");
  var title       = document.createElement("h2");
  var description = document.createElement("p");

  title.innerHTML       = params.title;
  description.innerHTML = params.description;

  newLi.appendChild(createCheckBox())
  newLi.appendChild(title);
  newLi.appendChild(description);

  return newLi;
}


function createCheckBox() {
  var removeBtn  = document.createElement("input");
  removeBtn.type = "checkbox";
  removeBtn.classList.add("checkbox")

  return removeBtn;
}
