const express = require('express')
const router = express.Router()
const verify = require('../Routes/verifyToken')

const Recipes = require( '../db/Models/Recipes' )
console.log(Recipes)

// List all Recipes
router.get('/recipes', (req, res) => {
  Recipes.find({}).then(allRecipes => {
    console.log(allRecipes)
    res.json(allRecipes)
  })
})
// List a single Recipe by express _id
router.get('/id/:id', (req, res) => {
  Recipes.find({ _id: req.params.id }).then(objectbyID =>
    res.json(objectbyID)
  )
})

// Create a Recipe
router.post('/new-recipe', (req, res) => {
  let newRecipe = req.body
  console.log(newRecipe)
  Recipes.create(newRecipe).then(created => {
    res.json(created)
  })
})

router.put('/update/:id', (req, res) => {
  Recipes.findOneAndUpdate({ _id: req.params.id }, req.body).then(updated => {
    res.json(updated)
  })
})

// Delete a Recipe by id
router.delete('/delete/:id', (req, res) => {
  Recipes.deleteOne({ _id: req.params.id }).then(deleted => {
    console.log(deleted)
    res.json(deleted)
  })
})

module.exports = router
