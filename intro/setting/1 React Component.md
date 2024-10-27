<!-- @format -->

# React Components

In React, components are independent and reusable pieces of code that serve the same purpose as JavaScript functions. They work in isolation and return HTML (JSX) elements to be rendered on the web page. Let's focus on understanding Function components, which are a simpler and more modern way of defining React components.

```
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

## Rendering a Component

```sh
import React from 'react';

// Function component
function PokemonComponent(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Type: {props.type}</p>
      <p>Level: {props.level}</p>
    </div>
  );
}

// Usage
const pokemon = {
  name: 'Pikachu',
  type: 'Electric',
  level: 25
};

// Rendering the component
const container = document.getElementById('root');
ReactDOM.render(<PokemonComponent name={pokemon.name} type={pokemon.type} level={pokemon.level} />, container);

```

- Components can be passed as props, which stands for properties.

Props are like function arguments, and you send them into the component as attributes.

## Components in Component

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

// Individual Pokémon item component
function PokemonItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Type: {props.type}</p>
      <p>Level: {props.level}</p>
    </div>
  );
}

// Pokémon list component that uses PokemonItem
function PokemonList() {
  const pokemons = [
    { name: 'Pikachu', type: 'Electric', level: 25 },
    { name: 'Charmander', type: 'Fire', level: 15 },
    { name: 'Squirtle', type: 'Water', level: 10 }
  ];

  return (
    <div>
      <h2>My Pokémon Team</h2>
      {pokemons.map((pokemon, index) => (
        <PokemonItem
          key={index}
          name={pokemon.name}
          type={pokemon.type}
          level={pokemon.level}
        />
      ))}
    </div>
  );
}

// Render the Pokémon list component
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<PokemonList />);

```

- For example, imagine you have a PokemonList component that displays a list of Pokémon. Instead of writing all the code for each Pokémon directly inside the PokemonList component, you can create a separate PokemonItem component that handles the display of a single Pokémon's details, such as its name, type, and level. The PokemonList component can then use the PokemonItem component for each Pokémon in the list. This approach makes your code more organized and easier to manage, as each component has a specific responsibility. The PokemonItem component can be reused in other parts of your application, promoting code reuse and consistency.
