const userServices = require('./users.services')
const usersRouter = require('express').Router()
const passportJwt = require('../middleware/auth.middleware')

usersRouter.get('/users', userServices.getAllUsers)
usersRouter.post('/users', userServices.postNewUser)

usersRouter.get('/users/me', passportJwt, userServices.getMyUser)
usersRouter.delete('/users/me', passportJwt, userServices.deleteMyUser)
usersRouter.patch('/users/me', passportJwt, userServices.patchMyUser)

usersRouter.get('/users/:id', userServices.getUserById)
usersRouter.patch('/users/:id', userServices.patchUser)
usersRouter.delete('/users/:id', userServices.deleteUser)

module.exports = usersRouter