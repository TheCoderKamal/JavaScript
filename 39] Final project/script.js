let flash = document.getElementById('flash-page');
let main = document.getElementById('main-page');
let image = document.getElementById('recipe-image');
let name = document.getElementById('recipe-name');
let ingredients = document.getElementById('recipe-ingredients');
let instructions = document.getElementById('recipe-instructions');
let cuisine = document.getElementById('cuisine-type');
let show = document.getElementById('show-item');

let addBtn = document.getElementById('add-btn');

window.onload = () => {
    setTimeout(() => {
        main.style.display = 'block';
        flash.classList.add('slide-out');
        main.classList.add('slide-in');
    }, 2000);

    let existingData = JSON.parse(localStorage.getItem("recipes")) || [];
    existingData.forEach(recipe => {
        displayRecipe(recipe);
    });
};


// add recipe
const addRecipe = (event) => {
    event.preventDefault();



    let recipe = {
        id: Date.now(),
        image: image.value,
        name: name.value,
        ingredients: ingredients.value,
        instructions: instructions.value,
        cuisine: cuisine.value,
    };

    let existingData = JSON.parse(localStorage.getItem("recipes")) || [];
    existingData.push(recipe);
    localStorage.setItem("recipes", JSON.stringify(existingData));

    image.value = "";
    name.value = "";
    ingredients.value = "";
    instructions.value = "";
    cuisine.value = "";

    displayRecipe(recipe);
};

const displayRecipe = (recipe) => {
    let div = document.createElement("div");
    div.className = "recipe-card";

    div.innerHTML = `
        <img src="${recipe.image}" class="image" alt="recipe-image">
        <div class="intro">
            <h2 class="name">${recipe.name}</h2>
            <p class="ingredient">Ingredients: ${recipe.ingredients}</p>
            <p class="instruction">Instructions: ${recipe.instructions}</p>
            <p class="cuisine">Cuisine: ${recipe.cuisine}</p>
            <div class="btn">
                <button class="update-btn" onclick="updateRecipe(${recipe.id})">Update</button>
                <button class="delete-btn" onclick="deleteRecipe(${recipe.id})">Delete</button>
            </div>
        </div>
    `

    show.appendChild(div);
};  

const updateRecipe = (id) => {
    let existingData = JSON.parse(localStorage.getItem('recipes'));

    let obj = existingData.find(recipe => recipe.id === id);
    
    if(obj){
        image.value = obj.image;
        name.value = obj.name;
        ingredients.value = obj.ingredients;
        instructions.value = obj.instructions;
        cuisine.value = obj.cuisine;
        addBtn.textContent = "Update Recipe";

        addBtn.onclick = () => {
            obj.image = image.value;
            obj.name = name.value;
            obj.ingredients = ingredients.value;
            obj.instructions = instructions.value;
            obj.cuisine = cuisine.value;

            localStorage.setItem("recipes", JSON.stringify(existingData));

            image.value = "";
            name.value = "";
            ingredients.value = "";
            instructions.value = "";
            cuisine.value = "";
            addBtn.innerHTML = "Add Recipe";
            addBtn.onclick = addRecipe;

            show.innerHTML = "";

            existingData.forEach(recipe => displayRecipe(recipe));
        };
    }
};


const deleteRecipe = (id) => {
    let existingData = JSON.parse(localStorage.getItem('recipes'));
    existingData = existingData.filter(recipe => recipe.id!== id);
    localStorage.setItem("recipes", JSON.stringify(existingData));
    show.innerHTML = "";
    existingData.forEach(recipe => displayRecipe(recipe));
}