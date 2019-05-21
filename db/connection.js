const express = require( 'express' )
const mongoose = require( 'mongoose' )
const dotenv = require( 'dotenv' )
const authRoute = require( '../Routes/auth' )
const app = express()
dotenv.config()


//connect to DB
mongoose.connect( 'mongodb+srv://badmin:pa55w0rd@cluster0-czdht.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true },
  () => console.log('Connection to DB estabilshed'))

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.DB_URL)
} else {
  mongoose.connect('mongodb://localhost/recipe-rolodex')
}

//middleware
app.use(express.json())
//route middleware
app.use('/api/user', authRoute)


mongoose.Promise = Promise

module.exports = mongoose
