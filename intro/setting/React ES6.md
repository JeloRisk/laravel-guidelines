<!-- @format -->

# ES6

## Why Should I Learn ES6?

React uses ES6, and you should be familiar with some of the new features like:

    Classes
    Arrow Functions
    Variables (let, const, var)
    Array Methods like .map()
    Destructuring
    Modules
    Ternary Operator
    Spread Operator

## ES6 Class

A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

### Simple Class Constructor

A simple class constructor:

```sh
class Car {
  constructor(name) {
    this.brand = name;
  }
}
```

**Notice the case of the class name. We have begun the name, "Car", with an uppercase character. This is a standard naming convention for classes.**

Example: Create an object called `pikachu` based on the Pokemon Car:

```sh
class Pokemon {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  attack() {
    console.log(`${this.name} used a basic attack!`);
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }

  showDetails() {
    console.log(`Name: ${this.name}, Type: ${this.type}, Level: ${this.level}`);
  }
}

// Example usage
const pikachu = new Pokemon('Pikachu', 'Electric', 5);
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 5
pikachu.attack(); // Pikachu used a basic attack!
pikachu.levelUp(); // Pikachu leveled up to level 6!
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 6

```

- The `Pokemon` class has a constructor that initializes the Pokémon's name, type, and level.
- The `attack` method simulates a basic attack.
- The `levelUp` method increases the Pokémon's level by one and announces the level-up.
- The `showDetails` method prints the Pokémon's details.

### Simple Class Inheritance

To create a class inheritance, use the `extends` keyword. A class created with a class inheritance inherits all the methods from another class.

The `super()` method refers to the parent class.

```sh
class Pokemon {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  attack() {
    console.log(`${this.name} used a basic attack!`);
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} leveled up to level ${this.level}!`);
  }

  showDetails() {
    console.log(`Name: ${this.name}, Type: ${this.type}, Level: ${this.level}`);
  }
}

class ElectricPokemon extends Pokemon {
  constructor(name, level) {
    super(name, 'Electric', level); // Call the constructor of the parent class
  }

  thunderShock() {
    console.log(`${this.name} used Thunder Shock!`);
  }
}

// Example usage
const pikachu = new ElectricPokemon('Pikachu', 5);
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 5
pikachu.attack(); // Pikachu used a basic attack!
pikachu.thunderShock(); // Pikachu used Thunder Shock!
pikachu.levelUp(); // Pikachu leveled up to level 6!
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 6

```

In this example:

- The `Pokemon` class remains the same as before.
- The `ElectricPokemon` class extends the Pokemon class, inheriting its properties and methods.
- The `ElectricPokemon` class has a new method thunderShock that is specific to Electric-type Pokémon.
- When creating an instance of `ElectricPokemon`, the `super` keyword is used to call the parent class (`Pokemon`) constructor.

### Getter and Setter

**Getters** and **setters** in JavaScript are used to define methods that get and set the values of an object's properties. They provide a way to control the access and modification of these properties.

### Notes

A JavaScript class is **not** an object. It is a **template** for JavaScript objects.

```sh
class Pokemon {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this._level = level; // Use an underscore to indicate a private variable
  }

  // Getter for level
  get level() {
    return this._level;
  }

  // Setter for level
  set level(newLevel) {
    if (newLevel > 0) { // Ensure the level is always positive
      this._level = newLevel;
    } else {
      console.log('Level must be a positive number');
    }
  }

  showDetails() {
    console.log(`Name: ${this.name}, Type: ${this.type}, Level: ${this.level}`);
  }
}

// Example usage
const pikachu = new Pokemon('Pikachu', 'Electric', 5);
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 5

// Using the getter
console.log(pikachu.level); // 5

// Using the setter
pikachu.level = 10;
console.log(pikachu.level); // 10

// Trying to set an invalid level
pikachu.level = -5; // Level must be a positive number
console.log(pikachu.level); // 10 (level remains unchanged)

```

In this example:

- The **\_level** property is used to store the actual level value. The underscore indicates that it's intended to be a private variable.
- The get **level()** method returns the current value of **\_level**.
- The set level(newLevel) method updates the value of **\_level** if newLevel is positive. Otherwise, it logs an error message.
- The showDetails method displays the Pokémon's details, using the getter to access the level.
