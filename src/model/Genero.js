const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");


const Genero = sequelize.define('Genero', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
})


module.exports = Genero