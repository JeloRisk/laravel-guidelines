<!-- @format -->

# JSX

React JSX (JavaScript XML) is a syntax extension in React that allows you to write HTML-like code directly within JavaScript. It provides a more intuitive way to create and structure UI components.

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods.

JSX converts HTML tags into react elements.

You are not required to use JSX, but JSX makes it easier to write React applications.

## Example With and Without JSX

### With JSX

```sh

import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX code
const pokemonName = <p>My favorite Pokémon is Pikachu!</p>;

// Find the HTML element with the ID 'root'
const container = document.getElementById('root');

// Create a React root inside the container
const root = ReactDOM.createRoot(container);

// Render the JSX element inside the root
root.render(pokemonName);
```

### Without JSX

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

// Plain JavaScript equivalent
const pokemonName = React.createElement('p', null, 'My favorite Pokémon is Pikachu!');

// Find the HTML element with the ID 'root'
const container = document.getElementById('root');

// Create a React root inside the container
const root = ReactDOM.createRoot(container);

// Render the React element inside the root
root.render(pokemonName);

```

JSX: Provides a more readable and familiar HTML-like syntax within JavaScript, making it easier to write and maintain UI components. Without JSX: Involves using React.createElement() to create React elements programmatically, which offers more control but can be more verbose.

## Expressions in JSX

In JSX, you can embed JavaScript expressions **by wrapping them in curly braces {}**. This allows you to dynamically insert values or execute JavaScript code within your JSX markup.

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

// Variables
const pokemon = 'Pikachu';
const level = 25;

// JSX with expressions
const greeting = <p>My Pokémon is {pokemon} and its level is {level}.</p>;

// Render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(greeting);

```

**{pokemon}** and **{level}** are expressions within JSX.

## Inserting a Large Block of HTML

If you need to insert a large block of HTML in JSX, you can enclose it in parentheses () to break it into multiple lines for readability. Remember to wrap the entire block in a single parent element.

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX with large block of HTML
const pokemonList = (
  <div>
    <h1>My Pokémon Team</h1>
    <ul>
      <li>Pikachu</li>
      <li>Charmander</li>
      <li>Squirtle</li>
    </ul>
  </div>
);

// Render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(pokemonList);

```

## Rules in JSX

### One Top-Level Element

JSX requires that all expressions must be wrapped in a single top-level element. This ensures that the JSX can be properly compiled into valid JavaScript.

### Elements Must be Closed

All HTML elements in JSX must be properly closed, either with a self-closing tag (e.g., `<img />`) or a closing tag (e.g., `<div></div>`).

### Attribute class = className

In JSX, use **className** instead of class to apply CSS classes to elements. This is because class is a reserved keyword in JavaScript.

### Conditions and If Statements

You can use JavaScript expressions (including conditional statements) inside JSX using curly braces **{}**. This allows you to conditionally render elements based on variables or state.

```sh

import React from 'react';
import ReactDOM from 'react-dom/client';

// Variable
const isLoggedIn = true;

// JSX with conditional rendering
const greeting = (
  <div>
    { isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p> }
  </div>
);

// Render
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(greeting);
```

The isLoggedIn variable determines which paragraph (`<p>`) element is rendered based on its boolean value.
