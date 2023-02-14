const usersController = require('./users.controllers')
const Responses = require('../utils/handleResponses')

const usersServices = {
    getAllUsers: (req, res) => {
        usersController.findAllUsers()
            .then(data => {
                Responses.success({
                    status: 200,
                    data,
                    message: 'All users retreived successfully',
                    res
                })
            })
            .catch(err => {
                Responses.error({
                    status: 400,
                    data: err,
                    message: 'Something went wrong retreiving users',
                    res
                })
            })
    },
    getUserById: (req, res) => {
        const id = req.params.id
        usersController.findUserById(id)
            .then(data => {
                if (data)  
                    Responses.success({
                        status: 200,
                        data,
                        message: 'User retreived successfully',
                        res
                    })
                else
                    Responses.error({
                        status: 400,
                        data: err,
                        message: `User with id: ${id}, not found`,
                        res
                    })
            })
            .catch(err => {
                Responses.error({
                    status: 400,
                    data: err,
                    message: 'Something went wrong retreiving user',
                    res
                })
            })
    },
    postNewUser : (req, res) => {
        const userObj = req.body
        usersController.createNewUser(userObj)
            .then(data => {
                Responses.success({
                    status: 201,
                    data,
                    message: 'User created successfully',
                    res
                })
            })
            .catch(err => {
                Responses.error({
                    status: 400,
                    data: err,
                    message: 'Something went wrong creating user',
                    res,
                    fields: {
                        firstName : 'String',
                        lastName : 'String',
                        email: 'String (example@example.com)',
                        password: 'String',
                        profileImage: 'String (example.com/image.png)',
                        phone : 'String (+52 1234 123 123)'
                    }
                })
            })
    },
    patchUser: (req, res) => {
        const id = req.params.id
        const userObj = req.params.body

        usersController.updateUser(id, userObj)
            .then(data => {
                if (data)
                    Responses.success({
                        status: 200,
                        data,
                        message: 'User updated successfully',
                        res
                    })
                else
                    Responses.error({
                        status: 400,
                        data,
                        message: `User with id ${id}, not found`,
                        res,
                        fields: {
                            firstName : 'String',
                            lastName : 'String',
                            email: 'String (example@example.com)',
                            password: 'String',
                            profileImage: 'String (example.com/image.png)',
                            phone : 'String (+52 1234 123 123)'
                        }
                    })
            })
            .catch(err => {
                Responses.error({
                    status: 400,
                    data: err,
                    message: 'Something went wrong updating user',
                    res
                })
            })
    },
    deleteUser : (req, res) => {
        const id = req.params.id
        usersController.deleteUser(id)
            .then(data => {
                if (data)
                    Responses.success({
                        status: 200,
                        data,
                        message: 'User deleted successfully',
                        res
                    })
                else
                    Responses.error({
                        status: 400,
                        data,
                        message: `User with id: ${id}, not found`,
                        res
                    })
            .catch(err => {
                Responses.error({
                    status: 400,
                    data: err,
                    message: `Error trying to delete user with id ${id}`,
                    res
                })
                })
            })
    }
}

module.exports = usersServices