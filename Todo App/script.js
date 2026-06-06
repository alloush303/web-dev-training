let input = document.querySelector("#inputTodo")
let addBtn = document.querySelector(".todoAdd-btn")
let taskList = document.querySelector("ol")
let title = document.querySelector("h3")

let count = 0
addBtn.addEventListener("click", () => {
    const userInput = input.value;
    console.log(userInput.length)

    if(userInput === ""){
        alert('الرجاء إضافة مهمة');
        return;
    }else if(userInput.length > 100){
        alert('النص طويل جداً');
        return;
    }
    const li = document.createElement("li")
    const label = document.createElement("label")
    label.textContent = userInput
    const deletBtn = document.createElement('button')
    deletBtn.textContent = "Delete"
    deletBtn.className = "delete-btn"


    deletBtn.addEventListener("click", () => {
        taskList.removeChild(li);
        count = count - 1
        confirm("هل أنت متأكد من حذف المهمة")
    })

    if (count < 6) {
    li.appendChild(label);
    li.appendChild(deletBtn);
    taskList.appendChild(li)
    title.textContent = `Your todos ( ${count} )`
    count = count + 1;

    }else{
        alert("قائمة المهام ممتلئة")
    }


    input.value = '';


})

console.log(taskList)


