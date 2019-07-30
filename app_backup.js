require('dotenv').config()

const express = require('express')
const bodyParser = require ('body-parser')//postman utility
const xssFilter = require('x-xss-protection')
const logger = require('morgan')
const app = express()
const port = process.env.SERVER_PORT || 5000

const routes = require('./src/route/routes')

app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(bodyParser.json())

routes(app)
app.use(logger('dev'))
app.use(xssFilter())

app.listen(port)
console.log(`link start on ${port}`)