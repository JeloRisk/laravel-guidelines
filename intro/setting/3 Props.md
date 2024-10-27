<!-- @format -->

# Props

Props (short for properties) are used to pass data from one component to another. They are read-only and help in making components reusable by giving them the ability to receive dynamic data.

## Passing Props to a Component

You can pass props to a component just like HTML attributes.

```sh
/** @format */

import React from "react";

function Pokemon(props) {
  return <h2>My favorite Pokémon is {props.name}!</h2>;
}

const PokemonInfo = () => {
  return <Pokemon name='Pikachu' />;
};

export default PokemonInfo;

```
