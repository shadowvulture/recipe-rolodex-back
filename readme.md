# RECIPEROLODEX

    This is a RESTful recipe repository API! <br>
    This project was a GA Unit 3 collaborative project.
### Group Members
    Derek Christensen
    Gabriella De Francesco
    Nathan Rotach

## Technologies Used:

    Database created on MongoDB <br>
    Hosted on Mongo Atlas <br>
    API was created with Node.js, Express, and Mongoose <br>
    API authorization was generated through utilizing the bcryptjs library (for hashing passwords serverside),
    jsonwebtoken (for giving users access to protected routes) and @hapi/joi (for validating),
    as well as dotenv (to hide some sensitive data) <br>
    Deployed via Heroku <br>

## link to API

    https://reactreciperolodex.herokuapp.com/api/recipe

## dependencies:

    "@hapi/joi": "^15.0.3",
    "axios": "^0.18.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^8.0.0",
    "express": "^4.17.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.5.9",
    "node": "^12.2.0"

---

# Paths:

# Recipe

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

## /api/recipe/recipes

    -- as a GET this will return all recipes in the database

## /api/recipe/id/:id

    -- this path will retrieve a single recipe based on its express \_id

## /api/recipe/new-recipe/

    -- this path will CREATE a new recipe entry

## /api/recipe/update/:id

    -- this is a PUT path, to UPDATE a single recipe based on its express \_id

## /api/recipe/delete/:id

    -- this is a DELETE path, to remove an entire recipe entry based on its express \_id

# Ingredients

    const IngredientsSchema = new mongoose.Schema( {
    FoodAmount: [Array],
    FoodType: [Array],
    AllergyFlag: Array
})

## /api/ingredients/ingredients

    -- as a GET this will return all ingredient groupings

## /api/ingredients/id/:id

    -- this path will retrieve a single ingredient array based on its express \_id

## /api/ingredients/new-ingredients

    -- this path will CREATE a new ingredients entry

## /api/ingredients/update/:id

    -- this is a PUT path, to UPDATE an ingredient based on its express \_id

## /api/ingredients/delete/:id

    -- this is a DELETE path, to remove an entire set of ingredient entries based on its express \_id


# User

    const userSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    }
})

## /api/user/register

    -- this is a POST request only.  This will attempt to create a user profile
#### <b>IF:</b> <br>
    --  valid data is entered into appropriate fields<br>
    --  email is not already assigned to someone in the database
    <br><br>
    -- It will also encrypt the password server-side

## /api/login

    -- this POST path will attempt to log in a user<br>
    -- this will validate that a user exists<br>
    --  it will check to make sure the passwords match
    --  IF the passwords match, it will assign a jsonwebtoken to the user


# A Recipe entry will contain:

## \_id

    is the unique express assigned \_id

## Title

    is the name of the dish

## Thumbnail

    is the picture of the dish

## Cooktime

    is the estimated time to make the dish

## Instructions

    is the entry for steps on how to prepare the dish

## Ingredients

    is the object/model containing 3 arrays for <br>
    FoodAmount -- the measurements of ingredients
    FoodType -- the kind of ingredient being used<br>
    AllergyFlag -- still to be implemented, but will be a warning of allergies for the dish
