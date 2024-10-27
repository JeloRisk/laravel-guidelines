<!-- @format -->

# Destructuring

To illustrate destructuring, we'll make a sandwich. Do you take everything out of the refrigerator to make your sandwich? No, you only take out the items you would like to use on your sandwich.

**Destructuring** is exactly the same. We may have an array or object that we are working with, but we only need some of the items contained in these.

**Destructuring** makes it easy to extract only what is needed.

## Destructing Arrays

### Syntax

To destructure an array, you use square brackets [] on the left-hand side of the assignment. The variables on the left-hand side should correspond to the positions of elements in the array.

```sh
let [var1, var2, ..., varN] = array;
```

### Example

```sh
// Array of Pokémon data
const pokemon = ['Pikachu', 'Electric', 5];

// Destructuring the array
const [name, type, level] = pokemon;

// Using the destructured variables
console.log(`Name: ${name}, Type: ${type}, Level: ${level}`);

```

## Destructing Objects

To destructure an object, you use curly braces {} on the left-hand side of the assignment. The variable names inside the curly braces should match the property names of the object.

### Syntax

```sh
let { property1, property2, ..., propertyN } = object;
```

### Example

```sh
// Object of Pokémon data
const pokemon = {
  name: 'Pikachu',
  type: 'Electric',
  level: 5
};

// Destructuring the object
const { name, type, level } = pokemon;

// Using the destructured variables
console.log(`Name: ${name}, Type: ${type}, Level: ${level}`);

```
