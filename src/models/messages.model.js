const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Messages = db.define('messages', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    participants_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Messages