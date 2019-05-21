const express = require('express')
const router = express.Router()

const Ingredients = require( '../db/models/Ingredients' )
console.log(Ingredients)

// List all Ingredients
router.get('/ingredients', (req, res) => {
  Ingredients.find({}).then(allIngredients => {
    console.log(allIngredients)
    res.json(allIngredients)
  })
})

// Create an Ingredient
router.post('/new-ingredients', (req, res) => {
  let newRecipe = req.body
  console.log(newRecipe)
  Ingredients.create(newRecipe).then(created => {
    res.json(created)
  })
})

router.put('/update/:id', (req, res) => {
  Ingredients.findOneAndUpdate({ _id: req.params.id }, req.body).then(updated => {
    res.json(updated)
  })
})

// Delete an Ingredient by id
router.delete('/delete/:id', (req, res) => {
  Ingredients.deleteOne({ _id: req.params.id }).then(deleted => {
    console.log(deleted)
    res.json(deleted)
  })
})

module.exports = router
