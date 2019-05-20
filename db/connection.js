const mongoose = require('mongoose')

mongoose.connect( 'mongodb+srv://badmin:pa55w0rd@cluster0-czdht.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true },
  () => console.log('Connection to DB estabilshed'))

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.DB_URL)
} else {
  mongoose.connect('mongodb://localhost/recipe-rolodex')
}

mongoose.Promise = Promise

module.exports = mongoose
