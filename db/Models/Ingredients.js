const mongoose = require('../connection')

const IngredientsSchema = new mongoose.Schema( {
    FoodAmount: String,
    FoodType: String,
    AllergyFlag: Array

})


    module.exports = mongoose.model('Ingredients', IngredientsSchema)
