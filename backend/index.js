const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
const port = 5000

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect(
    'mongodb://localhost/urlshortener',
    { useNewUrlParser: true }
  )
  mongoose.set('debug', true)
}

// Load Mongoose models
require('./models/Url')
require('./models/Click')

// Force all responses to be in JSON format
app.use(express.json())

app.use(cors())

app.use(require('./routes'))

app.listen(process.env.PORT || port, () =>
  console.log(`Server is up and listening on port ${port}`)
)
