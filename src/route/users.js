const express = require('express')
const Route = express.Routsser()

const UserController = require('../controller/user')
const Auth = require('../helpers/auth')

Route
  //.all('/*', Auth.authInfo)
  .get('/', Auth.accesstoken, UserController.getUsers)
  .get('/users',  UserController.readall)
  .get('/:userid', UserController.userDetail)
  .post('/register', UserController.register)
  .post('/login', UserController.login)
    
  

module.exports = Route
