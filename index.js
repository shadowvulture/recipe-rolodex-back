const express = require('express')
const app = express()
//  initializing controller routes
const recipeControl = require('./controllers/recipes')
const ingredientsControl = require('./controllers/ingredients')

//  Importing Auth Route
const authRoute = require('./Routes/auth')

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


'mongodb://badmin:pa55w0rd@cluster0-shard-00-00-czdht.mongodb.net:27017,cluster0-shard-00-01-czdht.mongodb.net:27017,cluster0-shard-00-02-czdht.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true'
