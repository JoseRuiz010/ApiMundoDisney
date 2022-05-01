const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");


const Pelicula = sequelize.define('Pelicula', {
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Calificacion: {
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


module.exports = Pelicula