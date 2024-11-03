const route = require('express').Router();
const userController = require('../constrollers/user.controller')

route.post("/", userController.create)

module.exports = route;