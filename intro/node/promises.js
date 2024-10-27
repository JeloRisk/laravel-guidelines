/** @format */

const fetchPokemonStats = (pokemon, callback) => {
  console.log(`Fetching stats for ${pokemon}...`);

  // Simulate an asynchronous API call with setTimeout
  return new Promise((resolve, reject) => {
    {
      setTimeout(() => {
        const stats = {
          pokemon,
          attack: Math.floor(Math.random() * 100),
          defense: Math.floor(Math.random() * 100),
        };
        // Resolve and Reject the promise with the stats
        if (stats.attack <= 50) {
          reject("Too Low Stat for Attack");
        } else {
          resolve(stats);
        }
      }, 2000); // Simulate a 2-second delay for the API call
    }
  });
};

const displayPokemonStats = (stats) => {
  console.log(`Pokemon: ${stats.pokemon}`);
  console.log(`Attack: ${stats.attack}`);
  console.log(`Defense: ${stats.defense}`);
};

//   fetchPokemonStats("Pikachu", displayPokemonStats);
fetchPokemonStats("Pikachu")
  .then(displayPokemonStats)
  .catch((error) => {
    console.error("Error fetching Pokémon stats:", error);
  });
