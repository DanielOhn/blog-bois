---
path: netlify-and-react-direct-url-bug
date: 2020-11-12T00:23:29.154Z
title: "Netlify and React: Direct URL/Refresh Bug"
description: Solution on fixing a bug when hosting a React App on Netlify with a
  backend hosted on another website.
---
# React Direct URL and Refresh Bug

When having a front-end on Netlify and a backend being hosted on another server, there seems to be an issue when attempting to enter the website from a valid URL that exists.

Example: Going onto: www.website.com/about 
If you enter that URL directly, it will give you a bug saying that page doesn't exist even if you have your react routers set up for it.

## Why Does This Occur?

This issue occurs mainly because the user is never making it to the client, since it is looking on the server for the URL that was inserted.   Our application checks the server for something that matches it, and if it can't find it then it returns as 'Page Not Found'.

This issue only occurs on Production after the web app has been deployed.

## Solution

This solution is UNIQUE to **Netlify**.  I repeat, it will only work on **NETLIFY**.

In order to fix this bug, you can create a file in your `/public` folder named `_redirect`

```jsx
/* /index.html 200
```

This tells the application to redirect any URLs to the client allowing it to use the React Routers that we enabled.