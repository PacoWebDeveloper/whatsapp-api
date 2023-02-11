const express = require('express')

const responseHandler = require('./utils/handleResponses')

const app = express()

app.get('/', (req, res) => {
    responseHandler.success({
        res,
        status: 200,
        message: 'Welcome to WhatsApp API',
        data: {
            'users': "http://localhost:7000/api/v1/users",
            'conversations': 'http://localhost:7000/api/v1/conversations'
        }
    })
})

app.use('*', (req, res) => {
    responseHandler.error({
        res,
        status: 404,
        message: 'URL not found, please try with http://localhost:7000/'
    })
})

app.listen(7000, () => {
    console.log('Server started at port 9000')
})