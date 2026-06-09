// 
let input = document.querySelector("#inputTodo");
let addBtn = document.querySelector(".todoAdd-btn");
let taskList = document.querySelector("ol");
let title = document.querySelector("h3");

let todoData = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : [];

function displayTasks() {
    taskList.innerHTML = "";
    
    title.textContent = `Your todos ( ${todoData.length} )`;


    todoData.forEach((taskText, index) => {
        const li = document.createElement("li");
        const label = document.createElement("label");
        label.textContent = taskText;
        
        const deletBtn = document.createElement('button');
        deletBtn.textContent = "Delete";
        deletBtn.className = "delete-btn";

        
        deletBtn.addEventListener("click", () => {
            if (confirm("هل أنت متأكد من حذف المهمة؟")) {
                todoData.splice(index, 1); 
                localStorage.setItem("todos", JSON.stringify(todoData)); ي
                displayTasks(); 
            }
        });

        li.appendChild(label);
        li.appendChild(deletBtn);
        taskList.appendChild(li);
    });
}

addBtn.addEventListener("click", () => {
    const userInput = input.value.trim(); 

    if (userInput === "") {
        alert('الرجاء إضافة مهمة');
        return;
    } else if (userInput.length > 100) {
        alert('النص طويل جداً');
        return;
    }

    if (todoData.length < 6) {
        todoData.push(userInput); 
        localStorage.setItem("todos", JSON.stringify(todoData)); 
        input.value = '';
        displayTasks(); 
    } else {
        alert("قائمة المهام ممتلئة (الحد الأقصى 6 مهام)");
    }
});

displayTasks();
