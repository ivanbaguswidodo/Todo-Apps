let tasks = [
    {
        id: 1,
        name: "Belajar JavaScript",
        status: true,
    },
    {
        id: 2,
        name: "Kerjakan latihan",
        status: false
    },
    {
        id: 3,
        name: "Explore DataBase",
        status: true
    }
]

let btn_todo = document.getElementById('btn_click')

btn_todo.style.background = "green";
btn_todo.style.color = "white";

function btn_click (){
    let input_task = document.getElementById("task_form").value;
  
    if (input_task !== ''){
        let id = tasks[tasks.length - 1].id + 1;
        let tempObj = {
        id,
        name: input_task,
        status: false
    }
    tasks.push(tempObj)
    getTasks()
    document.getElementById('task_form').value = ''
    } else{
        alert("Task Kosong, Harap di isi.")
    }
}

btn_todo.addEventListener('click', btn_click)
// console.log(btn_todo);
// console.log(tasks)

function getTasks(){
    let tBody = document.getElementById('tBody');
    tBody.innerHTML = '';
    tasks.forEach(task => {
        tBody.innerHTML += 
        `<tr>
            <td>${task.id}</td>
            <td>${task.name}</td>
            <td>${task.status}</td>
        </tr>`
    })
}
getTasks();
