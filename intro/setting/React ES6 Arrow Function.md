<!-- @format -->

# ES6 Arrow Function

An arrow function in JavaScript is a shorter syntax for writing function expressions. They are introduced in ES6 and are often more concise than traditional function expressions. Arrow functions have a more compact syntax, do not have their own this context (they inherit this from the surrounding code), and are always anonymous.

## Syntax

The syntax for an arrow function is:

```
(param1, param2, ..., paramN) => { statements }

```

For a single parameter and a single statement, you can omit the parentheses and braces:

```
param => expression
```

### Example

```sh
class Pokemon {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this._level = 1;
  }

  // Getter for level
  get level() {
    return this._level;
  }

  // Setter for level
  set level(newLevel) {
    if (newLevel > 0) {
      this._level = newLevel;
    } else {
      console.log('Level must be a positive number');
    }
  }

  // Arrow function method with parameters
  attack = (target) => {
    console.log(`${this.name} attacked ${target}!`);
  }

  // Arrow function method using property
  showDetails = () => {
    console.log(`Name: ${this.name}, Type: ${this.type}, Level: ${this.level}`);
  }
}

// Example usage
const pikachu = new Pokemon('Pikachu', 'Electric');
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 1

// Using the attack method with parameters
pikachu.attack('Charmander'); // Pikachu attacked Charmander!

// Using the setter to update level
pikachu.level = 5;
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 5

// Trying to set an invalid level
pikachu.level = -3; // Level must be a positive number
pikachu.showDetails(); // Name: Pikachu, Type: Electric, Level: 5 (level remains unchanged)

```


