const Users = require('../models/users.model')
const Participants = require('../models/participants.model')
const Messages = require('../models/messages.model')
const Conversations = require('../models/conversations.model')

const initModels = () => {
    Participants.belongsTo(Users)
    Users.hasMany(Participants)

    Messages.belongsTo(Participants)
    Participants.hasMany(Messages)

    Participants.belongsTo(Conversations)
    Conversations.hasMany(Participants)
}

module.exports = initModels