const express = require('express')

const responseHandler = require('./utils/handleResponses')
const db = require('./utils/database')
const initModels = require('./models/initModel')
const passportJwt = require('./middleware/auth.middleware')

const usersRouter = require('./users/users.router')
const authRouter = require('./auth/auth.router')

const app = express()

app.use(express.json())

db.authenticate()
    .then(() => {
        console.log('Connection with DB was stablished successfully with credentials given')
    })
    .catch((err) => {
        console.log(err)
    })

db.sync()
    .then(() => {
        console.log('DB synced successfully')
    })
    .catch((err) => {
        console.log(err)
    })

initModels()

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

app.get('/protected', passportJwt, (req, res) => {
    res.status(200).json({
        message: `Hola! ${req.user.firstName}, Este mensaje solo lo puedes ver si tienes session iniciada`,
        tokenDecoded: req.user
    })
})

app.use('/api/v1/', usersRouter)
app.use('/api/v1/', authRouter)

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