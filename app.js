require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.SERVER_PORT
const bodyParser = require ('body-parser')//postman utility
const routes = require('./src/route/routes')

app.use(bodyParser.urlencoded({
    extended: true,
}))
app.use(bodyParser.json())

routes(app)

app.listen(port)
console.log(`link start on ${port}`)