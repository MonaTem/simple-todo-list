var myform = document.querySelector('#todoForm');
var todoDiv = document.querySelector('#task')
var todos = document.querySelector('#todos')

//button


var button = '';
//btnNew.onclick = function() {
//  var inItemText = document.getElementById("inItemText");


myform.addEventListener('submit', function (event) {
    event.preventDefault();
    var newTask = document.querySelector('#task').value
    var newDiv = document.createElement('div');
    button = document.createElement('button')
    button.textContent = 'Edit'
    newDiv.appendChild(document.createTextNode(newTask));
    todos.prepend(button);
    todos.prepend(newDiv);
})

