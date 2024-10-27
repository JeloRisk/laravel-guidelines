/** @format */

// Simulate fetching player data from an API
async function fetchPlayerData(playerId) {
  const response = await fetch(`https://fake-json-api.mock.beeceptor.com/users/${playerId}`);
  const data = await response.json();
  return data;
}

// Function to simulate an attack delay
function attackDelay() {
  return new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay
}

// Function to simulate an attack
async function attack(player, opponent) {
  console.log(`${player.name} is attacking ${opponent.name}...`);

  await attackDelay(); // Wait for 1 second

  const damage = Math.floor(Math.random() * 10) + 1; // Random damage between 1 and 10
  opponent.health -= damage;

  console.log(`${player.name} dealt ${damage} damage to ${opponent.name}`);
  console.log(`${opponent.name}'s remaining health: ${opponent.health}\n`);
}

// Function to simulate the game
async function startGame(player1, player2) {
  while (player1.health > 0 && player2.health > 0) {
    await attack(player1, player2); // Player 1 attacks Player 2

    if (player2.health <= 0) {
      console.log(`${player2.name} has been defeated! ${player1.name} wins!`);
      break;
    }

    await attack(player2, player1); // Player 2 attacks Player 1

    if (player1.health <= 0) {
      console.log(`${player1.name} has been defeated! ${player2.name} wins!`);
      break;
    }
  }
}

// Main function to fetch player data and start the game
async function main() {
  try {
    // Fetch player data from the API
    const player1 = await fetchPlayerData(1);
    const player2 = await fetchPlayerData(2);

    // Set initial health for players
    player1.health = 20;
    player2.health = 20;

    // Start the game
    startGame(player1, player2);
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
}

main();
