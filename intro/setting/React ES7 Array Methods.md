<!-- @format -->

# ES6 Array Methods

ES6 introduced several new array methods that make it easier and more efficient to work with arrays in JavaScript. These methods provide powerful tools for manipulating and iterating over arrays.

## forEach()

Iterates over each element in the array.

```sh
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {
  console.log(num);
});
// Output:
// 1
// 2
// 3
// 4
// 5
```

## map()

Transforms each element in the array and returns a new array of the same length.

```sh
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

```

# filter()

Returns a new array containing elements that pass a test specified by a callback function.

```sh
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
```

## reduce()

Applies a function against an accumulator and each element in the array to reduce it to a single value.

```
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

```

## find()

Returns the first element in the array that satisfies a provided testing function.

```sh
const numbers = [1, 2, 3, 4, 5];

const firstEvenNumber = numbers.find((num) => {
  return num % 2 === 0;
});

console.log(firstEvenNumber); // Output: 2

```

## Example

```sh

// Sample array of Pokémon objects
const pokemonList = [
  { name: 'Pikachu', type: 'Electric', level: 5 },
  { name: 'Charmander', type: 'Fire', level: 4 },
  { name: 'Squirtle', type: 'Water', level: 4 },
  { name: 'Bulbasaur', type: 'Grass', level: 3 },
  { name: 'Jigglypuff', type: 'Fairy', level: 3 }
];

// Example 1: forEach()
console.log('--- forEach() ---');
pokemonList.forEach((pokemon) => {
  console.log(`${pokemon.name} - Type: ${pokemon.type}, Level: ${pokemon.level}`);
});

// Example 2: map()
console.log('\n--- map() ---');
const pokemonNames = pokemonList.map((pokemon) => pokemon.name);
console.log('Pokémon names:', pokemonNames);

// Example 3: filter()
console.log('\n--- filter() ---');
const firePokemons = pokemonList.filter((pokemon) => pokemon.type === 'Fire');
console.log('Fire type Pokémon:', firePokemons);

// Example 4: reduce()
console.log('\n--- reduce() ---');
const totalLevels = pokemonList.reduce((accumulator, pokemon) => accumulator + pokemon.level, 0);
console.log('Total levels of all Pokémon:', totalLevels);

// Example 5: find()
console.log('\n--- find() ---');
const squirtle = pokemonList.find((pokemon) => pokemon.name === 'Squirtle');
console.log('Found Squirtle:', squirtle);

// Example 6: findIndex()
console.log('\n--- findIndex() ---');
const jigglypuffIndex = pokemonList.findIndex((pokemon) => pokemon.name === 'Jigglypuff');
console.log('Index of Jigglypuff:', jigglypuffIndex);

// Example 7: some() and every()
console.log('\n--- some() and every() ---');
const hasElectricType = pokemonList.some((pokemon) => pokemon.type === 'Electric');
console.log('Has Electric type Pokémon:', hasElectricType);

const allGrassType = pokemonList.every((pokemon) => pokemon.type === 'Grass');
console.log('All Pokémon are Grass type:', allGrassType);

// Example 8: includes()
console.log('\n--- includes() ---');
const isInList = pokemonList.some((pokemon) => pokemon.name === 'Bulbasaur');
console.log('Is Bulbasaur in the list:', isInList);

```
