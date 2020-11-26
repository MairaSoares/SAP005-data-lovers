////////main

// const divFilter = document.getElementById("order-type");
// const selectOrder = document.getElementById("order-name");
// const inputFilterName = document.getElementById("input-name");
// const stats = document.getElementById("percentage");

// const dataPoke = POKEMON.pokemon;

// const card = document.getElementById("list-cards");

// const listCard = (data) => {
//   card.innerHTML = data
//     .map(
//       (poke) => `
//     <section class="box">
//       <h3 > ${poke.name}</h3>
//       <img src=${poke.img} />
//       <div>
//           <p><strong>Tipo:</strong> ${poke.type.join(", ")}</p>
//           <p><strong>Ovo:</strong> ${poke.egg}</p>
//           <p><strong>Chance:</strong> ${poke.avg_spawns} % </p>
//           <p><strong>Fraquezas:</strong> ${poke.weaknesses.join(", ")}</p>
//       </div>
//     </section>
//   `
//     )
//     .join("");
// };

// selectOrder.addEventListener("change", ({ target: { value } }) => {
//   const functionOrdena = window.sortData(dataPoke, "name", value);
//   value === "none" ? listCard(dataPoke) : listCard(functionOrdena);
// });

// window.onload = () => {
//   listCard(dataPoke);
//   populateDropdown(dataPoke);
// };

// const populateDropdown = (pokemons) => {
//   const pokemonsType = pokemons.map((poke) => poke.type).flat();
//   const uniqueTypes = [...new Set(pokemonsType)];
//   const optionsLayout = uniqueTypes
//     .map(
//       (type) => `
//     <option value=${type}>${type}</option>`
//     )
//     .join("");
//   document.querySelector("#order-type").innerHTML = optionsLayout;
// };

// divFilter.addEventListener("change", () => {
//   const filtered = window.filterSearch(dataPoke, divFilter.value, "type");
//   listCard(filtered);
//   stats.innerHTML = `
//     <p class="text-percentage">
//       Os pokémons do tipo ${divFilter.value} representam ${statistics(
//     filtered,
//     dataPoke
//   )}% dos pokemóns da primeira geração.
//     </p>`;
// });

// divFilter.addEventListener("change", (e) => {
//   listCard(filterSearch(dataPoke, e.target.value, "type"));
// });

// inputFilterName.addEventListener("input", (e) => {
//   listCard(
//     filterSearch(
//       dataPoke,
//       inputFilterName.value.charAt(0).toUpperCase() +
//         inputFilterName.value.slice(1),
//       "name"
//     )
//   );
// });

//////////data

// window.app = {
//   sortData,
//   filterSearch,
//   statistics,
// };

// function sortData(data, sortBy, sortOrder) {
//   const copiedArray = data.slice();
//   if (sortOrder == "select-A-Z") {
//     return copiedArray.sort(function ordena(objOne, objTwo) {
//       return objOne[sortBy].localeCompare(objTwo[sortBy]);
//     });
//   } else if (sortOrder == "select-Z-A") {
//     return copiedArray.sort(function ordena(objOne, objTwo) {
//       return objTwo[sortBy].localeCompare(objOne[sortBy]);
//     });
//   }
// }

// function filterSearch(data, condition, key) {
//   return data.filter((item) => item[key].includes(condition));
// }

// function statistics(dataType, data) {
//   return ((dataType.length * 100) / data.length).toFixed(2);
// }

//////////Css

// body {
//   background-color: cadetblue;
// }

// .container-header {
//   display: flex;
//   flex-direction: column;
// }

// .section-image {
//   display: flex;
//   flex-direction: row;
// }

// .image-pokeflix {
//   margin-left: auto;
//   margin-right: auto;
//   height: 44vh;
//   box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
//   border-radius: 30px;
// }

// .section-search {
//   display: flex;
//   justify-content: space-around;
//   margin-top: 2%;
// }

// .input-name {
//   width: 23%;
//   height: 25px;
//   background: linear-gradient(
//     180deg,
//     #e5fff4 82.81%,
//     rgba(255, 255, 255, 0) 100%
//   );
//   border-radius: 4px;
//   border: none;
//   font-style: italic;
// }

// select {
//   width: 23%;
//   height: 25px;
//   background: linear-gradient(
//     180deg,
//     #e5fff4 82.81%,
//     rgba(255, 255, 255, 0) 100%
//   );
//   border-radius: 4px;
//   border: none;
//   font-style: italic;
// }

// .text-percentage {
//   font-family: comic sans-serif;
//   color: navajowhite;
// }

// .container {
//   margin-top: 30px;
//   display: flex;
//   flex: 1;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
// }

// .box {
//   border: 3px solid rgb(73, 121, 8);
//   width: 15%;
//   height: auto;
//   margin: 10px;
//   padding: 15px;
//   border-radius: 10px;
//   text-align: center;
//   font-size: 16px;
//   background-color: #fdfeff63;
// }

// .content-card {
//   padding: 2px;
//   text-align: left;
//   font-size: 14px;
//   word-wrap: break-word;
// }

// #percentage {
//   font-size: 18px;
//   color: black;
//   font-weight: bold;
//   text-align: center;
// }

// @media screen and (min-width: 200px) and (max-width: 640px) {
//   .image-pokeflix {
//     width: 340px;
//     height: 150px;
//     margin-left: auto;
//     margin-right: auto;
//   }

//   .section-search {
//     flex-direction: column;
//     margin-top: 2%;
//     flex-wrap: wrap;
//     display: inline;
//     justify-content: center;
//   }

//   .select-order {
//     display: grid;
//     justify-content: initial;
//   }

//   .select-order-name {
//     margin: 10px;
//     height: auto;
//   }

//   .select-type {
//     margin: 10px;
//     height: auto;
//   }

//   .input-search {
//     margin: 10px;
//     height: auto;
//   }

//   .container {
//     margin-top: 30px;
//   }

//   .box {
//     width: 60%;
//   }
// }

// @media screen and (min-width: 650px) and (max-width: 800px) {
//   .image-pokeflix {
//     margin-left: 90px;
//     margin-right: auto;
//     height: 150px;
//   }

//   .select-order {
//     display: inline-grid;
//     margin-top: 5%;
//   }
//   .container {
//     margin-top: 30px;
//     flex: 1;
//     flex-direction: row;
//     flex-wrap: wrap;
//     justify-content: center;
//     display: flex;
//   }
//   .box {
//     width: 20%;
//   }
// }
