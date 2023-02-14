const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Users = db.define('users', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profile_image: {
        type: DataTypes.STRING,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Users