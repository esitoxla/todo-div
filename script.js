
const btn = document.querySelector('#btn')
const list = document.querySelector('#list')
// const textNode = document.createTextNode(input)



btn.addEventListener('click', (e) => {
    e.preventDefault()
    const input = document.querySelector('#input').value
    const task = document.createElement("li")
    task.innerText = input
    const delBtn = document.createElement("button")
    delBtn.innerText = "Delete"
    list.appendChild(task)
    task.appendChild(delBtn)
})