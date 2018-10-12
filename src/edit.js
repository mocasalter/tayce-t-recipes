import './sass/style.scss'
import { renderIngredients, initializeEditPage } from './views'
import { updateRecipe, removeRecipe } from './recipes'
import { createIngredient } from './ingredients'
import { imageList } from './default-content'

const recipeId = location.hash.substring(1)
const titleEl = document.getElementById('recipe-title')
const pageTitleEl = document.getElementById('page-title')
const effectEl = document.getElementById('recipe-effect')
const ingredientBtn = document.getElementById('create-ingredient')
const imageSelectEl = document.getElementById('image-select')
const deleteBtn = document.getElementById('delete-btn')

initializeEditPage(recipeId)

titleEl.addEventListener('input', (e) => {
    const newTitle = e.target.value.trim()
    if (newTitle !== '') {
        pageTitleEl.textContent = newTitle
        console.log(true)
    } else {
        pageTitleEl.textContent = '[Untitled Recipe]'
        console.log(false)
    }
    updateRecipe(recipeId, {
        title: newTitle
    })
})

effectEl.addEventListener('input', (e) => {
    updateRecipe(recipeId, {
        effect: e.target.value
    })
})

ingredientBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const name = document.getElementById('recipe-ingredient').value
    createIngredient(recipeId, name)
    renderIngredients(recipeId)
    document.getElementById('recipe-ingredient').value = ''
})

imageSelectEl.addEventListener('change', (e) => {
    const imageEl = document.getElementById('image')
    imageEl.setAttribute('src', `./images/${e.target.value}-lg.png`)
    const newImage = imageList.find((image) => image.fileName === e.target.value)
    updateRecipe(recipeId, {
        image: newImage
    })
})

deleteBtn.addEventListener('click', (e) => {
    e.preventDefault()
    removeRecipe(recipeId)
    location.assign(`/`)
})