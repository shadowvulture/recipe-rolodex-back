const mongoose = require('../connection')

const IngredientsSchema = new mongoose.Schema( {
    FoodAmount: [String],
    FoodType: Array,
    AllergyFlag: Array

})


    module.exports = mongoose.model('Ingredients', IngredientsSchema)
