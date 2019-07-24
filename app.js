require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT || 6000
const bodyParser = require ('body-parser')//postman utility
const routes = require('./src/route/routes')
const logger = require('morgan')

app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(bodyParser.json())

routes(app)
app.use(logger('dev'))

app.listen(port)
console.log(`link start on ${port}`)