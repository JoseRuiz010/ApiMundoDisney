const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");
const Pelicula = require("./Pelicula");

const Personaje = sequelize.define('Personaje', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER
    },
    peso: {
        type: DataTypes.DOUBLE
    },
    historia: {
        type: DataTypes.STRING
    },
    imagen: {

        type: DataTypes.STRING
    }
}, {
    timestamps: true,
    createdAt: true,
    updatedAt: 'updateTimestamp'
})


module.exports = Personaje