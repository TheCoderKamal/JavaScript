let task = document.getElementById('inp');
let add = document.getElementById('add');
let data = document.getElementById('data');
let hide = document.getElementById('hide');

// Existing tasks ko display karne ke liye function
let displayTasks = () => {
    let existingData = JSON.parse(localStorage.getItem("tasks")) || [];
    
    existingData.forEach((taskObj, index) => {
        data.insertAdjacentHTML('beforeend', `
            <div id="item" data-index="${index}">
                <div id="detail">${taskObj.task}</div>
                <div id="button">
                    <button class="edit">
                        <span class="material-symbols-outlined">
                            edit
                        </span>
                    </button>
                    <button class="delete">
                        <span class="material-symbols-outlined">
                            delete
                        </span>
                    </button>
                </div>
            </div>
        `);
    });

    if (existingData.length > 0) {
        hide.style.display = 'block';
    }
};

// Task add karne ke function ko update kiya gaya hai
let addData = (event) => {
    event.preventDefault();

    if(task.value == ""){
        alert('Please enter a value');
        return;
    }

    let existingData = JSON.parse(localStorage.getItem("tasks")) || [];

    let obj = {
        task: task.value,
    };

    existingData.push(obj);

    localStorage.setItem("tasks", JSON.stringify(existingData));

    // Naye task ko display karna
    data.insertAdjacentHTML('beforeend', `
        <div id="item">
            <div id="detail">${task.value}</div>
            <div id="button">
                <button class="edit">
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </button>
                <button class="delete">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    `);

    hide.style.display = 'block';
    task.value = "";  // Clear input field
}

// Page load par tasks ko display karte hain
document.addEventListener('DOMContentLoaded', displayTasks);
