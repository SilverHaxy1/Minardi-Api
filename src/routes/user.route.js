const route = require('express').Router();
const userController = require('../constrollers/user.controller'); 

route.post("/", userController.create);
route.get("/", userController.findAll);
route.get("/:id", userController.findById); 

module.exports = route;
