//this gets all the html elements and stores them in a variable
let addItem = document.getElementById('addTodo');
let inputItem = document.getElementById('inputField');

let container = document.getElementById('todos');
let completedContainer = document.getElementById('completedTasks');

let clearBtn = document.getElementById('clear');
let paragraph = document.querySelector('paragraph-styling')

//this adds an event listener to the add button 
addItem.addEventListener('click', function (){

    //calls the function that adds a task
    addTask();
    
})

//this function adds a task to the list of task
function addTask(){

    //creates a p tag where the tag will be stored
     let task= document.createElement("p")

     //gets the value in the input box
     let text = inputItem.value

     //adds styles to the p tag
     task.classList.add('paragraph-styling')

     //adds an icon to the text from the input box
     task.innerHTML = "<i class='fa-regular fa-square deleteButton'></i>" + " " + text;

     //appends the value of a task to the div container
     container.appendChild(task)
     //resets the input box to empty
     inputItem.value = ""

     //console.log(text)
     task.addEventListener('click', function(){
        task.style.textDecoration = 'line-through';
        
        completeTask(text);

        })
     task.addEventListener('dblclick', function(){
        container.removeChild(task)

     })
}

clearBtn.addEventListener('click', function(){
    container.innerHTML = " ";
    completedContainer.innerHTML = " ";
    
})

function completeTask(text){
    let completed = document.createElement("p");
    let comp = text;

    //console.log(text)

    completed.classList.add('paragraph-styling')
    completed.innerHTML = "<i class='fa-solid fa-circle-check green'></i>" + " " + comp;

    completedContainer.appendChild(completed)

}

