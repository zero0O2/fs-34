let url = 'https://dummyjson.com/todos';
let todoForm = document.getElementById('todo-form');
let inputTask = document.getElementById('input-task');
let task = document.getElementById('task');
let todoList = document.getElementById('todo-list');


let requesh = fetch(url)
.then(response => response.json())
.then(json => {
        todoList.innerHTML=json.todos
    
})
