/** @format */

// Object of Pokémon data
const pokemon = {
  name: "Pikachu",
  type: "Electric",
  level: 5,
  moveset: ["Thunder Shock", "Wild Charge", "Thunder Bolt", "Iron Tail"],
};

// Destructuring the object
const { name, type, level, moveset } = pokemon;

// Using the destructured variables
console.log(`Name: ${name}, Type: ${type}, Level: ${level}`);
moveset.forEach((element) => {
  console.log(element);
});
