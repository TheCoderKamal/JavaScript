let input = document.getElementById('inp');
let add = document.getElementById('add');
let data = document.getElementById('data');
let hide = document.getElementById('hide');

add.addEventListener('click', () => {

    if(input.value == ""){
        alert('Please enter a value');
        return;
    }
    data.insertAdjacentHTML('beforeend', `
        <div id="item">
            <div id="detail">${input.value}</div>
            <div id="button">
                <button id="edit">
                    <span class="material-symbols-outlined">
                        edit
                    </span>
                </button>
                <button id="delete">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
            </div>
        </div>
    `);

    hide.style.display = 'block';

    input.value = '';
});
