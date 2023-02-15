const uuid = require('uuid')
const { hashPassword } = require('../utils/crypto')

const Users = require('../models/users.model')
const Participants = require('../models/participants.model')

const usersController = {
    findAllUsers : async () => {
        const data = await Users.findAll({
            attributes: ['id', 'first_name', 'last_name', 'profile_image'],
            
            include: {
                model: Participants,
                attributes: ['id', 'is_admin']
            }
        })
        return data
    },
    
    findUserById : async (id) => {
    
        const data = await Users.findOne({
            where: {
                id : id
            }
        })
        return data
    },

    findUserByEmail : async (email) => {

        const data = await Users.findOne({
            where: {
                email
            }
        })

        return data
    },
    
    createNewUser : async (userObj) => {
    
        const newUser = {
            id: uuid.v4(),
            firstName: userObj.firstName,
            lastName: userObj.lastName,
            email: userObj.email,
            password: hashPassword(userObj.password),
            profileImage : userObj.profileImage,
            phone: userObj.phone
        }
    
        const data = await Users.create(newUser)

        return data
    },
    
    updateUser : async (id, userObj) => {
        const data = await Users.update(userObj, {
            where: {
                id : id
            }
        })
        return data[0]
    },
    
    deleteUser : async (id) => {
        const data = await Users.destroy({
            where: {
                id: id
            }
        })
        return data
    }
}


module.exports = usersController
