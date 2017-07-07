(function App({els}) {
  els.button.addEventListener('click', function() {
    console.log('hello');
    addTodo(els)
  });

  els.clearBtn.addEventListener('click', function() {
    clearTodos(els);
  });

  els.input.addEventListener('keydown', function(event) {
  	if (event.keyCode == 13) {
      addTodo(els);
    }
  });

  function clearTodos({list}) {
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }

  function addTodo({list, input}) {
    list.appendChild(Todo.create(input).el)
    input.value = "";
  }

  const Todo = (function () {
    const CON_NAME       = 'todo-container';
    const COMPLETE_CLASS = 'completed';

    function Todo({el, value, checkbox, label}) {
      // Create a todo container
      this.el           = el;
      this.checkbox     = checkbox;
      this.label        = label

      this.add(this.checkbox).add(this.label);
    }

    Todo.create = function ({value}) {
      let checkbox = new CheckBox();

      const todo = new Todo({
        el:       this.createEl(),
        checkbox: checkbox,
        label:    new Label({ content: value })
      });

      checkbox.click(todo, todo.complete)

      return todo;
    }


    Todo.createEl = function () {
      const el     = document.createElement('div');
      el.className = CON_NAME;

      return el;
    }

    Todo.prototype.add = function (child) {
      this.el.appendChild(child.el);

      return this;
    }

    Todo.prototype.complete = function (event) {
      this.el.classList.toggle(COMPLETE_CLASS);
    }

    function Label({content}) {
      this.el           = document.createElement('label');
      this.el.innerText = content;
    }

    function CheckBox() {
      this.el = document.createElement('input');
      this.el.setAttribute('type', 'checkbox');
      this.el.className = 'checkbox';
    }

    CheckBox.prototype.click = function (context, onClick) {
      this.el.addEventListener("click", onClick.bind(context))
    }

    return Todo;
  })()
})({
  els: {
    app:      document.querySelector('#app'),
    input:    document.querySelector('#input-form'),
    button:   document.querySelector('#submit-button'),
    list:     document.querySelector('#todo-list'),
    clearBtn: document.querySelector('#clear-button')
  }
})
