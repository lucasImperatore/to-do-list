let lista= []
let task= document.getElementById("task")
function add(){
    let tarefas= document.getElementById("tarefa").value
    lista.push(tarefas) 
    console.log(lista)
for(let i=0; i<= lista.length; i++){
    let item = document.createElement("li")
    item.textContent = lista[i]
task.appendChild(item)
}
    
}

