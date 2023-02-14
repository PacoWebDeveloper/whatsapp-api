const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Participants = db.define('participants', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    conversation_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        default: false,
        allowNull: false
    }
})

module.exports = Participants