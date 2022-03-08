//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo)

function addTodo(e){
    e.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)

    //check mark btn
    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fa fa-check fx-5"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    //check trash btn
    const trashButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fa fa-trash"></i>'
    completedButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    //append to list
    todoList.appendChild(todoDiv)

    //clear todo input value
    todoInput.value = ''
}