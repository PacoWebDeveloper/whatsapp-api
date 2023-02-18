const conversationsController = require('./conversations.controller')

const Responses = require('../utils/handleResponses')

const conversationServices = {
    getAllConversations : (req, res) => {
        const userId = req.user.userId
        conversationsController.findAllConversationsByUser(userId)
            .then(data => {
                Responses.success({
                    res,
                    status: 200,
                    message: data.length ? 'Showing all your conversations' : 'No conversations to show',
                    data
                })
            })
            .catch(err => {
                Responses.error({
                    res,
                    status: 400,
                    message: 'Something went wrong retreiving conversations',
                    data: err
                })
            })
    },

    postNewConversation : (req, res) => {
        const ownerId = req.user.id
        //... Generates and object that contains all data in req.body but, without guestId cause i already extracted it
        const { guestId, ...conversationObj } = req.body

        conversationsController.createConversation(conversationObj, ownerId, guestId)
            .then(data => {
                if (data)
                    Responses.success({
                        res,
                        status: 201,
                        message: 'Conversation created successfully',
                        data
                    })
                else
                    Responses.error({
                        res,
                        status: 400,
                        message: `User with id ${guestId} not found`,
                        fields: {
                            name: 'String',
                            profileImage: 'String',
                            isGroup: 'boolean',
                            createdBy: 'String'
                        }
                    })
            })
            .catch(err => {{
                Responses.error({
                    res,
                    status: 400,
                    message: err.message || 'Something went wrong creating conversation'
                })
            }})
    }
}

module.exports = conversationServices