const app = document.querySelector('#app');
const input = document.querySelector('#input-form');
const button = document.querySelector('#submit-button');
const list = document.querySelector('#todo-list');
const clearBtn = document.querySelector('#clear-button');

button.addEventListener('click', function() {
  console.log('hello');
  createToDo();
});

clearBtn.addEventListener('click', function() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

input.addEventListener('keydown', function(event) {
	if (event.keyCode == 13) {
		createToDo();
	}
});


function createToDo() {
  // Create a todo container
  const container = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.className = 'checkbox';

  // add event listener
  checkbox.addEventListener('click', toggleCompleted);

  const label = document.createElement('label');
  container.className = 'todo-container';
  label.innerText = input.value;

  container.appendChild(checkbox);
  container.appendChild(label);
  list.appendChild(container);


  // clear the input form
  input.value = '';
}

// toggles the completed class
function toggleCompleted(event) {
  const container = event.target.parentNode;
  container.classList.toggle('completed');
}

// Background color transitions
//function cycleColors() {
//  let currentColor = document.body.style.backgroundColor;
//  console.dir(currentColor);
//}
