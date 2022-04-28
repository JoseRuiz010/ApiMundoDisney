const Pelicula = require("./Pelicula");
const Personaje = require("./Personaje");


Pelicula.belongsToMany(Personaje, { through: 'Personaje_Pelicula' });
Pelicula.belongsToMany(Personaje, { through: 'Personaje_Pelicula' });


module.exports={
    Personaje,
    Pelicula
}