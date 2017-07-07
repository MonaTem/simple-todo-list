function App() {
  var myform = document.querySelector('#todoForm');
  var input = document.querySelector('#task')
  var todos = document.querySelector('#todos')

  myform.addEventListener('submit', function (event) {
      event.preventDefault();

      todos.prepend(createTodo(
        createCheck(),
        createLabel(input.value)
      ));
  })

  function createTodo(newCheck, newLabel) {
    var el = document.createElement('div');

    el.appendChild(newCheck)
    el.appendChild(newLabel)

    return el;
  }

  function createCheck() {
    var el = document.createElement('input')
    //    assign input as type: checkbox
    el.type = 'checkbox'
    //    set checkbox id
    el.id = 'checkboxTD'

    return el;
  }

  function createLabel(content) {
    var el = document.createElement('label')

    el.innerHTML = content
    //    set label class for buttonClicker
    el.id = 'labelCB'
    //    connect label to checkbox
    el.setAttribute('for', 'checkboxTD')

    return el;
  }
}

App();
