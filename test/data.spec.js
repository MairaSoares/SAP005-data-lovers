import {computeStats, filterSearch,sortData} from '../src/data.js';

const dataPokeTest =[{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "type": [
    "Grass",
    "Poison"
  ]
}];


describe("app.sortData", () => {
  it("ordena pelo nome", () => {
    expect(typeof app.sortData).toBe("function");
  });
  it("retorna em ordem alfabética A - Z", () => {
    const sortNames = app.sortData(dataPokeTest, "name", "select-A-Z");
    expect(sortNames).toEqual([{
      "id": 1,
      "num": "001",
      "name": "Bulbasaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 50,
      "num": "050",
      "name": "Diglett",
      "type": [
        "Ground"
      ]
    }, {
      "id": 2,
      "num": "002",
      "name": "Ivysaur",
      "type": [
        "Grass",
        "Poison"
      ]
    }, {
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]
    }, {
      "id": 27,
      "num": "027",
      "name": "Sandshrew",
      "type": [
        "Ground"
      ]
    }
    ]);
  });
});


describe("app.filterSearch", () => {
  it("is a function", () => {
    expect(typeof app.filterSearch).toBe("function");
  });
  it("must return filtered Pokemon by name", () => {
    const searchName = app.filterSearch(dataPokeTest, "Pikachu", "name");
    expect(searchName).toEqual([{
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]}]
    );
  });
  it("must return filtered Pokemon by type", () => {
    const types = app.filterSearch(dataPokeTest, "Electric", "type");
    expect(types).toEqual([{
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]}]
    );
  });
});


describe("statistics", () => {
  it("retorna o cálculo agregado", () => {
    expect(typeof app.computeStats).toBe("function");
  });
  it("retorna o calculo", () => {
    const filteredPokemon = [{
      "id": 25,
      "num": "025",
      "name": "Pikachu",
      "type": [
        "Electric"
      ]}];
    const calculus = app.statistics(filteredPokemon, dataPokeTest);
    expect(calculus).toBe("20.00");
  });
});

