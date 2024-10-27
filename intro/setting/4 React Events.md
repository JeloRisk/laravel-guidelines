<!-- @format -->

# React Events

In React, events are handled in a way similar to handling events on DOM elements. However, there are some syntactic differences and unique behaviors specific to React.

## Key Concepts of React Events

1. **Synthetic Events**
   - React events are wrapped in a cross-browser wrapper called "SyntheticEvent." This wrapper ensures that the events have consistent properties across different browsers.
2. **CamelCase Naming:** - Event names in React are written in camelCase instead of lowercase. For example, the HTML event onclick becomes onClick in React. 3.** Event Handlers** - Event handlers in React are passed as functions rather than strings. For example, in HTML, you might write` <button onclick="doSomething()">Click me</button>`, but in React, you write `<button onClick={doSomething}>Click me</button>`.
3. **PreventDefault and StopPropagation**
   - You can use `preventDefault()` and `stopPropagation()` methods within event handlers to control the event's behavior, similar to how you would in plain JavaScript.

## Common Event Types in React

1. **Click Event: Selecting a Hero**

   - This example demonstrates how to handle a click event to select a hero, with additional details like displaying hero abilities.

   ```sh
   /** @format */

   import React, { useState } from "react";

   function HeroSelector() {
   // Declare a state variable `selectedHero` and a function `setSelectedHero` to update it
   // Initialize `selectedHero` with null
   const [selectedHero, setSelectedHero] = useState(null);

   const heroes = [
       // Define an array of hero objects, each with a `name` and an `ability`
       { name: "Alucard", ability: "Fission Wave" },
       { name: "Layla", ability: "Malefic Bomb" },
       { name: "Eudora", ability: "Forked Lightning" },
   ];
   // This function takes a hero as an argument and updates the `selectedHero` state
   const handleSelectHero = (hero) => {
       setSelectedHero(hero);
   };

   return (
       <div>
       <h1>Select Your Hero</h1>
       {heroes.map((hero) => (
           <button key={hero.name} onClick={() => handleSelectHero(hero)}>
           {hero.name}
           </button>
       ))}
       {selectedHero && (
           <div>
           <h2>Selected Hero: {selectedHero.name}</h2>
           <p>Ability: {selectedHero.ability}</p>
           </div>
       )}
       </div>
   );
   }

   export default HeroSelector;

   ```

2. Change Event: Updating Hero Build

   - This example shows how to handle an input change event to update a hero build, with more detailed validation and feedback.

   ```
    /** @format */

   import React, { useState } from "react";

   // Define a functional component named HeroBuild function HeroBuild() { // Declare state variables `build` and `message` with their respective setter functions // `build` is used to store the name of the hero build // `message` is used to display feedback to the user const [build, setBuild] = useState(""); const [message, setMessage] = useState("");

   // Define a function to handle changes in the input field // This function updates the `build` state with the current value of the input field const handleChange = (event) => { setBuild(event.target.value); };

   // Define a function to handle the save button click // This function checks if the `build` state is empty and sets the appropriate message const handleSave = () => { if (build.trim() === "") { setMessage("Build name cannot be empty."); } else { setMessage(`Build "${build}" has been saved!`); } };

   // Return the JSX to render the component return ( <div> <h1>Update Hero Build</h1> {/_ Input field for the user to enter the build name _/} <input
            type="text"
            value={build}
            onChange={handleChange}
            placeholder="Enter build name"
        /> {/_ Button to save the build _/} <button onClick={handleSave}>Save Build</button> {/_ Paragraph to display the message _/} <p>{message}</p> </div> ); }

   // Export the HeroBuild component as the default export export default HeroBuild;
   ```

3. Submit Events

   - This example demonstrates how to handle a form submit event to submit a hero strategy, including validation and feedback.

   ```
   /** @format */

   import React, { useState } from 'react';

   // Define a functional component named HeroStrategy
   function HeroStrategy() {
   // Declare state variables with their respective setter functions
   // `strategy` is used to store the current input value
   // `submittedStrategy` is used to store the submitted strategy
   // `error` is used to store any validation error messages
   const [strategy, setStrategy] = useState('');
   const [submittedStrategy, setSubmittedStrategy] = useState(null);
   const [error, setError] = useState('');

   // Define a function to handle changes in the input field
   // This function updates the `strategy` state with the current value of the input field
   const handleChange = (event) => {
       setStrategy(event.target.value);
   };

   // Define a function to handle the form submission
   // This function prevents the default form submission behavior
   // It checks if the `strategy` state is empty and sets the appropriate error message
   // If the `strategy` is not empty, it sets the `submittedStrategy` state and clears the error message
   const handleSubmit = (event) => {
       event.preventDefault();
       if (strategy.trim() === '') {
       setError('Strategy cannot be empty.');
       } else {
       setSubmittedStrategy(strategy);
       setError('');
       }
   };

   // Return the JSX to render the component
   return (
       <div>
       <h1>Submit Your Hero Strategy</h1>
       <form onSubmit={handleSubmit}>
           {/* Input field for the user to enter the strategy */}
           <input
           type="text"
           value={strategy}
           onChange={handleChange}
           placeholder="Enter strategy"
           />
           {/* Button to submit the form */}
           <button type="submit">Submit</button>
       </form>
       {/* Conditionally render the error message if there is an error */}
       {error && <p style={{ color: 'red' }}>{error}</p>}
       {/* Conditionally render the submitted strategy if there is one */}
       {submittedStrategy && <p>Submitted Strategy: {submittedStrategy}</p>}
       </div>
   );
   }

   // Export the HeroStrategy component as the default export
   export default HeroStrategy;

   ```

4. Mouse Hover

   ```
   /** @format */

   import React, { useState } from 'react';

   // Define a functional component named HeroDetails
   function HeroDetails() {
   // Declare a state variable `hoveredHero` with its setter function `setHoveredHero`
   // `hoveredHero` is used to store the hero that the user is currently hovering over
   const [hoveredHero, setHoveredHero] = useState(null);

   // Define an array of hero objects, each with a `name` and `details` property
   const heroes = [
       { name: 'Alucard', details: 'A powerful fighter with high mobility.' },
       { name: 'Layla', details: 'A marksman with long-range attacks.' },
       { name: 'Eudora', details: 'A mage with high burst damage.' },
   ];

   // Define a function to handle mouse enter events
   // This function updates the `hoveredHero` state with the hero that the user is hovering over
   const handleMouseEnter = (hero) => {
       setHoveredHero(hero);
   };

   // Define a function to handle mouse leave events
   // This function clears the `hoveredHero` state
   const handleMouseLeave = () => {
       setHoveredHero(null);
   };

   // Return the JSX to render the component
   return (
       <div>
       <h1>Hero Details</h1>
       {/* Map over the `heroes` array to create a list of div elements for each hero */}
       {heroes.map((hero) => (
           <div
           key={hero.name} // Use the hero's name as the key
           onMouseEnter={() => handleMouseEnter(hero)} // Set the hero on mouse enter
           onMouseLeave={handleMouseLeave} // Clear the hero on mouse leave
           style={{ marginBottom: '10px', cursor: 'pointer', padding: '5px', border: '1px solid black' }} // Styling for the div
           >
           {hero.name}
           </div>
       ))}
       {/* Conditionally render the details of the hovered hero */}
       {hoveredHero && (
           <div style={{ marginTop: '20px' }}>
           <h2>{hoveredHero.name}</h2>
           <p>{hoveredHero.details}</p>
           </div>
       )}
       </div>
   );
   }

   // Export the HeroDetails component as the default export
   export default HeroDetails;

   ```



## References:

https://www.freecodecamp.org/news/how-to-handle-events-in-react-19/
