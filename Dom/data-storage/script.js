let todoForm = document.getElementById('todo-form');
let inputTask = document.getElementById('input-task');
let task = document.getElementById('task');
let todoList = document.getElementById('todo-list');

const liwithCheckbox = () =>{
    return ``
}

let taskList = window.localStorage.getItem('todo-list') ?? '[]';
taskList = JSON.parse(taskList)


for(let value of taskList){
    let li = document.createElement('li');
    let checkBox = document.createElement('input') ;
    checkBox.type = 'checkbox';
    
    li.addEventListener('dblclick', event => {
        inputTask.checked
    })

    li.innerHTML += value;
    li.prepend(checkBox);
    todoList.append(li);
    
}

todoForm.addEventListener('submit', event => {
    event.preventDefault();
    
    let checkBox = document.createElement('input');
    let li = document.createElement('li');
    checkBox.type = 'checkbox';
    
    li.innerHTML += inputTask.value;
    li.prepend(checkBox);
    todoList.append(li);

    task.addEventListener('dblclick', event => {
        checkBox.checked
    })


    taskList.push(inputTask.value)
    window.localStorage.setItem('todo-list' , JSON.stringify(taskList));
    
    console.log(li);
});

