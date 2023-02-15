const userServices = require('./users.services')
const usersRouter = require('express').Router()

usersRouter.get('/users', userServices.getAllUsers)
usersRouter.get('/users/:id', userServices.getUserById)
usersRouter.post('/users', userServices.postNewUser)
usersRouter.patch('/users/:id', userServices.patchUser)
usersRouter.delete('/users/:id', userServices.deleteUser)

module.exports = usersRouter