let todoList = null;
let todoForm = null;
let todoSearch = null;

function addTask(text) {
  //element todoForm
  const todo = document.createElement('div');
  todo.classList.add('todo-element');
  //top bar
  const todoBar = document.createElement('div');
  todoBar.classList.add('todo-element-bar');
  //top bar - date
  const todoDate = document.createElement('div');
  todoDate.classList.add('todo-element-bar');
  const date = new Date();
  const dateText = date.getDate() + '-' + (
  date.getMonth() + 1) + '-' + date.getFullYear() + ' godz.: ' + date.getHours() + ':' + date.getMinutes();
  todoDate.innerText = dateText;
  //top bar - delete button
  const todoDelete = document.createElement('button');
  todoDelete.classList.add('todo-element-delete');
  todoDelete.classList.add('button');
  todoDelete.innerHTML = '<i class="fas fa-times-circle"></i>';
  //top bar - delete button - click event
  todoDelete.addEventListener('click', function(e) {
    e.target.closest('.todo-element').remove();

  })
  //elements appended to top bar
  todoBar.appendChild(todoDate);
  todoBar.appendChild(todoDelete);
  //text element
  const todoText = document.createElement('div');
  todoText.classList.add('todo-element-text');
  todoText.innerText = text;
  //linking all
  todo.appendChild(todoBar);
  todo.appendChild(todoText);

  todoList.append(todo);
}
//START when DOM loaded
document.addEventListener('DOMContentLoaded', function() {
  todoList = document.querySelector('#todoList');
  todoForm = document.querySelector('#todoForm');
  todoSearch = document.querySelector('#todoSearch');
  todoSearchForm = document.querySelector('#todoSearchForm');
//submit form
  todoForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const textarea = this.querySelector('textarea');
    if (textarea.value !== '') {
      addTask(textarea.value);
      textarea.value = '';
    }
  })
  //form search bar - to prevent refresh on enter
  todoSearchForm.addEventListener('submit', function(e) {
    e.preventDefault();
  })
//search
  todoSearch.addEventListener('input', function() {
      const val = this.value;
    const elems = todoList.querySelectorAll('.todo-element');

    [].forEach.call(elems, function(el) {
      const text = el.querySelector('.todo-element-text').innerText;

      if (text.indexOf(val) !== -1) {
        el.style.setProperty('display', '');
      } else {
        el.style.setProperty('display', 'none');
      }
    });
  });

});
