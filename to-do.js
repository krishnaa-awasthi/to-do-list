// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
      return; // Do nothing if the input is empty
    }
  
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <button onclick="deleteTask(this)">&#10006;</button>
      <button onclick="toggleComplete(this)">&#10003;</button>
    `;
    
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input field after adding the task
    taskInput.focus(); // Keep focus on the input field
  }
  
  // Function to delete a task
  function deleteTask(button) {
    const li = button.parentElement;
    li.classList.add('fade-out');
    setTimeout(() => li.remove(), 300);
  }
  
  // Function to toggle the completion of a task
  function toggleComplete(button) {
    const li = button.parentElement;
    li.classList.toggle('completed');
  }
  
  // Adding a simple fade-out effect when a task is deleted
  document.querySelectorAll('li').forEach(li => {
    li.addEventListener('transitionend', () => {
      li.classList.remove('fade-out');
    });
  });
  