let taskList = document.getElementById("taskList");

window.onload = function(){
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach(task => {
createTask(task.text, task.completed);
});
};

function addTask(){

let input = document.getElementById("taskInput");

let task = input.value.trim();

if(task === ""){
alert("Please enter a task");
return;
}

createTask(task,false);

saveTasks();

input.value="";
}

function createTask(taskText, completed){

let li = document.createElement("li");

li.innerHTML = `
<span onclick="toggleTask(this)">
${taskText}
</span>

<button class="delete-btn"
onclick="deleteTask(this)">
Delete
</button>
`;

if(completed){
li.querySelector("span").style.textDecoration =
"line-through";
}

taskList.appendChild(li);
}

function toggleTask(element){

if(element.style.textDecoration==="line-through"){
element.style.textDecoration="none";
}
else{
element.style.textDecoration="line-through";
}

saveTasks();
}

function deleteTask(button){
button.parentElement.remove();
saveTasks();
}

function saveTasks(){

let tasks = [];

document.querySelectorAll("#taskList li").forEach(li => {

tasks.push({
text: li.querySelector("span").innerText,
completed:
li.querySelector("span").style.textDecoration==="line-through"
});

});

localStorage.setItem("tasks",
JSON.stringify(tasks));
}