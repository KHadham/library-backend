require('dotenv').config()

const express = require('express')
const bodyParser = require ('body-parser')//postman utility
const Cors = require('cors')
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const app = express()
const port = process.env.SERVER_PORT || 5000
const routes = require('./src/route/routes')
const whitelist = process.env.WHITELIST
const path = require ('path')
// app.use(express.static('public'))
// app.use(express.static('files'))
//app.use('/static', express.static(path.join(__dirname, 'public')))
//app.use('/uploads', express.static('uploads'));

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

//   virtual folder
app.use('/uploads', express.static(__dirname + '/uploads'))

app.listen(port)
console.log(`link start on ${port}`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}))
routes(app)
