const express = require('express')
const app = express()
//  initializing controller routes
const recipeControl = require('./controllers/recipes')
const ingredientsControl = require('./controllers/ingredients')
// const teamControl = require('./controllers/teamControl')
//  initialize body parse + cors
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.use('/api/', recipeControl)
app.use('/api/', ingredientsControl)

app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), () => {
  console.log(`✅ PORT: ${app.get('port')} 🌟`)
})
