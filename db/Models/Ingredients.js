const mongoose = require('../connection')

const IngredientsSchema = new mongoose.Schema( {
    FoodAmount: [Array],
    FoodType: [String],
    AllergyFlag: Array

})


    module.exports = mongoose.model('Ingredients', IngredientsSchema)
