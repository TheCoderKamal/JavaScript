let url = document.getElementById('image-url');
let title = document.getElementById('image-title');
let price = document.getElementById('image-price');
let button = document.getElementById('add-btn');
let showDiv = document.getElementById('show-div');

let editId = null;



window.onload = () => {
    let existingData = JSON.parse(localStorage.getItem("product")) || [];
    existingData.forEach(product => {
        showData(product);
    });
}

const getData = (event) => {
    event.preventDefault();

    let product = {
        id: Date.now(),
        url: url.value,
        title: title.value,
        price: price.value,
    }

    let existingData = JSON.parse(localStorage.getItem("product")) || [];

    existingData.push(product);

    localStorage.setItem("product", JSON.stringify(existingData));

    url.value = "";
    title.value = "";
    price.value = "";

    showData(product);
}

const showData = (product) => {
    let dataDiv = document.createElement("div");
    dataDiv.innerHTML = `
        
            <div class="w-[300px] max-w-sm rounded-2xl overflow-hidden shadow-lg p-6 backdrop-blur-2xl">
                <!-- Image -->
                <img class="w-full h-48 object-cover rounded-lg" src=${product.url} alt="Image Title">
                
                <!-- Image Title and Price -->
                <div class="px-4 py-4">
                    <h3 class="text-lg font-semibold text-white">${product.title}</h3>
                    <p class="text-white">$${product.price}</p>
                </div>

                <!-- Buttons -->
                <div class="w-full flex justify-between">
                    <button onclick="deleteItem(${product.id})" class="border border-[red] text-[red] font-bold w-[100px] h-[40px] rounded">
                    Delete
                    </button>
                    <button onclick="editItem(${product.id})" class="border border-[#f5c61d] text-[#f5c61d] font-bold w-[100px] h-[40px] rounded">
                    Edit
                    </button>
                </div>
                </div>

    
    `;
    console.log("deleted")
    showDiv.append(dataDiv);
} 


const deleteItem = (id) => {
    let getData = JSON.parse(localStorage.getItem('product')) || [];

    let filteredData = getData.filter(data => data.id!== id);

    localStorage.setItem('product', JSON.stringify(filteredData));  

    showDiv.innerHTML = "";

    filteredData.forEach(product => {
        showData(product);
    });
};


const editItem = (id) => {
    let existingData = JSON.parse(localStorage.getItem('product')) || [];
    let product = existingData.find(product => product.id === id);

    if (product) {
        url.value = product.url;
        title.value = product.title;
        price.value = product.price;

        button.textContent = "Update Product";  

        button.onclick = function (event) {

            event.preventDefault();

            product.url = url.value;
            product.title = title.value;
            product.price = price.value;

            localStorage.setItem("product", JSON.stringify(existingData));

            url.value = "";
            title.value = "";
            price.value = "";
            button.textContent = "Add Product";
            button.onclick = getData;

            showDiv.innerHTML = "";  
            existingData.forEach(product => {
                showData(product);  
            });
        };
    }
};