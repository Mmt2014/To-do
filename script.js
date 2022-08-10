let selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    let formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    } else{
        updateRecord(formData);
    }
    resetForm();
}

function readFormData(){
    let formData = {};
    formData["sNo"] = document.getElementById("sNo").value;
    formData["work"] = document.getElementById("work").value;
    formData["time"] = document.getElementById("time").value;

    return formData;
}

function insertNewRecord(data){
    let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
       cell1.innerHTML = data.sNo;
    let cell2 = newRow.insertCell(1);
       cell2.innerHTML = data.work;
    let cell3 = newRow.insertCell(2);
       cell3.innerHTML = data.time;
    let cell4 = newRow.insertCell(3);
       cell4.innerHTML = `<button onClick = 'onEdit(this)'>Edit</button> <button onClick = 'onDelete(this)'>Delete</button>`
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("sNo").value = selectedRow.cells[0].innerHTML;
    document.getElementById("work").value = selectedRow.cells[1].innerHTML;
    document.getElementById("time").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData){
selectedRow.cells[0].innerHTML = formData.sNo;
selectedRow.cells[1].innerHTML = formData.work;
selectedRow.cells[2].innerHTML = formData.time;
}
function onDelete(td){
    if(confirm('Do you want to delete')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resetForm();
}
function resetForm(){
    document.getElementById("sNo").value ="";
    document.getElementById("work").value ="";
    document.getElementById("time").value ="";
}