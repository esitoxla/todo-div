const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

// Get all tasks from local storage and display them
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("list-item")) || [];

  list.innerHTML = "";

  tasks.forEach((task, index) => addToDOM(task, index));
}

// Save a task to local storage
function addTask() {
  const task = input.value.trim();
  if (!task) return;

  const allTasks = JSON.parse(localStorage.getItem("list-item")) || [];
  allTasks.push(task);

  localStorage.setItem("list-item", JSON.stringify(allTasks));

  input.value = "";
  input.focus();

  loadTasks(); // refresh UI
}

// Add a single task to the UI
function addToDOM(taskText, index) {
  const task = document.createElement("li");
  task.classList.add("list-item");

  task.innerHTML = `
    <div>
      <input type="checkbox" class="checkbox" id="checkbox-${index}" />
      <span id="text-${index}">${taskText}</span>
    </div>
    <div>
      <button class="delBtn" data-index="${index}"><i class="bi bi-trash"></i></button>
    </div>
  `;

  list.appendChild(task);

  // Delete task
  const delBtn = task.querySelector(".delBtn");
  delBtn.addEventListener("click", () => {
    deleteTask(index);
  });

  const checkbox = task.querySelector(`#checkbox-${index}`);
  const textSpan = task.querySelector(`#text-${index}`);

  checkbox.addEventListener("change", () => {
    textSpan.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });
}

// Delete a task from local storage and refresh UI
function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("list-item")) || [];
  tasks.splice(index, 1); // remove one task at the given index
  localStorage.setItem("list-item", JSON.stringify(tasks));
  loadTasks();
}

// On button click
btn.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});

// Load tasks from localStorage when page loads
window.addEventListener("DOMContentLoaded", loadTasks);
