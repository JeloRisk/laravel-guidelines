<!-- @format -->

# Review on Asynchronous Operations

Asynchronous Operations are essential for tasks that take time to complete, such as network requests, file reading, or any operation where waiting is involved. JavaScript handles these operations using:

1. Callbacks
2. Promises
3. Async/Await

## callback

A `callback` is just a function you give to another function so that it can use it later.

```sh
const printer = (toPrint) => {
  console.log(toPrint);
};

const concat = (hero, callback) => {
  let message = `I love playing the battlefield with ${hero} in Mobile Legends!`;
  callback(message);
};

concat("Gusion", printer);
```

Explaination: You give them the list of names (the task), and once they've sent the invitations, they let you know (the callback).

## Asynchronous

a way of handling tasks that might take some time to complete without freezing or blocking the rest of the program.

The `setTimeout()` function is used to execute a function after a specified number of milliseconds. It takes two parameters:

Callback Function: The function to be executed after the delay.

Delay: The time in milliseconds to wait before executing the callback function.

```sh
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

```

## Promises

an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states:

1. Pending: The initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, and the Promise has a value.
3. Rejected: The operation failed, and the Promise has a reason for the failure.

Creating Promises: Use the Promise constructor with resolve and reject.

Handling Results: Use .then() for fulfillment and .catch() for rejection.

example:

```sh
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

```

## async and await
They are built on top of Promises and provide a way to handle asynchronous operations more cleanly.

`**async Functions**`

a function declared with the **async** keyword. Inside an async function, you can use the **await** keyword to wait for a Promise to resolve.

`**await Expression**`

can be used inside an async function to pause the execution of the function until the Promise is resolved. It returns the result of the Promise if it is resolved, or throws an error if the Promise is rejected.

Example:
```sh
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet() {
  console.log('Starting...');
  await delay(2000); // Wait for 2 seconds
  console.log('Hello, world!');
}

greet();
```
Example 2: 
```
function preheatOven() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Oven is preheated');
    }, 3000); // Takes 3 seconds to preheat
  });
}

async function makeCake() {
  console.log('Start making cake...');
  
  let preheatMessage = await preheatOven(); // Wait for the oven to preheat
  console.log(preheatMessage); // This will run after 3 seconds
  
  console.log('Mixing batter...');
  console.log('Baking cake...');
  console.log('Cake is ready!');
}

makeCake();
```





