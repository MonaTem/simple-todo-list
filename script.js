var myform = document.querySelector('#todoForm');
var todoDiv = document.querySelector('#task')
var todos = document.querySelector('#todos')



myform.addEventListener('submit', function (event) {
    event.preventDefault();
    //    set user input to 'NewTask'
    var newTask = todoDiv.value
    //    create containing div
    var newDiv = document.createElement('div');
    //    create input (for checkbox)
    var newCheck = document.createElement('input')
    //    create checkbox label
    var newLabel = document.createElement('label')


    //    assign input as type: checkbox
    newCheck.type = 'checkbox'
    //    set checkbox id
    newCheck.id = 'checkboxTD'

    //    set label text as user input
    newLabel.innerHTML = newTask
    //    set label class for buttonClicker
    newLabel.id = 'labelCB'
    //    connect label to checkbox
    newLabel.setAttribute('for', 'checkboxTD')


    //    append checkbox and label to div
    newDiv.appendChild(newCheck)    
    newDiv.appendChild(newLabel)
    //    prepend div to existing div 'todos'
    todos.prepend(newDiv);
})






//     TODO: 
//      edit field
//      removed text after entry
//      strikethrough
