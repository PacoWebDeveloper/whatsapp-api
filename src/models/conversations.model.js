const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Conversations = db.define('Conversations', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    profile_image: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_by: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_group: {
        type: DataTypes.BOOLEAN,
        default: false,
        allowNull: false
    }
})

module.exports = Conversations