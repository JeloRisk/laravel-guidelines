/** @format */

// Sample array of Pokémon objects
const pokemonList = [
  { name: "Pikachu", type: "Electric", level: 5 },
  { name: "Charmander", type: "Fire", level: 4 },
  { name: "Squirtle", type: "Water", level: 4 },
  { name: "Bulbasaur", type: "Grass", level: 3 },
  { name: "Jigglypuff", type: "Fairy", level: 3 },
];

// Example 1: forEach()
console.log("--- forEach() ---");
pokemonList.forEach((pokemon) => {
  console.log(`${pokemon.name} - Type: ${pokemon.type}, Level: ${pokemon.level}`);
});

// Example 2: map()
console.log("\n--- map() ---");
const pokemonNames = pokemonList.map((pokemon) => pokemon.name);
console.log("Pokémon names:", pokemonNames);

// Example 3: filter()
console.log("\n--- filter() ---");
const firePokemons = pokemonList.filter((pokemon) => pokemon.type === "Fire");
console.log("Fire type Pokémon:", firePokemons);

// Example 4: reduce()
console.log("\n--- reduce() ---");
const totalLevels = pokemonList.reduce((accumulator, pokemon) => accumulator + pokemon.level, 0);
console.log("Total levels of all Pokémon:", totalLevels);

// Example 5: find()
console.log("\n--- find() ---");
const squirtle = pokemonList.find((pokemon) => pokemon.name === "Squirtle");
console.log("Found Squirtle:", squirtle);

// Example 6: findIndex()
console.log("\n--- findIndex() ---");
const jigglypuffIndex = pokemonList.findIndex((pokemon) => pokemon.name === "Jigglypuff");
console.log("Index of Jigglypuff:", jigglypuffIndex);

// Example 7: some() and every()
console.log("\n--- some() and every() ---");
const hasElectricType = pokemonList.some((pokemon) => pokemon.type === "Electric");
console.log("Has Electric type Pokémon:", hasElectricType);

const allGrassType = pokemonList.every((pokemon) => pokemon.type === "Grass");
console.log("All Pokémon are Grass type:", allGrassType);

// Example 8: includes()
console.log("\n--- includes() ---");
const isInList = pokemonList.some((pokemon) => pokemon.name === "Bulbasaur");
console.log("Is Bulbasaur in the list:", isInList);
