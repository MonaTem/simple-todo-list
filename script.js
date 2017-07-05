var myform = document.querySelector('#todoForm');
var todoDiv = document.querySelector('#task')
var todos = document.querySelector('#todos')



myform.addEventListener('submit', function (event) {
    event.preventDefault();
    var newTask = document.querySelector('#task').value
    var newDiv = document.createElement('div');
    newDiv.appendChild(document.createTextNode(newTask));
    todos.prepend(newDiv);
})
