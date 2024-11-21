
const taskInput = document.getElementById("taskNameInput");


const selectInput = document.getElementById("taskStatusInput");


const addTaskBtn= document.getElementById("addButton");

const taskList = document.getElementById("listContainer");

/*Adding table in the task list */
const listTable = document.getElementById('listTable');
const listTableBody = document.getElementById('tableBody');
   


addTaskBtn.addEventListener('click',()=>{
    const taskName = taskInput.value.trim();
    const taskStatus = selectInput.value;

    let notStarted = document.getElementById("notSelected");


    let row = listTableBody.insertRow(-1);

    let cell1 = row.insertCell(0);
    cell1.innerHTML = taskName;
    let cell2 = row.insertCell(1);

    switch(taskStatus){
        case "1":
            cell2.classList.add("statusNotStarted");
            cell2.innerHTML=selectInput.options[selectInput.selectedIndex].text;
            break;
        case "2":
            cell2.classList.add("statusPending");
            cell2.innerHTML=selectInput.options[selectInput.selectedIndex].text;
            break;
        case "3":
            cell2.classList.add("statusCompleted");
            cell2.innerHTML=selectInput.options[selectInput.selectedIndex].text;
            break;
        default:
            break;
    }
    
});
