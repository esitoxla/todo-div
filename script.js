const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
// const textNode = document.createTextNode(input)

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#input").value;
  const task = document.createElement("li");
  task.classList.add("list-item");
  task.innerHTML = `
    <div>
        <input type="checkbox" id="checkbox" />
        <span id="text">${input}</span>
    </div>
    <div>
        <button class = "delBtn"><i class="bi bi-trash"></i></button>
    </div>
    `;

  // append/add task
  list.appendChild(task);

  // Clear input
  document.querySelector("#input").value = "";

  // Delete task
  const delBtn = task.querySelector(".delBtn");
  delBtn.addEventListener("click", () => {
    task.remove();
  });

  const text = task.querySelector("#text");
  const checkbox = task.querySelector("#checkbox");

  // Click checkbox to put a linethrough
  checkbox.addEventListener("change", () => {
    text.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });
});
