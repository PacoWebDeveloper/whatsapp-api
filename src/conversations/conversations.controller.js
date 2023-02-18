const Conversations = require('../models/conversations.model')
const Participants = require('../models/participants.model')
const Users = require('../models/users.model')

const uuid = require('uuid')

const conversationsController = {
    
    findAllConversationsByUser : async(userId) => {
        const data = await Conversations.findAll({
            include: {
                model: Participants,
                where: {
                    userId
                }
            }
        })
        return data
    },

    createConversation : async (conversationObj, userOwnerId, userGuestId) => {
        // Validates if guest user exists
        const userGuest = await Users.findOne({
            where: {
                id: userGuestId
            }
        })
        
        if (!userGuest)
        return false
        // Creates conversation after user guest validation
        const newConversation = await Conversations.create({
            id: uuid.v4(),
            name: conversationObj.name,
            profileImage: conversationObj.profileImage,
            isGroup: conversationObj.isGroup,
            createdBy: userOwnerId
        })

        //Owner participant
        await Participants.create({
            id: uuid.v4(),
            userId: userOwnerId,
            conversationId: newConversation.id,
            isAdmin: true
        })

        //Guest participant
        await Participants.create({
            id: uuid.v4(),
            userId: userGuestId,
            conversationId: newConversation.id,
            isAdmin: true
        })

        return newConversation
    }

}

module.exports = conversationsController