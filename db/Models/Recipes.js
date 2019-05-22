const mongoose = require('../connection')

const RecipesSchema = new mongoose.Schema( {
    Title: String,
    Thumbnail: String,
    Cooktime: String,
    Instructions: String,
    Ingredients:  {
        type: mongoose.Schema.Types.Mixed,
        ref: 'Ingredients',
        default: undefined

      },
})


    module.exports = mongoose.model('Recipes', RecipesSchema)
