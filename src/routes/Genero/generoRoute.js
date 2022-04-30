
const { Personaje, Pelicula, Genero } = require('../../model/Modelos');
const { validateToken } = require('../../Validar/ValidarToken');

const route = require('express').Router();


route.get('/genero', async (req, res) => {



    const allGeneros = await Genero.findAll(
        {
            include: Pelicula
        }
    )
    res.json({ allGeneros });

})



route.post('/genero', async (req, res) => {
    const { nombre, imagen } = req.body
    if (!nombre || !imagen) return res.json({ mensaje: 'Debe ingresar todos los datos' })
    const newGenero = await Genero.create({ nombre, imagen });

    res.json({ newGenero })

})



module.exports = route;