const route = require('express').Router();
const userController = require('../constrollers/user.controller')

route.get("/", userController.soma)

module.exports = route;