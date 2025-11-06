# React Tutorial

* react is js library
* jsx stands for javascript xml

## Creating react project
* npm create vite@latest
* vite is dev server

* in react app files in ./public is not bundled access via url
* files in ./src is bundled 
* exe start from index.html, main.jsx, index.css
* root component app.jsx, app.css
* npm store package details in package.json

## CSS in react components
1. external : in index.css file
2. module : make a folder containing component along with Button.module.css and import it in component as style using import statement and use className = {style.button}
3. inline

## Basics
* when a state variable (of useState() hook) is changed the whole component is re-rendered means first the virtual dom is created and then efficiently update the real dom.
* re-render is the execution of whole component except the state variables, etc, all other variables are reset.