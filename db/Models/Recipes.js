const mongoose = require('../connection')

const RecipesSchema = new mongoose.Schema( {
    Title: String,
    Thumbnail: String,
    Cooktime: String,
    Instructions: String,
    Ingredients:  {
        type: mongoose.Schema.Types.Mixed,
        ref: 'Ingredients'
      },
})


    module.exports = mongoose.model('Recipes', RecipesSchema)
