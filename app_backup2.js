require('dotenv').config() // Initialize dotenv config

const express = require('express') // Import express
const bodyParser = require('body-parser') // Import body-parses
const Cors = require('cors')
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const app = express() // Create method
const port = process.env.SERVER_PORT || 5000 // Default PORT

const userRoute = require('./src/route/routes')
const whitelist = process.env.WHITELIST

const corsOptions = (req, callback) => {
  if (whitelist.split(',').indexOf(req.header('Origin')) !== -1) {
    console.log('Success')
    return callback(null, {
      origin: true
    })
  } else {
    console.log('Failed')
    return callback(null, {
      origin: false
    })
  }
}

app.use(Cors())
app.options('*', Cors(corsOptions))
app.use(xssFilter())
app.use(logger('dev'))

app.listen(port, () => {
  console.log(`\n App listening on port ${port} \n`)
}) // Create listening app

app.use(bodyParser.json()) // Body parse json
app.use(bodyParser.urlencoded({ extended: true })) // body type

app.use('/user', userRoute)