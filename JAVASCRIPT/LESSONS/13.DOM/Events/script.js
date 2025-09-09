let store = []
let form_target = document.getElementById("customform")
let table_target = document.getElementById("table")

form_target.addEventListener("submit", (e) => {
    e.preventDefault()
    data_fuctn(e)
})

function data_fuctn(e) {
    store.push(
        {
            work: e.target.taskname.value,
            date: e.target.due.value,
            priority :document.querySelector('input[name="priorty_radiobtn"]:checked').value,
            Description: e.target.description.value
        })
    createtable()
}
function createtable() {
    let data= store[store.length-1]
    let newRow = document.createElement('tr');
    let col1 = document.createElement('td');
    col1.textContent = data.work;
    let col2 = document.createElement('td');
    col2.textContent = data.date;
    let col3 = document.createElement('td');
    col3.textContent = data.priority;
    let col4 = document.createElement('td');
    col4.textContent = data.Description;

//     newRow.innerHTML = `
//     <td>${col1}</td>
//     <td>${col2}</td>
//     <td>${col3}</td>
//     <td>${col4}</td>
//   `
    newRow.appendChild(col1)
    newRow.appendChild(col2)
    newRow.appendChild(col3)
    newRow.appendChild(col4)

    table_target.querySelector("tbody").appendChild(newRow);
}