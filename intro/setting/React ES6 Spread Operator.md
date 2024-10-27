<!-- @format -->

# Spread Operator

The spread operator (...) in JavaScript allows you to expand elements of an iterable (like an array) or properties of an object into individual elements or properties. It is a convenient way to combine, copy, or expand arrays and objects.

## Syntax

For arrays and objects, the spread operator is used as follows:

```sh
// For arrays
let newArray = [...array];

// For objects
let newObject = { ...object };

```

## Example

Let's use the spread operator with an array of Pokémon and an object representing Pokémon data:

```sh
// Array of Pokémon data
const pokemon1 = ['Pikachu', 'Electric', 5];
const pokemon2 = ['Charmander', 'Fire', 4];

// Using the spread operator to combine arrays
const combinedPokemon = [...pokemon1, ...pokemon2];

console.log(combinedPokemon);
// Output: ['Pikachu', 'Electric', 5, 'Charmander', 'Fire', 4]

```

Object Example:

```sh
// Object of Pokémon data
const pokemon = {
  name: 'Pikachu',
  type: 'Electric',
  level: 5
};

// Using the spread operator to create a copy and add a new property
const evolvedPokemon = {
  ...pokemon,
  evolution: 'Raichu'
};

console.log(evolvedPokemon);
// Output: { name: 'Pikachu', type: 'Electric', level: 5, evolution: 'Raichu' }

```
