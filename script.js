const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

function addTask(){
    const taskText = taskInput.value.trim()
    if(taskText!==""){
        const listItem = document.createElement("li")
        listItem.innerHTML= `<span>${taskText}</span>  <button class="remove-btn" 
        onclick="removeTask(this)">excluir</button>`
        
        listItem.addEventListener("click", function (event) {
          
          if (!event.target.classList.contains("remove-btn")) {
            listItem.style.textDecoration = "line-through";
            listItem.style.color = "green";
          }
        })
    
        taskList.appendChild(listItem)
        taskInput.value= ""
    }else{
        alert("digite uma tarefa para adicionar à lista!")
    }


}



function removeTask(taskElement){
    taskElement.parentElement.remove()
}







