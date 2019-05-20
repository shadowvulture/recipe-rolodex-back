const mongoose = require('./connection')
// console.log(mongoose)
const RecipeData = require('./RecipeData.json')

const Recipes = require('./models/Recipes')
const Ingredients = require('./models/Ingredients')

Recipes.deleteMany({}).then(() => {
  Recipes.create(RecipeData)
    .then(newRecipe => {
      console.log(newRecipe)
    })
    .catch(err => {
      console.log(err)
    })
})
Ingredients.deleteMany({}).then(() => {
  Ingredients.create(RecipeData)
    .then(newIngredients => {
      console.log(newIngredients)
    })
    .catch(err => {
      console.log(err)
    })
})
