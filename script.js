// Get references to the elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTask(taskText) {
    const taskItem = document.createElement('li');
    
    // Create the text for the task
    const taskTextNode = document.createElement('span');
    taskTextNode.textContent = taskText;
    taskItem.appendChild(taskTextNode);

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = function () {
        taskItem.remove();
    };
    taskItem.appendChild(deleteButton);

    // Add the task to the list
    taskList.appendChild(taskItem);

    // Add functionality to mark the task as completed when clicked
    taskItem.addEventListener('click', function () {
        taskItem.classList.toggle('completed');
    });
