const Genero = require("./Genero");
const Pelicula = require("./Pelicula");
const Personaje = require("./Personaje");



Personaje.belongsToMany(Pelicula, { through: 'Personaje_Pelicula' });
Pelicula.belongsToMany(Personaje, { through: 'Personaje_Pelicula' });

Genero.belongsToMany(Pelicula, { through: 'Genero_Pelicula' });
Pelicula.belongsToMany(Genero, { through: 'Genero_Pelicula' });


module.exports = {
    Personaje,
    Pelicula,
    Genero
}