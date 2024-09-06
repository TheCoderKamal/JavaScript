let name = document.getElementById("name");
let email = document.getElementById("email");
let dataTableBody = document.getElementById("dataTableBody");

window.onload = () => {
    let getData = JSON.parse(localStorage.getItem('student')) || [];
    showData(getData);
}

const getData = (event) => {
    event.preventDefault();

    let obj = {
        id: Date.now(),
        name: name.value,
        email: email.value
    }

    let existingData = JSON.parse(localStorage.getItem('student')) || [];

    existingData.push(obj);

    localStorage.setItem('student', JSON.stringify(existingData));


    name.value = "";
    email.value = "";

    showData(existingData);
};


const showData = (data) => {
    dataTableBody.innerHTML = "";

    for(let i = 0; i < data.length; i++){
        let row = dataTableBody.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);


        cell1.innerText = data[i].id;
        cell2.innerText = data[i].name;
        cell3.innerText = data[i].email;
        cell4.innerHTML = `<button onclick="editBtn(${data[i].id})">Edit</button>`;
        cell5.innerHTML = `<button onclick="deleteBtn(${data[i].id})">Delete</button>`;
    }
};


const deleteBtn = (id) => {
    let getData = JSON.parse(localStorage.getItem('student')) || [];

    let filteredData = getData.filter(data => data.id !== id);

    localStorage.setItem('student', JSON.stringify(filteredData));

    showData(filteredData);

}