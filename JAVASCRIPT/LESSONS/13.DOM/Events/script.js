let store = []
let form_target = document.getElementById("customform")
let table_target = document.getElementById("table")
let editIndex=null

form_target.addEventListener("submit", (e) => {
    e.preventDefault()
    data_fuctn(e)
})

function data_fuctn(e) {
     if (editIndex === null) {
        store.push({
            work: e.target.taskname.value,
            date: e.target.due.value,
            priority: document.querySelector('input[name="priorty_radiobtn"]:checked').value,
            Description: e.target.description.value
        });
    } else {
        store[editIndex] = {
            work: e.target.taskname.value,
            date: e.target.due.value,
            priority: document.querySelector('input[name="priorty_radiobtn"]:checked').value,
            Description: e.target.description.value
        };
        editIndex = null;
    }

    e.target.reset();
    createtable();
}
    
      
function createtable() {
    let table_body = document.querySelector("tbody")
    table_body.innerHTML="" //clear krega previous row ko
    store.forEach((data, index) => {
        let date = new Date().toLocaleDateString()
        let time = new Date().toLocaleTimeString()
      
      
        let newRow = document.createElement('tr');
        let col1 = document.createElement('td');
        col1.textContent = data.work;
        let col2 = document.createElement('td');
        col2.textContent = data.date;
        let col3 = document.createElement('td');
        col3.textContent = data.priority;
        let col4 = document.createElement('td');
        col4.textContent = data.Description;
        let col5 = document.createElement('td');
        col5.textContent = date
        let col6 = document.createElement('td');
        col6.textContent = time
        let col7 = document.createElement(`td`);
        // DELETE button
        let delbtn = document.createElement("button");
        delbtn.textContent = 'DELETE';
        delbtn.onclick = () => {
            deleteEntry(index);
        };

        // UPDATE button 
        let updatebtn = document.createElement("button");
        updatebtn.textContent = "UPDATE";
        updatebtn.onclick = () => {
            updateEntry(index);
        };
    

    col7.appendChild(delbtn)
    col7.appendChild(updatebtn)

    newRow.appendChild(col1)
    newRow.appendChild(col2)
    newRow.appendChild(col3)
    newRow.appendChild(col4)
    newRow.appendChild(col5)
    newRow.appendChild(col6)
    newRow.appendChild(col7)

    table_target.style.display = "block"
    table_target.querySelector("tbody").appendChild(newRow);
    })
}

function deleteEntry(delindex) {
    store = store.filter((entry, index) => { return index != delindex })
    createtable()
}
function updateEntry(uindex){
     editIndex = uindex; 
     editForm(store[uindex]);
}
function editForm(data) {
    form_target.taskname.value = data.work;
    form_target.due.value = data.date;
    form_target.description.value = data.Description;
    document.querySelector(`input[name="priorty_radiobtn"][value="${data.priority}"]`).checked = true;
}