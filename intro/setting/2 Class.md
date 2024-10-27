<!-- @format -->

# Class Component

## Creating a Class Component

When creating a React component, the component's name must start with an upper case letter.

The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car />);
```

If there is a constructor() function in your component, this function will be called when the component gets initiated.

The constructor function is where you initiate the component's properties.

In React, component properties should be kept in an object called state.

You will learn more about state later in this tutorial.

The constructor function is also where you honor the inheritance of the parent component by including the super() statement, which executes the parent component's constructor function, and your component has access to all the functions of the parent component (React.Component).

```sh

import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

```

### Props

Another way of handling component properties is by using props. Props are like function arguments, and you send them into the component as attributes.

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Car color="red"/>);

```

### Props in Constructor

If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

```sh
import React from 'react';
import ReactDOM from 'react-dom/client';

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car model="Mustang"/>);
```

## Lifecycle of Components

Each component in React has a lifecycle which you can monitor and manipulate during its three main phases.

The three phases are: **Mounting**, **Updating**, and **Unmounting**.

### Mounting

Mounting means putting elements into the DOM. When a component is being inserted into the DOM.

React has four built-in methods that gets called, in this order, when mounting a component:

    constructor()
    getDerivedStateFromProps()
    render()
    componentDidMount()

    // The render() method is required and will always be called, the others are optional and will be called if you define them.

1. **constructor()** - Called before the component is mounted. It is used to initialize state and bind event handlers. The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).

   ```sh
   class Header extends React.Component{
       constructor(props){
           super(props);
           this.state = {favorite: "fire"};
       }
       render(){
           return(
               <h1>My Favorite pokemon tyoe is {this.state.favorite}
           );
       }
   }
   ```

2. **componentDidMount()** - Called after the component is rendered. It's a good place to fetch data from a server or set up subscriptions. At first example my favorite pokemon type is fire, but give me a second, and it is water instead:
   ```sh
   class Header extends React.Component{
       constructor(props){
           super(props);
           this.state = {favorite: "fire"};
       }
       componentDidMount(){
           setTimeout(()=>{
               this.setState({favorite: "Water"})
           }, 1000)
       }
       render(){
           return(
               <h1>My Favorite pokemon tyoe is {this.state.favorite}
           );
       }
   }
   ```

### Updating

A component is updated whenever there is a change in the component's state or props. React has five built-in methods that gets called, in this order, when a component is updated:

1. `getDerivedStateFromProps()` - This static method is called right before rendering, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

   ```sh
               /** @format */

       import React from "react";

       class PokemonInfo extends React.Component {
       constructor(props) {
           super(props);
           this.state = {
           pokemon: null,
           pokemonId: props.pokemonId,
           };
       }

       static getDerivedStateFromProps(nextProps, prevState) {
           if (nextProps.pokemonId !== prevState.pokemonId) {
           return {
               pokemonId: nextProps.pokemonId,
               pokemon: null,
           };
           }
           return null;
       }

       componentDidMount() {
           this.fetchPokemonData(this.props.pokemonId);
       }

       shouldComponentUpdate(nextProps, nextState) {
           return nextProps.pokemonId !== this.props.pokemonId || nextState.pokemon !== this.state.pokemon;
       }

       getSnapshotBeforeUpdate(prevProps, prevState) {
           if (prevProps.pokemonId !== this.props.pokemonId) {
           return document.getElementById("pokemon-info").scrollHeight;
           }
           return null;
       }

       componentDidUpdate(prevProps, prevState, snapshot) {
           if (snapshot !== null) {
           console.log(`Previous scroll height: ${snapshot}`);
           }

           if (prevProps.pokemonId !== this.props.pokemonId) {
           this.fetchPokemonData(this.props.pokemonId);
           }
       }

       fetchPokemonData(pokemonId) {
           setTimeout(() => {
           const newPokemon = {
               id: pokemonId,
               name: `Pokemon ${pokemonId}`,
           };
           this.setState({ pokemon: newPokemon });
           }, 1000);
       }

       render() {
           const { pokemon } = this.state;
           return (
           <div id='pokemon-info'>
               {pokemon ? (
               <div>
                   <h1>{pokemon.name}</h1>
                   <p>ID: {pokemon.id}</p>
               </div>
               ) : (
               <p>Loading...</p>
               )}
           </div>
           );
       }
       }

       export default PokemonInfo;

   ```

2. `shouldComponentUpdate()` - This method is called to determine whether the component should update. It should return true or false.

   ```sh
        /** @format */

        import React from "react";

        class PokemonInfo extends React.Component {
        constructor(props) {
            super(props);
            this.state = { favoritePokemon: "Mudkip" };
        }

        shouldComponentUpdate() {
            return true; // if false then the component won't update
        }

        changeFavoritePokemon = () => {
            this.setState({ favoritePokemon: "Charmander" });
        };

        render() {
            return (
            <div>
                <h1>My Favorite Pokemon is {this.state.favoritePokemon}</h1>
                <button type='button' onClick={this.changeFavoritePokemon}>
                Change Pokemon
                </button>
            </div>
            );
        }
        }

        export default PokemonInfo;


   ```

3. In the **getSnapshotBeforeUpdate()** method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update. If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

   ```sh
    import React from 'react'; import ReactDOM from 'react-dom/client';

    class PokemonInfo extends React.Component { constructor(props) { super(props); this.state = { favoritePokemon: "Pikachu" }; }

    componentDidMount() { setTimeout(() => { this.setState({ favoritePokemon: "Charmander" }); }, 2000); // Change favorite Pokemon after 2 seconds }

    getSnapshotBeforeUpdate(prevProps, prevState) { document.getElementById("beforeUpdate").innerHTML = `Before the update, the favorite was ${prevState.favoritePokemon}`; }

    componentDidUpdate() { document.getElementById("afterUpdate").innerHTML = `The updated favorite is ${this.state.favoritePokemon}`; }

    render() { return ( <div> <h1>My Favorite Pokemon is {this.state.favoritePokemon}</h1> <div id="beforeUpdate"></div> <div id="afterUpdate"></div> </div> ); } }

    const root = ReactDOM.createRoot(document.getElementById('root')); root.render(<PokemonInfo />);

   ```

4. The componentWillUnmount method is called when the component is about to be removed from the DOM.

   ```sh
   /** @format */

   import React from "react";
   import ReactDOM from "react-dom/client";

   class PokemonInfo extends React.Component {
   constructor(props) {
       super(props);
       this.state = { show: true };
   }

   delHeader = () => {
       this.setState({ show: false });
   };

   render() {
       let myheader;
       if (this.state.show) {
       myheader = <Child />;
       }
       return (
       <div>
           {myheader}
           <button type='button' onClick={this.delHeader}>
           Release Pokémon
           </button>
       </div>
       );
   }
   }

   class Child extends React.Component {
   componentWillUnmount() {
       alert("Your Pokémon is being released!");
   }

   render() {
       return <h1>Welcome to the Pokémon World!</h1>;
   }
   }

   export default PokemonInfo;
   ```
