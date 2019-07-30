const express = require('express')
const Route = express.Router()

const UserController = require('../controller/user')
const Auth = require('../helpers/auth')

Route
  .all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, UserController.readall)
  .get('users/:param_id', UserController.userbyid)
  .post('/register', UserController.register)
  .post('/login', UserController.login)

module.exports = Route