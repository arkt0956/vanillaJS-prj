const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list")

let todos = [];
const TODO_KEY = "todo";


function checkTodo(event) {
    const li = event.target.parentElement;
    if(li.style.textDecoration == "line-through") {
        todos.forEach(todo => {
            if(todo['id'] === parseInt(li.id)) {
                todo['check'] = 0;
            }
        });
        li.style.textDecoration = "";
    } 
    else {
        todos.forEach(todo => {
            if(todo['id'] === parseInt(li.id)) {
                todo['check'] = 1;
            }
        });
        li.style.textDecoration = "line-through";
    }
    savedTodo();
}

function savedTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter(todo => String(todo.id) != li.id);
    savedTodo();
    li.remove();
}

function addNewTodo(event) {
    event.preventDefault();
    let input = {
        'id': Date.now(),
        'text':todoInput.value,
        'check':0
    }
    todos.push(input);
    savedTodo();
    paintingTodo(input);
    todoInput.value = "";
}

function paintingTodo(input) {
    let li = document.createElement('li');
    let span = document.createElement('span');
    const button = document.createElement('button');
    const doButton = document.createElement('button');
    li.id = input['id'];

    doButton.innerText = "✔️"
    doButton.addEventListener("click",checkTodo);
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    span.innerText = input['text'];
    if(input.check == 1) {
        li.style.textDecoration = "line-through";   
    }
    li.appendChild(doButton);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

todoForm.addEventListener("submit", addNewTodo);

const savedTodos = localStorage.getItem(TODO_KEY);
if(savedTodos !== null) {
    const todo_list = JSON.parse(savedTodos);
    todos = todo_list;
    todo_list.forEach(element => {
        paintingTodo(element); 
    });
}