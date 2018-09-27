import uuidv4 from 'uuid/v4'
import { Ingredient, Recipe } from './classes'

// Images
// tired to build this with the Image class, but the fileName getter wasn't accessible in views.js... Once the image object was passed into a recipe, it was a plain object instead of an Image class object, so the getter wasn't available.
const imageList = [
    {
        name: 'Yummy Meal',
        fileName: 'yummy-meal'
    },
    {
        name: 'Fire Flower',
        fileName: 'fire-flower'
    },
    {
        name: 'Honey Shroom',
        fileName: 'honey-shroom'
    },
    {
        name: 'Yoshi Cookie',
        fileName: 'yoshi-cookie'
    },
    {
        name: 'Cake',
        fileName: 'cake'
    },
    {
        name: 'Tasty Tonic',
        fileName: 'tasty-tonic'
    },
    {
        name: 'Jelly Pop',
        fileName: 'jelly-pop'
    },
    {
        name: 'Egg Missile',
        fileName: 'egg-missile'
    },
    {
        name: 'Deluxe Feast',
        fileName: 'deluxe-feast'
    },
    {
        name: 'Mistake',
        fileName: 'mistake'
    }
]

// Fire Flower
const ingredient1a = new Ingredient(uuidv4(), 'Dried Fruit', false)
const ingredient1b = new Ingredient(uuidv4(), 'Strange Leaf', false)
const fireFlowerImage = imageList.find((image) => image.name === 'Fire Flower')
const fireFlower = new Recipe(uuidv4(), 'Fire Flower', fireFlowerImage, 'Deals 3 HP of damage to all enemies. Great addition to any boquet.', [ingredient1a, ingredient1b])

// Honey Shroom
const ingredient2a = new Ingredient(uuidv4(), 'Honey Syrup', false)
const ingredient2b = new Ingredient(uuidv4(), 'Mushroom', true)
const honeyShroomImage = imageList.find((image) => image.name === 'Honey Shroom')
const honeyShroom = new Recipe(uuidv4(), 'Honey Shroom', honeyShroomImage, 'Restores 5 HP and 5 FP. Usually non hallucinogenic.', [ingredient2a, ingredient2b])

// Yoshi Cookie
const ingredient3a = new Ingredient(uuidv4(), 'Melon', true)
const ingredient3b = new Ingredient(uuidv4(), 'Cake Mix', true)
const yoshiCookieImage = imageList.find((image) => image.name === 'Yoshi Cookie')
const yoshiCookie = new Recipe(uuidv4(), 'Yoshi Cookie', yoshiCookieImage, 'Restores 15 HP and 15 FP. May contain Yoshis.', [ingredient3a, ingredient3b])

// Default Recipes
const defaultRecipes = [yoshiCookie, fireFlower, honeyShroom]
const getDefaultRecipes = () => defaultRecipes

export { getDefaultRecipes, imageList }