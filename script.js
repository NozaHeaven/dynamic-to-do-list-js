document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validate input: Check if the task input is not empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Create a new list item (li) element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a "Remove" button for the task
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        
        // Add the 'remove-btn' class using classList.add
        removeButton.classList.add('remove-btn');
        
        // Assign an event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);  // Remove the task item when clicked
        };

        // Append the remove button to the task item
        taskItem.appendChild(removeButton);

        // Append the task item to the task list
        taskList.appendChild(taskItem);

        // Clear the input field after adding the task
        taskInput.value = '';
    }

    // Attach event listener to the "Add Task" button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks with the "Enter" key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
