<!-- @format -->

# React ES6 Render HTML

React is a library that helps you build user interfaces for web pages. One of its main tasks is to show HTML content on the web page. Let's see how this works using Pokémon as an example. How React Renders HTML

React uses a function called createRoot() and a method called render() to display HTML content.

**createRoot() Function.** This function takes one argument: an HTML element where you want to display your React component.

**render() Method.** This method specifies what content (the React component) you want to display.

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.getElementById('sandy');
const root = ReactDOM.createRoot(container);
root.render(<p>Hallo</p>);

/*
For this example to work on your project,
you must have a element with
id="sandy" on your "index.html" page.
*/
```
