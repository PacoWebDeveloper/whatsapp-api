const checkUserCredentials = require('./auth.controller')
const Response = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')

const postLogin = (req, res) => {
    const { email, password } = req.body

    checkUserCredentials(email, password)
        .then(data => {
            if (data) {
                const token = jwt.sign({ //aqui podemos mandar la info que queramos
                    id: data.id,
                    firstName: data.firstName,
                    email: data.email
                }, 'academlo', {
                    expiresIn: '1d'
                })

                Response.success({
                    res,
                    status: 200,
                    message: 'Correct credentials',
                    data: token
                })
            }
            else
                Response.error({
                    res, 
                    status: 401,
                    message: 'Wrong credentials'
                })
        })
        .catch(err => {
            Response.error({
                res,
                status: 400,
                data: err,
                message: 'Something went wrong when login'
            })

        })
}

module.exports = postLogin