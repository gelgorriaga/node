// const fs = require('fs');

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// data.name= 'Guillermo Jose';
// data.age= 24;
// fs.writeFileSync('1-json.json', JSON.stringify(data));
// console.log(data);
const fetch = require('node-fetch');


function getPokemon (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(r => console.log(`ID: ${r.id}, Name: ${r.name}, Type: ${r.types}`))
    .catch(err=> console.log(err));
}

for (let i = 1; i<200; i++){
    getPokemon(i)
}