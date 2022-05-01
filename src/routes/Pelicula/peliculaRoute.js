const { Personaje, Pelicula, Genero } = require('../../model/Modelos');
const { validateToken } = require('../../Validar/ValidarToken');

const route = require('express').Router();


route.get('/movies', validateToken, async (req, res) => {

    const { order, IdGenero, Titulo } = req.query


    if (!Titulo & !IdGenero) {
        console.log('====================================');
        console.log('pASEEEE');
        console.log('====================================');
        const allPeliculas = await Pelicula.findAll(
            {


                attributes: ['Titulo', 'imagen', 'createdAt'],
                order: [['createdAt', order ? order : 'ASC']],

            }
        )
        res.json({ allPeliculas })
    } else {
        let params = {}
        params = Titulo ? { ...params, Titulo } : params;
        params = IdGenero ? { ...params, IdGenero } : params

        console.log('====================================');
        console.log('nOOO pASEEEE', params ? true : false);
        console.log('====================================');
        const PersonajesFiltrados = await Pelicula.findAll({
            include: [{ model: Genero }, { model: Personaje }],
            order: [['createdAt', order ? order : 'ASC']],
            where: { ...params },

        })
        res.json({ PersonajesFiltrados })
    }

})
route.get('/movies/:id', validateToken, async (req, res) => {

    const { id } = req.params
    const pelicula = await Pelicula.findOne({ include: [{ model: Genero }, { model: Personaje }], where: { id: id } })
    res.json({ pelicula })
})


route.post('/movies', validateToken, async (req, res) => {
    const { Generos, Titulo, Calificacion, imagen } = req.body
    console.log(Generos);
    console.log('====================================');
    console.log({ Generos, Titulo, Calificacion, imagen });
    console.log('====================================');
    if (Generos?.length > 0) {
        const newPersonaje = await Pelicula.create({ Titulo, Calificacion, imagen, Generos: Generos.map(p => { return { ...p, genero_pelicula: { selfGranted: true } } }) }, { include: Genero });

        const newGenero = await Pelicula.findAll({ include: Genero })
        res.json({ newGenero })
    } else {
        const newGenero = await Pelicula.create({ Titulo, Calificacion, imagen });
        res.json({ ...newGenero })

    }

})

route.put('/movies/:id', async (req, res) => {
    const { id } = req.params;
    const pelicula = req.body
    // res.json({ id, personaje })
    const updatePersonaje = await Pelicula.update(pelicula, { where: { id: id } })
    res.json({ updatePersonaje })
})

route.delete('/movies/:id', async (req, res) => {
    const { id } = req.params

    const pelicula = await Pelicula.destroy({

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

    res.json({ pelicula })
})



module.exports = route;