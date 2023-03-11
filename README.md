# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [Solusion](https://github.com/raafihilmi/advice-generator-app)
- Live Site URL: [Live Site](https://chipper-cupcake-7b0b66.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library

### What I learned

Make request and get response API. Take those data and finally send them to paragraph elements

```js
fetch('https://api.adviceslip.com/advice')
  .then((res) => res.json())
  .then((data) => {
    setText(`"${data.slip.advice}"`);
    console.log(data.slip.advice);
  })
  .catch((err) => console.log(err));
```

```html
<p className="advice">{text}</p>
```

## Author

- Website - [Raafi Hilmi](https://www.inicoding.com)
- Frontend Mentor - [@raafihilmi](https://www.frontendmentor.io/profile/raafihilmi)
- Twitter - [@raafihilmi](https://www.twitter.com/raafihilmi)
