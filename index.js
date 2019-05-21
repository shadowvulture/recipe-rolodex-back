const express = require('express')
const app = express()
//  initializing controller routes
const recipeControl = require('./controllers/recipes')
const ingredientsControl = require('./controllers/ingredients')

//  Importing Auth Route
const authRoute = require('./routes/auth')

//  initialize body parse + cors
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


//  Route Middleware
app.use('/api/recipe', recipeControl)
app.use( '/api/', ingredientsControl )
app.use('/api/user', authRoute)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ SERVER RUNNING PORT: ${app.get('port')} 🌟`)
})
