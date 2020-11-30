const divFilter = document.getElementById("order-type");
const selectOrder = document.getElementById("order-name");
const card = document.getElementById("list-cards");

const dataPoke = POKEMON.pokemon;

//Carregar as imagens após a inicialização da uma página
window.onload = () => {
  listCard(dataPoke);
  populateDropdown(dataPoke);
};

//Função para renderizar o array de pokemons
const listCard = (data) => {
  card.innerHTML = data
    .map(
      (poke) => `
    <section class="box">
      <p>${poke.num}</p>
      <h3> ${poke.name}</h3>
      <img src=${poke.img} />
      <div>
          <p><strong>Tipo:</strong> ${poke.type.join(", ")}</p>
          <p><strong>Ovo:</strong> ${poke.egg}</p>
          <p><strong>Chance:</strong> ${poke.avg_spawns} % </p>
          <p><strong>Fraquezas:</strong> ${poke.weaknesses.join(", ")}</p>
      </div>
    </section>
  `
    )
    .join("");
};

//Filtro dos pokemons de A-Z / Z-A
selectOrder.addEventListener("change", ({ target: { value } }) => {
  const functionOrder = window.sortData(dataPoke, "name", value);
  if (value === "none") {
    return listCard(dataPoke);
  } else {
    listCard(functionOrder);
  }
});

//função para aparecer o typo dos pokemons nas opções de escolha
const populateDropdown = (pokemons) => {
  const pokemonsType = pokemons.map((poke) => poke.type).flat();
  const uniqueTypes = [...new Set(pokemonsType)];

  const optionsLayout = uniqueTypes
    .map(
      (type) => `
    <option value=${type}>${type}</option>`
    )
    .join("");
  document.querySelector("#order-type").innerHTML= optionsLayout;

};

//Filtro dos pokemons de acordo com o typo
divFilter.addEventListener("change", (e) => {
  listCard(filterSearch(dataPoke, e.target.value, "type"));
});
