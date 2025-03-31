//select elements from the dom
// this gets refrences to the input field , add button, and task

const taskinput = document.getElementById("taskinput");
const addTaskButton = document.getElementById("addtask");
const taskList = document.getElementById("taskList");

//add event listener to the add task button

// this functoin is triggered when the button is clicked


addTaskButton.addEventListener("click",()=>{
    // get the texted entered in the input field and trim any white space
    const taskText = taskinput.value.trim();

    //ensure that the tesk text is not empty before adding it to the list
    if(taskText){
        //create a new <li> element to represent the task

        const listItem = document.createElement("li");

        // set the inner html of the list with the task text and button
        listItem.innerHTML = `
        ${taskText}
        <button class="complete">Complete</button>
        <button class="delete">Delete</button>
         `;

         //append the newly created list to the task list
         taskList.appendChild(listItem);

         //clear the input field after adding the task
         taskinput.value= "";

    }
});


//add event listener to the task list to handle task actions using event delegation
// this ensures that buttons inside dynamically added tasks also work
// instead of adding event listeners to each button seperately , we use event delegation
// this listens for clicks on the task list and checks which button was clicked.

taskList.addEventListener("click", (event)=>{
 // check if the clicked element has the "complete" class
 if(event.target.classList.contains("complete")){
    //mark the task as complete by applying a strikethrough style
    event.target.parentElement.style.textDecoration ="line-through";
 }

 //click if the clicked element has the "delete" class
 else if(event.target.classList.contains("delete")){
    //remove the task from the list
    taskList.removeChild(event.target.parentElement);
 }
});

console.log(document.nodeType)