# Tayce T. Recipes

A Paper Mario inspired, vanilla JavaScript app for storing recipes.

## Features

* Changed data auto-reloads on all open tabs
* Default recipe content (local storage data)
* Image selection
* Typing text effect using [Malarkey](https://github.com/yuanqing/malarkey)
* CSS animations

## How To
`$ npm run dev-server` to run the dev environment  
`$ npm i -g surge` to install the surge CLI globally, otherwise build won't work  

`$ npm run build` to compile and push live to the [surge](https://surge.sh/) url defined in package.json

## Todo
* Edge has some JS bugs. Fixable?
    * Ingredients list doesn't load
    * Image list doesn't load