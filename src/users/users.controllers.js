const Users = require('../models/users.model')
const Participants = require('../models/participants.models')

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
    
    createNewUser : async (userObj) => {
    
        const newUser = {
            first_name: userObj.title,
            last_name: userObj.price,
            profile_image : userObj.profile_image
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
