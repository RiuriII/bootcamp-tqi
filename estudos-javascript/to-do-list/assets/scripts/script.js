const btnAdd = document.getElementById('btnAddTask')
const listcontainer = document.querySelector('.listTasks')
const btnRemove = document.getElementById('btn-remove')
let taskcounter = document.querySelector('#task-counter')
let numberTask = 0
function createTask() {
    let taskContent = document.getElementById('addTask').value
   if(taskContent !== '') {
        numberTask++
        let listItem = document.createElement('li')
        let labelTask = document.createElement('label')
        labelTask.setAttribute('for', `task${numberTask}`)
        let checkbox = document.createElement('input')
        checkbox.setAttribute('id', `task${numberTask}`)
        checkbox.setAttribute('type', 'checkbox')
        let paragraph = document.createElement('p')
        paragraph.innerHTML = taskContent

        labelTask.appendChild(checkbox)
        labelTask.appendChild(paragraph)
        listItem.appendChild(labelTask)
        listcontainer.appendChild(listItem)
        const tasks = document.querySelectorAll('.listTasks label')
        taskcounter.innerHTML = `${tasks.length}`
   } else {
       alert('Campo vazio, por favor preencha com atenção')
   }
}

function remove() {
    listcontainer.innerHTML = ""
    taskcounter.innerHTML = "0"
}

btnAdd.addEventListener('click', createTask)
btnRemove.addEventListener('click', remove)
