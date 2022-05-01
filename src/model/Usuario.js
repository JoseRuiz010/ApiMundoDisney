const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");


const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },

}, {
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
})


module.exports = Usuario