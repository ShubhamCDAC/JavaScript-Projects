

// JS Array to store tasks
const tasks = [];

// Function to add task
function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === "") {
        alert('Please Enter the task');
        return;
    }

    // add task to the array
    tasks.push(taskInput);

    //update the DOM
    updateTaskList();

    // clear the input box
    document.getElementById('taskInput').value = "";
}

// function to clear all task

function clearAll(){
    tasks.length = 0;
    updateTaskList();
}

// function to remove task;
function removeTask(index){
    //Remove task from tasks array
    tasks.splice(index, 1);

    // update the DOM
    updateTaskList();
}


//Function to update TaskList in DOM
function updateTaskList(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";

    for(let i=0;i<tasks.length;i++){
        const listItem = document.createElement('li');
        const taskText = document.createTextNode(tasks[i]);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.onclick = function(){
            removeTask(i);
        };

    
        listItem.appendChild(taskText);
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
    }
}
