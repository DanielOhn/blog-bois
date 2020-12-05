---
path: add-tailwind-css-to-react-app
date: 2020-12-05T22:05:37.597Z
title: Add Tailwind CSS to React App
description: Shows how to add Tailwind CSS to an existing React
  Application.  For all the peeps who wanted to do the CSS on their own then had
  to implement the frontend and was like 'fudge it time to use a css framework'.
---
# Adding Tailwind CSS to Existing React App

After learning a few tricks and tips through CSS and managing to learn how to make a decent looking website, I still feel like the process is tedious and time consuming to make something that looks great.  Which is why I'm trying to learn to pick up Tailwind CSS, so I don't have to manually manage each CSS file to make sure everything is looking nice and tidy.

This are the steps I took to get Tailwind implemented in my existing React Application.

## NPM Packages

Let's just jump right in, first I downloaded these packages:

```bash
npm install -D tailwindcss postcss-cli autoprefixer
```

## Configuration Files

In your root directory, we'll create two files.  The first one will be tailwind config file which we can use `npx` for.

```bash
npx tailwind init tailwind.js --full
```

This creates the config file for tailwind and populate it with all the CSS that comes with it.  You could also go in and edit anything within it as well.

The next file we want to create is the postcss configuration file.

```bash
touch postcss.config.js
```

Now we are gonna add the following code to the file.

```jsx
const tailwindcss = require("tailwindcss");

module.exports = {
	plugins: [tailwindcss("./tailwind.js"), 
						require("autoprefixer")],
}
```

## Assets Folder

Within our `/src` folder, we want to make another folder called `/assets` , then add two files: `main.css` and `tailwind.css`.

```bash
cd src && mkdir assets
touch main.css
touch tailwind.css
```

This is gonna be where we keep our tailwind CSS and access it within our components.  We are gonna leave `main.css` blank, and within `tailwind.css` we are gonna add the following code:

```jsx
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

## package.json Scripts

Now within our `package.json`, we are gonna add code to our scripts to have our app build the CSS and be able to access it.

```jsx
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

We are extending the code within `start` and `build`, then we are gonna add `build:css` and `watch:css`.

## Conclusion

This should be all you need to get it going with your application.  Next time you run, `npm start` your `main.css` should be populated with all the classes that tailwind uses.