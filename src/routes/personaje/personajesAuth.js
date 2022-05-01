const { Personaje, Pelicula } = require('../../model/Modelos');
const { validateToken } = require('../../Validar/ValidarToken');

const route = require('express').Router();


route.get('/characters', validateToken, async (req, res) => {

    const params = req.query
    if (!params) {
        const allPersonajes = await Personaje.findAll({
            include: Pelicula, attributes: ['nombre', 'imagen']

        })
        res.json({ allPersonajes })
    } else {

        const PersonajesFiltrados = await Personaje.findAll({
            include: Pelicula

            , where: { ...params }
        })
        res.json({ params, PersonajesFiltrados })
    }

})
route.get('/characters/:id', validateToken, async (req, res) => {

    const { id } = req.params
    const personaje = await Personaje.findAll({ include: Pelicula, where: { id: id } })
    res.json({ personaje })
})


route.post('/characters', validateToken, async (req, res) => {
    const { Peliculas, nombre, edad, peso, historia, imagen } = req.body
    console.log(Peliculas);
    if (Peliculas?.length > 0) {
        const newPersonaje = await Personaje.create({ nombre, edad, peso, historia, imagen, Peliculas: Peliculas.map(p => { return { ...p, personaje_pelicula: { selfGranted: true } } }) }, { include: Pelicula });
        //   const newPelicula=await Pelicula.create({});
        const allPersonajes = await Personaje.findAll({ include: Pelicula })
        res.json({ allPersonajes })
    } else {
        const newPersonaje = await Personaje.create({ nombre, edad, peso, historia, imagen });
        res.json({ ...newPersonaje })

    }

})

route.put('/characters/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    const personaje = req.body
    // res.json({ id, personaje })
    const updatePersonaje = await Personaje.update(personaje, { where: { id: id } })
    res.json({ updatePersonaje })
})

route.delete('/characters/:id', async (req, res) => {
    const { id } = req.params

    const personaje = await Personaje.destroy({

        where: {
            'id': id
        }
    }).then(function (rowDeleted) {
        if (rowDeleted === 1) {
            res.json({ mensaje: 'Deleted successfully' });
        }
        res.json({
            mensaje: 'No Deleted'
        });
    });

    res.json({ personaje })
})



module.exports = route;