const { ExtractJwt, Strategy } = require('passport-jwt')
const passport = require('passport')

const  { findUserById } = require('../users/users.controllers')

const passportConfigs = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'academlo'
}

passport.use(new Strategy(passportConfigs, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
        .then(data => {
            if (data)
                done(null, tokenDecoded) //user exists
            else
                done(null, false) //user not exists
        })
        .catch(err => {
            done(err, false) // error on DB
        })
}))

module.exports = passport