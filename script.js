var myform = document.querySelector('#todoForm');



myform.addEventListener('submit', function (event) {
    event.preventDefault();
    var newTask = document.querySelector('#task').value
    var newDiv = document.createElement('div');
    newDiv.appendChild(document.createTextNode(newTask));
    document.body.appendChild(newDiv);
})
