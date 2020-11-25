//import { pokemonBox } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const divFilter = document.getElementById("order-type");

console.log(data);

const severalCards = document.getElementById("cardsForm");
const dataPoke = POKEMON.pokemon;
let buscaPokemonData = pokemons; //Puxar do filtro todos os pokemons

//função para os cards
let pokemonBox = (name, number, type, image) => {
  let typesFormated = formatTypes(type);
  return `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
    <div class="card w-100 pokemon-box">
    <div  class="card-img-top">
    <img class="img-fluid" src="${image}" alt="${name}">
    </div>
    <div class="card-body">
    <p class="card-text">#${number}</p>
    <p class="card-text">${name}</p>
    <p class="card-text">${typesFormated}</p>
    </div>
    </div>
    </div>`;
};
//Organizar os tipos e para converter em array ou elementos independentes.
let formatTypes = (types) => {
  let typesHtml = "";
  for (let i = 0; i < types.length; i++) {
    //para mexer no CSS e para que apareçam lado a lado.
    typesHtml += `<div class="tag-type bg-${types[i].toLowerCase()}">${
      types[i]
    }</div>`;
  }
  return typesHtml;
};

// passa a função pokemons para o HTML (colocar nome da let do filtro)
let = (pokemons) => {
  // Amonstra dos pokemons.
  document.getElementById("list-cards").innerHTML = "";
  for (let i = 0; i < pokemons.length; i++) {
    document.getElementById("list-cards").innerHTML += pokemonBox(
      pokemons[i].name,
      pokemons[i].num,
      pokemons[i].type,
      pokemons[i].img
    );
  }
};
