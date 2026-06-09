let expanseInput = document.querySelector("#expanse-input");
let amountInput = document.querySelector("#amount-input");
let addBtn = document.querySelector(".add-btn");
let total = document.querySelector(".total");

let dataExp = localStorage.getItem('expansedata') ? JSON.parse(localStorage.getItem('expansedata')) : [];

addBtn.onclick = function() {
    let newexpanse = {
        expanseText: expanseInput.value.trim(),
        amountNumber: Number(amountInput.value.trim()) 
    };

    if (newexpanse.expanseText !== "" && newexpanse.expanseText.length <= 20 && newexpanse.amountNumber !== "" && Number(newexpanse.amountNumber) > 0) {
        
        if (dataExp.length < 7) {
            dataExp.push(newexpanse); 
            localStorage.setItem('expansedata', JSON.stringify(dataExp)); 
            clearData();
            showData();
        } else {
            alert('لا يمكن إضافة المزيد من المصاريف (الحد الأقصى 7)');
        }

    } else {
        alert("تأكد من الإدخالات: النص لا يتجاوز 20 حرفاً والمبلغ أكبر من 0");
    }
}; 

function clearData(){
    expanseInput.value = "";
    amountInput.value = "";
}

function showData(){
    let table = '';
    let total = 0;
    for (let i = 0; i < dataExp.length; i++){
        table += 
        `
        <tr>
            <td>${i + 1}</td>
            <td>${dataExp[i].expanseText}</td>
            <td>${dataExp[i].amountNumber} $</td>
            <td><button onclick="deleteData(${i})" class="delete-btn">Delete</button></td>
        </tr>
        `; 
        total += dataExp[i].amountNumber
    }
    document.querySelector("#tbody").innerHTML = table;
    document.querySelector(".total").innerHTML = total;
            console.log(total)

}

function deleteData(i){
    let isConfirmed = confirm('هل أنت متأكد ن الحذف')

    if (isConfirmed) {
    dataExp.splice(i, 1); 
    localStorage.setItem('expansedata', JSON.stringify(dataExp)); 
    showData(); 
    }
}

showData();

