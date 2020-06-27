---
path: dark-mode-with-react-and-css
date: 2020-06-27T22:05:28.946Z
title: Adding Dark Mode with React Hooks and CSS
description: >-
  This blog is a step-by-step guide to creating a Dark Mode using a new React
  project and CSS.
---
# Dark Mode with React and CSS

Hey, I'll be creating a Dark Mode in React without using any added packages or dependencies. Hope this blog helps you!

[Click here for the github repo of this project.](https://github.com/DanielOhn/dark-mode-blog)

## Creating a React Project

```
create-react-app <project-name>
```

Remove all the clutter in the `App.js`, `App.css`, and `index.css`.

Add the following to `App.js`:

```
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Heading</h1>
      <p>This is the text that goes here!</p>
      <button>Dark Mode</button>
    </div>
  );
}

export default App;
```

Just making a basic header, some text, and a button that will work to switch from Dark Mode to Light Mode.

`App.css`:

```
.App {
  height: 100vh;
  text-align: center;
  padding: 0;
}
```

index.css

```
body {
  color: white;
  background-color: black;

  margin: 0;
}
```

Great, we should be ready to implement the dark mode.

## CSS Variables

We'll add these CSS variables into our `index.css`, this will allow us to change between the color-mode options so it'll switch out the theme.

`index.css`:
```
:root {
  --color-mode: "dark";

  --background-light: white;
  --font-light: black;

  --background-dark: black;
  --font-dark: white;
}

[data-user-color-scheme="light"] {
  --bg-color: var(--background-light);
  --font-color: var(--font-light);
}

[data-user-color-scheme="dark"] {
  --bg-color: var(--background-dark);
  --font-color: var(--font-dark);
}

body {
  color: var(--font-color);
  background-color: var(--bg-color);

  margin: 0;
}
```

The next step will be to implement the color-mode so it'll keep track of what the user wants and swap between themes.

## React Hook for Color Scheme

We'll be using react hooks for this project, so let's import `useState` and `useEffect`, set the variable up for the theme, and add a useEffect to get our `data-user-color-scheme`.

`App.js`:

```
import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

	useEffect(() => {
	    document.documentElement.setAttribute("data-user-color-scheme", theme);
	  }, [theme]);

  return (
    <div className="App">
      <h1>Heading</h1>
      <p>This is the text that goes here!</p>
      <button>Dark Mode</button>
    </div>
  );
}

export default App;
```

This sets up a theme variable in our local storage of the browser that is either set to `light` or `dark`, we'll get this variable and set our `data-user-color-scheme` to the variable which will tell our CSS to put the corresponding colors.

Let's set up the button so it swaps back and forth between themes when we click it.

Add the `handleClick()` function in your App function:

```
function handleClick() {
  let newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);

  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute("data-user-color-scheme", newTheme);
}

```

Add an `onClick` for the button:

```
<button onClick={handleClick}>Dark Mode</button>
```

Voila! That should be all you need to implement Dark Mode into your project.
