let showData = document.getElementById('showData');

let getData = async () => {
    let APIData = await fetch("https://dummyapi.online/api/pokemon");
    let data = await APIData.json();

    console.log(data);
    await data.forEach(object => {
        let newDiv = document.createElement("div");

        console.log(object.image)
        newDiv.innerHTML = `
            <div class="card">
                <div><img class="image" src=${object.image_url} /></div>
                <div><b>Pokemon: </b>${object.pokemon}</div>
                <div><b>Abilities: </b>${object.abilities[0]}</div>
                <div><b>Type: </b>${object.type}</div>
                <div><b>Location: </b>${object.location}</div>
            </div>
        `;
    
        showData.appendChild(newDiv);
    });
    // console.log(data)
};


getData();