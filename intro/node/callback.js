/** @format */

const fetchPokemonStats = (pokemon, callback) => {
  console.log(`Fetching stats for ${pokemon}...`);

  // Simulate an asynchronous API call with setTimeout
  setTimeout(() => {
    const stats = {
      pokemon,
      attack: Math.floor(Math.random() * 100),
      defense: Math.floor(Math.random() * 100),
    };
    callback(stats);
  }, 2000); // Simulate a 2-second delay for the API call
};

const displayPokemonStats = (stats) => {
  console.log(`Pokemon: ${stats.pokemon}`);
  console.log(`Attack: ${stats.attack}`);
  console.log(`Defense: ${stats.defense}`);
};

fetchPokemonStats("Pikachu", displayPokemonStats);
