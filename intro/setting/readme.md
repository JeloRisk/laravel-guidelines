<!-- @format -->

# Setting up a React Environment

If you have `npx` and Node.js installed, you can create a React application using `create-react-app`.

If you've previously installed `create-react-app` globally, it is recommended that you uninstall the package to ensure `npx` always uses the latest version of `create-react-app`.

To uninstall, run this command:

```sh
npm uninstall -g create-react-app
```

The `create-react-app` will set up everything you need to run a React application.

## Run the React Application

Now you are ready to run your first real React application!

Run this command to move to the my-react-app directory:

```sh
cd my-react-app
```

Run this command to start the React application:

```sh
npm start
```

Install tailwindcss via npm, and then run the init command to generate your tailwind.config.js file.

```sh
npm install -D tailwindcss
npx tailwindcss init
```

Add the paths to all of your template files in your tailwind.config.js file.
```sh
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
```

A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.
